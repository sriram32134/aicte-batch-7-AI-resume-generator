import React, { useState, useRef } from "react";
import {
  generateResumeContent,
  generatePortfolioContent,
  generateCoverLetterContent,
} from "../aiService.js";
import jsPDF from "jspdf";
import html2canvas from "html2canvas";
import { ProfileForm } from "../components/forms/ProfileForm.jsx";
import { CoverLetterJobDetails } from "../components/forms/CoverLetterJobDetails.jsx";
import { TemplateSelector } from "../components/ui/TemplateSelector.jsx";
import { EmptyState } from "../components/ui/Fields.jsx";
import { ResumePreview } from "../components/previews/ResumePreview.jsx";
import { PortfolioPreview } from "../components/previews/PortfolioPreview.jsx";
import { CoverLetterPreview } from "../components/previews/CoverLetterPreview.jsx";
import { resumeTemplates } from "../templates/resumeTemplates.js";
import { portfolioTemplates } from "../templates/portfolioTemplates.js";
import { coverLetterTemplates } from "../templates/coverLetterTemplates.js";

const EMPTY_EDU = {
  degree: "",
  institution: "",
  location: "",
  startYear: "",
  endYear: "",
  scoreLabel: "",
  scoreValue: "",
};

const EMPTY_EXP = {
  role: "",
  company: "",
  location: "",
  start: "",
  end: "",
  description: "",
};

const EMPTY_PROJECT = {
  name: "",
  techStack: "",
  description: "",
};

const EMPTY_CERT = {
  name: "",
  platform: "",
  year: "",
};

