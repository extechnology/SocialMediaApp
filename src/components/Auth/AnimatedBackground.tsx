import { motion } from "framer-motion";
import { Sparkles, Cloud, Stars } from "lucide-react";

const AnimatedBackground = () => {


    // Generate random floating elements
    const generateElements = (count: number, type: 'sparkle' | 'cloud' | 'star') => {
        return Array.from({ length: count }).map((_, i) => {
            const x = Math.random() * 100;
            const y = Math.random() * 100;
            const size = type === 'cloud'
                ? Math.random() * 60 + 30
                : Math.random() * 30 + 15;
            const delay = Math.random() * 5;
            const duration = Math.random() * 20 + 15;
            const opacity = type === 'cloud' ? 0.1 : 0.3;

            return { id: i, x, y, size, delay, duration, opacity };
        });
    };

    const sparkles = generateElements(12, 'sparkle');
    const clouds = generateElements(6, 'cloud');
    const stars = generateElements(8, 'star');

    return (


        <div className="fixed inset-0 -z-10 overflow-hidden">

            
            {/* Sparkles */}
            {sparkles.map((el) => (
                <motion.div
                    key={`sparkle-${el.id}`}
                    className="absolute text-primary/20 dark:text-primary/30"
                    style={{
                        left: `${el.x}%`,
                        top: `${el.y}%`,
                        width: `${el.size}px`,
                        height: `${el.size}px`,
                    }}
                    animate={{
                        x: [0, Math.random() * 100 - 50, 0],
                        y: [0, Math.random() * 100 - 50, 0],
                        rotate: [0, Math.random() * 360, 0],
                        scale: [1, Math.random() * 0.3 + 0.8, 1],
                    }}
                    transition={{
                        duration: el.duration,
                        delay: el.delay,
                        repeat: Infinity,
                        ease: "easeInOut",
                    }}
                >
                    <Sparkles
                        size={el.size}
                        className="text-primary/30 dark:text-primary/40"
                    />
                </motion.div>
            ))}

            {/* Clouds */}
            {clouds.map((el) => (
                <motion.div
                    key={`cloud-${el.id}`}
                    className="absolute"
                    style={{
                        left: `${el.x}%`,
                        top: `${el.y}%`,
                        width: `${el.size}px`,
                        height: `${el.size}px`,
                    }}
                    animate={{
                        x: [0, Math.random() * 80 - 40, 0],
                        scale: [1, Math.random() * 0.2 + 0.9, 1],
                    }}
                    transition={{
                        duration: el.duration * 1.5,
                        delay: el.delay,
                        repeat: Infinity,
                        ease: "easeInOut",
                    }}
                >
                    <Cloud
                        size={el.size}
                        className="text-purple-300/10 dark:text-purple-300/20"
                    />
                </motion.div>
            ))}

            {/* Stars */}
            {stars.map((el) => (
                <motion.div
                    key={`star-${el.id}`}
                    className="absolute"
                    style={{
                        left: `${el.x}%`,
                        top: `${el.y}%`,
                        width: `${el.size}px`,
                        height: `${el.size}px`,
                    }}
                    animate={{
                        scale: [1, 1.5, 1],
                        opacity: [0.3, 0.7, 0.3],
                    }}
                    transition={{
                        duration: Math.random() * 3 + 2,
                        delay: el.delay,
                        repeat: Infinity,
                        ease: "easeInOut",
                    }}
                >
                    <Stars
                        size={el.size}
                        className="text-blue-400/20 dark:text-blue-300/30"
                    />
                </motion.div>
            ))}

            {/* Gradient circles */}
            <div className="absolute top-1/4 left-1/4 -translate-x-1/2 -translate-y-1/2 w-96 h-96 rounded-full bg-gradient-to-r from-purple-300/20 to-blue-300/10 dark:from-purple-600/20 dark:to-blue-600/10 blur-3xl" />
            <div className="absolute bottom-1/4 right-1/4 -translate-x-1/2 -translate-y-1/2 w-96 h-96 rounded-full bg-gradient-to-r from-primary/10 to-purple-300/10 dark:from-primary/20 dark:to-purple-400/10 blur-3xl" />

            {/* Gradient overlay */}
            <div className="absolute inset-0 bg-gradient-radial from-transparent to-background/80 dark:to-background/90" />
        </div>
    );
};

export default AnimatedBackground;