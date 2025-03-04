import Sidebar from "./Sidebar";
import MobileNav from "./MobNav";
import Header from "./Header";
import { Outlet } from "react-router-dom";

export const Layout = () => {

    return (

        <div className="flex min-h-screen bg-background">

            <div className="h-screen sticky top-0 overflow-hidden">

                <Sidebar />

            </div>

            <div className="flex-1 flex flex-col">

                <Header />

                {/* Page Content */}
                <main className="flex-1 pb-20 md:pb-6 transition-all duration-300 ease-in-out">

                    <div className="mx-auto w-full px-0 sm:px-4 py-0 sm:py-6">
                        <Outlet />
                    </div>

                </main>

                <MobileNav />

            </div>

        </div>
    );
};

export default Layout;