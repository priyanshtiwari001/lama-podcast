# 🎙️ Lama‑Podcast

A full‑stack application for managing podcast projects, uploading episodes, and editing transcripts. Built with a **Node.js** + **MongoDB** backend and a **React** + **Tailwind CSS** frontend.

---

## 🧩 Architecture Overview

### Backend (Node.js / Express / MongoDB)
- **3NF‑normalized schema** for Projects, Podcasts, and Transcripts
- Repositories → Services → Controllers → Express Routes
- JWT‑based authentication middleware



### Frontend (React / Tailwind / React Router)
- Views for:
- Project dashboard (cards with name, file count, last modified)
- Podcast list per project
- Edit transcript UI
- API integration via Axios
- Route protection with `ProtectedRoute`
- Responsive components: Sidebar, Header, Table, Modals, Forms

---

## 🚀 Quick Start Guide

### 1. Clone the repo
```bash
git clone https://github.com/priyanshtiwari001/lama-podcast.git
cd lama-podcast
```
### 2.  Backend Setup

```
cd server
npm install
touch .env

**Populate .env:**
PORT=5000
MONGODB_URI=mongodb://localhost:27017/lama-podcast
JWT_SECRET=your_jwt_secret
EXPIRE_IN=900s

**start the server:**
npm run dev
```
### 2.  Frontend Setup

```
cd clients
npm install
npm run dev
```



