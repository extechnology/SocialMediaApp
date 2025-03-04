import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Home, Users, Bell, User, LogOut, Plus, ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import ThemeToggle from "./ThemeToggle";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import NotificationBadge from "../Common/NotificationBadge";
import { motion, AnimatePresence } from "framer-motion";



// Navbar menu
const navItems = [
  { name: "Feed", path: "/feed", icon: Home },
  { name: "People", path: "/people", icon: Users },
  { name: "Notifications", path: "/notifications", icon: Bell },
  { name: "Profile", path: "/profile", icon: User },
];



export const Sidebar = () => {


  // get current route
  const location = useLocation();


  // Sidebar state
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [isHovering, setIsHovering] = useState(false);



  // Toggle sidebar
  const toggleSidebar = () => {
    setIsCollapsed(!isCollapsed);
  };


  return (
    
    <>

      {/* Desktop Sidebar */}
      <motion.aside
        className={cn(
          "hidden md:flex h-screen flex-col border-r border-border bg-sidebar transition-all duration-300 ease-in-out overflow-hidden",
          isCollapsed && !isHovering ? "w-[70px]" : "w-[240px]"
        )}
        onMouseEnter={() => setIsHovering(true)}
        onMouseLeave={() => setIsHovering(false)}
        initial={{ x: -20, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.3 }}
      >

        
        {/* Sidebar Header */}
        <div className="flex items-center justify-between p-4 border-b border-border/30">

          <AnimatePresence>
            {(!isCollapsed || isHovering) && (
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.2 }}
              >
                <Link to="/feed">
                  <h1 className="text-xl font-bold text-primary">Ex App</h1>
                </Link>
              </motion.div>
            )}
          </AnimatePresence>

          <Button
            variant="ghost"
            size="icon"
            className="text-muted-foreground hover:text-primary hover:bg-sidebar-accent transition-all"
            onClick={toggleSidebar}
            aria-label={isCollapsed ? "Expand sidebar" : "Collapse sidebar"}
          >
            {isCollapsed && !isHovering ? (
              <ChevronRight size={20} />
            ) : (
              <ChevronLeft size={20} />
            )}
          </Button>
          
        </div>


        {/* Navigation Items */}
        <div className="flex-grow flex flex-col justify-between py-6">

          <nav className="px-3 space-y-1">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className="relative block"
              >
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <Button
                    variant={location.pathname === item.path ? "secondary" : "ghost"}
                    className={cn(
                      "w-full justify-start mb-1 transition-all relative group",
                      isCollapsed && !isHovering ? "px-2" : "px-4"
                    )}
                  >
                    <item.icon className={cn(
                      "h-5 w-5 transition-all",
                      location.pathname === item.path ? "text-primary" : "text-muted-foreground group-hover:text-primary"
                    )} />

                    <AnimatePresence>
                      {(!isCollapsed || isHovering) && (
                        <motion.span
                          className="ml-3 truncate"
                          initial={{ opacity: 0, width: 0 }}
                          animate={{ opacity: 1, width: "auto" }}
                          exit={{ opacity: 0, width: 0 }}
                          transition={{ duration: 0.2 }}
                        >
                          {item.name}
                        </motion.span>
                      )}
                    </AnimatePresence>

                    {item.name === "Notifications"  && (
                      <NotificationBadge count={5} />
                    )}
                  </Button>
                </motion.div>
              </Link>
            ))}

            <Link to="/create">
              <motion.div
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <Button
                  className={cn(
                    "w-full justify-start mb-1 transition-all group",
                    isCollapsed && !isHovering ? "px-2" : "px-4"
                  )}
                >
                  <Plus className="h-5 w-5 text-white" />

                  <AnimatePresence>
                    {(!isCollapsed || isHovering) && (
                      <motion.span
                        className="ml-3 truncate"
                        initial={{ opacity: 0, width: 0 }}
                        animate={{ opacity: 1, width: "auto" }}
                        exit={{ opacity: 0, width: 0 }}
                        transition={{ duration: 0.2 }}
                      >
                        New Post
                      </motion.span>
                    )}
                  </AnimatePresence>
                </Button>
              </motion.div>
            </Link>
          </nav>

          {/* Sidebar Footer */}
          <div className="mt-auto px-3 space-y-2 border-t border-border/30 pt-4">
            <div className="flex items-center p-2">
              <ThemeToggle />

              <AnimatePresence>
                {(!isCollapsed || isHovering) && (
                  <motion.div
                    initial={{ opacity: 0, width: 0 }}
                    animate={{ opacity: 1, width: "auto" }}
                    exit={{ opacity: 0, width: 0 }}
                    transition={{ duration: 0.2 }}
                    className="ml-2"
                  >
                    <Button
                      variant="ghost"
                      className="text-destructive hover:text-destructive/80"
                      
                    >
                      <LogOut className="h-5 w-5 mr-2" />
                      Logout
                    </Button>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>


            <AnimatePresence>
              {(!isCollapsed || isHovering) && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 10 }}
                  transition={{ duration: 0.2 }}
                  className="p-2"
                >
                  <Link to="/profile" className="flex items-center gap-2 group hover:bg-sidebar-accent p-2 rounded-md transition-all">
                    <Avatar className="border-2 border-primary/20 group-hover:border-primary transition-all">
                      <AvatarImage src="https://github.com/shadcn.png" alt= "logo" />
                      <AvatarFallback className="bg-primary/10 text-primary">
                        {"JD"}
                      </AvatarFallback>
                    </Avatar>
                    <div className="flex flex-col">
                      <span className="text-sm font-medium group-hover:text-primary transition-all">{"John Doe"}</span>
                      <span className="text-xs text-muted-foreground">@{"johndoe"}</span>
                    </div>
                  </Link>
                </motion.div>
              )}
            </AnimatePresence>



          </div>
        </div>
      </motion.aside>


    </>
  );
};

export default Sidebar;