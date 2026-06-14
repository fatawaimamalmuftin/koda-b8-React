import { Link } from 'react-router-dom';
import {
    MapPin,
    Search,
    Bell,
    User,
    Heart,
    ShoppingCart,
    Menu,
    ChevronDown
} from 'lucide-react';

export default function Navbar() {
    return (
        <>
            <header className="top-0 flex justify-between items-center bg-[#4F39F6] w-full px-[120px] py-[5px]">
                <div className="flex items-center gap-[6px]">
                    <MapPin className="text-white" size={16} />
                    <span className="text-white text-[12px]">
                        Kirim ke: Jakarta Selatan
                    </span>
                </div>

                <div className="flex gap-[24px]">
                    <div className="text-white text-[12px]">
                        🚀 Gratis ongkir di atas Rp 100.000
                    </div>
                    <div className="text-white text-[12px]">
                        📞 0800-1234-5678 (Gratis)
                    </div>
                </div>
            </header>

            <nav className="flex sticky top-0 z-[9999] px-[120px] py-[5px] bg-white/80 flex flex-col items-center">
                <div className="flex items-center gap-6 mt-2 justify-between w-full">

                    <Link to="/landingPackage" className="flex items-center gap-[5px]">
                        <div className="flex justify-center items-center w-[32px] h-[32px] bg-[#1A73E8] text-white rounded-[8px] font-normal text-center text-[14px] leading-[32px]">
                            B
                        </div>
                        <span className="flex text-[#111827] font-normal text-[16px]">
                            BeliMudah
                        </span>
                    </Link>

                    <div className="w-full flex items-center">
                        <input
                            type="text"
                            className="flex-1 w-full h-[40px] px-[12px] border border-[#D1D5DB] rounded-l-[8px] outline-none"
                            placeholder="Cari produk, merek, kategori..."
                        />
                        <button className="w-[38px] h-[40px] border-none bg-[#1A73E8] rounded-r-[8px] cursor-pointer flex justify-center items-center">
                            <Search className="text-white" size={20} />
                        </button>
                    </div>

                    <div className="flex items-center gap-[6px]">
                        <div className="w-[40px] h-[40px] flex justify-center items-center cursor-pointer">
                            <Bell className="text-[#374151]" size={22} />
                        </div>

                        <Link to="/about" className="w-[40px] h-[40px] flex justify-center items-center cursor-pointer">
                            <User className="text-[#374151]" size={22} />
                        </Link>

                        <div className="px-[8px] font-medium text-[#374151]">
                            <span>Budi</span>
                        </div>

                        <div className="w-[40px] h-[40px] flex justify-center items-center cursor-pointer">
                            <Heart className="text-[#374151]" size={22} />
                        </div>

                        <div className="w-[40px] h-[40px] flex justify-center items-center cursor-pointer">
                            <ShoppingCart className="text-[#374151]" size={22} />
                        </div>
                    </div>

                </div>

                <div className="flex justify-center gap-[12px]">
                    <div className="flex items-center gap-[5px] p-[10px] cursor-pointer text-[14px]">
                        <Menu className="text-[#374151]" size={14} />
                        <span className="text-sm">Semua Kategori</span>
                        <ChevronDown className="text-[#374151]" size={14} />
                    </div>

                    <Link to="/home" className="flex items-center gap-[5px] p-[10px] cursor-pointer text-[14px] no-underline color-inherit">
                        💻 Elektronik
                    </Link>
                    <Link to="/about" className="flex items-center gap-[5px] p-[10px] cursor-pointer text-[14px] no-underline color-inherit">
                        👗 Fashion
                    </Link>
                    <div className="flex items-center gap-[5px] p-[10px] cursor-pointer text-[14px]">🏠 Rumah & Dapur</div>
                    <div className="flex items-center gap-[5px] p-[10px] cursor-pointer text-[14px]">💄 Kecantikan</div>
                    <div className="flex items-center gap-[5px] p-[10px] cursor-pointer text-[14px]">⚽ Olahraga</div>
                    <div className="flex items-center gap-[5px] p-[10px] cursor-pointer text-[14px]">📚 Buku & Alat Tulis</div>
                    <div className="flex items-center gap-[5px] p-[10px] cursor-pointer text-[14px] text-red-500 font-semibold">🔥 Promo</div>
                </div>
            </nav>
        </>
    );
}