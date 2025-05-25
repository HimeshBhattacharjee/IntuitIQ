import {
    Brain, Calculator, Sigma, Square, FunctionSquare, PieChart, Divide, Plus, Minus, X, Equal,
    Pi, Infinity as InfinityIcon, Database, FileSearch, Sparkles, Triangle, CheckCircleIcon, PenTool
} from "lucide-react";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { SignInButton } from "@clerk/clerk-react";

const symbols = [
    { Icon: Sigma, top: "15%", left: "5%", delay: 0, duration: 25, color: "text-indigo-300/80", size: 80 },
    { Icon: Square, top: "25%", left: "85%", delay: 0, duration: 20, color: "text-purple-300/80", size: 80 },
    { Icon: Triangle, top: "35%", left: "75%", delay: 0, duration: 20, color: "text-orange-300/80", size: 80 },
    { Icon: FunctionSquare, top: "75%", left: "10%", delay: 1, duration: 30, color: "text-pink-300/80", size: 80 },
    { Icon: Calculator, top: "65%", left: "90%", delay: 1, duration: 35, color: "text-yellow-300/80", size: 80 },
    { Icon: PieChart, top: "45%", left: "15%", delay: 0, duration: 25, color: "text-blue-300/80", size: 80 },
    { Icon: Divide, top: "20%", left: "25%", delay: 1, duration: 40, color: "text-green-300/80", size: 80 },
    { Icon: Plus, top: "80%", left: "75%", delay: 1.5, duration: 30, color: "text-red-300/80", size: 80 },
    { Icon: Minus, top: "60%", left: "50%", delay: 1, duration: 35, color: "text-orange-300/80", size: 80 },
    { Icon: X, top: "35%", left: "65%", delay: 0.5, duration: 25, color: "text-teal-300/80", size: 80 },
    { Icon: Equal, top: "55%", left: "35%", delay: 1, duration: 20, color: "text-indigo-300/80", size: 80 },
    { Icon: Pi, top: "30%", left: "45%", delay: 0, duration: 40, color: "text-purple-300/80", size: 80 },
    { Icon: InfinityIcon, top: "70%", left: "25%", delay: 1.5, duration: 30, color: "text-pink-300/80", size: 80 },
];

interface FeatureCardProps {
    title: string;
    description: string;
    Icon: React.ComponentType<{ className?: string; style?: React.CSSProperties }>;
    index: number;
}

interface TeamMember {
    name: string;
    photo: string;
    dept_college: string;
    details: string;
    github: string;
    linkedin: string;
    leetcode: string;
}

export const creators: TeamMember[] = [
    {
        name: "Arup Roy",
        photo: "https://avatars.githubusercontent.com/u/155263895?v=4",
        dept_college: "ECE 2025, FIEM",
        details: "JAVA Programmer, Frontend Developer",
        github: "https://github.com/aruproyy",
        linkedin: "https://www.linkedin.com/in/arup-roy299/",
        leetcode: "https://leetcode.com/u/Arup299/",
    },
    {
        name: "Debolina Saha",
        photo: "https://avatars.githubusercontent.com/u/156057665?v=4",
        dept_college: "ECE 2025, FIEM",
        details: "JAVA Programmer, UI/UX designer",
        github: "https://github.com/sdebolina",
        linkedin: "https://www.linkedin.com/in/debolina-saha-58b27a289",
        leetcode: "https://leetcode.com/u/Debolinaarya/",
    },
    {
        name: "Himesh Bhattacharjee",
        photo: "https://avatars.githubusercontent.com/u/155549081?v=4",
        dept_college: "ECE 2025, FIEM",
        details: "C++/Python Coder, Web+AI Developer",
        github: "https://github.com/HimeshBhattacharjee",
        linkedin: "https://www.linkedin.com/in/himeshbhattacharjee/",
        leetcode: "https://leetcode.com/u/traataphoenix/",
    },
    {
        name: "Priyanka Bal",
        photo: "https://avatars.githubusercontent.com/u/159651316?v=4",
        dept_college: "ECE 2025, FIEM",
        details: "JAVA Programmer, Web Developer",
        github: "https://github.com/priyanka-bal44",
        linkedin: "https://www.linkedin.com/in/priyanka-bal-168828288/",
        leetcode: "https://leetcode.com/u/priyanka-4444/",
    },
];

export const features = [
    {
        title: "Interactive Canvas",
        description: "Draw, write, solve, and visualize mathematical problems in real-time with our intuitive canvas.",
        Icon: Square,
    },
    {
        title: "AI-Powered Solutions",
        description: "Solve complex equations and problems using advanced AI models like Gemini and Mistral.",
        Icon: Brain,
    },
    {
        title: "History Management",
        description: "Effortlessly revisit and review previously generated solutions at any time.",
        Icon: Database,
    },
    {
        title: "Step-by-Step Explanations",
        description: "Understand the solution process with detailed breakdowns of each step.",
        Icon: FileSearch,
    },
    {
        title: "6+ Canvas Tools",
        description: "Draw, write and demonstrate effectively with multiple functional canvas tools.",
        Icon: PenTool,
    },
    {
        title: "Smart Problem Recognition",
        description: "Witness intelligent problem statement recognition with the power of Gen AI.",
        Icon: Sparkles,
    },
];

