
import Link from "next/link";
import React from 'react';

const DashBoardPage = () => {
  
    const stats = [
        { id: 1, title: 'Total Bookings', value: '1,250', change: '+12%', color: 'bg-pink-500' },
        { id: 2, title: 'Total Revenue', value: '$15,300', change: '+8%', color: 'bg-pink-600' },
        { id: 3, title: 'Active Users', value: '450', change: '+5%', color: 'bg-pink-400' },
        { id: 4, title: 'Growth', value: '23%', change: '+2%', color: 'bg-pink-300' },
    ];

    return (
        <div className="p-6 bg-gray-50 min-h-screen  ">
          
            <div className="mb-8">
                <h1 className="text-2xl font-bold text-gray-800">Welcome Back!</h1>
                <p className="text-gray-500">Manage your tours and travel statistics effectively.</p>
            </div>

           
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
                {stats.map((stat) => (
                    <div key={stat.id} className="bg-white p-6 rounded-xl shadow-sm border-l-4 border-pink-500 hover:shadow-md transition-all">
                        <div className="flex justify-between items-start mb-2">
                            <span className="text-xs font-bold uppercase tracking-wider text-gray-400">{stat.title}</span>
                            <span className="text-xs font-semibold text-green-500 px-2 py-1 bg-green-50 rounded-md">{stat.change}</span>
                        </div>
                        <p className="text-2xl font-extrabold text-gray-800">{stat.value}</p>
                    </div>
                ))}
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                
                <div className="lg:col-span-2 bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
                    <div className="p-5 border-b border-gray-100 flex justify-between items-center">
                        <h3 className="font-bold text-gray-700">Recent Tour Bookings</h3>
                        <button className="text-xs font-bold text-pink-500 hover:underline">View All</button>
                    </div>
                    <div className="p-5">
                        <table className="w-full text-left">
                            <thead>
                                <tr className="text-xs text-gray-400 uppercase">
                                    <th className="pb-3">Destination</th>
                                    <th className="pb-3">Status</th>
                                    <th className="pb-3">Price</th>
                                </tr>
                            </thead>
                            <tbody className="text-sm text-gray-600">
                                <tr className="border-b border-gray-50">
                                    <td className="py-3 font-medium">Sajek Valley, Rangamati</td>
                                    <td className="py-3"><span className="bg-pink-50 text-pink-600 px-2 py-1 rounded-md text-[10px] font-bold">Confirmed</span></td>
                                    <td className="py-3">$450</td>
                                </tr>
                                <tr className="border-b border-gray-50">
                                    <td className="py-3 font-medium">Cox's Bazar Beach</td>
                                    <td className="py-3"><span className="bg-pink-50 text-pink-600 px-2 py-1 rounded-md text-[10px] font-bold">Pending</span></td>
                                    <td className="py-3">$320</td>
                                </tr>
                                <tr>
                                    <td className="py-3 font-medium">Sundarbans Forest</td>
                                    <td className="py-3"><span className="bg-pink-50 text-pink-600 px-2 py-1 rounded-md text-[10px] font-bold">Confirmed</span></td>
                                    <td className="py-3">$580</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>

                
                <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                    <h3 className="font-bold text-gray-700 mb-6">Quick Actions</h3>
                    <div className="space-y-3">
                        <Link href="/tours" className="w-full block text-center bg-pink-500 hover:bg-pink-600 text-white py-3 rounded-lg font-bold text-sm transition-colors shadow-sm">
                            Add New Tour
                        </Link>
                    
                        <Link href="/dashboard/profile" className=" block text-center w-full bg-gray-800 hover:bg-black text-white py-3 rounded-lg font-bold text-sm transition-colors mt-4">
                            Update Profile
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DashBoardPage;