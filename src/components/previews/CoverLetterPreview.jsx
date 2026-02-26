import React from "react";

export function CoverLetterPreview({ data, header, jobDetails, template }) {
  const accent = template?.accent || "#16a34a";

  return (
    <div className="cover-letter" style={{ "--accent": accent }}>
      <header className="cover-header">
        <h2>{header.fullName}</h2>
        <p className="muted">
          {header.email}
          {header.phone ? ` · ${header.phone}` : ""}
          {header.location ? ` · ${header.location}` : ""}
        </p>
      </header>
      <section className="cover-body">
        <p>{data.greeting}</p>
        <p>{data.opening}</p>
        {(data.bodyParagraphs || []).map((p, i) => (
          <p key={i}>{p}</p>
        ))}
        <p>{data.closing}</p>
        <p className="cover-signature">{data.signatureName || header.fullName}</p>
        {jobDetails.company && (
          <p className="muted small">
            Target role: {jobDetails.role} at {jobDetails.company}
          </p>
        )}
      </section>
    </div>
  );
}