export function BuilderPage() {
  const [activeTab, setActiveTab] = useState("resume");

  const [formState, setFormState] = useState({
    header: {
      fullName: "",
      phone: "",
      email: "",
      location: "",
      linkedin: "",
      github: "",
      portfolio: "",
      profileImage: null, // Added to track the profile picture
    },
    summary: "",
    technicalSkills: "",
    softSkills: "",
    education: [Object.assign({}, EMPTY_EDU)],
    experience: [Object.assign({}, EMPTY_EXP)],
    projects: [Object.assign({}, EMPTY_PROJECT)],
    certifications: [Object.assign({}, EMPTY_CERT)],
    achievements: "",
    activities: "",
    languages: "",
    hobbies: "",
  });

  const [resumeTemplateId, setResumeTemplateId] = useState(1);
  const [portfolioTemplateId, setPortfolioTemplateId] = useState(1);
  const [coverTemplateId, setCoverTemplateId] = useState(1);

  const [resumeData, setResumeData] = useState(null);
  const [portfolioData, setPortfolioData] = useState(null);
  const [coverLetterData, setCoverLetterData] = useState(null);

  const [jobDetails, setJobDetails] = useState({
    role: "",
    company: "",
    jobDescription: "",
  });

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const resumeRef = useRef(null);
  const portfolioRef = useRef(null);
  const coverRef = useRef(null);

  const handleHeaderChange = (field, value) => {
    setFormState((prev) => ({
      ...prev,
      header: {
        ...prev.header,
        [field]: value,
      },
    }));
  };

  const handleSimpleChange = (field, value) => {
    setFormState((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  const handleArrayChange = (section, index, field, value) => {
    setFormState((prev) => {
      const copy = prev[section].map((item, i) =>
        i === index ? { ...item, [field]: value } : item
      );
      return { ...prev, [section]: copy };
    });
  };

  const handleAddItem = (section) => {
    setFormState((prev) => {
      let template;
      if (section === "education") template = EMPTY_EDU;
      else if (section === "experience") template = EMPTY_EXP;
      else if (section === "projects") template = EMPTY_PROJECT;
      else if (section === "certifications") template = EMPTY_CERT;
      else template = {};
      return {
        ...prev,
        [section]: [...prev[section], Object.assign({}, template)],
      };
    });
  };

  const handleRemoveItem = (section, index) => {
    setFormState((prev) => {
      const copy = prev[section].filter((_, i) => i !== index);
      return { ...prev, [section]: copy.length ? copy : prev[section] };
    });
  };

  const handleGenerateResume = async () => {
    try {
      setLoading(true);
      setError("");
      const result = await generateResumeContent(formState, resumeTemplateId);
      setResumeData(result);
    } catch (e) {
      console.error(e);
      setError("Failed to generate resume. Check your API key and try again.");
    } finally {
      setLoading(false);
    }
  };

  const handleGeneratePortfolio = async () => {
    try {
      setLoading(true);
      setError("");
      const result = await generatePortfolioContent(
        formState,
        portfolioTemplateId
      );
      setPortfolioData(result);
    } catch (e) {
      console.error(e);
      setError("Failed to generate portfolio content.");
    } finally {
      setLoading(false);
    }
  };

  const handleGenerateCoverLetter = async () => {
    try {
      setLoading(true);
      setError("");
      const result = await generateCoverLetterContent(
        formState,
        coverTemplateId,
        jobDetails
      );
      setCoverLetterData(result);
    } catch (e) {
      console.error(e);
      setError("Failed to generate cover letter.");
    } finally {
      setLoading(false);
    }
  };

  const downloadAsPdf = async (ref, fileName, kind) => {
    if (!ref.current) return;
    const element = ref.current;
    const canvas = await html2canvas(element, { scale: 2 });
    const imgData = canvas.toDataURL("image/png");

    const pdf = new jsPDF("p", "pt", "a4");
    const pageWidth = pdf.internal.pageSize.getWidth();
    const pageHeight = pdf.internal.pageSize.getHeight();
    const imgWidth = pageWidth;
    const imgHeight = (canvas.height * imgWidth) / canvas.width;

    let position = 0;
    let heightLeft = imgHeight;
    let page = 1;

    while (heightLeft > 0) {
      if (page > 1) {
        pdf.addPage();
      }
      const yPos = page === 1 ? 0 : heightLeft - imgHeight;
      pdf.addImage(imgData, "PNG", 0, yPos, imgWidth, imgHeight);

      if (kind === "resume") {
        pdf.setFontSize(8);
        pdf.setTextColor(150, 150, 150);
        pdf.text(
          "AI Resume & Portfolio Builder · Generated resume using Google GenAI",
          40,
          pageHeight - 20
        );
      }

      heightLeft -= pageHeight;
      page += 1;
    }

    pdf.save(fileName);
  };

  const downloadPortfolioHtml = () => {
  // Ensure both data and the correct template are available
  if (!portfolioData || !selectedPortfolioTemplate) return;

  // 1. Map Profile Image
  const imgTag = formState.header.profileImage 
    ? `<img src="${formState.header.profileImage}" style="width:220px; height:220px; border-radius:50%; border: 3px solid #38bdf8; object-fit:cover; margin:0 auto;" />`
    : `<div style="width:220px; height:220px; border-radius:50%; background:#1e293b; margin:0 auto;"></div>`;

  // 2. Map Social Links
  const socialLinks = [];
  if (formState.header.linkedin) {
    socialLinks.push(`<a href="${formState.header.linkedin}" class="social-link" style="color:#38bdf8; text-decoration:none; font-weight:600; margin:0 10px;">LinkedIn</a>`);
  }
  if (formState.header.github) {
    socialLinks.push(`<a href="${formState.header.github}" class="social-link" style="color:#38bdf8; text-decoration:none; font-weight:600; margin:0 10px;">GitHub</a>`);
  }
  const socialHtml = socialLinks.length > 0 ? socialLinks.join(" | ") : formState.header.email;

  // 3. Map Activities Section
  const activitiesHtml = formState.activities ? `
    <section id="activities" style="margin-top: 5rem;">
      <h2 style="font-size: 0.75rem; font-weight: 900; text-transform: uppercase; letter-spacing: 0.2em; color: #38bdf8; margin-bottom: 2rem;">Activities & Leadership</h2>
      <p style="color: #94a3b8; line-height: 1.6;">${formState.activities}</p>
    </section>
  ` : "";

  // 4. Map Education
  const eduHtml = (portfolioData.education || []).map(e => `
    <div style="margin-bottom: 1.5rem; text-align: left;">
      <h4 style="color: white; margin-bottom: 0.25rem; font-weight: 700;">${e.degree}</h4>
      <p style="color: #94a3b8; font-size: 0.875rem;">${e.institution} | ${e.duration}</p>
    </div>
  `).join("");

  // 5. Map Experience
  const expHtml = (portfolioData.experience || []).map(e => `
    <div style="border-left: 2px solid #38bdf8; padding-left: 1.5rem; margin-bottom: 2.5rem; text-align: left;">
      <h3 style="color: white; font-weight: 800; font-size: 1.25rem; margin-bottom: 0.25rem;">${e.role}</h3>
      <p style="color: #38bdf8; font-weight: bold; font-size: 0.875rem; margin-bottom: 0.5rem;">${e.company} | ${e.duration}</p>
      <p style="color: #94a3b8; font-size: 0.95rem; line-height: 1.6;">${e.summary}</p>
    </div>
  `).join("");

  // 6. Map Achievements
  const achHtml = (portfolioData.achievements || []).map(a => `
    <p style="color: #94a3b8; font-size: 0.875rem; margin-bottom: 0.75rem; text-align: left; display: flex; align-items: center;">
      <span style="color: #38bdf8; margin-right: 10px;">•</span> ${a}
    </p>
  `).join("");

  // 7. Map Skills and Projects
  const skillsHtml = (portfolioData.skills?.primary || []).map(s => 
    `<span class="skill-tag" style="background: rgba(56, 189, 248, 0.1); color: #38bdf8; padding: 5px 14px; border-radius: 10px; font-size: 0.85rem; border: 1px solid rgba(56, 189, 248, 0.2); margin-right: 8px; margin-bottom: 8px; display: inline-block;">${s}</span>`
  ).join("");
  
  const projectsHtml = (portfolioData.projects || []).map(p => `
    <div class="glass" style="background: rgba(30, 41, 59, 0.5); backdrop-filter: blur(12px); border: 1px solid rgba(255, 255, 255, 0.05); border-radius: 24px; padding: 1.5rem; margin-bottom: 1.5rem; text-align: left;">
      <h3 class="item-title" style="font-weight: 800; color: #fff; margin-bottom: 0.5rem;">${p.name}</h3>
      <p style="color:#38bdf8; font-size:12px; font-weight:bold; text-transform:uppercase; margin-bottom:8px;">${p.techStack}</p>
      <p style="color:#cbd5e1; font-size:14px; line-height: 1.5;">${p.detail}</p>
    </div>
  `).join("");

  // 8. Rebuild final HTML with ALL replacements
  let finalHtml = selectedPortfolioTemplate.html
    .replaceAll("{{name}}", portfolioData.hero?.headline || formState.header.fullName)
    .replaceAll("{{role}}", portfolioData.hero?.subheadline || "Engineer")
    .replaceAll("{{bio}}", portfolioData.about?.shortBio || "")
    .replaceAll("{{skills}}", skillsHtml)
    .replaceAll("{{education}}", eduHtml)
    .replaceAll("{{experience}}", expHtml)
    .replaceAll("{{achievements}}", achHtml)
    .replaceAll("{{projects}}", projectsHtml)
    .replaceAll("{{social_html}}", socialHtml) // Fixed: Now maps to the connect section
    .replaceAll("{{activities_section}}", activitiesHtml) // Fixed: Now maps to the footer area
    .replaceAll("{{img_tag}}", imgTag)
    .replaceAll("{{year}}", "2026")
    .replaceAll("{{email}}", formState.header.email)
    .replaceAll("{{resume_link_html}}", `<a href="#" class="resume-btn" style="background: linear-gradient(90deg, #38bdf8 0%, #6366f1 100%); padding: 12px 28px; border-radius: 12px; font-weight: 700; color: white; text-decoration: none; display: inline-block;">View Resume</a>`);

  // 9. Trigger Download
  const blob = new Blob([finalHtml], { type: "text/html" });
  const link = document.createElement("a");
  link.href = URL.createObjectURL(blob);
  link.download = "index.html";
  link.click();
  URL.revokeObjectURL(link.href);
};
  const downloadAsHtml = (ref, fileName) => {
    if (!ref.current) return;
    const htmlContent = ref.current.outerHTML;
    const blob = new Blob(
      [
        `<!DOCTYPE html>
<html>
<head>
<meta charset="utf-8" />
<title>${fileName}</title>
<style>${document.getElementById("app-styles")?.textContent || ""}</style>
</head>
<body>
<div class="download-wrapper">${htmlContent}</div>
</body>
</html>`,
      ],
      { type: "text/html" }
    );
    const link = document.createElement("a");
    link.href = URL.createObjectURL(blob);
    link.download = fileName;
    link.click();
    URL.revokeObjectURL(link.href);
  };

  const selectedResumeTemplate = resumeTemplates.find(
    (tpl) => tpl.id === resumeTemplateId
  );
  const selectedPortfolioTemplate = portfolioTemplates.find(
    (tpl) => tpl.id === portfolioTemplateId
  );
  const selectedCoverTemplate = coverLetterTemplates.find(
    (tpl) => tpl.id === coverTemplateId
  );

  return (
    <>
      <header className="top-bar">
        <div>
          <h1 className="app-title">AI Resume & Portfolio Builder</h1>
          <p className="app-subtitle">
            Google GenAI (Gemini 2.5 Flash) powered generator for resumes, cover
            letters, and portfolios.
          </p>
        </div>
        <span className="badge-aiml">AIML Project · Google GenAI</span>
      </header>

      <nav className="tabs">
        <button
          className={`tab-btn ${activeTab === "resume" ? "active" : ""}`}
          onClick={() => setActiveTab("resume")}
        >
          Resume
        </button>
        <button
          className={`tab-btn ${activeTab === "cover" ? "active" : ""}`}
          onClick={() => setActiveTab("cover")}
        >
          Cover Letter
        </button>
        <button
          className={`tab-btn ${activeTab === "portfolio" ? "active" : ""}`}
          onClick={() => setActiveTab("portfolio")}
        >
          Portfolio
        </button>
      </nav>

      {error && <div className="error-banner">{error}</div>}
      {loading && <div className="loading-banner">Generating with AI…</div>}

      <main className="layout">
        <section className="form-panel">
          <h2 className="section-title">Your Information</h2>
          <ProfileForm
            formState={formState}
            handleHeaderChange={handleHeaderChange}
            handleSimpleChange={handleSimpleChange}
            handleArrayChange={handleArrayChange}
            handleAddItem={handleAddItem}
            handleRemoveItem={handleRemoveItem}
          />
          {activeTab === "cover" && (
            <CoverLetterJobDetails
              jobDetails={jobDetails}
              setJobDetails={setJobDetails}
            />
          )}
        </section>

        <section className="preview-panel">
          {activeTab === "resume" && (
            <>
              <TemplateSelector
                label="Resume template"
                templates={resumeTemplates}
                value={resumeTemplateId}
                onChange={setResumeTemplateId}
              />
              <div className="actions-row">
                <button
                  className="primary-btn"
                  onClick={handleGenerateResume}
                  disabled={loading}
                >
                  Generate Resume with AI
                </button>
                {resumeData && (
                  <div className="download-group">
                    <button
                      className="secondary-btn"
                      onClick={() =>
                        downloadAsPdf(resumeRef, "resume.pdf", "resume")
                      }
                    >
                      Download PDF
                    </button>
                    <button
                      className="secondary-btn"
                      onClick={() => downloadAsHtml(resumeRef, "resume.html")}
                    >
                      Download HTML
                    </button>
                  </div>
                )}
              </div>
              <div className="preview-wrapper" ref={resumeRef}>
                {resumeData ? (
                  <ResumePreview
                    data={resumeData}
                    template={selectedResumeTemplate}
                    templateId={resumeTemplateId}
                  />
                ) : (
                  <EmptyState message="Generate to see your AI-crafted resume here." />
                )}
              </div>
            </>
          )}

          {activeTab === "portfolio" && (
              <div className="portfolio-tab-content">
                <TemplateSelector
                  label="Portfolio Template"
                  templates={portfolioTemplates}
                  value={portfolioTemplateId}
                  onChange={setPortfolioTemplateId} 
                />
                
                <div className="actions-row mt-6">
                  <button 
                    className="primary-btn" 
                    onClick={handleGeneratePortfolio} 
                    disabled={loading}
                  >
                    {loading ? "Generating..." : "Generate Portfolio Content"}
                  </button>
                  
                  {portfolioData && (
                    <button className="secondary-btn" onClick={downloadPortfolioHtml}>
                      Download index.html
                    </button>
                  )}
                </div>

                {/* Success Message instead of a preview */}
                <div className="status-section mt-10">
                  {portfolioData ? (
                    <div className="success-banner">
                      ✅ Portfolio generated successfully! Click "Download index.html" to save your website.
                    </div>
                  ) : (
                    <EmptyState message="Provide your details and click generate to build your portfolio code." />
                  )}
                </div>

                {/* Hidden reference for the download logic */}
                <div ref={portfolioRef} style={{ display: "none" }}>
                  {portfolioData && (
                    <PortfolioPreview 
                      data={portfolioData} 
                      template={selectedPortfolioTemplate} 
                      profileImage={formState.header.profileImage}
                    />
                  )}
                </div>
              </div>
            )}
          {activeTab === "cover" && (
            <>
              <TemplateSelector
                label="Cover letter template"
                templates={coverLetterTemplates}
                value={coverTemplateId}
                onChange={setCoverTemplateId}
              />
              <div className="actions-row">
                <button
                  className="primary-btn"
                  onClick={handleGenerateCoverLetter}
                  disabled={loading}
                >
                  Generate Cover Letter with AI
                </button>
                {coverLetterData && (
                  <div className="download-group">
                    <button
                      className="secondary-btn"
                      onClick={() =>
                        downloadAsPdf(coverRef, "cover-letter.pdf", "cover")
                      }
                    >
                      Download PDF
                    </button>
                    <button
                      className="secondary-btn"
                      onClick={() => downloadAsHtml(coverRef, "cover-letter.html")}
                    >
                      Download HTML
                    </button>
                  </div>
                )}
              </div>
              <div className="preview-wrapper" ref={coverRef}>
                {coverLetterData ? (
                  <CoverLetterPreview
                    data={coverLetterData}
                    header={formState.header}
                    jobDetails={jobDetails}
                    template={selectedCoverTemplate}
                  />
                ) : (
                  <EmptyState message="Generate to see your tailored AI cover letter here." />
                )}
              </div>
            </>
          )}
        </section>
      </main>
    </>
  );
}