import { motion } from 'framer-motion';
import {
    Sparkles, Baby, PartyPopper, Cake, Heart, GraduationCap,
    Tent, Music, Palette, Flame, Wind, Droplets, Zap,
    Stars, CloudRain, Rocket, Sun, Camera
} from 'lucide-react';

const Services = () => {
    const services = [
        { title: 'Wedding Special Entry', icon: <Sparkles size={32} /> },
        { title: 'Baby Shower', icon: <Baby size={32} /> },
        { title: 'Theme Party', icon: <PartyPopper size={32} /> },
        { title: 'Birthday Party', icon: <Cake size={32} /> },
        { title: 'Anniversary Party', icon: <Heart size={32} /> },
        { title: 'School Events', icon: <GraduationCap size={32} /> },
        { title: 'Mandap Decoration', icon: <Tent size={32} /> },
        { title: 'DJ Sound System', icon: <Music size={32} /> },
        { title: 'Haldi Mehendi Setup', icon: <Palette size={32} /> },
        { title: 'Cold Pyro', icon: <Flame size={32} /> },
        { title: 'Pyro Gun', icon: <Zap size={32} /> },
        { title: 'Bubble Smoke', icon: <Droplets size={32} /> },
        { title: 'Hand Pyro', icon: <Flame size={32} /> },
        { title: 'Paper Confetti', icon: <Stars size={32} /> },
        { title: 'CO2 Gun', icon: <Wind size={32} /> },
        { title: 'Sky Shot', icon: <Rocket size={32} /> },
        { title: 'Color Sky Shot', icon: <Rocket size={32} className="text-pink-400" /> },
        { title: 'Sparkler Machine', icon: <Sun size={32} /> },
        { title: 'Firework Effects', icon: <Sparkles size={32} /> },
        { title: 'Dry Ice Machine', icon: <CloudRain size={32} /> },
        { title: '360 Selfie Booth', icon: <Camera size={32} /> },
    ];

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: { staggerChildren: 0.05 }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0 }
    };

    return (
        <div className="min-h-[90vh] py-20 px-4 sm:px-6 lg:px-8 w-full max-w-7xl mx-auto">
            <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="text-center mb-16"
            >
                <span className="text-[#D4AF37] tracking-widest uppercase text-sm font-semibold mb-2 block">
                    What We Offer
                </span>
                <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Premium Services</h1>
                <div className="w-24 h-1 bg-[#D4AF37] mx-auto rounded-full mb-6"></div>
                <p className="text-neutral-400 max-w-2xl mx-auto text-lg">
                    Complete event solutions from elegant decorations to breathtaking special effects for your perfect day.
                </p>
            </motion.div>

            <motion.div
                variants={containerVariants}
                initial="hidden"
                animate="visible"
                className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6"
            >
                {services.map((service, index) => (
                    <motion.div
                        key={index}
                        variants={itemVariants}
                        whileHover={{ y: -5, scale: 1.02 }}
                        className="glass-panel p-6 rounded-2xl flex flex-col items-center text-center group cursor-pointer border border-white/5 hover:border-[#D4AF37]/50 transition-all duration-300"
                    >
                        <div className="w-16 h-16 rounded-full bg-neutral-900 border border-white/10 flex items-center justify-center text-neutral-400 group-hover:text-[#D4AF37] group-hover:border-[#D4AF37]/50 group-hover:shadow-[0_0_15px_rgba(212,175,55,0.3)] transition-all duration-300 mb-4">
                            {service.icon}
                        </div>
                        <h3 className="text-lg font-semibold text-neutral-200 group-hover:text-white transition-colors">
                            {service.title}
                        </h3>
                    </motion.div>
                ))}
            </motion.div>
        </div>
    );
};

export default Services;
