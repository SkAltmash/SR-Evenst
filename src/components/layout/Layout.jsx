import { Outlet } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';

const Layout = () => {
    return (
        <div className="flex flex-col min-h-screen bg-neutral-950 text-neutral-50 relative">
            <Navbar />
            <main className="flex-grow pt-[72px]">
                <Outlet />
            </main>
            <Footer />
        </div>
    );
};

export default Layout;
