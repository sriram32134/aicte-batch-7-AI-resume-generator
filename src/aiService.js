import { GoogleGenerativeAI } from "@google/generative-ai";

const API_KEY = import.meta.env.VITE_GEMINI_API_KEY;

if (!API_KEY) {
  // eslint-disable-next-line no-console
  console.warn(
    "VITE_GEMINI_API_KEY is not set. AI generation will not work until you add it to a .env file."
  );
}

const genAI = new GoogleGenerativeAI(API_KEY || "DUMMY_KEY");

const resumeModel = genAI.getGenerativeModel({
  model: "gemini-2.5-flash",
});

function extractJson(text) {
  if (!text) return null;
  const fenced = text.match(/```json([\s\S]*?)```/i);
  const raw = fenced ? fenced[1] : text;
  try {
    return JSON.parse(raw.trim());
  } catch (e) {
    console.error("Failed to parse JSON from Gemini response", e, raw);
    return null;
  }
}

async function callGemini(structuredPrompt) {
  const result = await resumeModel.generateContent(structuredPrompt);
  const responseText = result.response.text();
  const json = extractJson(responseText);
  return json || { rawText: responseText };
}

export async function generateResumeContent(formState, templateId) {
  const prompt = `
You are an expert AI resume writer helping a student/early-career AIML engineer.

TASK:
- Rewrite and structure a professional resume using the data below.
- Generate strong impact bullet points (STRICTLY 2 per experience or project, no more, no less).
- Adapt tone and phrasing to the requested resume template style.
- Fill in small missing details realistically (without inventing employers or degrees that conflict with the input).

SKILLS CONSTRAINT:
- For "technical" skills: Do NOT generate or rewrite them. Paste them EXACTLY as they are mentioned in the student input.

TEMPLATES:
- The "templateId" controls tone and structure only, NOT output format:
  1 = Modern ATS-friendly
  2 = Minimal, clean, single-column
  3 = Two-column tech-focused
  4 = Project-heavy portfolio-style
  5 = Fresher / first-job focused
  6 = Research / academic leaning
  7 = Design-oriented, narrative profile

OUTPUT FORMAT:
Return ONLY valid JSON (no markdown, no comments, no backticks) matching this shape:
{
  "header": {
    "fullName": "",
    "phone": "",
    "email": "",
    "location": "",
    "linkedin": "",
    "github": "",
    "portfolio": ""
  },
  "summary": "",
  "skills": {
    "technical": ["", ""],
    "soft": ["", ""]
  },
  "education": [
    {
      "degree": "",
      "institution": "",
      "location": "",
      "startYear": "",
      "endYear": "",
      "scoreLabel": "CGPA" | "Percentage" | "",
      "scoreValue": ""
    }
  ],
  "experience": [
    {
      "role": "",
      "company": "",
      "location": "",
      "start": "",
      "end": "",
      "bullets": ["Bullet 1", "Bullet 2"]
    }
  ],
  "projects": [
    {
      "name": "",
      "techStack": "",
      "bullets": ["Bullet 1", "Bullet 2"]
    }
  ],
  "certifications": [
    {
      "name": "",
      "platform": "",
      "year": ""
    }
  ],
  "achievements": ["", ""],
  "activities": ["", ""],
  "personal": {
    "languages": ["", ""],
    "hobbies": ["", ""]
  }
}

STUDENT INPUT (use this as ground truth, improve wording, fill gaps gracefully):
${JSON.stringify(formState, null, 2)}

TEMPLATE STYLE REQUESTED:
templateId = ${templateId}
`;

  return callGemini(prompt);
}

export async function generatePortfolioContent(formState, templateId) {
  const prompt = `
You are generating content for a personal portfolio website for an AIML student/engineer.

GOAL:
- Turn the raw user information into polished website copy.
- Emphasize AI/ML, data, and projects.
- Match tone and emphasis to the template style.

PORTFOLIO TEMPLATES:
  1 = Developer-centric (projects + skills first)
  2 = Story-driven (about + journey focus)
  3 = Recruiter-friendly (experience + outcomes focus)

OUTPUT FORMAT:
Return ONLY valid JSON matching:
{
  "hero": {
    "headline": "",
    "subheadline": "",
    "ctaPrimary": "",
    "ctaSecondary": ""
  },
  "about": {
    "shortBio": "",
    "tagline": ""
  },
  "skills": {
    "primary": ["", ""],
    "secondary": ["", ""],
    "tools": ["", ""]
  },
  "projects": [
    {
      "name": "",
      "oneLiner": "",
      "detail": "",
      "techStack": ""
    }
  ],
  "experience": [
    {
      "role": "",
      "company": "",
      "duration": "",
      "summary": ""
    }
  ],
  "education": [
    {
      "degree": "",
      "institution": "",
      "duration": "",
      "highlight": ""
    }
  ],
  "certifications": [
    {
      "name": "",
      "issuer": "",
      "year": "",
      "note": ""
    }
  ],
  "achievements": ["", ""],
  "contact": {
    "email": "",
    "location": "",
    "note": ""
  }
}

USER DATA (resume-style info, treat this as source of truth):
${JSON.stringify(formState, null, 2)}

TEMPLATE STYLE REQUESTED:
templateId = ${templateId}
`;

  return callGemini(prompt);
}

export async function generateCoverLetterContent(formState, templateId, jobDetails) {
  const prompt = `
You are writing a tailored cover letter for an AIML student/engineer.

GOAL:
- Generate a single-page cover letter (3–5 short paragraphs).
- Use data from the user's profile and the target role/company.
- Match tone and structure to the requested template style.

COVER LETTER TEMPLATES:
  1 = Formal corporate
  2 = Start-up / conversational
  3 = Research / academic

OUTPUT FORMAT:
Return ONLY valid JSON of the form:
{
  "greeting": "",
  "opening": "",
  "bodyParagraphs": ["", ""],
  "closing": "",
  "signatureName": ""
}

USER PROFILE (skills, projects, education etc.):
${JSON.stringify(formState, null, 2)}

TARGET ROLE / COMPANY DETAILS (provided by the user, rewrite and expand):
${JSON.stringify(jobDetails || {}, null, 2)}

TEMPLATE STYLE REQUESTED:
templateId = ${templateId}
`;

  return callGemini(prompt);
}