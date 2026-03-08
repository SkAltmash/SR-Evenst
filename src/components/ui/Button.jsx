import { motion } from 'framer-motion';
import { cn } from '../../lib/utils';
import { Link } from 'react-router-dom';

export const Button = ({
    children,
    variant = 'primary',
    className,
    as = 'button',
    href,
    to,
    ...props
}) => {
    const baseStyle = "px-8 py-3 rounded-full font-semibold transition-all flex items-center justify-center gap-2";

    const variants = {
        primary: "bg-[#D4AF37] text-neutral-950 hover:bg-yellow-500 shadow-[0_0_15px_rgba(212,175,55,0.3)] hover:shadow-[0_0_20px_rgba(212,175,55,0.6)]",
        secondary: "bg-transparent border-2 border-[#D4AF37] text-[#D4AF37] hover:bg-[#D4AF37]/10 shadow-[0_0_10px_rgba(212,175,55,0.1)]",
    };

    const Component = to ? Link : (href ? motion.a : motion[as] || motion.button);

    const motionProps = to ? {} : {
        whileHover: { scale: 1.05 },
        whileTap: { scale: 0.95 }
    };

    return (
        <Component
            href={href}
            to={to}
            className={cn(baseStyle, variants[variant], className)}
            {...motionProps}
            {...props}
        >
            {to ? (
                <motion.div
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="w-full h-full flex items-center justify-center gap-2"
                >
                    {children}
                </motion.div>
            ) : children}
        </Component>
    );
};