const useMousePosition = () => {
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
    useEffect(() => {
        const updateMousePosition = (e: MouseEvent) => { setMousePosition({ x: e.clientX, y: e.clientY }) };
        window.addEventListener("mousemove", updateMousePosition);
        return () => window.removeEventListener("mousemove", updateMousePosition);
    }, []);
    return mousePosition;
};

export const FloatingMathSymbols = () => {
    return (
        <>
            {symbols.map(({ Icon, ...symbol }, index) => (
                <motion.div
                    key={index}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{
                        opacity: [0, 0.8, 0],
                        scale: [0.8, 1.2, 0.8],
                        x: [0, Math.random() * 200 - 100, 0],
                        y: [0, Math.random() * 200 - 100, 0],
                        rotate: [0, Math.random() * 360 - 180, 0],
                    }}
                    transition={{
                        duration: symbol.duration,
                        delay: symbol.delay,
                        repeat: Infinity,
                        repeatType: "loop",
                        ease: "linear",
                    }}
                    className={`absolute pointer-events-none ${symbol.color}`}
                    style={{ top: symbol.top, left: symbol.left }}
                >
                    <Icon className={symbol.color} style={{ width: symbol.size, height: symbol.size }} />
                </motion.div>
            ))}
        </>
    );
};

export const InteractiveGrid = () => {
    const { x, y } = useMousePosition();
    const gridSize = 15;
    const gridItems = Array.from({ length: gridSize * gridSize });
    return (
        <div className="absolute inset-0 grid grid-cols-15 grid-rows-15 gap-1 opacity-10 pointer-events-none">
            {gridItems.map((_, i) => {
                const col = i % gridSize;
                const row = Math.floor(i / gridSize);
                const distance = Math.sqrt(
                    Math.pow(col - (x / window.innerWidth) * gridSize, 2) +
                    Math.pow(row - (y / window.innerHeight) * gridSize, 2)
                );
                const scale = 1 - Math.min(distance / 10, 0.8);
                return (
                    <motion.div
                        key={i}
                        animate={{ scale, backgroundColor: `rgba(139, 92, 246, ${0.2 * scale})` }}
                        transition={{ type: "spring", stiffness: 300, damping: 20 }}
                        className="w-full h-full rounded-sm bg-purple-500"
                    />
                );
            })}
        </div>
    );
};

export const HeroText = () => {
    const texts = ["Solve", "Visualize", "Understand", "Master"];
    const [currentIndex, setCurrentIndex] = useState(0);
    useEffect(() => {
        const interval = setInterval(() => { setCurrentIndex((prev) => (prev + 1) % texts.length) }, 3000);
        return () => clearInterval(interval);
    }, []);
    return (
        <div className="relative h-20 overflow-hidden">
            <AnimatePresence mode="wait">
                <motion.span
                    key={currentIndex}
                    initial={{ y: 50, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    exit={{ y: -50, opacity: 0 }}
                    transition={{ duration: 0.5 }}
                    className="absolute inset-0 text-5xl lg:text-6xl font-black bg-gradient-to-r from-yellow-300 to-amber-400 bg-clip-text text-transparent"
                >
                    {texts[currentIndex]}
                </motion.span>
            </AnimatePresence>
        </div>
    );
};

export const FeatureCard = ({ title, description, Icon, index }: FeatureCardProps) => {
    const [isHovered, setIsHovered] = useState(false);
    return (
        <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1, duration: 0.5 }}
            viewport={{ once: true, margin: "-100px" }}
            onHoverStart={() => setIsHovered(true)}
            onHoverEnd={() => setIsHovered(false)}
            className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-gray-900 to-gray-800 p-0.5"
        >
            <motion.div
                animate={{ opacity: isHovered ? 1 : 0 }}
                className="absolute inset-0 bg-gradient-to-r from-purple-500 to-indigo-500 blur-md"
            />
            <div className="relative h-full bg-gray-900 rounded-[calc(1rem-2px)] p-8 flex flex-col items-center">
                <motion.div
                    animate={{ rotate: isHovered ? 360 : 0, scale: isHovered ? 1.1 : 1 }}
                    className="mb-6 p-4 rounded-full bg-gradient-to-r from-purple-500 to-indigo-500"
                >
                    <Icon className="text-white" style={{ width: 32, height: 32 }} />
                </motion.div>
                <h3 className="text-2xl font-bold text-white mb-4 text-center">{title}</h3>
                <p className="text-gray-400 text-center">{description}</p>
                <motion.div
                    animate={{ width: isHovered ? "100%" : "0%", opacity: isHovered ? 1 : 0 }}
                    className="absolute bottom-0 left-0 h-1 bg-gradient-to-r from-purple-500 to-indigo-500"
                />
            </div>
        </motion.div>
    );
};

