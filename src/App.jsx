// =============================================
// App.jsx — Root Application with Router
// =============================================
import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import { ThemeProvider } from "./context/ThemeContext";
import MainLayout from "./layouts/MainLayout";
import Home from "./pages/Home";
import Loader from "./components/Loader/Loader";

function App() {
  const [loading, setLoading] = useState(true);

  return (
    <ThemeProvider>
      <Router>
        {/* Loading Screen */}
        {loading && <Loader onComplete={() => setLoading(false)} />}

        {/* Main App — only shown after loader */}
        {!loading && (
          <MainLayout>
            <AnimatePresence mode="wait">
              <Routes>
                <Route path="/" element={<Home />} />
                {/* 404 fallback */}
                <Route
                  path="*"
                  element={
                    <div className="min-h-screen flex items-center justify-center">
                      <div className="text-center">
                        <h1 className="text-8xl font-black gradient-text mb-4">404</h1>
                        <p className="text-dark-400 mb-8">Page not found</p>
                        <a
                          href="/"
                          className="px-6 py-3 rounded-xl text-white text-sm font-semibold"
                          style={{ background: "linear-gradient(135deg, #6366F1, #8B5CF6)" }}
                        >
                          Back to Home
                        </a>
                      </div>
                    </div>
                  }
                />
              </Routes>
            </AnimatePresence>
          </MainLayout>
        )}
      </Router>
    </ThemeProvider>
  );
}

export default App;
