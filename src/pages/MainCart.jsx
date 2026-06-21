import { Trash2, Minus, Plus, Heart, Tag, Shield } from 'lucide-react';
import Card from '../componen/Card';
import headphoneImg from '../assets/elektronik.png';
import { Link } from 'react-router-dom';

export default function MainCart() {
    return (
        <main className="w-full bg-gray-50 px-26 ">
            <div className="max-w-[1280px] mx-auto px-4 grid grid-cols-1 gap-10">

                <h1 className="text-3xl font-bold text-gray-950">
                    Keranjang Belanja (1 item)
                </h1>

                <div className="flex flex-col lg:flex-row gap-8 items-start">

                    <div className="flex-1 w-full flex flex-col gap-6">

                        <div className="bg-white border border-gray-100 rounded-2xl p-6 flex gap-6 shadow-sm">
                            <div className="w-28 h-28 rounded-xl overflow-hidden bg-gray-50 flex-shrink-0">
                                <img
                                    src={headphoneImg}
                                    alt="Headphone"
                                    className="w-full h-full object-contain"
                                />
                            </div>

                            <div className="flex-1 flex flex-col justify-between">
                                <div className="flex justify-between items-start">
                                    <div>
                                        <h3 className="text-base font-semibold text-gray-950">
                                            Headphone Wireless Premium
                                        </h3>
                                        <p className="text-sm text-gray-500 mt-1">Warna: Hitam</p>
                                    </div>
                                    <button className="text-gray-400 hover:text-red-500 transition">
                                        <Trash2 size={20} />
                                    </button>
                                </div>

                                <div className="flex justify-between items-center mt-4">
                                    <div className="flex items-center gap-3 border border-gray-200 rounded-full h-10 px-2 bg-gray-50">
                                        <button className="text-gray-500 hover:text-gray-950 p-1">
                                            <Minus size={16} />
                                        </button>
                                        <span className="font-bold text-gray-950 w-8 text-center select-none text-lg">
                                            1
                                        </span>
                                        <button className="text-gray-500 hover:text-gray-950 p-1">
                                            <Plus size={16} />
                                        </button>
                                    </div>

                                    <span className="text-xl font-bold text-[#1A73E8]">
                                        Rp 450.000
                                    </span>
                                </div>

                                <button className="flex items-center gap-2 text-sm text-gray-500 hover:text-red-500 transition mt-3 w-max">
                                    <Heart size={16} />
                                    <span>Simpan ke Wishlist</span>
                                </button>
                            </div>
                        </div>

                        <div className="bg-white border border-gray-100 rounded-2xl p-6 shadow-sm flex flex-col gap-4">
                            <div className="flex items-center gap-3 text-lg font-semibold text-gray-950">
                                <Tag className="text-[#1A73E8]" size={20} />
                                <span>Punya Kode Promo?</span>
                            </div>
                            <div className="flex gap-0">
                                <input
                                    type="text"
                                    placeholder="Contoh: HEMAT50"
                                    className="flex-1 h-12 px-5 bg-gray-50 border border-gray-200 rounded-l-xl outline-none text-gray-900 placeholder-gray-400 focus:border-blue-300 focus:bg-white transition"
                                />
                                <button className="h-12 px-7 bg-[#1A73E8] hover:bg-blue-700 text-white font-semibold rounded-r-xl transition text-sm">
                                    Terapkan
                                </button>
                            </div>
                        </div>

                    </div>

                    <div className="w-full lg:w-[380px] bg-white border border-gray-100 rounded-2xl p-6 shadow-sm flex flex-col gap-6 lg:sticky lg:top-10">
                        <h2 className="text-xl font-bold text-gray-950">
                            Ringkasan Pesanan
                        </h2>

                        <div className="flex flex-col gap-4 border-b border-gray-100 pb-6 text-sm">
                            <div className="flex justify-between text-gray-600">
                                <span>Subtotal (1 item)</span>
                                <span className="font-medium text-gray-800">Rp 450.000</span>
                            </div>
                            <div className="flex justify-between items-center text-gray-600">
                                <span>Ongkos Kirim</span>
                                <span className="text-xs font-bold text-[#00A63E] bg-green-50 px-3 py-1 rounded-full">
                                    GRATIS
                                </span>
                            </div>
                        </div>

                        <div className="flex justify-between items-center text-lg">
                            <span className="text-gray-950 font-semibold">Total</span>
                            <span className="text-2xl font-extrabold text-[#1A73E8]">
                                Rp 450.000
                            </span>
                        </div>

                        <Link to="/checkout1" className="w-full h-14 bg-[#F97316] hover:bg-orange-600 text-white rounded-xl font-bold flex items-center justify-center gap-3 transition-all duration-300 transform hover:scale-[1.02] shadow-lg shadow-orange-100">
                            <Shield size={22} />
                            <span>Lanjut ke Checkout Aman</span>
                        </Link>

                        <div className="text-center text-xs text-gray-400 mt-2">
                            <p className="font-medium text-gray-500 mb-1">🔒 Pembayaran 100% Aman & Terenkripsi</p>
                            <p className="leading-relaxed">
                                Mendukung Transfer Bank, Virtual Account, Kartu Kredit, & e-Wallet
                            </p>
                        </div>
                    </div>

                </div>

                <div className="mt-12 flex flex-col gap-6">
                    <h2 className="text-2xl font-semibold text-gray-950">
                        Mungkin Kamu Suka Ini
                    </h2>

                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                        <Card />
                        <Card />
                        <Card />
                        <Card />
                    </div>
                </div>

            </div>
        </main>
    );
}