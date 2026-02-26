import React from "react";

export function TemplateSelector({ label, templates, value, onChange }) {
  return (
    <div className="template-selector">
      <div>
        <h2 className="section-title">{label}</h2>
        <p className="section-hint">
          Choose an AI prompt + layout style for generation.
        </p>
      </div>
      <div className="template-buttons">
        {templates.map((tpl) => (
          <button
            key={tpl.id}
            className={`template-pill ${value === tpl.id ? "active" : ""}`}
            onClick={() => onChange(tpl.id)}
          >
            <span className="template-pill-name">{tpl.name}</span>
            <span className="template-pill-code">T{tpl.id}</span>
          </button>
        ))}
      </div>
    </div>
  );
}

