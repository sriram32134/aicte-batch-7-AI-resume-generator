# 🚀 Forge AI – Career Assets Engineering

Forge AI is a **professional-grade Career Co‑Pilot** built for developers and AI engineers to stand out in the global job market. It automates the creation of **ATS‑optimized resumes**, **context‑aware cover letters**, and **production‑ready portfolio websites** using the power of **Google Gemini 2.5 Flash**.

---

## 📌 How to Run the Project Locally

Follow these steps to set up and run Forge AI on your machine.

### 1️⃣ Prerequisites

Make sure you have the following installed:

* **Node.js** (v18 or above recommended)
* **npm** or **yarn**
* A **Google Gemini API Key**

---

### 2️⃣ Clone the Repository

```bash
git clone https://github.com/sriram32134/aicte-batch-7-AI-resume-generator.git
cd aicte-batch-7-AI-resume-generator
```

---

### 3️⃣ Install Dependencies

```bash
npm install
```

---

### 4️⃣ Configure Environment Variables

Create a `.env` file in the root directory:

```env
VITE_GEMINI_API_KEY=your_google_gemini_api_key_here
```

> ⚠️ **Important:** The `.gitignore` is already configured to prevent API keys from being committed.

---

### 5️⃣ Start the Development Server

```bash
npm run dev
```

The application will be available at:
👉 **[http://localhost:5173](http://localhost:5173)**

---

## 🧠 Project Overview

**Forge AI – Career Assets Engineering** is designed as a **single unified platform** to engineer all critical career assets required during job applications.

Instead of manually crafting resumes, portfolios, and cover letters, users provide **raw technical data**, and Forge AI transforms it into **high‑impact professional outputs**.

---

## 🎯 Core Functionalities

### 1️⃣ ATS‑Optimized Resume Generator

* Generates resumes tailored for **modern Applicant Tracking Systems**
* Converts raw experience into **concise, impactful bullet points**
* Supports clean formatting and structured sections
* Exported as **PDF** using `jsPDF`

---

### 2️⃣ Portfolio Architect

* Converts project details, tech stacks, and links into a **standalone portfolio website**
* Outputs **production‑ready HTML + Tailwind CSS**
* Includes all required scripts and styles for **instant hosting**
* Downloaded directly as an `index.html` file

---

### 3️⃣ Contextual Cover Letter Generator

* Generates **job‑specific cover letters** from user‑provided job descriptions
* Matches role requirements with candidate skills and experience
* Produces professional, role‑aligned narratives

---

## 🧩 Technical Stack

### 🔹 Frontend

* **React** + **Vite** – fast builds and optimized performance

### 🔹 Styling

* **Bootstrap** – application UI
* **Tailwind CSS** – exported portfolio templates

### 🔹 AI Engine

* **Google Gemini 2.5 Flash** – content expansion and creative generation

### 🔹 Export Tools

* **jsPDF** – resume PDF generation
* **Blob‑based HTML export** – portfolio downloads

---

## 🛠️ Key Development Milestones & Fixes

* ✅ **Dynamic Landing Page**

  * Light‑themed UI with glassmorphism
  * Scroll‑reveal animations
  * Clear workflow and solution sections

* ✅ **Template Mapping System**

  * Robust `replaceAll` logic
  * Maps AI‑generated content directly into HTML placeholders

* ✅ **Portfolio Generation Fixes**

  * Resolved background color leaks
  * Ensured downloaded HTML includes Tailwind & font scripts

* ✅ **UI / UX Refinements**

  * Improved text contrast and readability
  * Decoupled preview rendering from generation logic

---

## 🗂️ Project Structure

```
src/
├── pages/
│   ├── HomePage.jsx        # Landing page
│   └── BuilderPage.jsx     # Main workspace
│
├── components/
│   ├── forms/              # User input forms
│   ├── previews/           # Live previews
│   └── ui/                 # Reusable UI components
│
├── templates/              # Resume, Portfolio & Cover Letter templates
│
├── aiService.js            # Gemini API integration
│
├── App.jsx
├── main.jsx
└── index.css
```

---

## 🔐 Security & Best Practices

* API keys stored securely using `.env`
* `.gitignore` configured to protect sensitive data
* Modular architecture for maintainability

---

## 🚀 Deployment Status

✔️ **Production‑Ready**

The project is fully prepared for deployment on platforms like:

* Vercel
* Netlify
* GitHub Pages (for portfolio exports)

---

## 🤝 Contribution & Usage

This project is ideal for:

* Demonstrating **AI‑powered full‑stack development**
* Showcasing **real‑world generative AI integration**
* Acting as a **career automation tool** for developers

Feel free to fork, extend, or integrate it into your own workflows.

---

## 📄 License

This project is licensed for **educational and portfolio use**.

---

### ⭐ If you find this project valuable, consider starring the repository!
