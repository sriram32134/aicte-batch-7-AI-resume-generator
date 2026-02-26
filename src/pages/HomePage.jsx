import React, { useEffect } from "react";

export function HomePage({ onStart }) {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add("show");
        });
      },
      { threshold: 0.15 }
    );

    document.querySelectorAll(".reveal").forEach((el) => observer.observe(el));
  }, []);

  return (
    <div className="min-vh-100 bg-white overflow-hidden">
      {/* ================= NAVBAR ================= */}
      <nav className="navbar navbar-light bg-white sticky-top border-bottom px-5 py-3">
        <div className="w-100 d-flex align-items-center justify-content-between">
          <div className="fw-black fs-3 d-flex align-items-center">
            <div className="logo-gradient me-2"></div>
            FORGE<span className="text-primary">AI</span>
          </div>

          <button
            className="btn btn-primary rounded-pill px-4 fw-bold shadow-sm"
            onClick={onStart}
          >
            Get Started
          </button>
        </div>
      </nav>

      {/* ================= HERO ================= */}
      <section className="position-relative px-5 py-5 hero-section">
        <div className="blob blob-1"></div>
        <div className="blob blob-2"></div>

        <div className="text-center reveal mt-5">
          <div className="pill-badge mb-4">
            <span className="pill-icon">✨</span> Your AI Career Operating System
          </div>

          <h1 className="display-3 fw-black mb-4">
            Build Job-Ready Profiles
            <br />
            <span className="text-gradient-flow">
              With Precision AI
            </span>
          </h1>

          <p className="fs-5 text-muted mx-auto mb-5" style={{ maxWidth: "720px" }}>
            ForgeAI helps you generate resumes, portfolios, and cover letters
            engineered for modern hiring systems — faster, cleaner, and smarter.
          </p>

          <div className="d-flex justify-content-center mt-4">
            <button
              className="btn btn-gradient-primary rounded-pill px-5 py-3 fw-black shadow-lg"
              onClick={onStart}
            >
              Start Building →
            </button>
          </div>
        </div>

        {/* Feature Chips */}
        <div className="d-flex flex-wrap justify-content-center gap-3 mt-5 reveal">
          <span className="tool-chip">AI Resume Engine</span>
          <span className="tool-chip">ATS Optimization</span>
          <span className="tool-chip">Portfolio Generator</span>
          <span className="tool-chip">Cover Letter AI</span>
        </div>
      </section>

      {/* ================= FEATURES ================= */}
      <section className="bg-light-soft px-5 py-5">
        <div className="text-center mb-5 reveal">
          <h2 className="fw-black display-5">
            Everything You Need to Get Hired
          </h2>
          <p className="text-muted fs-5">
            Designed for students, developers, and professionals.
          </p>
        </div>

        <div className="row g-4 justify-content-center">
          {[
            {
              icon: "📄",
              title: "ATS-Optimized Resumes",
              desc: "Generate resumes aligned with real ATS scoring patterns and recruiter expectations."
            },
            {
              icon: "🌐",
              title: "AI Portfolio Builder",
              desc: "Convert your projects into clean, responsive portfolio websites instantly."
            },
            {
              icon: "✍️",
              title: "Contextual Cover Letters",
              desc: "Personalized cover letters tuned to the exact job description."
            },
            {
              icon: "⚡",
              title: "Rapid Iteration",
              desc: "Edit, regenerate, and tailor documents in seconds."
            }
          ].map((item, i) => (
            <div key={i} className="col-xl-3 col-lg-4 col-md-6 reveal">
              <div className="feature-card h-100 shadow-sm">
                <div className="feature-icon mb-3">{item.icon}</div>
                <h4 className="fw-bold mb-2">{item.title}</h4>
                <p className="text-muted small">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ================= FOOTER ================= */}
      <footer className="border-top py-5 px-5 bg-white">
        <div className="text-center">
          <p className="fw-bold text-muted small mb-2">
            Built for modern hiring workflows
          </p>
          <p className="text-muted small">
            © 2026 ForgeAI · AI-Powered Career Infrastructure
          </p>
        </div>
      </footer>
    </div>
  );
}