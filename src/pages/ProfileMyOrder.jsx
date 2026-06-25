import { Link, useNavigate } from 'react-router-dom';
import HeadsetKuning from '../assets/heatsetBgKuning.png';
import { FiShoppingBag, FiHeart, FiMapPin, FiCreditCard, FiSettings, FiLogOut, FiCheckCircle, FiTruck, FiStar } from 'react-icons/fi';
import { useEffect, useState } from 'react';

function ProfileCard({ children }) {
    return (
        <article className="bg-white border border-gray-200 rounded-2xl p-6 flex flex-col gap-4 w-full shadow-sm">
            {children}
        </article>
    );
}

export default function ProfileMyOrder() {
    const navigate = useNavigate();

    const [currentUser, setCurrentUser] = useState(null);

    useEffect(() => {
        async function getLocal() {
            const storedUsers = localStorage.getItem('user');

            if (storedUsers) {
                try {
                    const usersArray = JSON.parse(storedUsers);

                    if (Array.isArray(usersArray)) {
                        const loggedInUser = usersArray.find(user => user.isLoggedIn === true);
                        if (loggedInUser) {
                            setCurrentUser(loggedInUser);
                        }
                    }
                } catch (error) {
                    console.error("Gagal membaca data user dari localStorage:", error);
                }
            }
        }
        getLocal()
    }, []);

    const getInitialName = () => {
        if (currentUser && currentUser.nama) {
            return currentUser.nama.charAt(0).toUpperCase();
        }
        return "?";
    };

    return (
        <main className="max-w-300 mx-auto px-4 py-8 flex flex-col md:flex-row gap-6 items-start">

            <section className="w-full md:w-65 flex flex-col gap-4">

                <article className="bg-white border border-gray-200 rounded-2xl p-6 flex flex-col items-center shadow-sm">
                    <div className="w-16 h-16 rounded-full bg-blue-100 text-[#1A73E8] flex items-center justify-center text-xl font-bold uppercase">
                        {getInitialName()}
                    </div>

                    <h2 className="text-base font-bold text-gray-900 mt-3 capitalize">
                        {currentUser ? currentUser.nama : "Memuat nama..."}
                    </h2>

                    <p className="text-xs text-gray-400 mt-0.5">
                        {currentUser ? currentUser.email : "memuat email..."}
                    </p>

                    <div className="w-full h-px bg-gray-100 my-4" />

                    <div className="flex w-full justify-around">
                        <div className="flex flex-col items-center">
                            <span className="text-sm font-bold text-gray-900">2</span>
                            <span className="text-[11px] text-gray-400 mt-0.5">Pesanan</span>
                        </div>
                        <div className="flex flex-col items-center">
                            <span className="text-sm font-bold text-gray-900">0</span>
                            <span className="text-[11px] text-gray-400 mt-0.5">Wishlist</span>
                        </div>
                    </div>
                </article>

                <article className="bg-white border border-gray-200 rounded-2xl p-3 shadow-sm flex flex-col gap-1">
                    <Link to="/profilemyorder" className="flex items-center gap-3 p-3 rounded-xl bg-blue-50 text-[#1A73E8] font-semibold transition" style={{ textDecoration: 'none' }}>
                        <FiShoppingBag className="w-4 h-4" />
                        <span className="text-xs flex-1">Pesanan Saya</span>
                        <span className="text-xs font-bold">&rsaquo;</span>
                    </Link>

                    <Link to="/profilewishlist" className="flex items-center gap-3 p-3 rounded-xl text-gray-500 hover:bg-gray-50 transition" style={{ textDecoration: 'none' }}>
                        <FiHeart className="w-4 h-4 text-gray-400" />
                        <span className="text-xs flex-1">Wishlist</span>
                    </Link>

                    <Link to="/profilealamat" className="flex items-center gap-3 p-3 rounded-xl text-gray-500 hover:bg-gray-50 transition" style={{ textDecoration: 'none' }}>
                        <FiMapPin className="w-4 h-4 text-gray-400" />
                        <span className="text-xs flex-1">Alamat Saya</span>
                    </Link>

                    <Link to="/checkout2" className="flex items-center gap-3 p-3 rounded-xl text-gray-500 hover:bg-gray-50 transition" style={{ textDecoration: 'none' }}>
                        <FiCreditCard className="w-4 h-4 text-gray-400" />
                        <span className="text-xs flex-1">Metode Pembayaran</span>
                    </Link>

                    <Link to="/profileedit" className="flex items-center gap-3 p-3 rounded-xl text-gray-500 hover:bg-gray-50 transition" style={{ textDecoration: 'none' }}>
                        <FiSettings className="w-4 h-4 text-gray-400" />
                        <span className="text-xs flex-1">Pengaturan Profil</span>
                    </Link>

                    <div className="w-full h-px bg-gray-100 my-1" />

                    <button onClick={() => navigate('/logout')} className="flex items-center gap-3 p-3 rounded-xl text-red-500 hover:bg-red-50 transition w-full text-left">
                        <FiLogOut className="w-4 h-4" />
                        <span className="text-xs font-semibold">Keluar</span>
                    </button>
                </article>
            </section>

            <section className="flex-1 w-full flex flex-col gap-4">
                <h1 className="text-xl font-bold text-gray-900 mb-2">
                    Pesanan Saya
                </h1>

                <div className="flex flex-col gap-4 w-full">
                    <ProfileCard>
                        <div className="flex justify-between items-start">
                            <div>
                                <h4 className="text-xs font-bold text-gray-900">#BM98765432</h4>
                                <p className="text-[11px] text-gray-400 mt-0.5">20 Mei 2026</p>
                            </div>
                            <div className="flex items-center gap-1 text-[10px] font-semibold text-[#00C950] bg-green-50 border border-green-100 px-2 py-0.5 rounded-full">
                                <FiCheckCircle className="w-3 h-3" />
                                Terkirim
                            </div>
                        </div>

                        <div className="flex items-center gap-3 py-2">
                            <div className="w-14 h-14 border-transparent p-1 overflow-hidden flex items-center justify-center">
                                <img src={HeadsetKuning} alt="Headphone" className="w-12 h-12 object-contain rounded-lg" />
                            </div>
                            <div className="flex flex-col">
                                <h4 className="text-xs font-semibold text-gray-800">
                                    Headphone Wireless Premium
                                </h4>
                                <p className="text-[11px] text-gray-400 mt-0.5">×1 · Rp 450.000</p>
                            </div>
                        </div>

                        <div className="border-t border-gray-100 pt-3 flex items-center justify-between">
                            <div className="flex items-center gap-1 text-xs font-medium text-gray-500">
                                Total: <span className="text-xs font-bold text-[#1A73E8]">Rp 450.000</span>
                            </div>

                            <div className="flex gap-2 h-8">
                                <button className="px-3 border border-gray-300 hover:bg-gray-50 text-gray-600 rounded-lg text-[11px] font-medium flex items-center justify-center transition">
                                    Lacak
                                </button>
                                <button className="px-3 bg-[#F97316] hover:bg-orange-600 text-white rounded-lg text-[11px] font-medium flex items-center justify-center gap-1 transition">
                                    <FiStar className="w-3 h-3" />
                                    Beri Ulasan
                                </button>
                                <button className="px-3 border border-gray-300 hover:bg-gray-50 text-gray-600 rounded-lg text-[11px] font-medium flex items-center justify-center transition">
                                    Beli Lagi
                                </button>
                            </div>
                        </div>
                    </ProfileCard>

                    <ProfileCard>
                        <div className="flex justify-between items-start">
                            <div>
                                <h4 className="text-xs font-bold text-gray-900">#BM87654321</h4>
                                <p className="text-[11px] text-gray-400 mt-0.5">26 Mei 2026</p>
                            </div>
                            <div className="flex items-center gap-1 text-[10px] font-semibold text-blue-500 bg-blue-50 border border-blue-100 px-2 py-0.5 rounded-full">
                                <FiTruck className="w-3 h-3" />
                                Dikirim
                            </div>
                        </div>

                        <div className="flex flex-col gap-3 py-1">
                            <div className="flex items-center gap-3">
                                <div className="w-12 h-12 bg-gray-50 border border-gray-100 p-1 flex items-center justify-center">
                                    <img src={HeadsetKuning} alt="bajuPutih" className="w-10 h-10 object-contain rounded-lg" />
                                </div>
                                <div className="flex flex-col">
                                    <h4 className="text-xs font-semibold text-gray-800">
                                        Kaos Polos Premium Cotton
                                    </h4>
                                    <p className="text-[11px] text-gray-400 mt-0.5">×2 · Rp 125.000</p>
                                </div>
                            </div>
                            <div className="flex items-center gap-3">
                                <div className="w-12 h-12 bg-gray-50 border border-gray-100 p-1 flex items-center justify-center">
                                    <img src={HeadsetKuning} alt="sepatuMerah" className="w-10 h-10 object-contain rounded-lg" />
                                </div>
                                <div className="flex flex-col">
                                    <h4 className="text-xs font-semibold text-gray-800">
                                        Sneakers Sport Runfast
                                    </h4>
                                    <p className="text-[11px] text-gray-400 mt-0.5">×1 · Rp 550.000</p>
                                </div>
                            </div>
                        </div>

                        <div className="border-t border-gray-100 pt-3 flex items-center justify-between">
                            <div className="flex items-center gap-1 text-xs font-medium text-gray-500">
                                Total: <span className="text-xs font-bold text-[#1A73E8]">Rp 800.000</span>
                            </div>

                            <div className="flex gap-2 h-8">
                                <button className="px-3 border border-gray-300 hover:bg-gray-50 text-gray-600 rounded-lg text-[11px] font-medium flex items-center justify-center transition">
                                    Lacak
                                </button>
                                <button className="px-3 border border-gray-300 hover:bg-gray-50 text-gray-600 rounded-lg text-[11px] font-medium flex items-center justify-center transition">
                                    Beli Lagi
                                </button>
                            </div>
                        </div>
                    </ProfileCard>
                </div>
            </section>
        </main>
    );
}