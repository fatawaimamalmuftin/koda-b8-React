import { Link, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import {
    MapPin,
    Search,
    Bell,
    User,
    Heart,
    ShoppingCart,
    Menu,
    X
} from 'lucide-react';
import Swal from 'sweetalert2';
import useGetLoginStatus from '../hook/useGetLoginStatus';
import useGetDataLocal from '../hook/useGetDataLocal';

export default function Navbar() {
    const navigate = useNavigate();
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const isLoggedIn = useGetLoginStatus();
    const user = useGetDataLocal('user');

    const handleNavigasi = (event) => {
        const pathTujuan = event.target.value;
        if (pathTujuan) {
            navigate(pathTujuan);
        }
    };

    const handleLogout = () => {
        localStorage.removeItem('isLoggedIn');

        Swal.fire({
            title: 'Berhasil Keluar!',
            text: 'Sampai jumpa kembali di BeliMudah 👋',
            icon: 'success',
            confirmButtonText: 'Oke',
            confirmButtonColor: '#1A73E8',
        }).then(() => {
            window.location.href = '/login';
        });
    };

    return (
        <>
            <header className="hidden md:flex justify-between items-center bg-[#4F39F6] w-full px-4 sm:px-8 md:px-16 lg:px-24 py-2">
                <div className="flex items-center gap-1">
                    <MapPin className="text-white" size={14} />
                    <span className="text-white text-xs">
                        Kirim ke: Jakarta Selatan
                    </span>
                </div>

                <div className="flex gap-6">
                    <div className="text-white text-xs">
                        🚀 Gratis ongkir di atas Rp 100.000
                    </div>
                    <div className="text-white text-xs">
                        📞 0800-1234-5678 (Gratis)
                    </div>
                </div>
            </header>

            <nav className="sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b border-gray-100 w-full px-4 sm:px-8 md:px-16 lg:px-24 py-3">
                <div className="flex items-center justify-between gap-4 w-full">

                    <div className="flex items-center gap-3">
                        <button
                            onClick={() => setIsMenuOpen(!isMenuOpen)}
                            className="block lg:hidden text-[#374151] focus:outline-none"
                        >
                            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
                        </button>

                        <Link to="/" className="flex items-center gap-2">
                            <div className="flex justify-center items-center w-8 h-8 bg-[#1A73E8] text-white rounded-xl font-bold text-sm">
                                B
                            </div>
                            <span className="hidden sm:block text-[#111827] font-bold text-base tracking-tight">
                                BeliMudah
                            </span>
                        </Link>
                    </div>

                    <div className="flex-1 max-w-xl mx-2 sm:mx-4">
                        <div className="w-full flex items-center relative">
                            <input
                                type="text"
                                className="w-full h-9 sm:h-10 pl-4 pr-10 border border-gray-300 rounded-full text-sm bg-gray-50 focus:bg-white focus:border-[#1A73E8] outline-none transition"
                                placeholder="Cari produk..."
                            />
                            <button className="absolute right-1 w-7 h-7 sm:w-8 sm:h-8 bg-[#1A73E8] rounded-full cursor-pointer flex justify-center items-center hover:bg-[#1557b5] transition">
                                <Search className="text-white" size={16} />
                            </button>
                        </div>
                    </div>

                    <div className="flex items-center gap-1 sm:gap-2">
                        <div className="w-9 h-9 flex justify-center items-center cursor-pointer hover:bg-gray-100 rounded-full transition text-[#374151]">
                            <Bell size={20} />
                        </div>

                        <Link to="/profilemyorder" className="w-9 h-9 flex justify-center items-center cursor-pointer hover:bg-gray-100 rounded-full transition text-[#374151]">
                            <User size={20} />
                        </Link>

                        <div className="hidden md:block px-1 font-medium text-sm text-[#374151]">
                            {isLoggedIn ? (
                                <div className="flex items-center gap-4">
                                    <span className="text-sm text-slate-700 font-medium">
                                        {user?.nama || user?.name || 'Pengguna'}
                                    </span>
                                    <div>
                                        <button
                                            onClick={handleLogout}
                                            className="px-2 py-1 bg-red-500 hover:bg-red-600 text-white font-normal rounded-xl text-sm transition"
                                        >
                                            Keluar
                                        </button>
                                    </div>
                                </div>
                            ) : (
                                <div className="flex gap-3">
                                    <button
                                        onClick={() => navigate('/login')}
                                        className="px-4 h-10 border border-slate-300 hover:bg-slate-50 text-slate-700 font-medium rounded-xl text-sm transition"
                                    >
                                        Masuk
                                    </button>
                                    <button
                                        onClick={() => navigate('/registrasi')}
                                        className="px-4 h-10 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-xl text-sm transition"
                                    >
                                        Daftar
                                    </button>
                                </div>
                            )}
                        </div>

                        <Link to="/profilewishlist" className="w-9 h-9 flex justify-center items-center cursor-pointer hover:bg-gray-100 rounded-full transition text-[#374151]">
                            <Heart size={20} />
                        </Link>

                        <Link to="/maincart" className="w-9 h-9 flex justify-center items-center cursor-pointer hover:bg-gray-100 rounded-full transition text-[#374151]">
                            <ShoppingCart size={20} />
                        </Link>
                    </div>
                </div>

                <div className="hidden lg:flex justify-start items-center gap-2 mt-4 pt-2 border-t border-gray-50 overflow-x-auto whitespace-nowrap scrollbar-none">
                    <div className="flex items-center gap-1 px-3 py-1.5 bg-gray-50 rounded-lg text-xs font-medium text-[#374151]">
                        <Menu size={14} />
                        <select name="halaman" id="halaman" onChange={handleNavigasi} defaultValue="" className="bg-transparent outline-none cursor-pointer font-sans">
                            <option value="" disabled>Semua Kategori</option>
                            <option value="/mainbrows">Main Brows</option>
                            <option value="/maindetail">Main Detail</option>
                            <option value="/maincart">Main Chart</option>
                            <option value="/checkout1">CheckOut step-1</option>
                            <option value="/checkout2">CheckOut step-2</option>
                            <option value="/checkout3">CheckOut step-3</option>
                            <option value="/checkoutsucces">CheckOut Finish</option>
                            <option value="/profilemyorder">Profile My Order</option>
                            <option value="/profilewishlist">Profile Wishlist</option>
                            <option value="/profilealamat">Profile Alamat</option>
                            <option value="/profileedit">Profile Edit</option>
                            <option value="/login">Login</option>
                            <option value="/registrasi">Registrasi</option>
                            <option value="/forgotpass">Forgot Password</option>
                            <option value="/dashboard">Dashboard</option>
                            <option value="/manajement">Manajement</option>
                        </select>
                    </div>

                    <Link to="/home" className="px-3 py-1.5 text-xs text-gray-600 hover:text-[#1A73E8] transition font-medium">💻 Elektronik</Link>
                    <Link to="/about" className="px-3 py-1.5 text-xs text-gray-600 hover:text-[#1A73E8] transition font-medium">👗 Fashion</Link>
                    <div className="px-3 py-1.5 text-xs text-gray-600 hover:text-[#1A73E8] cursor-pointer transition font-medium">🏠 Rumah & Dapur</div>
                    <div className="px-3 py-1.5 text-xs text-gray-600 hover:text-[#1A73E8] cursor-pointer transition font-medium">💄 Kecantikan</div>
                    <div className="px-3 py-1.5 text-xs text-gray-600 hover:text-[#1A73E8] cursor-pointer transition font-medium">⚽ Olahraga</div>
                    <div className="px-3 py-1.5 text-xs text-gray-600 hover:text-[#1A73E8] cursor-pointer transition font-medium">📚 Buku & Alat Tulis</div>
                    <div className="px-3 py-1.5 text-xs text-red-500 font-semibold cursor-pointer transition">🔥 Promo</div>
                </div>

                {isMenuOpen && (
                    <div className="lg:hidden absolute left-0 right-0 top-full bg-white border-b border-gray-200 shadow-xl px-4 py-4 flex flex-col gap-3 z-50 animate-in fade-in slide-in-from-top-5 duration-200">
                        <div className="flex items-center gap-2 p-2 bg-gray-50 rounded-xl">
                            <MapPin className="text-[#4F39F6]" size={16} />
                            <span className="text-xs text-gray-600">Kirim ke: Jakarta Selatan</span>
                        </div>

                        <div className="flex flex-col gap-1 border-b border-gray-100 pb-2">
                            <label htmlFor="halaman-mobile" className="text-[11px] font-bold text-gray-400 uppercase px-2 mb-1">Navigasi Halaman</label>
                            <select
                                id="halaman-mobile"
                                onChange={(e) => { handleNavigasi(e); setIsMenuOpen(false); }}
                                defaultValue=""
                                className="w-full p-2.5 bg-gray-50 border border-gray-200 rounded-xl text-sm text-gray-700 outline-none"
                            >
                                <option value="" disabled>Pilih Halaman Cepat</option>
                                <option value="/mainbrows">Main Brows</option>
                                <option value="/maindetail">Main Detail</option>
                                <option value="/maincart">Main Chart</option>
                                <option value="/checkout1">CheckOut step-1</option>
                                <option value="/checkout2">CheckOut step-2</option>
                                <option value="/checkout3">CheckOut step-3</option>
                                <option value="/checkoutsucces">CheckOut Finish</option>
                                <option value="/profilemyorder">Profile My Order</option>
                                <option value="/profilewishlist">Profile Wishlist</option>
                                <option value="/profilealamat">Profile Alamat</option>
                                <option value="/profileedit">Profile Edit</option>
                                <option value="/login">Login</option>
                                <option value="/registrasi">Registrasi</option>
                                <option value="/forgotpass">Forgot Password</option>
                                <option value="/dashboard">Dashboard</option>
                                <option value="/manajement">Manajement</option>
                            </select>
                        </div>

                        <span className="text-[11px] font-bold text-gray-400 uppercase px-2 mt-1">Kategori Produk</span>
                        <Link to="/home" onClick={() => setIsMenuOpen(false)} className="p-2 text-sm text-gray-700 hover:bg-gray-50 rounded-lg transition font-medium">💻 Elektronik</Link>
                        <Link to="/about" onClick={() => setIsMenuOpen(false)} className="p-2 text-sm text-gray-700 hover:bg-gray-50 rounded-lg transition font-medium">👗 Fashion</Link>
                        <div className="p-2 text-sm text-gray-700 hover:bg-gray-50 rounded-lg cursor-pointer transition font-medium">🏠 Rumah & Dapur</div>
                        <div className="p-2 text-sm text-gray-700 hover:bg-gray-50 rounded-lg cursor-pointer transition font-medium">💄 Kecantikan</div>
                        <div className="p-2 text-sm text-gray-700 hover:bg-gray-50 rounded-lg cursor-pointer transition font-medium">⚽ Olahraga</div>
                        <div className="p-2 text-sm text-gray-700 hover:bg-gray-50 rounded-lg cursor-pointer transition font-medium">📚 Buku & Alat Tulis</div>
                        <div className="p-2 text-sm text-red-500 font-bold hover:bg-red-50 rounded-lg cursor-pointer transition">🔥 Promo</div>
                    </div>
                )}
            </nav>
        </>
    );
}