// =============================================
// Utils: Constants — Saikat Bera Portfolio
// =============================================

/* --- Personal Info --- */
export const PERSONAL_INFO = {
  name: "Saikat Bera",
  firstName: "Saikat",
  lastName: "Bera",
  title: "Frontend Developer",
  tagline: "Building Scalable Web Apps & Intelligent AI Systems",
  email: "saikatbera208@gmail.com",
  phone: "+91 6297876530",
  location: "West Bengal, India",
  university: "MAKAUT, West Bengal",
  degree: "MCA (Pursuing)",
  bio: "Frontend developer with hands-on experience building responsive, accessible web applications using React, JavaScript (ES6+), HTML5, and CSS3. Comfortable working with component-based architecture, RESTful APIs, and modern tooling like Git, Webpack, and npm.",
  bio2: "Eager to bring strong problem-solving skills and a keen eye for UI detail to a collaborative engineering team. Currently pursuing MCA while building real-world projects and expanding into full stack development.",
  resumeUrl: "/resume.pdf",
  cvUrl: "/cv.pdf",
  avatar: null, // will use generated placeholder
};

/* --- Social Links --- */
export const SOCIAL_LINKS = [
  {
    name: "GitHub",
    url: "https://github.com/saikatbera",
    icon: "FaGithub",
    color: "#FFFFFF",
  },
  {
    name: "LinkedIn",
    url: "https://linkedin.com/in/saikatbera",
    icon: "FaLinkedin",
    color: "#0A66C2",
  },
  {
    name: "Twitter",
    url: "https://twitter.com/saikatbera",
    icon: "FaTwitter",
    color: "#1DA1F2",
  },
  {
    name: "Email",
    url: "mailto:saikatbera208@gmail.com",
    icon: "FaEnvelope",
    color: "#EA4335",
  },
];

/* --- Navigation Links --- */
export const NAV_LINKS = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Services", href: "#services" },
  { label: "Projects", href: "#projects" },
  { label: "Timeline", href: "#timeline" },
  { label: "Contact", href: "#contact" },
];

/* --- Statistics --- */
export const STATS = [
  { label: "Projects Built", value: 20, suffix: "+", icon: "FaCode", color: "#6366F1" },
  { label: "Certifications", value: 10, suffix: "+", icon: "FaCertificate", color: "#8B5CF6" },
  { label: "Technologies", value: 30, suffix: "+", icon: "FaLayerGroup", color: "#06B6D4" },
  { label: "GitHub Stars", value: 150, suffix: "+", icon: "FaStar", color: "#F59E0B" },
  { label: "Open Source Contributions", value: 25, suffix: "+", icon: "FaHeart", color: "#EF4444" },
  { label: "Happy Clients", value: 12, suffix: "+", icon: "FaSmile", color: "#10B981" },
];

/* --- Testimonials --- */
export const TESTIMONIALS = [
  {
    id: 1,
    name: "Arjun Sharma",
    role: "CTO",
    company: "TechVentures Pvt. Ltd.",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Arjun",
    rating: 5,
    review:
      "Saikat delivered an exceptional full-stack application ahead of schedule. His React and Node.js expertise is outstanding, and his attention to detail is remarkable. Highly recommend!",
  },
  {
    id: 2,
    name: "Priya Mehta",
    role: "Product Manager",
    company: "StartupHub",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Priya",
    rating: 5,
    review:
      "The AI chatbot Saikat built for us transformed our customer support. His knowledge of LangChain and OpenAI is impressive. The code quality and documentation were top-notch.",
  },
  {
    id: 3,
    name: "Rahul Das",
    role: "Lead Developer",
    company: "CodeCraft Solutions",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Rahul",
    rating: 5,
    review:
      "Working with Saikat was a great experience. He took our e-commerce platform from concept to deployment in record time. His problem-solving skills and communication are excellent.",
  },
  {
    id: 4,
    name: "Sneha Roy",
    role: "Founder",
    company: "EduTech Solutions",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Sneha",
    rating: 5,
    review:
      "Saikat built our attendance management system with facial recognition. The project was complex but he handled it brilliantly. Professional, skilled, and a pleasure to work with!",
  },
];

/* --- EmailJS Config (replace with real values) --- */
export const EMAILJS_CONFIG = {
  SERVICE_ID: "service_portfolio",
  TEMPLATE_ID: "template_contact",
  PUBLIC_KEY: "your_public_key_here",
};

/* --- Colors --- */
export const COLORS = {
  primary: "#6366F1",
  secondary: "#8B5CF6",
  accent: "#06B6D4",
  background: "#0F172A",
  text: "#F8FAFC",
  muted: "#94A3B8",
};

/* --- Floating Tech Icons in Hero --- */
export const FLOATING_TECH = [
  { icon: "FaReact", color: "#61DAFB", label: "React" },
  { icon: "FaNodeJs", color: "#68A063", label: "Node" },
  { icon: "SiMongodb", color: "#47A248", label: "MongoDB" },
  { icon: "SiExpress", color: "#FFFFFF", label: "Express" },
  { icon: "FaPython", color: "#3776AB", label: "Python" },
  { icon: "FaBrain", color: "#10A37F", label: "AI" },
  { icon: "FaDocker", color: "#2496ED", label: "Docker" },
  { icon: "FaGithub", color: "#FFFFFF", label: "GitHub" },
];
