# 🎓 SkillSphere — Online Learning Platform

## 📌 Project Purpose

**SkillSphere** is a modern online learning platform where users can explore and enroll in courses taught by industry experts. The platform covers a wide range of topics including Web Development, UI/UX Design, Digital Marketing, Data Science, Freelancing, and Video Editing. It also provides learning tips and study techniques to help students learn more effectively.

---

## 🌐 Live URL

🔗 [https://online-learning-platform-self-nine.vercel.app](https://online-learning-platform-self-nine.vercel.app)

## 🐙 GitHub Repository

(https://github.com/jakerul-islam/online-learning-platform)

🔗 [https://github.com/jakerul-islam/online-learning-platform](https://github.com/jakerul-islam/online-learning-platform)

---

## ✨ Key Features

- 🏠 **Home Page** — Hero section with call-to-action, top-rated courses, trending courses, learning tips, and featured instructors
- 📚 **All Courses Page** — Browse and search through all available courses
- 🔍 **Course Search** — Search functionality to filter courses by name or keyword
- 📄 **Course Detail Page** — View detailed information about each individual course
- 👤 **User Profile Page** — Personalized profile page for enrolled users
- 🔐 **Authentication** — Sign Up and Sign In pages for user account management
- 🧠 **Learning Tips Section** — Study techniques like Active Recall, Pomodoro Technique, Spaced Repetition, Feynman Technique, Time Blocking, and Single-Tasking
- 🌟 **Top Rated & Trending Courses** — Highlighted course sections on the homepage
- 👨‍🏫 **Instructors Section** — Featured instructors with their associated courses
- 📱 **Responsive Design** — Fully responsive layout for mobile and desktop
- 🔗 **Navigation Bar** — Navbar with Home, All Courses, Profile, Sign Up, and Sign In links
- 🦶 **Footer** — Quick links, contact info (email, phone, location), and social media links

---

## 📦 NPM Packages Used

| Package | Purpose |
|---|---|
| `next` | Core React framework for server-side rendering and routing |
| `react` | UI component library |
| `react-dom` | DOM rendering for React |
| `tailwindcss` | Utility-first CSS framework for styling |
| `better-auth` | Modern authentication library for Next.js |
| `mongodb` | Official MongoDB driver for database operations |
| `postcss` | CSS processing tool (used with Tailwind) |
| `autoprefixer` | Adds vendor prefixes to CSS (used with PostCSS) |
| `eslint` | JavaScript/JSX linting tool |
| `eslint-config-next` | ESLint configuration for Next.js projects |

> **Note:** This project is bootstrapped with [`create-next-app`](https://nextjs.org/docs/getting-started) and deployed on [Vercel](https://vercel.com).

---

## 🚀 Getting Started

To run the project locally:

```bash
# Clone the repository
git clone https://github.com/jakerul-islam/online-learning-platform.git

# Navigate to the project directory
cd online-learning-platform

# Install dependencies
npm install

# Run the development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to see the result.

---

## 🛠️ Tech Stack

- **Framework:** Next.js 14+
- **Language:** JavaScript / JSX
- **Styling:** Tailwind CSS
- **Authentication:** Better Auth
- **Database:** MongoDB
- **Deployment:** Vercel
- **Image Hosting:** imgbb

---

## 📁 Project Structure

```
online-learning-platform/
├── public/                        # Static assets (images, icons, fonts)
├── src/
│   ├── app/
│   │   ├── page.js                # Home page
│   │   ├── layout.js              # Root layout
│   │   ├── all-courses/
│   │   │   ├── page.js            # All courses listing page
│   │   │   └── [id]/
│   │   │       └── page.js        # Course detail page
│   │   ├── profile/
│   │   │   └── page.js            # User profile page
│   │   ├── signup/
│   │   │   └── page.js            # Sign Up page
│   │   ├── signin/
│   │   │   └── page.js            # Sign In page
│   │   └── api/                   # API routes (Better Auth, MongoDB)
│   ├── components/
│   │   ├── Navbar.jsx             # Navigation bar
│   │   ├── Footer.jsx             # Footer
│   │   └── ...                    # Other reusable components
│   └── lib/                       # Utility functions, DB connection, auth config
├── .gitignore
├── eslint.config.mjs
├── jsconfig.json
├── next.config.mjs
├── package.json
├── postcss.config.mjs
└── README.md
```

---

## 📬 Contact

- 📧 Email: support@skillsphere.com
- 📞 Phone: +880 1913615383
- 📍 Location: Dhaka, Bangladesh

---

© 2026 SkillSphere. All rights reserved.
