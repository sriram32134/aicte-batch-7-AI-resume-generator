export const portfolioTemplates = [
  {
    id: 1,
    key: "dark-cinematic",
    name: "Dark Cinematic",
    description: "High-contrast dark theme with Jakarta Sans and Tailwind blue accents.",
    accent: "#38bdf8",
    html: `
<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8" />
<meta name="viewport" content="width=device-width, initial-scale=1.0"/>
<title>{{name}} | Portfolio</title>
<script src="https://cdn.tailwindcss.com"></script>
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.0/css/all.min.css"/>
<style>
    @import url('https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@300;400;600;800&display=swap');
    body { font-family: 'Plus Jakarta Sans', sans-serif; background: #0b0f1a; color: #f1f5f9; scroll-behavior: smooth; }
    .hero-section { background: #0f172a; padding: 5rem 2rem; border-bottom: 1px solid rgba(255,255,255,0.05); }
    .avatar-img { width: 220px; height: 220px; border-radius: 50%; border: 3px solid #38bdf8; box-shadow: 0 0 30px rgba(56, 189, 248, 0.4); object-fit: cover; }
    .glass { background: rgba(30, 41, 59, 0.5); backdrop-filter: blur(12px); border: 1px solid rgba(255, 255, 255, 0.05); border-radius: 24px; }
    .resume-btn { background: linear-gradient(90deg, #38bdf8 0%, #6366f1 100%); padding: 12px 28px; border-radius: 12px; font-weight: 700; display: inline-block; transition: 0.3s; color: white; text-decoration: none; }
    .content-block { border-left: 2px solid #38bdf8; padding-left: 20px; margin-bottom: 35px; }
    .item-title { font-weight: 800; font-size: 1.3rem; color: #fff; }
    .skill-tag { background: rgba(56, 189, 248, 0.1); color: #38bdf8; padding: 5px 14px; border-radius: 10px; font-size: 0.85rem; border: 1px solid rgba(56, 189, 248, 0.2); }
    .social-link { color: #38bdf8; text-decoration: none; font-weight: 600; transition: 0.3s; margin: 0 10px; }
    .social-link:hover { color: #fff; }
    nav a { color: #94a3b8; text-decoration: none; font-size: 0.8rem; font-weight: 600; transition: 0.3s; }
    nav a:hover { color: #38bdf8; }
</style>
</head>
<body>
    <nav class="fixed top-0 w-full z-50 bg-[#0b0f1a]/80 backdrop-blur-md border-b border-white/5 px-8 py-4 flex justify-between items-center">
        <span class="text-sky-400 font-bold tracking-tighter">{{name}}</span>
        <div class="flex gap-6">
            <a href="#about">About</a>
            <a href="#experience">Experience</a>
            <a href="#projects">Projects</a>
            <a href="#contact">Contact</a>
        </div>
    </nav>

    <header class="hero-section pt-32">
        <div class="max-w-5xl mx-auto w-full flex flex-col md:flex-row items-center justify-between gap-12">
            <div class="text-left flex-1">
                <h1 class="text-6xl font-extrabold text-sky-400 mb-2">{{name}}</h1>
                <p class="text-sm font-bold tracking-[0.3em] text-slate-400 uppercase mb-8">{{role}}</p>
                <p class="text-slate-300 text-xl leading-relaxed mb-10 max-w-2xl">{{bio}}</p>
                {{resume_link_html}}
            </div>
            <div class="flex-shrink-0">{{img_tag}}</div>
        </div>
    </header>

    <main class="max-w-5xl mx-auto py-20 px-6 space-y-24">
        <section id="about" class="glass p-10">
            <h2 class="text-xs font-black uppercase tracking-[0.2em] text-sky-500 mb-8">Expertise</h2>
            <div class="flex flex-wrap gap-3 mb-12">{{skills}}</div>
            <div class="grid md:grid-cols-2 gap-12">
                <div><h4 class="text-white font-bold mb-4 border-b border-slate-700 pb-2">Education</h4>{{education}}</div>
                <div><h4 class="text-white font-bold mb-4 border-b border-slate-700 pb-2">Achievements</h4>{{achievements}}</div>
            </div>
        </section>

        <section id="experience">
            <h2 class="text-xs font-black uppercase tracking-[0.2em] text-sky-500 mb-10">Experience</h2>
            <div class="space-y-4">{{experience}}</div>
        </section>

        <section id="projects">
            <h2 class="text-xs font-black uppercase tracking-[0.2em] text-sky-500 mb-10">Projects</h2>
            <div class="space-y-6">{{projects}}</div>
        </section>

        {{activities_section}}
    </main>

    <footer id="contact" class="py-20 text-center border-t border-slate-800 bg-[#0b0f1a]">
        <h2 class="text-2xl font-bold mb-8 text-white">Let's Connect</h2>
        <div class="flex justify-center flex-wrap gap-4 mb-12">{{social_html}}</div>
        <p class="text-xs text-slate-600 uppercase tracking-[0.4em]">© {{year}} — {{name}}</p>
    </footer>
</body>
</html>`
  },
  {
    id: 3,
    key: "elegant-classic-light",
    name: "Elegant Classic",
    description: "Premium typography and generous whitespace for a classic light look.",
    accent: "#0f172a",
    html: `
<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8" />
<meta name="viewport" content="width=device-width, initial-scale=1.0"/>
<title>{{name}} | Portfolio</title>
<script src="https://cdn.tailwindcss.com"></script>
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.0/css/all.min.css"/>
<style>
    @import url('https://fonts.googleapis.com/css2?family=Outfit:wght@300;400;600;800&display=swap');
    body { font-family: 'Outfit', sans-serif; background: #ffffff; color: #1e293b; scroll-behavior: smooth; }
    .hero-section { background: #f8fafc; padding: 8rem 2rem; border-bottom: 1px solid #e2e8f0; }
    .avatar-img { width: 220px; height: 220px; border-radius: 30px; border: 4px solid #fff; box-shadow: 0 20px 40px rgba(0,0,0,0.08); object-fit: cover; }
    .card-white { background: #ffffff; border: 1px solid #e2e8f0; border-radius: 24px; box-shadow: 0 4px 20px rgba(0,0,0,0.03); }
    .resume-btn { background: #0f172a; padding: 14px 32px; border-radius: 12px; font-weight: 700; display: inline-block; transition: 0.3s; color: white; text-decoration: none; }
    .resume-btn:hover { background: #334155; transform: translateY(-2px); }
    .content-block { border-left: 2px solid #e2e8f0; padding-left: 24px; margin-bottom: 35px; transition: 0.3s; }
    .content-block:hover { border-left-color: #2563eb; }
    .item-title { font-weight: 800; font-size: 1.4rem; color: #0f172a; }
    .skill-tag { background: #f1f5f9; color: #475569; padding: 6px 16px; border-radius: 10px; font-size: 0.85rem; font-weight: 600; border: 1px solid #e2e8f0; }
    nav a { color: #64748b; text-decoration: none; font-size: 0.9rem; font-weight: 600; transition: 0.3s; }
    nav a:hover { color: #0f172a; }
</style>
</head>
<body>
    <nav class="fixed top-0 w-full z-50 bg-white/80 backdrop-blur-md border-b border-slate-100 px-8 py-5 flex justify-between items-center">
        <span class="text-slate-900 font-extrabold text-xl tracking-tight">{{name}}</span>
        <div class="flex gap-8">
            <a href="#about">About</a>
            <a href="#experience">Experience</a>
            <a href="#projects">Projects</a>
            <a href="#contact">Contact</a>
        </div>
    </nav>

    <header class="hero-section pt-40">
        <div class="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-16">
            <div class="text-left flex-1">
                <p class="text-blue-600 font-bold tracking-[0.2em] uppercase text-sm mb-4">Available for opportunities</p>
                <h1 class="text-7xl font-extrabold text-slate-900 mb-6 leading-tight">{{name}}</h1>
                <p class="text-xl text-slate-500 leading-relaxed mb-10 max-w-2xl">{{bio}}</p>
                {{resume_link_html}}
            </div>
            <div class="flex-shrink-0">{{img_tag}}</div>
        </div>
    </header>

    <main class="max-w-6xl mx-auto py-24 px-6 space-y-32">
        <section id="about" class="card-white p-12">
            <h2 class="text-sm font-black uppercase tracking-[0.2em] text-blue-600 mb-10">Expertise & Stack</h2>
            <div class="flex flex-wrap gap-4 mb-16">{{skills}}</div>
            <div class="grid md:grid-cols-2 gap-16">
                <div><h4 class="text-slate-900 font-bold text-lg mb-6 border-b-2 border-slate-100 pb-3">Education</h4>{{education}}</div>
                <div><h4 class="text-slate-900 font-bold text-lg mb-6 border-b-2 border-slate-100 pb-3">Key Achievements</h4>{{achievements}}</div>
            </div>
        </section>

        <section id="experience">
            <h2 class="text-sm font-black uppercase tracking-[0.2em] text-blue-600 mb-12">Professional Journey</h2>
            <div class="grid gap-4">{{experience}}</div>
        </section>

        <section id="projects">
            <h2 class="text-sm font-black uppercase tracking-[0.2em] text-blue-600 mb-12">Selected Works</h2>
            <div class="grid md:grid-cols-2 gap-8">{{projects}}</div>
        </section>

        {{activities_section}}
    </main>

    <footer id="contact" class="py-24 text-center border-t border-slate-100 bg-slate-50">
        <h2 class="text-3xl font-extrabold mb-4 text-slate-900">Let's work together</h2>
        <div class="flex justify-center flex-wrap gap-6 mb-16">{{social_html}}</div>
        <p class="text-xs text-slate-400 uppercase tracking-[0.5em]">© {{year}} — Designed by {{name}}</p>
    </footer>
</body>
</html>`
  },
  {
    id: 4,
    key: "modern-neo-glass-light",
    name: "Neo-Glass Modern",
    description: "High-end tech aesthetic with soft blurs, gradients, and vibrant indigo accents.",
    accent: "#6366f1",
    html: `
<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8" />
<meta name="viewport" content="width=device-width, initial-scale=1.0"/>
<title>{{name}} | Portfolio</title>
<script src="https://cdn.tailwindcss.com"></script>
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.0/css/all.min.css"/>
<style>
    @import url('https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@300;400;600;800&display=swap');
    body { font-family: 'Plus Jakarta Sans', sans-serif; background: #f0f4f8; color: #2d3748; scroll-behavior: smooth; }
    .main-wrapper { background: radial-gradient(circle at top right, #e0e7ff, transparent), radial-gradient(circle at bottom left, #fae8ff, transparent); min-height: 100vh; }
    .hero-card { padding: 8rem 2rem 4rem; text-align: center; }
    .avatar-img { width: 200px; height: 200px; border-radius: 50%; padding: 8px; background: linear-gradient(to right, #6366f1, #a855f7); margin: 0 auto 2rem; box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.15); object-fit: cover; }
    .glass-light { background: rgba(255, 255, 255, 0.6); backdrop-filter: blur(20px); border: 1px solid rgba(255, 255, 255, 0.7); border-radius: 32px; box-shadow: 0 10px 30px rgba(0,0,0,0.04); }
    .resume-btn { background: #6366f1; color: white; padding: 16px 40px; border-radius: 100px; font-weight: 800; letter-spacing: 0.5px; transition: 0.4s; box-shadow: 0 10px 20px rgba(99, 102, 241, 0.3); text-decoration: none; display: inline-block; }
    .resume-btn:hover { background: #4f46e5; transform: scale(1.05); color: white; }
    .skill-tag { background: white; color: #6366f1; border: 1px solid #e2e8f0; padding: 8px 20px; border-radius: 100px; font-size: 0.9rem; font-weight: 700; box-shadow: 0 4px 6px rgba(0,0,0,0.02); margin: 4px; display: inline-block; }
    .social-link { color: #6366f1; text-decoration: none; font-weight: 700; transition: 0.3s; }
    .social-link:hover { color: #4f46e5; }
    /* Experience Scoping */
    .content-block { border-left: 3px solid #6366f1; padding-left: 20px; margin-bottom: 30px; text-align: left; }
    .item-title { font-weight: 800; font-size: 1.25rem; color: #1a202c; margin-bottom: 4px; }
</style>
</head>
<body class="main-wrapper">
    <nav class="fixed top-6 left-1/2 -translate-x-1/2 z-50 w-[90%] max-w-4xl backdrop-blur-xl border border-white/40 rounded-full px-10 py-4 flex justify-between items-center shadow-lg bg-white/70">
        <span class="text-indigo-600 font-extrabold text-lg">{{name}}</span>
        <div class="hidden md:flex gap-10">
            <a href="#about" class="font-bold text-slate-600 hover:text-indigo-600 transition text-sm text-decoration-none">About</a>
            <a href="#experience" class="font-bold text-slate-600 hover:text-indigo-600 transition text-sm text-decoration-none">Experience</a>
            <a href="#projects" class="font-bold text-slate-600 hover:text-indigo-600 transition text-sm text-decoration-none">Projects</a>
        </div>
        <a href="#contact" class="bg-indigo-600 text-white px-5 py-2 rounded-full text-sm font-bold text-decoration-none">Hire Me</a>
    </nav>

    <header class="hero-card">
        <div class="max-w-4xl mx-auto">
            <div class="flex-shrink-0">{{img_tag}}</div>
            <h1 class="text-7xl font-black text-slate-900 mb-4 tracking-tight">{{name}}</h1>
            <p class="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-purple-600 mb-8 uppercase tracking-widest">{{role}}</p>
            <p class="text-slate-600 text-xl leading-relaxed mb-12 max-w-2xl mx-auto">{{bio}}</p>
            <div class="flex justify-center gap-4">
                {{resume_link_html}}
            </div>
        </div>
    </header>

    <main class="max-w-6xl mx-auto py-20 px-6 space-y-24">
        <section id="about" class="glass-light p-12">
            <div class="grid md:grid-cols-3 gap-12 mb-16">
                <div class="md:col-span-1">
                    <h2 class="text-4xl font-extrabold text-slate-900 mb-4">Core Skills</h2>
                    <p class="text-slate-500">A collection of tools and technologies I use to bring ideas to life.</p>
                </div>
                <div class="md:col-span-2 flex flex-wrap gap-2">
                    {{skills}}
                </div>
            </div>
            <div class="grid md:grid-cols-2 gap-12 pt-12 border-t border-slate-200">
                <div><h4 class="text-indigo-600 font-black uppercase text-xs tracking-widest mb-6">Education</h4>{{education}}</div>
                <div><h4 class="text-indigo-600 font-black uppercase text-xs tracking-widest mb-6">Achievements</h4>{{achievements}}</div>
            </div>
        </section>

        <section id="experience" class="py-10">
            <h2 class="text-sm font-black uppercase tracking-[0.3em] text-indigo-500 text-center mb-16">Professional Experience</h2>
            <div class="max-w-4xl mx-auto">
                <div class="glass-light p-10">
                    {{experience}}
                </div>
            </div>
        </section>

        <section id="projects">
            <div class="text-center mb-16">
                <h2 class="text-5xl font-extrabold text-slate-900 mb-4">Recent Projects</h2>
                <p class="text-slate-500">Exploring the intersection of design and code.</p>
            </div>
            <div class="grid md:grid-cols-2 gap-10">
                {{projects}}
            </div>
        </section>
        
        {{activities_section}}
    </main>

    <footer id="contact" class="py-24 text-center">
        <div class="glass-light max-w-4xl mx-auto p-16">
            <h2 class="text-5xl font-black mb-6 text-slate-900">Start a conversation</h2>
            <div class="flex justify-center flex-wrap gap-8 mb-16">{{social_html}}</div>
            <p class="text-slate-400 font-bold tracking-[0.2em] uppercase text-xs">Made with passion — {{year}}</p>
        </div>
    </footer>
</body>
</html>`
}
];