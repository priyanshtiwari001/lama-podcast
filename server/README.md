# 🎙️ Podcast Management Backend

This is the backend service for a podcast management system where users can create projects, upload podcasts, and edit their transcripts. The backend is built using **Node.js**, **Express**, and **MongoDB** following 3NF normalization for managing `Projects`, `Podcasts`, and `Transcripts`.

---

## 🚀 Features

- User authentication (JWT-based)
- Project management (create, fetch)
- Podcast upload  to projects
- Transcript handling (edit/update)
- Error handling with proper status codes
- Clean folder structure with MVC architecture

---

## 🧠 Tech Stack

- **Node.js**
- **Express**
- **MongoDB + Mongoose**
- **JWT Authentication**
- **Modular Structure**
- **Axios (on frontend)**

---

---

## 📦 API Endpoints

### ✅ Projects

- `POST /projects/create` – Create a new project  
- `GET /projects/get` – Get all projects for the authenticated user  

### 🎧 Podcasts

- `POST /projects/:projectId/podcast` – Add podcast to a project  
- `GET /projects/:projectId/podcast` – Get all podcasts in a project  
- `DELETE /projects/:podcastId/podcast` – Delete a podcast  

### 📝 Transcripts

- `PATCH /projects/:projectId/podcast/:transcriptId` – Update transcript content

---


