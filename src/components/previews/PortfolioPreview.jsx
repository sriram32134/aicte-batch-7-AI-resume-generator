import React from "react";

export function PortfolioPreview({ data, template, profileImage }) {
  if (!data || !template) return null;

  // Build dynamic tags
  const imgTag = profileImage 
    ? `<img src="${profileImage}" class="avatar-img" style="width:220px; height:220px; border-radius:50%; object-fit:cover; margin:0 auto;" />`
    : `<div class="avatar-img bg-slate-800" style="width:220px; height:220px; border-radius:50%; margin:0 auto;"></div>`;

  const buildSkills = (skills) => 
    (skills || []).map(s => `<span class="skill-tag">${s}</span>`).join("");

  const buildProjects = (proj) => 
    (proj || []).map(p => `
      <div class="glass p-6 mb-4 rounded-xl border border-white/5 text-left">
        <h3 class="item-title text-white font-bold text-xl">${p.name || ""}</h3>
        <p class="text-sky-400 text-xs font-bold uppercase mb-2">${p.techStack || ""}</p>
        <p class="text-slate-300 text-sm leading-relaxed">${p.detail || ""}</p>
      </div>
    `).join("");

  const buildEducation = (edu) =>
    (edu || []).map(e => `
      <div class="mb-4 text-left">
        <p class="font-bold text-white text-sm">${e.degree || ""}</p>
        <p class="text-slate-400 text-xs">${e.institution || ""} | ${e.duration || ""}</p>
      </div>
    `).join("");

  // Clean the template for preview (remove <html>/<body> tags to prevent CSS leak)
  let bodyContent = template.html.match(/<body[^>]*>([\s\S]*)<\/body>/i)?.[1] || template.html;

  let renderedHtml = bodyContent
    .replaceAll("{{name}}", data.hero?.headline || "Your Name")
    .replaceAll("{{role}}", data.hero?.subheadline || "Professional Role")
    .replaceAll("{{bio}}", data.about?.shortBio || "")
    .replaceAll("{{skills}}", buildSkills(data.skills?.primary || data.skills?.technical || []))
    .replaceAll("{{projects}}", buildProjects(data.projects || []))
    .replaceAll("{{education}}", buildEducation(data.education || []))
    .replaceAll("{{achievements}}", (data.achievements || []).map(a => `<p class="text-slate-400 text-xs mb-1 text-left">• ${a}</p>`).join(""))
    .replaceAll("{{email}}", data.contact?.email || "")
    .replaceAll("{{year}}", new Date().getFullYear())
    .replaceAll("{{img_tag}}", imgTag)
    .replaceAll("{{resume_link_html}}", `<a href="#" class="resume-btn">View Resume</a>`);

  return (
    <div className="portfolio-render-wrapper rounded-xl overflow-hidden shadow-2xl border border-slate-800">
      <div 
        className="rendered-portfolio"
        dangerouslySetInnerHTML={{ __html: renderedHtml }} 
      />
    </div>
  );
}