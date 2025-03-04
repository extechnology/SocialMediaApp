import { useState } from "react";
import { Link } from "react-router-dom";
import { Search, X } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import ThemeToggle from "./ThemeToggle";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";

const Header = () => {


    const [isSearchFocused, setIsSearchFocused] = useState(false);
    const [isMobileSearchOpen, setIsMobileSearchOpen] = useState(false);


    const toggleMobileSearch = () => {
        setIsMobileSearchOpen(!isMobileSearchOpen);
    };


    return (

        <motion.header
            className="sticky top-0 z-30 w-full border-b border-border/30 backdrop-blur-sm bg-background/80 px-5"
            initial={{ y: -50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
        >

            <div className="container flex h-14 max-w-screen-2xl items-center">


                <div className="flex items-center justify-between w-full gap-2 md:gap-4">


                    {/* Logo - hidden when mobile search is open */}
                    <AnimatePresence>
                        {!isMobileSearchOpen && (
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
                        )}
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


                    {/* Mobile Search Button and Bar */}
                    {/* <div className="sm:hidden flex items-center flex-1">
                        <AnimatePresence>
                            {isMobileSearchOpen ? (
                                <motion.div
                                    className="w-full flex items-center gap-2"
                                    initial={{ opacity: 0, width: 0 }}
                                    animate={{ opacity: 1, width: "100%" }}
                                    exit={{ opacity: 0, width: 0 }}
                                    transition={{ duration: 0.3 }}
                                >
                                    <div className="relative flex-1">
                                        <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                                        <Input
                                            type="search"
                                            placeholder="Search..."
                                            className="pl-9 w-full h-9 bg-muted/30 border-muted focus:bg-background"
                                            autoFocus
                                        />
                                    </div>
                                    <Button
                                        variant="ghost"
                                        size="icon"
                                        className="h-9 w-9 flex-shrink-0"
                                        onClick={toggleMobileSearch}
                                    >
                                        <X className="h-5 w-5" />
                                    </Button>
                                </motion.div>
                            ) : (
                                <motion.div
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    exit={{ opacity: 0 }}
                                >
                                    <Button
                                        variant="ghost"
                                        size="icon"
                                        className="h-9 w-9"
                                        onClick={toggleMobileSearch}
                                    >
                                        <Search className="h-5 w-5" />
                                    </Button>
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </div> */}


                    {/* Theme Toggle  hidden when search is open */}
                    <AnimatePresence>
                        {(!isMobileSearchOpen || window.innerWidth >= 640) && (
                            <motion.div
                                className="md:hidden"
                                initial={{ opacity: 0, x: 20 }}
                                animate={{ opacity: 1, x: 0 }}
                                exit={{ opacity: 0, x: 20 }}
                                transition={{ duration: 0.2 }}
                            >
                                <ThemeToggle />
                            </motion.div>
                        )}
                    </AnimatePresence>


                </div>
            </div>
        </motion.header>
    );
};

export default Header;