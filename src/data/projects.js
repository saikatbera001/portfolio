// =============================================
// Data: Projects — Saikat Bera Portfolio
// =============================================

export const projects = [
  {
    id: 1,
    title: "Food Delivery MERN App",
    description:
      "A full-stack food delivery platform with real-time order tracking, JWT auth, Stripe payments, and admin dashboard. Built with React, Node.js, Express, MongoDB.",
    longDescription:
      "A comprehensive food delivery application featuring user authentication, restaurant listings, cart management, real-time order tracking with Socket.io, Stripe payment integration, and a full admin dashboard for managing orders, restaurants, and users.",
    image: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=600&q=80",
    tech: ["React", "Node.js", "Express", "MongoDB", "Socket.io", "Stripe", "JWT", "Redux"],
    github: "https://github.com/saikatbera",
    live: "https://food-delivery-demo.vercel.app",
    category: "fullstack",
    featured: true,
    status: "Completed",
    year: 2024,
  },
  {
    id: 2,
    title: "Tech Fest Website",
    description:
      "Dynamic event management platform for college tech fest with event registration, schedule, countdown timer, and admin panel.",
    longDescription:
      "An interactive tech fest website built for the college annual technology festival. Features include event registration, live countdown timer, schedule management, participant dashboard, sponsor showcase, and an admin panel for event management.",
    image: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=600&q=80",
    tech: ["React", "Node.js", "MongoDB", "Tailwind CSS", "Framer Motion", "EmailJS"],
    github: "https://github.com/saikatbera",
    live: "https://techfest-demo.vercel.app",
    category: "fullstack",
    featured: true,
    status: "Completed",
    year: 2024,
  },
  {
    id: 3,
    title: "AI Chatbot Application",
    description:
      "Intelligent conversational AI built with OpenAI GPT-4, LangChain, and vector databases. Supports multi-turn conversations and document Q&A.",
    longDescription:
      "An advanced AI chatbot powered by OpenAI GPT-4 with LangChain orchestration. Features include multi-turn conversation memory, document upload for Q&A (RAG), streaming responses, conversation history, and multiple AI personality modes.",
    image: "https://images.unsplash.com/photo-1677442135703-1787eea5ce01?w=600&q=80",
    tech: ["Python", "FastAPI", "OpenAI", "LangChain", "React", "ChromaDB", "Pinecone"],
    github: "https://github.com/saikatbera",
    live: "https://ai-chatbot-demo.vercel.app",
    category: "ai",
    featured: true,
    status: "Completed",
    year: 2025,
  },
  {
    id: 4,
    title: "Attendance Management System",
    description:
      "Smart attendance tracking system with facial recognition, QR codes, real-time dashboards, and automated report generation.",
    longDescription:
      "A comprehensive attendance management system for educational institutions. Features facial recognition for automated attendance, QR code fallback, real-time dashboards, automated report generation, parent notification system, and integration with college ERP.",
    image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=600&q=80",
    tech: ["Python", "OpenCV", "React", "Node.js", "MongoDB", "Express", "Face-API.js"],
    github: "https://github.com/saikatbera",
    live: "https://attendance-demo.vercel.app",
    category: "fullstack",
    featured: false,
    status: "Completed",
    year: 2024,
  },
  {
    id: 5,
    title: "E-Commerce Platform",
    description:
      "Feature-rich e-commerce platform with product management, cart, wishlist, reviews, advanced filters, and Razorpay payment gateway.",
    longDescription:
      "A complete e-commerce solution with product catalog, advanced filtering and search, cart and wishlist management, user reviews and ratings, seller dashboard, order tracking, Razorpay payment integration, and admin analytics dashboard.",
    image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&q=80",
    tech: ["React", "Redux", "Node.js", "Express", "MongoDB", "Razorpay", "Cloudinary", "JWT"],
    github: "https://github.com/saikatbera",
    live: "https://ecommerce-demo.vercel.app",
    category: "fullstack",
    featured: false,
    status: "Completed",
    year: 2024,
  },
  {
    id: 6,
    title: "Developer Portfolio",
    description:
      "Premium dark-themed developer portfolio with glassmorphism, particle animations, GSAP scrolling, and Framer Motion transitions.",
    longDescription:
      "This very portfolio — a premium, production-ready React portfolio featuring glassmorphism design, particle.js background, GSAP scroll-triggered animations, Framer Motion page transitions, custom cursor, smooth Lenis scrolling, EmailJS contact form, and full responsiveness.",
    image: "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?w=600&q=80",
    tech: ["React", "Vite", "Tailwind CSS", "Framer Motion", "GSAP", "Three.js", "EmailJS"],
    github: "https://github.com/saikatbera",
    live: "https://saikatbera.dev",
    category: "frontend",
    featured: false,
    status: "Completed",
    year: 2025,
  },
];

export const projectCategories = ["all", "fullstack", "ai", "frontend"];
