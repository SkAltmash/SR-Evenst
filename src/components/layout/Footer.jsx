import { Link } from 'react-router-dom';
import { MapPin, Phone, MessageCircle, Instagram, Facebook } from 'lucide-react';

const Footer = () => {
    return (
        <footer className="bg-neutral-950 border-t border-white/10 pt-16 pb-8">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">

                    <div>
                        <h3 className="text-2xl font-bold bg-gradient-to-r from-yellow-200 to-[#D4AF37] bg-clip-text text-transparent mb-4">
                            SR FX Event
                        </h3>
                        <p className="text-neutral-400 mb-6 max-w-sm">
                            Making your events memorable with premium wedding and event planning services in Wardha. Providing top-tier SFX and setups.
                        </p>
                        <div className="flex space-x-4">
                            <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-neutral-400 hover:bg-[#D4AF37] hover:text-neutral-950 transition-all">
                                <Instagram size={20} />
                            </a>
                            <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-neutral-400 hover:bg-[#D4AF37] hover:text-neutral-950 transition-all">
                                <Facebook size={20} />
                            </a>
                        </div>
                    </div>

                    <div>
                        <h4 className="text-lg font-semibold text-white mb-4">Quick Links</h4>
                        <ul className="space-y-3">
                            <li><Link to="/" className="text-neutral-400 hover:text-[#D4AF37] transition-colors">Home</Link></li>
                            <li><Link to="/services" className="text-neutral-400 hover:text-[#D4AF37] transition-colors">Services</Link></li>
                            <li><Link to="/gallery" className="text-neutral-400 hover:text-[#D4AF37] transition-colors">Gallery</Link></li>
                            <li><Link to="/contact" className="text-neutral-400 hover:text-[#D4AF37] transition-colors">Contact</Link></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="text-lg font-semibold text-white mb-4">Contact Info</h4>
                        <ul className="space-y-4">
                            <li className="flex items-start">
                                <MapPin className="text-[#D4AF37] mr-3 mt-1 shrink-0" size={20} />
                                <span className="text-neutral-400">Wardha, Maharashtra, India</span>
                            </li>
                            <li className="flex items-center">
                                <Phone className="text-[#D4AF37] mr-3 shrink-0" size={20} />
                                <span className="text-neutral-400">+91 9607334145</span>
                            </li>
                            <li className="flex items-center">
                                <MessageCircle className="text-[#D4AF37] mr-3 shrink-0" size={20} />
                                <a href="https://wa.me/919607334145" target="_blank" rel="noopener noreferrer" className="text-neutral-400 hover:text-[#D4AF37] transition-colors">
                                    WhatsApp Us
                                </a>
                            </li>
                        </ul>
                    </div>

                </div>

                <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-neutral-500">
                    <p>&copy; {new Date().getFullYear()} SR FX Event. All rights reserved.</p>
                    <p className="mt-2 md:mt-0">Designed & Developed with <span className="text-[#D4AF37]">♥</span></p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
