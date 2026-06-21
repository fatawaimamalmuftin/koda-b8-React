import { Link, useNavigate } from 'react-router-dom';
import {
    MapPin,
    Search,
    Bell,
    User,
    Heart,
    ShoppingCart,
    Menu,
} from 'lucide-react';

export default function Navbar() {
    const nafigasi = useNavigate();

    const handleNavigasi = (event) => {
        const pathTujuan = event.target.value
        if (pathTujuan) {
            nafigasi(pathTujuan);
        }
    }
    return (
        <>
            <header className="top-0 flex justify-between items-center bg-[#4F39F6] w-full px-30 py-1.25">
                <div className="flex items-center gap-1">
                    <MapPin className="text-white" size={16} />
                    <span className="text-white text-3">
                        Kirim ke: Jakarta Selatan
                    </span>
                </div>

                <div className="flex gap-6">
                    <div className="text-white text-3">
                        🚀 Gratis ongkir di atas Rp 100.000
                    </div>
                    <div className="text-white text-3">
                        📞 0800-1234-5678 (Gratis)
                    </div>
                </div>
            </header>

            <nav className="flex sticky top-0 z-50 px-30 py-1.25 bg-white/80 flex-col items-center">
                <div className="flex items-center gap-6 mt-2 justify-between w-full">

                    <Link to="/landingPackage" className="flex items-center gap-1">
                        <div className="flex justify-center items-center w-7.5 h-7.5 bg-[#1A73E8] text-white rounded-xl font-normal text-center text-[14px] leading-8">
                            B
                        </div>
                        <span className="flex text-[#111827] font-normal text-[16px]">
                            BeliMudah
                        </span>
                    </Link>

                    <div className="w-full flex items-center">
                        <input
                            type="text"
                            className="flex-1 w-full h-10 px-3 border border-[#D1D5DB] rounded-l-2xl outline-none"
                            placeholder="Cari produk, merek, kategori..."
                        />
                        <button className="w-9.5 h-10 border-none bg-[#1A73E8] rounded-r-2xl cursor-pointer flex justify-center items-center">
                            <Search className="text-white" size={20} />
                        </button>
                    </div>

                    <div className="flex items-center gap-1">
                        <div className="w-10 h-10 flex justify-center items-center cursor-pointer">
                            <Bell className="text-[#374151]" size={22} />
                        </div>

                        <Link to="/profilemyorder" className="w-10 h-10 flex justify-center items-center cursor-pointer">
                            <User className="text-[#374151]" size={22} />
                        </Link>

                        <div className="px-2 font-medium text-[#374151]">
                            <span>Budi</span>
                        </div>

                        <div className="w-10 h-10 flex justify-center items-center cursor-pointer">
                            <Heart className="text-[#374151]" size={22} />
                        </div>

                        <div className="w-10 h-10 flex justify-center items-center cursor-pointer">
                            <ShoppingCart className="text-[#374151]" size={22} />
                        </div>
                    </div>

                </div>

                <div className="flex justify-center gap-2.5">
                    <div className="flex items-center 1.25 p-2.5 cursor-pointer text-[14px]">
                        <Menu className="text-[#374151]" size={14} />
                        <label htmlFor='halaman'></label>
                        <select name="halaman" id="halaman" onChange={handleNavigasi} defaultValue="">
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

                    <Link to="/home" className="flex items-center 1.25 p-2.5 cursor-pointer text-[14px] no-underline color-inherit">
                        💻 Elektronik
                    </Link>
                    <Link to="/about" className="flex items-center 1.25 p-2.5 cursor-pointer text-[14px] no-underline color-inherit">
                        👗 Fashion
                    </Link>
                    <div className="flex items-center 1.25 p-2.5 cursor-pointer text-[14px]">🏠 Rumah & Dapur</div>
                    <div className="flex items-center 1.25 p-2.5 cursor-pointer text-[14px]">💄 Kecantikan</div>
                    <div className="flex items-center 1.25 p-2.5 cursor-pointer text-[14px]">⚽ Olahraga</div>
                    <div className="flex items-center 1.25 p-2.5 cursor-pointer text-[14px]">📚 Buku & Alat Tulis</div>
                    <div className="flex items-center 1.25 p-2.5 cursor-pointer text-[14px] text-red-500 font-semibold">🔥 Promo</div>
                </div>
            </nav>
        </>
    );
}