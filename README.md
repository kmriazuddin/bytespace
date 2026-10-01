# ByteSpace

A modern online learning platform built from the supplied ByteSpace
Figma/PDF design reference.

## ✨ Features

-   Responsive ByteSpace landing page
-   Featured categories and courses
-   Course search/filter UI
-   Individual dynamic course pages
-   Course About, Lesson, and Review tabs
-   Lesson modules and learning progress
-   Rating summary, rating filters, and review cards
-   Creator profile pages
-   Firebase Email/Password authentication
-   Real signup and login
-   Firebase auth state persistence
-   Navbar displays the user's **display name**
-   Custom 404 page
-   Responsive desktop/tablet/mobile layouts
-   Reusable shadcn/ui components
-   Redux Toolkit auth state
-   React Hook Form + Zod validation
-   react-hot-toast notifications

## 🛠️ Tech Stack

-   Next.js
-   React
-   TypeScript
-   Tailwind CSS
-   shadcn/ui
-   Redux Toolkit
-   React Redux
-   Firebase Authentication
-   React Hook Form
-   Zod
-   @hookform/resolvers
-   react-hot-toast
-   Lucide React
-   clsx

## 🚀 Getting Started

### 1. Create/clone the project

``` bash
npx create-next-app@latest bytespace
cd bytespace
```

Choose:

-   TypeScript: Yes
-   ESLint: Yes
-   Tailwind CSS: Yes
-   App Router: Yes
-   `src/` directory: No
-   Import alias: `@/*`

### 2. Install dependencies

``` bash
npm install @reduxjs/toolkit react-redux firebase react-hook-form zod @hookform/resolvers react-hot-toast lucide-react clsx tailwind-merge jose
```

### 3. Initialize shadcn/ui

``` bash
npx shadcn@latest init
```

Recommended components:

``` bash
npx shadcn@latest add button card badge avatar progress tabs input label separator dropdown-menu
```

### 4. Start development

``` bash
npm run dev
```

Open:

``` text
http://localhost:3000
```

## 🔐 Firebase Setup

In Firebase Console:

``` text
Authentication
└── Sign-in method
    └── Email/Password
        └── Enable
```

Create a web app and put the configuration into `.env.local`:

``` env
NEXT_PUBLIC_FIREBASE_API_KEY=your_api_key
NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=your_project.firebaseapp.com
NEXT_PUBLIC_FIREBASE_PROJECT_ID=your_project_id
NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=your_project.firebasestorage.app
NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=your_sender_id
NEXT_PUBLIC_FIREBASE_APP_ID=your_app_id

JWT_SECRET=your_long_random_secret
```

## 📦 Production Check

Run:

``` bash
npm run lint
npm run build
npm run start
```

## 🏠 Home Page Sections

Build the landing page in this order:

``` text
Navbar
↓
Hero
↓
Featured Categories
↓
Featured Courses
↓
Learning Paths
↓
Professional Growth
↓
Creator CTA
↓
Testimonials
↓
Newsletter
↓
Footer
```