import { Link, useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import {
    MapPin,
    Search,
    Bell,
    Heart,
    ShoppingCart,
    Menu,
    X,
    LogOut,
    ChevronDown
} from 'lucide-react';
import Swal from 'sweetalert2';

export default function Navbar() {
    const navigate = useNavigate();
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [userList, setUserList] = useState([]);

    useEffect(() => {
        async function getData() {
            const savedData = localStorage.getItem('user');
            if (savedData) {
                try {
                    const parsedData = JSON.parse(savedData);
                    if (Array.isArray(parsedData)) {
                        setUserList(parsedData);
                    }
                } catch (error) {
                    console.error("Gagal membaca data user dari localStorage:", error);
                }
            }
        }
        getData();
    }, []);

    const activeUser = userList.find(u => u.isLoggedIn === true);
    const isLoggedIn = !!activeUser;

    const handleNavigasi = (event) => {
        const pathTujuan = event.target.value;
        if (pathTujuan) {
            navigate(pathTujuan);
            setIsMenuOpen(false);
        }
    };

    const handleLogout = () => {
        Swal.fire({
            title: "Apakah kamu yakin?",
            text: "Kamu akan keluar dari akun saat ini!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#1A73E8",
            cancelButtonColor: "#d33",
            confirmButtonText: "Ya, Keluar!",
            cancelButtonText: "Batal"
        }).then((result) => {
            if (result.isConfirmed) {
                const updatedUserList = userList.map(user => {
                    if (user.isLoggedIn === true) {
                        return { ...user, isLoggedIn: false };
                    }
                    return user;
                });

                setUserList(updatedUserList);
                localStorage.setItem('user', JSON.stringify(updatedUserList));

                Swal.fire({
                    title: "Berhasil!",
                    text: "Kamu telah keluar dari akun 👋",
                    icon: "success",
                    confirmButtonColor: "#1A73E8"
                }).then(() => {
                    setIsMenuOpen(false);
                    navigate('/');
                });
            }
        });
    };

    return (
        <>
            <div className="w-full font-sans antialiased  shadow-sm transition-all duration-300">
                <header className="hidden md:flex justify-between items-center bg-linear-to-r from-[#4F39F6] to-[#3b26df] w-full px-6 lg:px-16 py-2">
                    <div className="flex items-center gap-1.5 opacity-90 hover:opacity-100 transition cursor-pointer">
                        <MapPin className="text-white" size={13} />
                        <span className="text-white text-xs font-medium">
                            Kirim ke: <span className="font-bold">Jakarta Selatan</span>
                        </span>
                    </div>

                    <div className="flex gap-6 items-center">
                        <div className="text-white text-xs font-medium bg-white/10 px-2.5 py-0.5 rounded-full backdrop-blur-sm">
                            🚀 Gratis ongkir di atas Rp 100.000
                        </div>
                        <div className="text-white/90 hover:text-white text-xs font-medium transition cursor-pointer">
                            📞 0813-6443-1365 (Gratis)
                        </div>
                    </div>
                </header>
            </div>

            <nav className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-gray-100 w-full px-4 md:px-16 py-3.5 transition-all duration-200">
                <div className="flex items-center justify-between gap-3 w-full">

                    <div className="flex items-center gap-2 shrink-0">
                        <button
                            onClick={() => setIsMenuOpen(!isMenuOpen)}
                            className="block lg:hidden text-gray-700 hover:bg-gray-100 p-2 rounded-xl transition-all active:scale-95"
                        >
                            {isMenuOpen ? <X size={22} /> : <Menu size={22} />}
                        </button>

                        <Link to="/" className="flex items-center gap-2.5 hover:opacity-90 transition group">
                            <div className="flex justify-center items-center w-9 h-9 bg-linear-to-br from-[#1A73E8] to-[#1557b5] text-white rounded-xl font-black text-base shadow-md shadow-blue-500/20 group-hover:scale-105 transition-transform duration-200">
                                B
                            </div>
                            <span className="hidden sm:block text-gray-900 font-extrabold text-lg tracking-tight">
                                BeliMudah
                            </span>
                        </Link>
                    </div>

                    <div className="flex-1 max-w-xl mx-1 sm:mx-6">
                        <div className="w-full flex items-center relative group">
                            <input
                                type="text"
                                className="w-full h-10 pl-5 pr-11 border border-gray-200 rounded-full text-xs sm:text-sm bg-gray-50/50 text-gray-800 placeholder-gray-400 focus:bg-white focus:border-[#1A73E8] focus:ring-4 focus:ring-blue-500/10 outline-none transition-all duration-200"
                                placeholder="Cari produk impianmu di sini..."
                            />
                            <button className="absolute right-1.5 w-7.5 h-7.5 sm:w-8 sm:h-8 bg-[#1A73E8] rounded-full cursor-pointer flex justify-center items-center hover:bg-[#1557b5] shadow-sm active:scale-95 transition-all duration-200">
                                <Search className="text-white" size={14} />
                            </button>
                        </div>
                    </div>

                    <div className="flex items-center gap-1 sm:gap-1.5 shrink-0">
                        <div className="relative w-9 h-9 flex justify-center items-center cursor-pointer text-gray-600 hover:text-gray-900 hover:bg-gray-50 rounded-full transition-all duration-200 active:scale-95">
                            <Bell size={19} />
                            <span className="absolute top-1.5 right-1.5 w-2 h-2 bg-red-500 rounded-full border-2 border-white"></span>
                        </div>

                        <Link to="/profilewishlist" className="w-9 h-9 flex justify-center items-center cursor-pointer text-gray-600 hover:text-red-500 hover:bg-red-50 rounded-full transition-all duration-200 active:scale-95">
                            <Heart size={19} />
                        </Link>

                        <Link to="/maincart" className="relative w-9 h-9 flex justify-center items-center cursor-pointer text-gray-600 hover:text-blue-600 hover:bg-blue-50 rounded-full transition-all duration-200 active:scale-95">
                            <ShoppingCart size={19} />
                        </Link>

                        <div className="hidden lg:block pl-2 border-l border-gray-200 font-medium text-sm text-gray-700">
                            {isLoggedIn ? (
                                <div className="flex items-center gap-3">
                                    <Link to="/profilemyorder" className="text-sm text-gray-700 font-semibold max-w-27 truncate">
                                        {activeUser?.nama}
                                    </Link>
                                    <button
                                        onClick={handleLogout}
                                        className="px-3.5 py-1.5 bg-rose-500 hover:bg-rose-600 text-white font-medium rounded-xl text-xs shadow-sm shadow-rose-500/10 active:scale-95 transition-all duration-200"
                                    >
                                        Keluar
                                    </button>
                                </div>
                            ) : (
                                <div className="flex gap-2">
                                    <button
                                        onClick={() => navigate('/login')}
                                        className="px-4 py-1.5 border border-gray-200 hover:border-gray-300 hover:bg-gray-50 text-gray-700 font-semibold rounded-xl text-xs active:scale-95 transition-all duration-200"
                                    >
                                        Masuk
                                    </button>
                                    <button
                                        onClick={() => navigate('/registrasi')}
                                        className="px-4 py-1.5 bg-[#1A73E8] hover:bg-[#1557b5] text-white font-semibold rounded-xl text-xs shadow-sm shadow-blue-500/10 active:scale-95 transition-all duration-200"
                                    >
                                        Daftar
                                    </button>
                                </div>
                            )}
                        </div>
                    </div>
                </div>

                <div className="hidden lg:flex justify-start items-center gap-1.5 mt-3 pt-2.5 border-t border-gray-100 overflow-x-auto whitespace-nowrap scrollbar-none">
                    <div className="flex items-center gap-1.5 px-3 py-1.5 bg-gray-50 border border-gray-100 rounded-xl text-xs font-semibold text-gray-700 hover:bg-gray-100 transition relative">
                        <Menu size={13} />
                        <select name="halaman" id="halaman" onChange={handleNavigasi} defaultValue="" className="bg-transparent pr-4 outline-none cursor-pointer font-sans appearance-none">
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
                        <ChevronDown size={12} className="absolute right-2.5 pointer-events-none text-gray-500" />
                    </div>

                    <div className="px-3 py-1.5 text-xs text-gray-600 hover:text-[#1A73E8] hover:bg-blue-50/50 rounded-lg cursor-pointer transition font-semibold">💻 Elektronik</div>
                    <div className="px-3 py-1.5 text-xs text-gray-600 hover:text-[#1A73E8] hover:bg-blue-50/50 rounded-lg cursor-pointer transition font-semibold">👗 Fashion</div>
                    <div className="px-3 py-1.5 text-xs text-gray-600 hover:text-[#1A73E8] hover:bg-blue-50/50 rounded-lg cursor-pointer transition font-semibold">🏠 Rumah & Dapur</div>
                    <div className="px-3 py-1.5 text-xs text-gray-600 hover:text-[#1A73E8] hover:bg-blue-50/50 rounded-lg cursor-pointer transition font-semibold">💄 Kecantikan</div>
                    <div className="px-3 py-1.5 text-xs text-gray-600 hover:text-[#1A73E8] hover:bg-blue-50/50 rounded-lg cursor-pointer transition font-semibold">⚽ Olahraga</div>
                    <div className="px-3 py-1.5 text-xs text-gray-600 hover:text-[#1A73E8] hover:bg-blue-50/50 rounded-lg cursor-pointer transition font-semibold">📚 Buku & Alat Tulis</div>
                    <div className="px-3 py-1.5 text-xs text-rose-500 bg-rose-50 hover:bg-rose-100 rounded-lg font-bold cursor-pointer transition">🔥 Promo</div>
                </div>

                {isMenuOpen && (
                    <div className="lg:hidden absolute left-0 right-0 top-full bg-white border-t border-b border-gray-100 shadow-2xl px-5 py-5 flex flex-col gap-4 z-50 max-h-[80vh] overflow-y-auto">
                        <div className="p-4 bg-gray-50/80 border border-gray-100 rounded-2xl">
                            {isLoggedIn ? (
                                <div className="flex flex-col gap-3">
                                    <div className="flex items-center gap-2.5 text-sm text-gray-800 font-bold">
                                        <div className="w-7 h-7 bg-blue-100 text-blue-600 font-bold rounded-full flex items-center justify-center text-xs">
                                            {(activeUser?.nama || 'P').charAt(0).toUpperCase()}
                                        </div>
                                        <span>{activeUser?.nama}</span>
                                    </div>
                                    <button
                                        onClick={handleLogout}
                                        className="w-full flex items-center justify-center gap-2 py-2.5 bg-rose-500 hover:bg-rose-600 text-white rounded-xl text-sm font-semibold transition shadow-sm"
                                    >
                                        <LogOut size={15} /> Keluar Akun
                                    </button>
                                </div>
                            ) : (
                                <div className="flex flex-col gap-2.5">
                                    <p className="text-xs text-gray-400 font-semibold uppercase tracking-wider">Akses Akun</p>
                                    <div className="grid grid-cols-2 gap-2.5">
                                        <button
                                            onClick={() => { navigate('/login'); setIsMenuOpen(false); }}
                                            className="py-2 border border-gray-200 text-gray-700 rounded-xl text-xs font-bold text-center hover:bg-gray-100 transition"
                                        >
                                            Masuk
                                        </button>
                                        <button
                                            onClick={() => { navigate('/registrasi'); setIsMenuOpen(false); }}
                                            className="py-2 bg-[#1A73E8] text-white rounded-xl text-xs font-bold text-center hover:bg-[#1557b5] transition"
                                        >
                                            Daftar
                                        </button>
                                    </div>
                                </div>
                            )}
                        </div>

                        <div className="flex flex-col gap-1">
                            <span className="text-[10px] font-bold text-gray-400 uppercase tracking-widest px-2 mb-1">Developer Menu</span>
                            <div className="flex items-center gap-2 px-3 py-2.5 bg-gray-50 border border-gray-100 rounded-xl text-sm font-medium text-gray-700 relative">
                                <select name="halaman-mobile" id="halaman-mobile" onChange={handleNavigasi} defaultValue="" className="w-full bg-transparent pr-6 outline-none cursor-pointer font-sans appearance-none">
                                    <option value="" disabled>Pilih Halaman Dev</option>
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
                                <ChevronDown size={14} className="absolute right-3 pointer-events-none text-gray-500" />
                            </div>
                        </div>

                        <div className="flex flex-col gap-0.5">
                            <span className="text-[10px] font-bold text-gray-400 uppercase tracking-widest px-2 mb-1">Kategori Produk</span>
                            <Link to="/home" onClick={() => setIsMenuOpen(false)} className="p-2.5 text-sm text-gray-700 hover:bg-gray-50 rounded-xl transition font-semibold">💻 Elektronik</Link>
                            <Link to="/about" onClick={() => setIsMenuOpen(false)} className="p-2.5 text-sm text-gray-700 hover:bg-gray-50 rounded-xl transition font-semibold">👗 Fashion</Link>
                            <div className="p-2.5 text-sm text-gray-700 hover:bg-gray-50 rounded-xl cursor-pointer transition font-semibold">🏠 Rumah & Dapur</div>
                            <div className="p-2.5 text-sm text-gray-700 hover:bg-gray-50 rounded-xl cursor-pointer transition font-semibold">💄 Kecantikan</div>
                            <div className="p-2.5 text-sm text-gray-700 hover:bg-gray-50 rounded-xl cursor-pointer transition font-semibold">⚽ Olahraga</div>
                            <div className="p-2.5 text-sm text-gray-700 hover:bg-gray-50 rounded-xl cursor-pointer transition font-semibold">📚 Buku & Alat Tulis</div>
                            <div className="p-2.5 text-sm text-rose-500 font-bold bg-rose-50/50 hover:bg-rose-50 rounded-xl cursor-pointer transition mt-1">🔥 Promo Hari Ini</div>
                        </div>
                    </div>
                )}
            </nav>
        </>
    );
}