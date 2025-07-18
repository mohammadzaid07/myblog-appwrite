# 📝 A Minimal Full-Stack Blog App with Appwrite & React

**MyBlog** is a clean, responsive blog app built with **React**, **Vite**, **Tailwind CSS**, and **Appwrite**.
It allows users to **sign up, log in, create, edit, and delete posts**, with secure authentication and file/image handling.

---

## 🚀 Live Demo

🌐 [View on Vercel](https://myblog-appwrite.vercel.app)

---

## 📸 Features

- 🔐 Authentication (Sign up / Login / Logout)
- 📝 Create, edit, delete blog posts
- 🖼️ Upload & display post images
- 🔍 View public posts
- 👤 View your own posts
- 🧾 Rich Text Editor using `TinyMCE`
- 🧠 HTML parsing using `html-react-parser`
- 💡 Responsive UI with Tailwind CSS
- 📂 Masonry grid layout for post cards
- ✅ Clean folder structure for scalability

---

## 🛠️ Tech Stack

| Frontend            | Backend & Infra   | Tools & Libraries |
| ------------------- | ----------------- | ----------------- |
| React + Vite        | Appwrite Cloud    | Tailwind CSS      |
| Redux Toolkit       | Appwrite Database | React Hook Form   |
| React Router DOM    | Appwrite Storage  | TinyMCE (RTE)     |
| Vercel (deployment) | Appwrite Auth     | html-react-parser |

---

## ⚙️ Setup Instructions

### 1. Clone the Repository

```bash
git clone https://github.com/mohammadzaid07/myblog-appwrite.git
cd myblog-appwrite
```

### 2. Install Dependencies

```
npm install
```

### 3. Create `.env` File

```
cp .env.sample .env
```

Fill in your Appwrite credentials in .env file:

```
VITE_APPWRITE_URL=https://cloud.appwrite.io/v1
VITE_APPWRITE_PROJECT_ID=your_project_id
VITE_APPWRITE_DATABASE_ID=your_database_id
VITE_APPWRITE_COLLECTION_ID=your_collection_id
VITE_APPWRITE_BUCKET_ID=your_bucket_id

```

### 4. Run Locally

```
npm run dev
```

> App will be running at: `http://localhost:5173`

## 👤 Author

Made by [Mohammad Zaid](https://www.linkedin.com/in/mohammadzaid07/)
