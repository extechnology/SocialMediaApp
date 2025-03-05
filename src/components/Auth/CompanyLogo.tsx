import { motion } from "framer-motion";

const CompanyLogo = () => {
    return (
        <motion.div
            className="mb-6 flex flex-col items-center"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
        >
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5, duration: 1 }}
                className="text-xl md:text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary to-purple-500"
            >
                Ex App
            </motion.div>
        </motion.div>
    );
};

export default CompanyLogo;