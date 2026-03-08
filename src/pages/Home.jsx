import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, Star, Calendar, Music, Camera, Sparkles } from 'lucide-react';
import { Button } from '../components/ui/Button';

const Home = () => {
    const fadeIn = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
    };

    const staggerContainer = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: { staggerChildren: 0.2 }
        }
    };

    const services = [
        { title: 'Wedding Decoration', icon: <Sparkles className="text-[#D4AF37]" size={32} /> },
        { title: 'Theme Parties', icon: <Calendar className="text-[#D4AF37]" size={32} /> },
        { title: 'DJ & Sound', icon: <Music className="text-[#D4AF37]" size={32} /> },
        { title: 'SFX & Pyro', icon: <Camera className="text-[#D4AF37]" size={32} /> },
    ];

    return (
        <div className="w-full">
            {/* Hero Section */}
            <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
                {/* Abstract Background - Gold & Dark */}
                <div className="absolute inset-0 bg-neutral-950">
                    <div className="absolute inset-0 bg-gradient-to-b from-black/60 to-black/90 z-10" />
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 0.15 }}
                        transition={{ duration: 2 }}
                        className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=2070')] bg-cover bg-center"
                    />
                    <div className="absolute top-1/4 -left-[20%] w-[50%] h-[50%] rounded-full bg-[#D4AF37]/20 blur-[120px]" />
                    <div className="absolute bottom-1/4 -right-[20%] w-[50%] h-[50%] rounded-full bg-[#D4AF37]/10 blur-[120px]" />
                </div>

                <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center pt-20">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                    >
                        <span className="text-[#D4AF37] tracking-[0.2em] uppercase text-sm font-semibold mb-4 block">
                            SR FX Event – Wedding & Event Planner in Wardha
                        </span>
                        <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-white mb-6 leading-tight text-glow">
                            Make Your Events <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-200 via-[#D4AF37] to-yellow-600">
                                Memorable
                            </span>
                        </h1>
                        <p className="text-lg md:text-xl text-neutral-300 max-w-2xl mx-auto mb-10">
                            Transforming your vision into reality with premium decorations, special effects, and seamless event management.
                        </p>

                        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                            <Button href="https://wa.me/919607334145" target="_blank" rel="noopener noreferrer">
                                Contact on WhatsApp
                            </Button>
                            <Button to="/services" variant="secondary">
                                Explore Services
                            </Button>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Services Preview */}
            <section className="py-24 bg-neutral-900 border-t border-white/5 relative">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, margin: "-100px" }}
                        variants={fadeIn}
                        className="text-center mb-16"
                    >
                        <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Premium Services</h2>
                        <div className="w-24 h-1 bg-[#D4AF37] mx-auto rounded-full mb-4"></div>
                        <p className="text-neutral-400 max-w-2xl mx-auto">From grand weddings to intimate setups, we provide top-tier services to make every moment magical.</p>
                    </motion.div>

                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, margin: "-50px" }}
                        variants={staggerContainer}
                        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
                    >
                        {services.map((service, index) => (
                            <motion.div
                                key={index}
                                variants={fadeIn}
                                whileHover={{ y: -10 }}
                                className="glass-panel p-8 rounded-2xl text-center group"
                            >
                                <div className="w-16 h-16 bg-white/5 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-[#D4AF37]/20 transition-colors">
                                    {service.icon}
                                </div>
                                <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                                <p className="text-neutral-400 text-sm">Professional and premium setups customized for you.</p>
                            </motion.div>
                        ))}
                    </motion.div>

                    <div className="text-center mt-12">
                        <Link to="/services" className="inline-flex items-center text-[#D4AF37] hover:text-yellow-400 font-medium transition-colors">
                            View All 20+ Services <ArrowRight className="ml-2" size={18} />
                        </Link>
                    </div>
                </div>
            </section>

            {/* Mini Gallery Section */}
            <section className="py-24 bg-neutral-950">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={fadeIn}
                        className="flex flex-col md:flex-row justify-between items-end mb-12"
                    >
                        <div>
                            <h2 className="text-3xl md:text-4xl font-bold mb-4">Moments Captured</h2>
                            <div className="w-24 h-1 bg-[#D4AF37] rounded-full"></div>
                        </div>
                        <Link to="/gallery" className="mt-4 md:mt-0 inline-flex items-center text-[#D4AF37] hover:text-yellow-400 font-medium transition-colors">
                            View Full Gallery <ArrowRight className="ml-2" size={18} />
                        </Link>
                    </motion.div>

                    {/* Simple Gallery Grid for Preview */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5 }}
                            className="md:col-span-2 h-80 rounded-2xl overflow-hidden relative group"
                        >
                            <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1511285560929-80b456fea0bc?q=80&w=2069')] bg-cover bg-center group-hover:scale-110 transition-transform duration-700" />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                                <h3 className="text-xl font-bold text-white">Grand Weddings</h3>
                            </div>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: 0.2 }}
                            className="h-80 rounded-2xl overflow-hidden relative group"
                        >
                            <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1492684223066-81342ee5ff30?q=80&w=2070')] bg-cover bg-center group-hover:scale-110 transition-transform duration-700" />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                                <h3 className="text-xl font-bold text-white">Theme Parties</h3>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Testimonials */}
            <section className="py-24 bg-neutral-900 border-t border-white/5 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-[40%] h-[40%] rounded-full bg-[#D4AF37]/5 blur-[120px]" />

                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={fadeIn}
                        className="text-center mb-16"
                    >
                        <h2 className="text-3xl md:text-4xl font-bold mb-4">Client Love</h2>
                        <div className="w-24 h-1 bg-[#D4AF37] mx-auto rounded-full mb-4"></div>
                    </motion.div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {[1, 2, 3].map((item) => (
                            <motion.div
                                key={item}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: item * 0.1 }}
                                className="glass-panel p-8 rounded-2xl"
                            >
                                <div className="flex text-[#D4AF37] mb-4">
                                    {[...Array(5)].map((_, i) => <Star key={i} size={18} fill="currentColor" />)}
                                </div>
                                <p className="text-neutral-300 italic mb-6">"Absolutely fantastic service! The SFX completely transformed our wedding entry. Highly recommended team in Wardha."</p>
                                <div className="flex items-center gap-4">
                                    <div className="w-12 h-12 rounded-full bg-neutral-800 flex items-center justify-center font-bold text-lg text-[#D4AF37]">
                                        C{item}
                                    </div>
                                    <div>
                                        <h4 className="font-semibold">Happy Client</h4>
                                        <p className="text-xs text-neutral-500">Wedding Event</p>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-24 relative overflow-hidden">
                <div className="absolute inset-0 bg-[#D4AF37] opacity-10" />
                <div className="max-w-4xl mx-auto px-4 relative z-10 text-center">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-4xl md:text-5xl font-bold mb-6"
                    >
                        Ready to Plan Your Next Big Event?
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-xl text-neutral-300 mb-10"
                    >
                        Let's discuss how we can bring your vision to life.
                    </motion.p>
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                    >
                        <Button href="https://wa.me/919607334145" target="_blank" rel="noopener noreferrer" className="mx-auto text-lg px-10 py-4">
                            Message us on WhatsApp
                        </Button>
                    </motion.div>
                </div>
            </section>
        </div>
    );
};

export default Home;
