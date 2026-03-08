import { motion } from 'framer-motion';

const Gallery = () => {
    const images = [
        { src: 'https://images.unsplash.com/photo-1511285560929-80b456fea0bc?q=80&w=2069', title: 'Grand Weddings', col: 'md:col-span-2', row: 'md:row-span-2' },
        { src: 'https://images.unsplash.com/photo-1492684223066-81342ee5ff30?q=80&w=2070', title: 'Theme Parties', col: 'md:col-span-1', row: 'md:row-span-1' },
        { src: 'https://images.unsplash.com/photo-1533174000220-db98126b96e5?q=80&w=2070', title: 'Special Effects', col: 'md:col-span-1', row: 'md:row-span-1' },
        { src: 'https://images.unsplash.com/photo-1511795409834-ef04bbd61622?q=80&w=2069', title: 'Stage Setup', col: 'md:col-span-1', row: 'md:row-span-2' },
        { src: 'https://images.unsplash.com/photo-1519225421980-715cb0215aed?q=80&w=2070', title: 'Decorations', col: 'md:col-span-2', row: 'md:row-span-1' },
        { src: 'https://images.unsplash.com/photo-1478147427282-58a87a120781?q=80&w=2070', title: 'DJ Events', col: 'md:col-span-1', row: 'md:row-span-1' },
        { src: 'https://images.unsplash.com/photo-1520854221256-17451cc331bf?q=80&w=2070', title: 'Baby Showers', col: 'md:col-span-1', row: 'md:row-span-1' },
        { src: 'https://images.unsplash.com/photo-1530103862676-de8892bf30bb?q=80&w=2070', title: 'Birthday Parties', col: 'md:col-span-1', row: 'md:row-span-1' },
    ];

    return (
        <div className="min-h-[90vh] py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full">
            <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="text-center mb-16"
            >
                <span className="text-[#D4AF37] tracking-widest uppercase text-sm font-semibold mb-2 block">
                    Portfolio
                </span>
                <h1 className="text-4xl md:text-5xl font-bold mb-6">Event Gallery</h1>
                <div className="w-24 h-1 bg-[#D4AF37] mx-auto rounded-full mb-6"></div>
                <p className="text-neutral-400 max-w-2xl mx-auto text-lg">
                    Explore our past events and get inspired for your next big celebration.
                </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-4 md:grid-rows-4 gap-4 auto-rows-[250px]">
                {images.map((img, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                        className={`relative rounded-2xl overflow-hidden group cursor-pointer ${img.col} ${img.row} min-h-[250px]`}
                    >
                        <div
                            className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                            style={{ backgroundImage: `url(${img.src})` }}
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                            <h3 className="text-xl font-bold text-white translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                                {img.title}
                            </h3>
                        </div>
                    </motion.div>
                ))}
            </div>
        </div>
    );
};

export default Gallery;
