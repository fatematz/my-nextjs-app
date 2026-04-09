"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const DashBoardLayout = ({ children }) => {
    const pathname = usePathname();

    // রিইউজেবল স্টাইল ক্লাসের জন্য ফাংশন বা ভেরিয়েবল
    const getLinkStyle = (path) => {
        const isActive = pathname === path;
        
        // isActive হলে পিঙ্ক ব্যাকগ্রাউন্ড, না হলে সাধারণ গ্রে হোভার ইফেক্ট
        return isActive 
            ? "bg-pink-500 text-white font-bold px-4 py-2 rounded-lg" 
            : "text-gray-600 hover:bg-gray-100 px-4 py-2 rounded-lg transition-all";
    };

    return (
        <div>
            <div className="drawer lg:drawer-open">
                <input id="my-drawer-3" type="checkbox" className="drawer-toggle" />
                
                <div className="drawer-content flex flex-col items-center justify-center p-6">
                    {children}
                    <label htmlFor="my-drawer-3" className="btn drawer-button lg:hidden mt-4">
                        Open drawer
                    </label>
                </div>

                <div className="drawer-side">
                    <label htmlFor="my-drawer-3" aria-label="close sidebar" className="drawer-overlay"></label>
                    <ul className="menu bg-base-200 min-h-full w-80 p-4 space-y-3">
                        <h2 className="text-xl font-bold px-4 mb-4 text-gray-800">Admin Panel</h2>
                        
                        {/* Dashboard Link */}
                        <li>
                            <Link href="/dashboard" className={getLinkStyle("/dashboard")}>
                                Dashboard
                            </Link>
                        </li>

                        {/* Profile Link */}
                        <li>
                            <Link href="/dashboard/profile" className={getLinkStyle("/dashboard/profile")}>
                                Profile
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default DashBoardLayout;