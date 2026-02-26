import React from "react";
import { Input, Textarea, ArraySection } from "../ui/Fields.jsx";

export function ProfileForm({
  formState,
  handleHeaderChange,
  handleSimpleChange,
  handleArrayChange,
  handleAddItem,
  handleRemoveItem,
}) {
  return (
    <div className="form-grid">
      <div className="field">
        <span className="field-label">Profile Picture</span>
        <input 
          type="file" 
          accept="image/*" 
          className="field-input"
          onChange={(e) => {
            const file = e.target.files[0];
            if (file) {
              const reader = new FileReader();
              reader.onloadend = () => handleHeaderChange("profileImage", reader.result);
              reader.readAsDataURL(file);
            }
          }}
        />
      </div>
      <div className="card">
        <h3>Personal Information</h3>
        <div className="grid-2">
          <Input
            label="Full Name"
            value={formState.header.fullName}
            onChange={(v) => handleHeaderChange("fullName", v)}
          />
          <Input
            label="Email *"
            value={formState.header.email}
            onChange={(v) => handleHeaderChange("email", v)}
          />
          <Input
            label="Phone"
            value={formState.header.phone}
            onChange={(v) => handleHeaderChange("phone", v)}
          />
          <Input
            label="Location"
            value={formState.header.location}
            onChange={(v) => handleHeaderChange("location", v)}
          />
          <Input
            label="LinkedIn URL"
            value={formState.header.linkedin}
            onChange={(v) => handleHeaderChange("linkedin", v)}
          />
          <Input
            label="GitHub URL"
            value={formState.header.github}
            onChange={(v) => handleHeaderChange("github", v)}
          />
          <Input
            label="Portfolio Website"
            value={formState.header.portfolio}
            onChange={(v) => handleHeaderChange("portfolio", v)}
          />
        </div>
        <Textarea
          label="Summary / Career Objective"
          placeholder="Briefly describe yourself, your skills, and career goals…"
          value={formState.summary}
          onChange={(v) => handleSimpleChange("summary", v)}
        />
      </div>

      <div className="card">
        <h3>Skills</h3>
        <Textarea
          label="Technical Skills"
          placeholder="e.g. Python, React, TensorFlow, SQL, NLP, Computer Vision…"
          value={formState.technicalSkills}
          onChange={(v) => handleSimpleChange("technicalSkills", v)}
        />
        <Textarea
          label="Soft Skills"
          placeholder="e.g. Communication, teamwork, leadership, problem solving…"
          value={formState.softSkills}
          onChange={(v) => handleSimpleChange("softSkills", v)}
        />
      </div>

      <ArraySection
        title="Education"
        items={formState.education}
        onAdd={() => handleAddItem("education")}
        onRemove={(index) => handleRemoveItem("education", index)}
        renderItem={(item, index) => (
          <div className="grid-2">
            <Input
              label="Degree"
              value={item.degree}
              onChange={(v) => handleArrayChange("education", index, "degree", v)}
            />
            <Input
              label="Institution"
              value={item.institution}
              onChange={(v) =>
                handleArrayChange("education", index, "institution", v)
              }
            />
            <Input
              label="Location"
              value={item.location}
              onChange={(v) =>
                handleArrayChange("education", index, "location", v)
              }
            />
            <div className="grid-2">
              <Input
                label="Start Year"
                value={item.startYear}
                onChange={(v) =>
                  handleArrayChange("education", index, "startYear", v)
                }
              />
              <Input
                label="End Year"
                value={item.endYear}
                onChange={(v) =>
                  handleArrayChange("education", index, "endYear", v)
                }
              />
            </div>
            <div className="grid-2">
              <Input
                label="Score Label (CGPA / Percentage)"
                value={item.scoreLabel}
                onChange={(v) =>
                  handleArrayChange("education", index, "scoreLabel", v)
                }
              />
              <Input
                label="Score Value"
                value={item.scoreValue}
                onChange={(v) =>
                  handleArrayChange("education", index, "scoreValue", v)
                }
              />
            </div>
          </div>
        )}
      />

      <ArraySection
        title="Experience / Internships"
        items={formState.experience}
        onAdd={() => handleAddItem("experience")}
        onRemove={(index) => handleRemoveItem("experience", index)}
        renderItem={(item, index) => (
          <>
            <div className="grid-2">
              <Input
                label="Role"
                value={item.role}
                onChange={(v) =>
                  handleArrayChange("experience", index, "role", v)
                }
              />
              <Input
                label="Company"
                value={item.company}
                onChange={(v) =>
                  handleArrayChange("experience", index, "company", v)
                }
              />
            </div>
            <div className="grid-2">
              <Input
                label="Location"
                value={item.location}
                onChange={(v) =>
                  handleArrayChange("experience", index, "location", v)
                }
              />
              <Input
                label="Duration (e.g. Jun 2024 – Aug 2024)"
                value={`${item.start || ""}${item.end ? " – " + item.end : ""}`}
                onChange={(v) =>
                  handleArrayChange("experience", index, "start", v)
                }
              />
            </div>
            <Textarea
              label="Short description (AI will turn this into bullet points)"
              value={item.description}
              onChange={(v) =>
                handleArrayChange("experience", index, "description", v)
              }
            />
          </>
        )}
      />

      <ArraySection
        title="Projects"
        items={formState.projects}
        onAdd={() => handleAddItem("projects")}
        onRemove={(index) => handleRemoveItem("projects", index)}
        renderItem={(item, index) => (
          <>
            <Input
              label="Project Name"
              value={item.name}
              onChange={(v) => handleArrayChange("projects", index, "name", v)}
            />
            <Input
              label="Tech Stack"
              value={item.techStack}
              onChange={(v) =>
                handleArrayChange("projects", index, "techStack", v)
              }
            />
            <Textarea
              label="Short description (AI will generate 2–3 concise bullets)"
              value={item.description}
              onChange={(v) =>
                handleArrayChange("projects", index, "description", v)
              }
            />
          </>
        )}
      />

      <ArraySection
        title="Certifications"
        items={formState.certifications}
        onAdd={() => handleAddItem("certifications")}
        onRemove={(index) => handleRemoveItem("certifications", index)}
        renderItem={(item, index) => (
          <div className="grid-3">
            <Input
              label="Course Name"
              value={item.name}
              onChange={(v) =>
                handleArrayChange("certifications", index, "name", v)
              }
            />
            <Input
              label="Platform"
              value={item.platform}
              onChange={(v) =>
                handleArrayChange("certifications", index, "platform", v)
              }
            />
            <Input
              label="Year"
              value={item.year}
              onChange={(v) =>
                handleArrayChange("certifications", index, "year", v)
              }
            />
          </div>
        )}
      />

      <div className="card grid-2">
        <Textarea
          label="Achievements"
          placeholder="Awards, hackathons, ranks… (AI will convert into bullets)"
          value={formState.achievements}
          onChange={(v) => handleSimpleChange("achievements", v)}
        />
        <Textarea
          label="Extra‑curricular / Activities"
          placeholder="Clubs, volunteering, leadership roles…"
          value={formState.activities}
          onChange={(v) => handleSimpleChange("activities", v)}
        />
      </div>

      <div className="card grid-2">
        <Input
          label="Languages Known"
          placeholder="e.g. English, Hindi, Telugu"
          value={formState.languages}
          onChange={(v) => handleSimpleChange("languages", v)}
        />
        <Input
          label="Hobbies (optional)"
          placeholder="e.g. Reading, open‑source, chess"
          value={formState.hobbies}
          onChange={(v) => handleSimpleChange("hobbies", v)}
        />
      </div>
    </div>
  );
}

