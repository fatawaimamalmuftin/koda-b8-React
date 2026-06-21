import { Truck } from 'lucide-react';
import headphoneImg from '../assets/elektronik.png';
import { Link } from 'react-router-dom';

export default function CheckOut1() {
    return (
        <main className="w-full bg-gray-50 px-26">
            <div className="max-w-7xl mx-auto px-4 flex flex-col gap-10">

                <section className="flex justify-center items-center py-4">
                    <div className="flex items-center gap-4 text-xs font-medium text-gray-400">
                        <div className="flex flex-col items-center gap-1 text-[#1A73E8]">
                            <div className="w-8 h-8 rounded-full bg-[#1A73E8] text-white flex items-center justify-center font-bold">
                                1
                            </div>
                            <span>Pengiriman</span>
                        </div>
                        <div className="w-16 h-0.5 bg-gray-200 mt-5"></div>
                        <div className="flex flex-col items-center gap-1">
                            <div className="w-8 h-8 rounded-full bg-gray-200 text-gray-500 flex items-center justify-center font-bold">
                                2
                            </div>
                            <span>Pembayaran</span>
                        </div>
                        <div className="w-16 h-0.5 bg-gray-200 mt-5"></div>
                        <div className="flex flex-col items-center gap-1">
                            <div className="w-8 h-8 rounded-full bg-gray-200 text-gray-500 flex items-center justify-center font-bold">
                                3
                            </div>
                            <span>Konfirmasi</span>
                        </div>
                    </div>
                </section>

                <section className="flex flex-col lg:flex-row gap-8 items-start">

                    <div className="flex-1 w-full bg-white border border-gray-100 rounded-2xl p-6 shadow-sm flex flex-col gap-6">
                        <div className="flex items-center gap-2 text-xl font-bold text-gray-950 border-b border-gray-50 pb-4">
                            <Truck className="text-[#1A73E8]" size={24} />
                            <h2>Alamat Pengiriman</h2>
                        </div>

                        <div className="flex flex-col gap-4">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <div className="flex flex-col gap-1.5">
                                    <label className="text-sm font-semibold text-gray-700">Nama Penerima *</label>
                                    <input
                                        type="text"
                                        placeholder="Budi Santoso"
                                        className="h-11 px-4 bg-gray-50 border border-gray-200 rounded-xl outline-none text-sm text-gray-900 focus:border-blue-300 focus:bg-white transition"
                                    />
                                </div>
                                <div className="flex flex-col gap-1.5">
                                    <label className="text-sm font-semibold text-gray-700">Nomor Telepon *</label>
                                    <input
                                        type="tel"
                                        placeholder="0812-3456-7890"
                                        className="h-11 px-4 bg-gray-50 border border-gray-200 rounded-xl outline-none text-sm text-gray-900 focus:border-blue-300 focus:bg-white transition"
                                    />
                                </div>
                            </div>

                            <div className="flex flex-col gap-1.5">
                                <label className="text-sm font-semibold text-gray-700">Email *</label>
                                <input
                                    type="email"
                                    placeholder="budi@email.com"
                                    className="h-11 px-4 bg-gray-50 border border-gray-200 rounded-xl outline-none text-sm text-gray-900 focus:border-blue-300 focus:bg-white transition"
                                />
                            </div>

                            <div className="flex flex-col gap-1.5">
                                <label className="text-sm font-semibold text-gray-700">Alamat Lengkap *</label>
                                <input
                                    type="text"
                                    placeholder="Jl. Kebon Jeruk No. 15"
                                    className="h-11 px-4 bg-gray-50 border border-gray-200 rounded-xl outline-none text-sm text-gray-900 focus:border-blue-300 focus:bg-white transition"
                                />
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <div className="flex flex-col gap-1.5">
                                    <label className="text-sm font-semibold text-gray-700">Kota *</label>
                                    <input
                                        type="text"
                                        placeholder="Jakarta Barat"
                                        className="h-11 px-4 bg-gray-50 border border-gray-200 rounded-xl outline-none text-sm text-gray-900 focus:border-blue-300 focus:bg-white transition"
                                    />
                                </div>
                                <div className="flex flex-col gap-1.5">
                                    <label className="text-sm font-semibold text-gray-700">Provinsi *</label>
                                    <input
                                        type="text"
                                        placeholder="DKI Jakarta"
                                        className="h-11 px-4 bg-gray-50 border border-gray-200 rounded-xl outline-none text-sm text-gray-900 focus:border-blue-300 focus:bg-white transition"
                                    />
                                </div>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <div className="flex flex-col gap-1.5">
                                    <label className="text-sm font-semibold text-gray-700">Kode Pos *</label>
                                    <input
                                        type="number"
                                        placeholder="11530"
                                        className="h-11 px-4 bg-gray-50 border border-gray-200 rounded-xl outline-none text-sm text-gray-900 focus:border-blue-300 focus:bg-white transition"
                                    />
                                </div>
                                <div className="flex flex-col gap-1.5">
                                    <label className="text-sm font-semibold text-gray-700">Catatan (opsional)</label>
                                    <input
                                        type="text"
                                        placeholder="Warna pagar, dll."
                                        className="h-11 px-4 bg-gray-50 border border-gray-200 rounded-xl outline-none text-sm text-gray-900 focus:border-blue-300 focus:bg-white transition"
                                    />
                                </div>
                            </div>
                        </div>

                        <div className="flex flex-col gap-4 mt-4">
                            <h3 className="text-lg font-bold text-gray-950">Metode Pengiriman</h3>

                            <div className="flex flex-col gap-3">
                                <label className="flex items-center justify-between p-4 border-2 border-blue-500 bg-blue-50/30 rounded-xl cursor-pointer transition">
                                    <div className="flex items-center gap-4">
                                        <input type="radio" name="kurir" defaultChecked className="w-4 h-4 text-[#1A73E8]" />
                                        <div className="flex flex-col">
                                            <span className="text-sm font-bold text-gray-950">JNE Reguler</span>
                                            <span className="text-xs text-gray-500">3-5 hari kerja</span>
                                        </div>
                                    </div>
                                    <span className="text-sm font-bold text-[#00A63E]">GRATIS</span>
                                </label>

                                <label className="flex items-center justify-between p-4 border border-gray-200 rounded-xl cursor-pointer hover:bg-gray-50 transition">
                                    <div className="flex items-center gap-4">
                                        <input type="radio" name="kurir" className="w-4 h-4 text-[#1A73E8]" />
                                        <div className="flex flex-col">
                                            <span className="text-sm font-bold text-gray-950">JNE Express</span>
                                            <span className="text-xs text-gray-500">1-2 hari kerja</span>
                                        </div>
                                    </div>
                                    <span className="text-sm font-bold text-[#00A63E]">GRATIS</span>
                                </label>

                                <label className="flex items-center justify-between p-4 border border-gray-200 rounded-xl cursor-pointer hover:bg-gray-50 transition">
                                    <div className="flex items-center gap-4">
                                        <input type="radio" name="kurir" className="w-4 h-4 text-[#1A73E8]" />
                                        <div className="flex flex-col">
                                            <span className="text-sm font-bold text-gray-950">Same Day Delivery</span>
                                            <span className="text-xs text-gray-500">Hari ini (sebelum 16:00)</span>
                                        </div>
                                    </div>
                                    <span className="text-sm font-bold text-[#00A63E]">GRATIS</span>
                                </label>
                            </div>
                        </div>

                        <Link to="/checkout2" className="w-full h-12 bg-[#1A73E8] hover:bg-blue-700 text-white rounded-xl font-bold flex items-center justify-center transition mt-4 text-sm">
                            Lanjut ke Pembayaran &rsaquo;
                        </Link>
                    </div>

                    <div className="w-full lg:w-95 bg-white border border-gray-100 rounded-2xl p-6 shadow-sm flex flex-col gap-5 lg:sticky lg:top-10">
                        <h3 className="text-base font-bold text-gray-950">Ringkasan Pesanan</h3>

                        <div className="flex items-center gap-3 bg-gray-50 p-3 rounded-xl border border-gray-100">
                            <div className="w-12 h-12 rounded-lg bg-white overflow-hidden border border-gray-200 p-1">
                                <img src={headphoneImg} alt="Headphone" className="w-full h-full object-contain" />
                            </div>
                            <div className="flex-1 flex justify-between items-center text-xs">
                                <span className="font-semibold text-gray-800 truncate max-w-45">
                                    Headphone Wireless Premium
                                </span>
                                <span className="text-gray-500 font-medium">x1</span>
                            </div>
                        </div>

                        <div className="flex flex-col gap-3 border-b border-gray-100 pb-4 text-xs">
                            <div className="flex justify-between text-gray-600">
                                <span>Subtotal</span>
                                <span className="font-medium text-gray-800">Rp 450.000</span>
                            </div>
                            <div className="flex justify-between text-gray-600">
                                <span>Ongkir</span>
                                <span className="font-bold text-[#00A63E]">Gratis</span>
                            </div>
                        </div>

                        <div className="flex justify-between items-center text-sm">
                            <span className="text-gray-950 font-bold">Total</span>
                            <span className="text-base font-extrabold text-[#1A73E8]">Rp 450.000</span>
                        </div>

                        <div className="text-center text-[11px] text-gray-400 border-t border-gray-50 pt-3">
                            🔒 Pembayaran aman dan terenkripsi
                        </div>
                    </div>

                </section>
            </div>
        </main>
    );
}