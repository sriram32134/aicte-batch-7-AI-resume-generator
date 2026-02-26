import React from "react";

export function Input({ label, value, onChange, placeholder }) {
  return (
    <label className="field">
      <span className="field-label">{label}</span>
      <input
        className="field-input"
        value={value}
        placeholder={placeholder}
        onChange={(e) => onChange(e.target.value)}
      />
    </label>
  );
}

export function Textarea({ label, value, onChange, placeholder, rows = 3 }) {
  return (
    <label className="field">
      <span className="field-label">{label}</span>
      <textarea
        className="field-textarea"
        rows={rows}
        value={value}
        placeholder={placeholder}
        onChange={(e) => onChange(e.target.value)}
      />
    </label>
  );
}

export function ArraySection({ title, items, onAdd, onRemove, renderItem }) {
  return (
    <div className="card">
      <div className="card-header-row">
        <h3>{title}</h3>
        <button type="button" className="ghost-btn" onClick={onAdd}>
          + Add
        </button>
      </div>
      {items.map((item, index) => (
        <div key={index} className="list-item">
          <div className="list-item-header">
            <span className="list-item-index">#{index + 1}</span>
            {items.length > 1 && (
              <button
                type="button"
                className="ghost-btn danger"
                onClick={() => onRemove(index)}
              >
                Remove
              </button>
            )}
          </div>
          {renderItem(item, index)}
        </div>
      ))}
    </div>
  );
}

export function EmptyState({ message }) {
  return (
    <div className="empty-state">
      <p>{message}</p>
      <p className="empty-caption">
        Tip: give the AI rich descriptions of your projects and responsibilities.
      </p>
    </div>
  );
}

