import React, { useEffect } from "react";
import "./Home.css";

export function HomePage({ onStart }) {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("show");
          }
        });
      },
      { threshold: 0.1, rootMargin: "0px 0px -50px 0px" }
    );

    document.querySelectorAll(".reveal").forEach((el) => observer.observe(el));
    
    return () => observer.disconnect();
  }, []);

  return (
    <div className="forge-container">
      {/* ================= NAVBAR ================= */}
      <nav className="navbar glass-nav sticky-top px-4 px-md-5 py-3">
        <div className="container-fluid">
          <div className="navbar-brand d-flex align-items-center fw-bold fs-4">
            <div 
              className="me-2" 
              style={{
                width: '34px', 
                height: '34px', 
                background: 'linear-gradient(135deg, #2563eb, #7c3aed)', 
                borderRadius: '10px'
              }}
            ></div>
            FORGE<span className="text-primary">AI</span>
          </div>
          <button className="btn btn-futuristic btn-sm px-4" onClick={onStart}>
            Get Started
          </button>
        </div>
      </nav>

      {/* ================= HERO SECTION ================= */}
      <section className="position-relative pt-5 pb-5 px-4 overflow-hidden">
        {/* Background Blobs for Futuristic Feel */}
        <div className="blob float-anim" style={{top: '-150px', right: '-100px'}}></div>
        <div className="blob float-anim" style={{bottom: '-50px', left: '-150px', animationDelay: '2s'}}></div>

        <div className="container py-5 text-center">
          <div className="reveal">
            <div className="pill-badge mb-4">
              <span className="me-2">✨</span> Next-Gen Career Infrastructure
            </div>
            <h1 className="display-2 hero-title mb-4">
              Build your professional <br />
              <span className="text-gradient">Identity with AI</span>
            </h1>
            <p className="lead text-secondary mx-auto mb-5 mt-4" style={{ maxWidth: "600px", fontWeight: "400" }}>
              ForgeAI streamlines your job search by generating high-impact 
              portfolios and contextual documents designed for the modern era.
            </p>
            <div className="d-flex justify-content-center">
              <button className="btn btn-futuristic py-3 px-5 shadow-lg" onClick={onStart}>
                Start Building Your Profile —
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* ================= FEATURES SECTION ================= */}
      <section className="py-5 px-4 bg-white border-top">
        <div className="container py-5">
          <div className="text-center mb-5 reveal">
            <h2 className="fw-bold display-5 mb-3">Designed for Growth</h2>
            <p className="text-muted fs-5">Smarter tools for your career journey.</p>
          </div>

          <div className="row g-4 justify-content-center">
            {[
              {
                icon: "🌐",
                title: "AI Portfolio Builder",
                desc: "Convert your technical projects into a clean, responsive portfolio website instantly."
              },
              {
                icon: "✍️",
                title: "Contextual Cover Letters",
                desc: "AI-generated letters tuned specifically to the job description and your unique voice."
              },
              {
                icon: "⚡",
                title: "Rapid Iteration",
                desc: "Adapt, edit, and regenerate your professional documents in seconds, not hours."
              }
            ].map((item, i) => (
              <div key={i} className="col-md-6 col-lg-4 reveal">
                <div className="feature-card">
                  <div className="feature-icon-wrapper">
                    {item.icon}
                  </div>
                  <h5 className="fw-bold mb-3">{item.title}</h5>
                  <p className="text-muted small lh-lg mb-0">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= FOOTER ================= */}
      <footer className="py-5 px-4 bg-white border-top mt-5">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-md-6 text-center text-md-start mb-4 mb-md-0">
              <div className="fw-bold fs-5 mb-2">FORGE<span className="text-primary">AI</span></div>
              <p className="text-muted small mb-0">Elevating the standards of professional applications.</p>
            </div>
            <div className="col-md-6 text-center text-md-end">
              <p className="text-muted small mb-0">
                © 2026 ForgeAI · Intelligence for the modern workforce.
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}