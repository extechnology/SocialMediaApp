
import React, { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Lock, User, ArrowLeft } from "lucide-react";
import { Input } from "@/components/ui/input";
import ThemeToggle from "../Layout/ThemeToggle";


interface AuthCardProps {
    isLogin: boolean;
    onToggle: () => void;
}

const AuthCard: React.FC<AuthCardProps> = ({ isLogin, onToggle }) => {


    const [isLoading, setIsLoading] = useState(false);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setIsLoading(true);
        // Simulate loading for UI demonstration
        setTimeout(() => {
            setIsLoading(false);
        }, 1500);
    };

    const cardVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.6,
                ease: [0.22, 1, 0.36, 1]
            }
        },
        exit: {
            opacity: 0,
            y: -20,
            transition: {
                duration: 0.5,
                ease: [0.22, 1, 0.36, 1]
            }
        }
    };

    const buttonVariants = {
        hover: { scale: 1.05, transition: { duration: 0.3 } },
        tap: { scale: 0.98, transition: { duration: 0.15 } }
    };

    return (

        <motion.div
            className="w-full max-w-md mx-auto bg-white/80 dark:bg-gray-900/80 backdrop-blur-xl border border-gray-200 dark:border-gray-800 rounded-2xl shadow-xl overflow-hidden"
            variants={cardVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            layoutId="authCard"
        >
            <div className="absolute top-4 right-4 z-10">
                <ThemeToggle />
            </div>

            <div className="p-8">

                <div className="mb-8 text-center">

                    <motion.h1
                        className="text-3xl font-bold tracking-tight mb-2"
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2, duration: 0.5 }}
                    >
                        {isLogin ? "Welcome back" : "Create account"}
                    </motion.h1>

                    <motion.p
                        className="text-muted-foreground"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.3, duration: 0.5 }}
                    >
                        {isLogin
                            ? "Sign in to your account to continue"
                            : "Fill in your details to get started"}
                    </motion.p>
                    
                </div>

                <form onSubmit={handleSubmit} className="space-y-5">

                    {!isLogin && (
                        <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: "auto" }}
                            exit={{ opacity: 0, height: 0 }}
                            transition={{ duration: 0.3 }}
                            className="relative"
                        >
                            <User className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground/70" />
                            <Input
                                type="text"
                                placeholder="Full name"
                                className="pl-10 py-6 bg-secondary/50 dark:bg-secondary/30 border-0 rounded-xl focus:ring-2 focus:ring-primary/50 focus:ring-offset-0"
                                required
                            />
                        </motion.div>
                    )}

                    <motion.div
                        className="relative"
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1, duration: 0.4 }}
                    >
                        <Mail className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground/70" />
                        <Input
                            type="email"
                            placeholder="Email address"
                            className="pl-10 py-6 bg-secondary/50 dark:bg-secondary/30 border-0 rounded-xl focus:ring-2 focus:ring-primary/50 focus:ring-offset-0"
                            required
                        />
                    </motion.div>

                    <motion.div
                        className="relative"
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2, duration: 0.4 }}
                    >
                        <Lock className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground/70" />
                        <Input
                            type="password"
                            placeholder="Password"
                            className="pl-10 py-6 bg-secondary/50 dark:bg-secondary/30 border-0 rounded-xl focus:ring-2 focus:ring-primary/50 focus:ring-offset-0"
                            required
                        />
                    </motion.div>

                    {isLogin && (
                        <motion.div
                            className="flex justify-end"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.3, duration: 0.4 }}
                        >
                            <button type="button" className="text-sm text-primary hover:underline">
                                Forgot password?
                            </button>
                        </motion.div>
                    )}

                    <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.4, duration: 0.4 }}
                    >
                        <motion.button
                            type="submit"
                            className="w-full bg-primary hover:bg-primary/90 text-white py-3 px-4 rounded-xl font-medium shadow-lg relative overflow-hidden transition-colors"
                            variants={buttonVariants}
                            whileHover="hover"
                            whileTap="tap"
                            disabled={isLoading}
                        >
                            {isLoading && (
                                <span className="absolute inset-0 shimmer-effect"></span>
                            )}
                            {isLogin ? "Sign in" : "Create account"}
                        </motion.button>
                    </motion.div>

                    <motion.div
                        className="relative flex items-center gap-3 my-6"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.5, duration: 0.4 }}
                    >
                        <span className="flex-grow h-px bg-border"></span>
                        <span className="text-xs text-muted-foreground font-medium">OR CONTINUE WITH</span>
                        <span className="flex-grow h-px bg-border"></span>
                    </motion.div>

                    <motion.div
                        className="grid grid-cols-2 gap-3"
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.6, duration: 0.4 }}
                    >
                        <motion.button
                            type="button"
                            className="flex items-center justify-center gap-2 py-2.5 px-4 bg-white dark:bg-white/10 hover:bg-gray-50 dark:hover:bg-white/20 border border-gray-200 dark:border-gray-700 rounded-xl shadow-sm transition-colors"
                            variants={buttonVariants}
                            whileHover="hover"
                            whileTap="tap"
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" width="20px" height="20px">
                                <path fill="#FFC107" d="M43.611,20.083H42V20H24v8h11.303c-1.649,4.657-6.08,8-11.303,8c-6.627,0-12-5.373-12-12c0-6.627,5.373-12,12-12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C12.955,4,4,12.955,4,24c0,11.045,8.955,20,20,20c11.045,0,20-8.955,20-20C44,22.659,43.862,21.35,43.611,20.083z" />
                                <path fill="#FF3D00" d="M6.306,14.691l6.571,4.819C14.655,15.108,18.961,12,24,12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C16.318,4,9.656,8.337,6.306,14.691z" />
                                <path fill="#4CAF50" d="M24,44c5.166,0,9.86-1.977,13.409-5.192l-6.19-5.238C29.211,35.091,26.715,36,24,36c-5.202,0-9.619-3.317-11.283-7.946l-6.522,5.025C9.505,39.556,16.227,44,24,44z" />
                                <path fill="#1976D2" d="M43.611,20.083H42V20H24v8h11.303c-0.792,2.237-2.231,4.166-4.087,5.571c0.001-0.001,0.002-0.001,0.003-0.002l6.19,5.238C36.971,39.205,44,34,44,24C44,22.659,43.862,21.35,43.611,20.083z" />
                            </svg>
                            <span className="text-sm font-medium">Google</span>
                        </motion.button>

                        <motion.button
                            type="button"
                            className="flex items-center justify-center gap-2 py-2.5 px-4 bg-[#1877F2] hover:bg-[#1877F2]/90 text-white rounded-xl shadow-sm transition-colors"
                            variants={buttonVariants}
                            whileHover="hover"
                            whileTap="tap"
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" width="20px" height="20px">
                                <path fill="white" d="M24 5A19 19 0 1 0 24 43A19 19 0 1 0 24 5Z" />
                                <path fill="#1877f2" d="M26.572,29.036h4.917l0.772-4.995h-5.69v-2.73c0-2.075,0.678-3.915,2.619-3.915h3.119v-4.359c-0.548-0.074-1.707-0.236-3.897-0.236c-4.573,0-7.254,2.415-7.254,7.917v3.323h-4.701v4.995h4.701v13.729C22.089,42.905,23.032,43,24,43c0.875,0,1.729-0.08,2.572-0.194V29.036z" />
                            </svg>
                            <span className="text-sm font-medium">Facebook</span>
                        </motion.button>

                    </motion.div>

                </form>

                <motion.div
                    className="mt-8 text-center text-sm"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.7, duration: 0.4 }}
                >
                    <p className="text-muted-foreground">
                        {isLogin ? "Don't have an account?" : "Already have an account?"}
                        <button
                            type="button"
                            onClick={onToggle}
                            className="ml-1 text-primary font-medium hover:underline focus:outline-none"
                        >
                            {isLogin ? "Create account" : "Sign in"}
                        </button>
                    </p>
                </motion.div>

                {!isLogin && (
                    <motion.button
                        type="button"
                        className="absolute top-4 left-4 p-2 text-muted-foreground hover:text-foreground transition-colors"
                        onClick={onToggle}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.2 }}
                        aria-label="Back to login"
                    >
                        <ArrowLeft className="h-5 w-5" />
                    </motion.button>
                )}

            </div>
            
        </motion.div>
    );
};

export default AuthCard;