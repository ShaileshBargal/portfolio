# 🌟 Developer Portfolio

A modern, responsive, high-performance personal portfolio built with **React**, **Vite**, **Tailwind CSS**, and **Framer Motion**.

---

## 📌 Section Structure

The portfolio strictly follows your designated sequence:

1. **Profile (Hero / Intro):** Photo, status badge (*Available for work*), headline, quick bio, CTAs (*View Work*, *Contact*, *Resume*), social icons, and stats counters.
2. **About Section:** Narrative overview, mission statement, and core architectural principles.
3. **Education Section:** Degrees, institutions, graduation dates, GPA/honors, coursework tags, and certifications.
4. **Experience Section:** Timeline view of professional roles, companies, dates, quantifiable achievements, and technology tags.
5. **Projects Section:** Filterable showcase (*All*, *Full Stack*, *Frontend*, *Cloud & Tools*) with preview mockups, demo links, GitHub links, and an interactive case study modal dialog.
6. **Technical Skills Section:** Categorized skills (*Frontend*, *Backend*, *Databases*, *DevOps/Cloud*) with interactive proficiency progress bars and instant search filter.
7. **Contact Me Section:** Working interactive message form with validation, 1-click email copy, direct contact details, and celebratory confetti upon sending.

---

## 🛠️ Tech Stack

- **Framework:** React 19 + Vite 6
- **Styling:** Tailwind CSS v4
- **Animations & Transitions:** Framer Motion
- **Icons:** Lucide React & Custom SVG Social Icons
- **Effects:** Canvas Confetti

---

## 🚀 How to Run Locally

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Start the local development server:**
   ```bash
   npm run dev
   ```
   Open [http://localhost:5173](http://localhost:5173) in your browser.

3. **Build for production:**
   ```bash
   npm run build
   ```
   Outputs optimized static assets to the `dist/` folder ready for deployment to Vercel, Netlify, or GitHub Pages.

---

## ✏️ How to Customize Your Information

All portfolio text, links, photos, projects, skills, education, and experience are centralized in one single file:

📁 **`src/data/portfolioData.js`**

Simply open this file and update:
- Your name, title, bio, location, email, and social links.
- Your academic degrees, university names, and certifications.
- Your work history and bullet points.
- Your project titles, descriptions, live demo links, and GitHub repo links.
- Your technical skills and proficiency percentages.
