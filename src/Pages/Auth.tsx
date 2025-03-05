import { useState } from "react";
import { AnimatePresence } from "framer-motion";
import AuthCard from "../components/Auth/AuthCard";
import CompanyLogo from "../components/Auth/CompanyLogo";
import AnimatedBackground from "../components/Auth/AnimatedBackground";

const Auth = () => {

  const [isLogin, setIsLogin] = useState(true);

  const toggleAuthMode = () => {
    setIsLogin(!isLogin);
  };

  return (

    <div className="min-h-screen w-full flex flex-col justify-center items-center bg-gradient-to-b from-blue-50/50 to-white dark:from-gray-900/50 dark:to-gray-950 px-4 py-8 relative overflow-hidden">
      <AnimatedBackground />
      <div className="w-full max-w-md mx-auto flex flex-col items-center z-10">
        <CompanyLogo />
        <AnimatePresence mode="wait">
          <AuthCard key={isLogin ? "login" : "signup"} isLogin={isLogin} onToggle={toggleAuthMode} />
        </AnimatePresence>
      </div>
    </div>

  );
  
};

export default Auth;
