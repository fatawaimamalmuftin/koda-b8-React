import { Link, useNavigate } from 'react-router-dom';
import {
    FiShoppingBag,
    FiHeart,
    FiMapPin,
    FiCreditCard,
    FiSettings,
    FiLogOut,
    FiPlus,
    FiEdit,
    FiTrash2
} from 'react-icons/fi';
import { useEffect, useState } from 'react';

export default function ProfileAlamat() {
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
        <main className="max-w-300 mx-auto px-4 py-8 flex flex-col md:flex-row gap-6 items-start bg-gray-50 min-h-screen">

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
                    <Link to="/profilemyorder" className="flex items-center gap-3 p-3 rounded-xl text-gray-500 hover:bg-gray-50 transition" style={{ textDecoration: 'none' }}>
                        <FiShoppingBag className="w-4 h-4" />
                        <span className="text-xs flex-1">Pesanan Saya</span>
                    </Link>

                    <Link to="/profilewishlist" className="flex items-center gap-3 p-3 rounded-xl text-gray-500 hover:bg-gray-50 transition" style={{ textDecoration: 'none' }}>
                        <FiHeart className="w-4 h-4 text-gray-400" />
                        <span className="text-xs flex-1">Wishlist</span>
                    </Link>

                    <Link to="/profilealamat" className="flex items-center gap-3 p-3 rounded-xl bg-blue-50 text-[#1A73E8] font-semibold transition" style={{ textDecoration: 'none' }}>
                        <FiMapPin className="w-4 h-4 text-blue-400" />
                        <span className="text-xs flex-1">Alamat Saya</span>
                        <span className="text-xs font-bold">&rsaquo;</span>
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

                <div className="flex justify-between items-center mb-2">
                    <h1 className="text-xl font-bold text-gray-900">Alamat Saya</h1>
                    <button className="flex items-center gap-1.5 bg-[#1A73E8] hover:bg-blue-700 text-white px-4 py-2 rounded-xl text-xs font-semibold shadow-sm transition">
                        <FiPlus className="w-4 h-4" />
                        Tambah Alamat
                    </button>
                </div>

                <div className="flex flex-col gap-4 w-full">

                    <article className="w-full bg-white border border-gray-200 rounded-2xl p-5 flex flex-col gap-2 shadow-sm relative">
                        <div className="flex items-center justify-between">
                            <div className="flex items-center gap-2">
                                <h3 className="font-bold text-gray-900 text-sm">Rumah (Utama)</h3>
                                <span className="bg-blue-100 text-[#1A73E8] text-[10px] px-2.5 py-0.5 rounded-full font-bold">
                                    Utama
                                </span>
                            </div>

                            <div className="flex items-center gap-3 text-gray-400">
                                <button className="hover:text-gray-600 transition-colors" title="Ubah Alamat">
                                    <FiEdit className="w-4 h-4" />
                                </button>
                                <button className="hover:text-red-500 transition-colors" title="Hapus Alamat">
                                    <FiTrash2 className="w-4 h-4" />
                                </button>
                            </div>
                        </div>

                        <p className="text-sm font-semibold text-gray-800">
                            Budi Santoso <span className="text-gray-300 font-normal mx-1">•</span> 0812-3456-7890
                        </p>

                        <div className="text-xs text-gray-500 leading-relaxed max-w-xl">
                            Jl. Kebon Jeruk No. 15, RT.003/RW.002<br />
                            Jakarta Barat, DKI Jakarta 11530
                        </div>
                    </article>

                    <article className="w-full bg-white border border-gray-200 rounded-2xl p-5 flex flex-col gap-2 shadow-sm relative">
                        <div className="flex items-center justify-between">
                            <div className="flex items-center gap-2">
                                <h3 className="font-bold text-gray-900 text-sm">Kantor</h3>
                            </div>

                            <div className="flex items-center gap-3 text-gray-400">
                                <button className="hover:text-gray-600 transition-colors" title="Ubah Alamat">
                                    <FiEdit className="w-4 h-4" />
                                </button>
                                <button className="hover:text-red-500 transition-colors" title="Hapus Alamat">
                                    <FiTrash2 className="w-4 h-4" />
                                </button>
                            </div>
                        </div>

                        <p className="text-sm font-semibold text-gray-800">
                            Budi Santoso <span className="text-gray-300 font-normal mx-1">•</span> 0812-3456-7890
                        </p>

                        <div className="text-xs text-gray-500 leading-relaxed max-w-xl">
                            Jl. Sudirman Kav. 52-53<br />
                            Jakarta Selatan, DKI Jakarta 12190
                        </div>

                        <div className="pt-2 border-t border-gray-50 mt-1">
                            <button className="text-xs font-bold text-[#1A73E8] hover:text-blue-800 transition-colors">
                                Jadikan Alamat Utama
                            </button>
                        </div>
                    </article>

                </div>

            </section>
        </main>
    );
}