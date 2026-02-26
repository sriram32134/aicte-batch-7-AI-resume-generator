import React from "react";

export function ResumePreview({ data, template, templateId }) {
  const accent = template?.accent || "#16a34a";
  const layout =
    template?.layout === "two-column" || templateId === 3 || templateId === 4
      ? "resume two-column"
      : "resume one-column";

  return (
    <div className={layout} style={{ "--accent": accent }}>
      <header className="resume-header">
        <h1>{data.header?.fullName}</h1>
        <div className="resume-header-meta">
          <span>{data.header?.email}</span>
          {data.header?.phone && <span>{data.header.phone}</span>}
          {data.header?.location && <span>{data.header.location}</span>}
        </div>
        <div className="resume-header-links">
          {data.header?.linkedin && <span>LinkedIn: {data.header.linkedin}</span>}
          {data.header?.github && <span>GitHub: {data.header.github}</span>}
          {data.header?.portfolio && (
            <span>Portfolio: {data.header.portfolio}</span>
          )}
        </div>
      </header>

      <section className="resume-section">
        <h2>Summary</h2>
        <p>{data.summary}</p>
      </section>

      <section className="resume-section">
        <h2>Skills</h2>
        <div className="resume-skills">
          <div>
            <h6>Technical</h6>
            <ul>
              {(data.skills?.technical || []).map((s, i) => (
                <li key={i}>{s}</li>
              ))}
            </ul>
          </div>
          <div>
            <h6>Soft</h6>
            <ul>
              {(data.skills?.soft || []).map((s, i) => (
                <li key={i}>{s}</li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="resume-section">
        <h2>Education</h2>
        {(data.education || []).map((edu, i) => (
          <div key={i} className="resume-item">
            <div className="item-main">
              <div>
                <h3>{edu.degree}</h3>
                <p className="muted">
                  {edu.institution}
                  {edu.location ? ` · ${edu.location}` : ""}
                </p>
              </div>
              <span className="muted">
                {edu.startYear} – {edu.endYear}
              </span>
            </div>
            {edu.scoreValue && (
              <p className="muted">
                {edu.scoreLabel}: {edu.scoreValue}
              </p>
            )}
          </div>
        ))}
      </section>

      <section className="resume-section">
  <h2>Experience</h2>
  {data.experience && data.experience.length > 0 ? (
    data.experience.map((exp, i) => (
      <div key={i} className="resume-item">
        <div className="item-main">
          <div>
            <h3>{exp.role}</h3>
            <p className="muted">{exp.company} {exp.location ? `· ${exp.location}` : ""}</p>
          </div>
          <span className="muted">{exp.start} – {exp.end}</span>
        </div>
        <ul>
          {(exp.bullets || []).map((b, j) => (
            <li key={j}>{b}</li>
          ))}
        </ul>
      </div>
    ))
  ) : (
    <p className="muted">No experience provided.</p>
  )}
</section>

      <section className="resume-section">
        <h2>Projects</h2>
        {(data.projects || []).map((p, i) => (
          <div key={i} className="resume-item">
            <div className="item-main">
              <h3>{p.name}</h3>
              {p.techStack && <p className="muted">{p.techStack}</p>}
            </div>
            <ul>
              {(p.bullets || []).map((b, j) => (
                <li key={j}>{b}</li>
              ))}
            </ul>
          </div>
        ))}
      </section>

      {(data.certifications || []).length > 0 && (
        <section className="resume-section">
          <h2>Certifications</h2>
          <ul>
            {(data.certifications || []).map((c, i) => (
              <li key={i}>
                {c.name} · {c.platform}
                {c.year ? ` · ${c.year}` : ""}
              </li>
            ))}
          </ul>
        </section>
      )}

      {(data.achievements || []).length > 0 && (
        <section className="resume-section">
          <h2>Achievements</h2>
          <ul>
            {(data.achievements || []).map((a, i) => (
              <li key={i}>{a}</li>
            ))}
          </ul>
        </section>
      )}

      {(data.activities || []).length > 0 && (
        <section className="resume-section">
          <h2>Extra‑curricular & Activities</h2>
          <ul>
            {(data.activities || []).map((a, i) => (
              <li key={i}>{a}</li>
            ))}
          </ul>
        </section>
      )}

      {data.personal && (
        <section className="resume-section">
          <h2>Personal Details</h2>
          <p className="muted">
            Languages: {(data.personal.languages || []).join(", ")}
          </p>
          <p className="muted">
            Hobbies: {(data.personal.hobbies || []).join(", ")}
          </p>
        </section>
      )}
    </div>
  );
}

