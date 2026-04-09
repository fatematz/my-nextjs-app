import React from 'react';

const ProfilePage = () => {
    return (
        <div className="p-6 bg-gray-50 min-h-screen">
            <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden mb-6">
                <div className="h-32 bg-gradient-to-r from-pink-400 to-pink-600"></div>
                <div className="px-8 pb-8">
                    <div className="relative flex justify-between items-end -mt-12">
                        <div className="p-1 bg-white rounded-2xl shadow-sm">
                            <div className="w-32 h-32 bg-gray-100 rounded-xl flex items-center justify-center border-4 border-white overflow-hidden">
                                <div className="w-full h-full flex flex-col items-center justify-center bg-gray-200 text-gray-400">
                                    <div className="w-10 h-10 bg-gray-400 rounded-full mb-1"></div>
                                    <div className="w-16 h-8 bg-gray-400 rounded-t-full"></div>
                                </div>
                            </div>
                        </div>
                        <div className="flex gap-3 mb-2">
                            <button className="px-6 py-2 bg-pink-500 hover:bg-pink-600 text-white rounded-lg font-bold text-sm transition-all shadow-sm">
                                Edit Profile
                            </button>
                        </div>
                    </div>
                    
                    <div className="mt-6">
                        <h1 className="text-2xl font-extrabold text-gray-800">Elena Vance</h1>
                        <p className="text-pink-600 font-semibold">Senior Travel Consultant</p>
                        <p className="mt-3 text-gray-500 max-w-2xl text-sm leading-relaxed">
                            Dedicated to crafting unique travel experiences and managing premium tour packages. 
                            Specializing in European destinations and luxury hospitality.
                        </p>
                    </div>
                </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                <div className="lg:col-span-1 space-y-6">
                    <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
                        <h3 className="font-bold text-gray-800 mb-4 border-b pb-2">Information</h3>
                        <div className="space-y-4">
                            <div>
                                <p className="text-xs text-gray-400 uppercase font-bold tracking-wider">Email</p>
                                <p className="text-sm text-gray-700 font-medium">elena.vance@example.com</p>
                            </div>
                            <div>
                                <p className="text-xs text-gray-400 uppercase font-bold tracking-wider">Phone</p>
                                <p className="text-sm text-gray-700 font-medium">+44 20 7946 0958</p>
                            </div>
                            <div>
                                <p className="text-xs text-gray-400 uppercase font-bold tracking-wider">Location</p>
                                <p className="text-sm text-gray-700 font-medium">London, United Kingdom</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="lg:col-span-2 space-y-6">
                    <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
                        <h3 className="font-bold text-gray-800 mb-4 border-b pb-2">My Stats</h3>
                        <div className="grid grid-cols-3 gap-4 text-center">
                            <div className="p-4 bg-pink-50 rounded-xl">
                                <p className="text-xl font-bold text-pink-600">24</p>
                                <p className="text-xs text-gray-500 font-medium">Active Tours</p>
                            </div>
                            <div className="p-4 bg-pink-50 rounded-xl">
                                <p className="text-xl font-bold text-pink-600">5.0</p>
                                <p className="text-xs text-gray-500 font-medium">Rating</p>
                            </div>
                            <div className="p-4 bg-pink-50 rounded-xl">
                                <p className="text-xl font-bold text-pink-600">350+</p>
                                <p className="text-xs text-gray-500 font-medium">Travelers</p>
                            </div>
                        </div>
                    </div>

                    <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
                        <h3 className="font-bold text-gray-800 mb-4 border-b pb-2">Settings & Privacy</h3>
                        <div className="space-y-3">
                            <button className="w-full text-left px-4 py-3 rounded-lg hover:bg-gray-50 text-sm font-medium text-gray-600 transition-colors">
                                Change Password
                            </button>
                            <button className="w-full text-left px-4 py-3 rounded-lg hover:bg-gray-50 text-sm font-medium text-gray-600 transition-colors">
                                Notification Preferences
                            </button>
                            <button className="w-full text-left px-4 py-3 rounded-lg hover:bg-pink-50 text-sm font-bold text-pink-600 transition-colors">
                                Log Out
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProfilePage;