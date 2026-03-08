import { motion } from 'framer-motion';
import { MapPin, Phone, MessageCircle, Mail, Send } from 'lucide-react';
import { Button } from '../components/ui/Button';

const Contact = () => {
    return (
        <div className="min-h-[90vh] py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full">
            <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="text-center mb-16"
            >
                <span className="text-[#D4AF37] tracking-widest uppercase text-sm font-semibold mb-2 block">
                    Get in Touch
                </span>
                <h1 className="text-4xl md:text-5xl font-bold mb-6">Contact Us</h1>
                <div className="w-24 h-1 bg-[#D4AF37] mx-auto rounded-full mb-6"></div>
                <p className="text-neutral-400 max-w-2xl mx-auto text-lg">
                    We are here to make your event perfect. Reach out to us for bookings and inquiries.
                </p>
            </motion.div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                {/* Contact Info */}
                <motion.div
                    initial={{ opacity: 0, x: -30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="h-full flex flex-col"
                >
                    <div className="glass-panel p-8 md:p-10 rounded-2xl flex-grow border border-white/5 relative overflow-hidden">
                        <div className="absolute top-0 right-0 w-64 h-64 bg-[#D4AF37]/5 rounded-full blur-[80px] -mr-32 -mt-32 pointer-events-none" />

                        <h2 className="text-3xl font-bold mb-8 text-white relative z-10">Contact Information</h2>

                        <div className="space-y-8 relative z-10">
                            <div className="flex items-start">
                                <div className="w-14 h-14 rounded-full bg-neutral-900 border border-white/5 flex items-center justify-center mr-6 text-[#D4AF37] shrink-0 transform transition-transform hover:scale-110">
                                    <Phone size={24} />
                                </div>
                                <div>
                                    <h3 className="text-lg font-semibold text-white mb-1">Phone Number</h3>
                                    <p className="text-neutral-400 text-lg">+91 9607334145</p>
                                </div>
                            </div>

                            <div className="flex items-start">
                                <div className="w-14 h-14 rounded-full bg-neutral-900 border border-white/5 flex items-center justify-center mr-6 text-[#D4AF37] shrink-0 transform transition-transform hover:scale-110">
                                    <MessageCircle size={24} />
                                </div>
                                <div>
                                    <h3 className="text-lg font-semibold text-white mb-1">WhatsApp</h3>
                                    <p className="text-neutral-400 mb-4">Available for quick chat and bookings</p>
                                    <Button href="https://wa.me/919607334145" target="_blank" rel="noopener noreferrer" className="py-2.5 px-6 text-sm">
                                        Chat on WhatsApp
                                    </Button>
                                </div>
                            </div>

                            <div className="flex items-start">
                                <div className="w-14 h-14 rounded-full bg-neutral-900 border border-white/5 flex items-center justify-center mr-6 text-[#D4AF37] shrink-0 transform transition-transform hover:scale-110">
                                    <MapPin size={24} />
                                </div>
                                <div>
                                    <h3 className="text-lg font-semibold text-white mb-1">Location</h3>
                                    <p className="text-neutral-400 text-lg">Wardha, Maharashtra, India</p>
                                </div>
                            </div>

                            <div className="flex items-start">
                                <div className="w-14 h-14 rounded-full bg-neutral-900 border border-white/5 flex items-center justify-center mr-6 text-[#D4AF37] shrink-0 transform transition-transform hover:scale-110">
                                    <Mail size={24} />
                                </div>
                                <div>
                                    <h3 className="text-lg font-semibold text-white mb-1">Email</h3>
                                    <p className="text-neutral-400 text-lg">info@srfxevent.com</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </motion.div>

                {/* Form and Map flex container */}
                <motion.div
                    initial={{ opacity: 0, x: 30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                    className="flex flex-col gap-8 h-full"
                >
                    {/* Form */}
                    <form className="glass-panel p-8 md:p-10 rounded-2xl flex flex-col gap-6 flex-grow border border-white/5" onSubmit={(e) => e.preventDefault()}>
                        <h2 className="text-2xl font-bold text-white mb-2">Send us a Message</h2>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                            <div className="space-y-2">
                                <label className="text-sm font-medium text-neutral-400">Your Name</label>
                                <input type="text" className="w-full bg-neutral-900/50 border border-white/10 rounded-xl px-4 py-3.5 text-white focus:outline-none focus:border-[#D4AF37] focus:bg-neutral-900 transition-colors" placeholder="John Doe" />
                            </div>
                            <div className="space-y-2">
                                <label className="text-sm font-medium text-neutral-400">Phone Number</label>
                                <input type="tel" className="w-full bg-neutral-900/50 border border-white/10 rounded-xl px-4 py-3.5 text-white focus:outline-none focus:border-[#D4AF37] focus:bg-neutral-900 transition-colors" placeholder="+91 0000000000" />
                            </div>
                        </div>
                        <div className="space-y-2">
                            <label className="text-sm font-medium text-neutral-400">Event Type</label>
                            <select className="w-full bg-neutral-900/50 border border-white/10 rounded-xl px-4 py-3.5 text-white focus:outline-none focus:border-[#D4AF37] focus:bg-neutral-900 transition-colors appearance-none">
                                <option value="wedding" className="bg-neutral-900 text-white">Wedding Special Entry</option>
                                <option value="birthday" className="bg-neutral-900 text-white">Birthday / Theme Party</option>
                                <option value="corporate" className="bg-neutral-900 text-white">Haldi Mehendi Setup</option>
                                <option value="other" className="bg-neutral-900 text-white">DJ Sound System / Other</option>
                            </select>
                        </div>
                        <div className="space-y-2">
                            <label className="text-sm font-medium text-neutral-400">Message</label>
                            <textarea rows="4" className="w-full bg-neutral-900/50 border border-white/10 rounded-xl px-4 py-3.5 text-white focus:outline-none focus:border-[#D4AF37] focus:bg-neutral-900 transition-colors resize-none" placeholder="Tell us about your event details and dates..."></textarea>
                        </div>
                        <Button className="w-full py-4 mt-2">
                            <Send size={18} /> Send Inquiry
                        </Button>
                    </form>

                    {/* Map Placeholder */}
                    <div className="glass-panel p-2 rounded-2xl h-[280px] shrink-0 relative overflow-hidden group border border-white/5">
                        <div className="absolute inset-0 bg-neutral-900 flex flex-col items-center justify-center text-neutral-400 m-2 rounded-xl border border-white/5">
                            <MapPin size={48} className="text-[#D4AF37] mb-4 opacity-70" />
                            <p className="font-medium text-lg text-white mb-1">Wardha, Maharashtra</p>
                            <p className="text-sm text-neutral-500">Interactive Map View</p>
                            <div className="absolute inset-0 bg-black/60 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center m-2 rounded-xl">
                                <Button as="a" href="https://maps.google.com/?q=Wardha,Maharashtra,India" target="_blank" variant="secondary" className="bg-neutral-950/80 max-w-[200px]">
                                    Open Maps
                                </Button>
                            </div>
                        </div>
                    </div>
                </motion.div>

            </div>
        </div>
    );
};

export default Contact;
