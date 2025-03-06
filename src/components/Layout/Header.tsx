import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Search, Settings, } from "lucide-react";
import { Input } from "@/components/ui/input";
import ThemeToggle from "./ThemeToggle";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";
import { Button } from "../ui/button";

const Header = () => {

    const navigate = useNavigate();

    const [isSearchFocused, setIsSearchFocused] = useState(false);


    return (

        <motion.header
            className="sticky top-0 z-30 w-full border-b border-border/30 backdrop-blur-sm bg-background/80 px-5"
            initial={{ y: -50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
        >

            <div className="container flex h-14 max-w-screen-2xl items-center">


                <div className="flex items-center justify-between w-full gap-2 md:gap-4">


                    {/* Logo & Title */}
                    <AnimatePresence>

                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: -20 }}
                            transition={{ duration: 0.2 }}
                        >
                            <Link to="/feed" className="flex items-center">
                                <motion.div
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                    className="mr-2 md:mr-4"
                                >
                                    <motion.div
                                        className="flex items-center"
                                        initial={{ rotateY: 90 }}
                                        animate={{ rotateY: 0 }}
                                        transition={{ duration: 0.5 }}
                                    >

                                        <span className="ml-2 text-xl italic font-bold sm:inline-block text-primary">Ex App</span>

                                    </motion.div>
                                </motion.div>
                            </Link>
                        </motion.div>
                    </AnimatePresence>


                    {/* Desktop Search Bar */}
                    <div className={cn(
                        "hidden sm:flex relative flex-1 max-w-md transition-all duration-300",
                        isSearchFocused ? "max-w-xl" : "max-w-md"
                    )}>
                        <div className="relative w-full">
                            <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                            <Input
                                type="search"
                                placeholder="Search..."
                                className="pl-9 w-full h-9 bg-muted/30 border-muted focus:bg-background"
                                onFocus={() => setIsSearchFocused(true)}
                                onBlur={() => setIsSearchFocused(false)}
                            />
                        </div>
                    </div>


                    <div className="flex justify-center items-center">

                        {/* Theme Toggle */}
                        <AnimatePresence>

                            <motion.div
                                className="md:hidden"
                                initial={{ opacity: 0, x: 20 }}
                                animate={{ opacity: 1, x: 0 }}
                                exit={{ opacity: 0, x: 20 }}
                                transition={{ duration: 0.2 }}
                            >
                                <ThemeToggle />
                            </motion.div>

                        </AnimatePresence>

                        <Button
                            variant="ghost"
                            size="default"
                            className={cn(
                                "md:hidden",
                                "relative"
                            )}
                            onClick={() => navigate('/settings')}
                        >
                            <Settings className="h-8 w-8" />

                        </Button>

                    </div>




                </div>
            </div>
        </motion.header>
    );
};

export default Header;