export const PricingCard = ({ title, price, period, features, isPopular = false }: {
    title: string;
    price: string;
    period: string;
    features: string[];
    isPopular?: boolean;
}) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true, margin: "-100px" }}
            className={`relative rounded-2xl bg-gradient-to-br ${isPopular
                ? "from-purple-500/20 to-indigo-500/20 border-2 border-purple-500/30"
                : "from-gray-900/50 to-gray-800/50 border border-gray-800"
                } p-0.5 overflow-hidden`}
        >
            {isPopular && (
                <div className="absolute z-10 top-0 right-0 bg-gradient-to-r from-purple-500 to-indigo-500 text-white text-xs font-bold px-4 py-1 rounded-bl-lg">
                    POPULAR
                </div>
            )}
            <div className="relative h-full bg-gray-900 rounded-[calc(1rem-2px)] p-8 flex flex-col">
                <h3 className="text-2xl font-bold text-white mb-2">{title}</h3>
                <div className="mb-6">
                    <span className="text-4xl font-bold bg-gradient-to-r from-purple-400 to-indigo-400 bg-clip-text text-transparent">
                        {price}
                    </span>
                    <span className="text-gray-400">/{period}</span>
                </div>
                <ul className="flex-1 space-y-3 mb-8">
                    {features.map((feature, i) => (
                        <li key={i} className="flex items-center gap-3 text-gray-300">
                            <CheckCircleIcon className="text-green-400 flex-shrink-0" style={{ width: 16, height: 16 }} />
                            {feature}
                        </li>
                    ))}
                </ul>
                <SignInButton>
                    <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className={`w-full py-3 rounded-lg font-bold ${isPopular
                            ? "bg-gradient-to-r from-purple-500 to-indigo-500 text-white"
                            : "bg-gray-800 text-gray-300 hover:bg-gray-700"
                            }`}
                    >
                        Get Started
                    </motion.button>
                </SignInButton>
            </div>
        </motion.div>
    );
};

export const TeamMemberCard = ({ member }: { member: TeamMember }) => {
    const [isHovered, setIsHovered] = useState(false);
    return (
        <motion.div
            whileHover="hover"
            onHoverStart={() => setIsHovered(true)}
            onHoverEnd={() => setIsHovered(false)}
            className="relative rounded-2xl overflow-hidden"
        >
            <motion.div
                variants={{ hover: { scale: 1.05 } }}
                className="relative h-full bg-gradient-to-br from-gray-900 to-gray-800 p-0.5"
            >
                <motion.div
                    animate={{ opacity: isHovered ? 1 : 0.5, scale: isHovered ? 1.2 : 1 }}
                    className="absolute inset-0 bg-gradient-to-r from-purple-500/30 to-indigo-500/30"
                />
                <div className="relative h-full bg-gray-900 rounded-[calc(1rem-2px)] p-8 flex flex-col items-center">
                    <motion.div
                        animate={{ y: isHovered ? -10 : 0, rotate: isHovered ? 5 : 0 }}
                        className="relative mb-6"
                    >
                        <img
                            src={member.photo}
                            alt={member.name}
                            className="w-32 h-32 lg:w-40 lg:h-40 rounded-full object-cover border-4 border-indigo-500 shadow-md"
                        />
                        <motion.div
                            animate={{ scale: [1, 1.05, 1.1, 1.15], opacity: [0.3, 0.4, 0.5, 0.6] }}
                            transition={{ duration: 2, repeat: Infinity, repeatType: "loop" }}
                            className="absolute inset-0 rounded-full border-4 border-indigo-300"
                        />
                    </motion.div>
                    <h3 className="text-2xl text-center font-bold text-white mb-2">{member.name}</h3>
                    <p className="text-purple-400 text-center mb-2">{member.dept_college}</p>
                    <p className="text-gray-400 text-center mb-6">{member.details}</p>
                    <div className="flex gap-4">
                        {[
                            { name: "GitHub", url: member.github, icon: "/github.svg" },
                            { name: "LinkedIn", url: member.linkedin, icon: "/linkedin.svg" },
                            { name: "LeetCode", url: member.leetcode, icon: "/leetcode.svg" },
                        ].map((social, i) => (
                            <motion.a
                                key={i}
                                href={social.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                whileHover={{ y: -5, scale: 1.1 }}
                                whileTap={{ scale: 0.9 }}
                                className="bg-gray-800 p-3 rounded-full hover:bg-gradient-to-r from-purple-500 to-indigo-500"
                            >
                                <img src={social.icon} alt={social.name} width={20} />
                            </motion.a>
                        ))}
                    </div>
                </div>
            </motion.div>
        </motion.div>
    );
};