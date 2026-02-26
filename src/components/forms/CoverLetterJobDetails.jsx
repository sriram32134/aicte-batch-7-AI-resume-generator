import React from "react";
import { Input, Textarea } from "../ui/Fields.jsx";

export function CoverLetterJobDetails({ jobDetails, setJobDetails }) {
  const handleChange = (field, value) => {
    setJobDetails((prev) => ({ ...prev, [field]: value }));
  };

  return (
    <div className="card">
      <h3>Target Role / Company</h3>
      <div className="grid-2">
        <Input
          label="Role (e.g. AI Engineer Intern)"
          value={jobDetails.role}
          onChange={(v) => handleChange("role", v)}
        />
        <Input
          label="Company"
          value={jobDetails.company}
          onChange={(v) => handleChange("company", v)}
        />
      </div>
      <Textarea
        label="Job Description / What they are looking for"
        placeholder="Paste key points from the JD or describe the kind of role…"
        value={jobDetails.jobDescription}
        onChange={(v) => handleChange("jobDescription", v)}
      />
    </div>
  );
}

