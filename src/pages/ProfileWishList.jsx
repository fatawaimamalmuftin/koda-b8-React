import { Link, useNavigate } from 'react-router-dom';
import { FiShoppingBag, FiHeart, FiMapPin, FiCreditCard, FiSettings, FiLogOut } from 'react-icons/fi';
import Card from '../componen/Card';

export default function ProfileWishList() {
    const navigate = useNavigate();

    return (
        <main className="max-w-[1200px] mx-auto px-4 py-8 flex flex-col md:flex-row gap-6 items-start">

            <section className="w-full md:w-[260px] flex flex-col gap-4 flex-shrink-0">

                <article className="bg-white border border-gray-200 rounded-2xl p-6 flex flex-col items-center shadow-sm">
                    <div className="w-16 h-16 rounded-full bg-blue-100 text-[#1A73E8] flex items-center justify-center text-xl font-bold">
                        B
                    </div>

                    <h2 className="text-base font-bold text-gray-900 mt-3">Budi Santoso</h2>
                    <p className="text-xs text-gray-400 mt-0.5">budi@email.com</p>

                    <div className="w-full h-px bg-gray-100 my-4" />

                    <div className="flex w-full justify-around">
                        <div className="flex flex-col items-center">
                            <span className="text-sm font-bold text-gray-900">2</span>
                            <span className="text-[11px] text-gray-400 mt-0.5">Pesanan</span>
                        </div>
                        <div className="flex flex-col items-center">
                            <span className="text-sm font-bold text-gray-900">2</span>
                            <span className="text-[11px] text-gray-400 mt-0.5">Wishlist</span>
                        </div>
                    </div>
                </article>

                <article className="bg-white border border-gray-200 rounded-2xl p-3 shadow-sm flex flex-col gap-1">
                    <Link to="/profile/orders" className="flex items-center gap-3 p-3 rounded-xl text-gray-500 hover:bg-gray-50 transition" style={{ textDecoration: 'none' }}>
                        <FiShoppingBag className="w-4 h-4 text-gray-400" />
                        <span className="text-xs flex-1">Pesanan Saya</span>
                        <span className="text-xs text-gray-300">&rsaquo;</span>
                    </Link>

                    <Link to="/profile/wishlist" className="flex items-center gap-3 p-3 rounded-xl bg-blue-50 text-[#1A73E8] font-semibold transition" style={{ textDecoration: 'none' }}>
                        <FiHeart className="w-4 h-4" />
                        <span className="text-xs flex-1">Wishlist</span>
                        <span className="text-xs font-bold">&rsaquo;</span>
                    </Link>

                    <Link to="/profile/address" className="flex items-center gap-3 p-3 rounded-xl text-gray-500 hover:bg-gray-50 transition" style={{ textDecoration: 'none' }}>
                        <FiMapPin className="w-4 h-4 text-gray-400" />
                        <span className="text-xs flex-1">Alamat Saya</span>
                        <span className="text-xs text-gray-300">&rsaquo;</span>
                    </Link>

                    <Link to="/profile/payment" className="flex items-center gap-3 p-3 rounded-xl text-gray-500 hover:bg-gray-50 transition" style={{ textDecoration: 'none' }}>
                        <FiCreditCard className="w-4 h-4 text-gray-400" />
                        <span className="text-xs flex-1">Metode Pembayaran</span>
                        <span className="text-xs text-gray-300">&rsaquo;</span>
                    </Link>

                    <Link to="/profile/settings" className="flex items-center gap-3 p-3 rounded-xl text-gray-500 hover:bg-gray-50 transition" style={{ textDecoration: 'none' }}>
                        <FiSettings className="w-4 h-4 text-gray-400" />
                        <span className="text-xs flex-1">Pengaturan Profil</span>
                        <span className="text-xs text-gray-300">&rsaquo;</span>
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
                    Wishlist (2)
                </h1>

                <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 w-full">
                    <Card />
                    <Card />
                </div>

            </section>
        </main>
    );
}