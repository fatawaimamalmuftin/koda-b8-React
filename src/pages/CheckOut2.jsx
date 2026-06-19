import { CreditCard, Check } from 'lucide-react';
import headphoneImg from '../assets/elektronik.png';

export default function CheckOut2() {
    return (
        <main className="w-full bg-gray-50 px-26">
            <div className="max-w-[1280px] mx-auto px-4 flex flex-col gap-10">

                <section className="flex justify-center items-center py-4">
                    <div className="flex items-center gap-4 text-xs font-medium text-gray-400">
                        <div className="flex flex-col items-center gap-1 text-[#00C950]">
                            <div className="w-8 h-8 rounded-full bg-[#00C950] text-white flex items-center justify-center font-bold">
                                <Check size={16} strokeWidth={3} />
                            </div>
                            <span>Pengiriman</span>
                        </div>
                        <div className="w-16 h-[2px] bg-[#00C950] mt-[-20px]"></div>
                        <div className="flex flex-col items-center gap-1 text-[#1A73E8]">
                            <div className="w-8 h-8 rounded-full bg-[#1A73E8] text-white flex items-center justify-center font-bold">
                                2
                            </div>
                            <span>Pembayaran</span>
                        </div>
                        <div className="w-16 h-[2px] bg-gray-200 mt-[-20px]"></div>
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
                            <CreditCard className="text-[#1A73E8]" size={24} />
                            <h2>Metode Pembayaran</h2>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                            <label className="flex items-center gap-3 p-4 border-2 border-blue-500 bg-blue-50/30 rounded-xl cursor-pointer transition">
                                <input type="radio" name="payment" defaultChecked className="w-4 h-4 text-[#1A73E8]" />
                                <span className="text-sm font-semibold text-gray-950">🏦 Virtual Account BCA</span>
                            </label>

                            <label className="flex items-center gap-3 p-4 border border-gray-200 rounded-xl cursor-pointer hover:bg-gray-50 transition">
                                <input type="radio" name="payment" className="w-4 h-4 text-[#1A73E8]" />
                                <span className="text-sm font-semibold text-gray-950">🏦 Virtual Account BNI</span>
                            </label>

                            <label className="flex items-center gap-3 p-4 border border-gray-200 rounded-xl cursor-pointer hover:bg-gray-50 transition">
                                <input type="radio" name="payment" className="w-4 h-4 text-[#1A73E8]" />
                                <span className="text-sm font-semibold text-gray-950">💳 Kartu Kredit / Debit</span>
                            </label>

                            <label className="flex items-center gap-3 p-4 border border-gray-200 rounded-xl cursor-pointer hover:bg-gray-50 transition">
                                <input type="radio" name="payment" className="w-4 h-4 text-[#1A73E8]" />
                                <span className="text-sm font-semibold text-gray-950">📱 GoPay</span>
                            </label>

                            <label className="flex items-center gap-3 p-4 border border-gray-200 rounded-xl cursor-pointer hover:bg-gray-50 transition">
                                <input type="radio" name="payment" className="w-4 h-4 text-[#1A73E8]" />
                                <span className="text-sm font-semibold text-gray-950">📱 OVO</span>
                            </label>

                            <label className="flex items-center gap-3 p-4 border border-gray-200 rounded-xl cursor-pointer hover:bg-gray-50 transition">
                                <input type="radio" name="payment" className="w-4 h-4 text-[#1A73E8]" />
                                <span className="text-sm font-semibold text-gray-950">📱 DANA</span>
                            </label>
                        </div>

                        <div className="flex flex-col gap-4 mt-2">
                            <div className="p-4 bg-blue-50/40 border border-blue-100 rounded-xl text-xs text-gray-600 leading-relaxed">
                                🔒 Informasi pembayaranmu dienkripsi dengan SSL 256-bit. Kami tidak menyimpan data kartu kreditmu.
                            </div>

                            <div className="flex gap-4 h-12">
                                <button className="px-6 border border-gray-200 hover:bg-gray-50 text-gray-700 rounded-xl font-bold transition text-sm flex items-center justify-center">
                                    Kembali
                                </button>
                                <button className="flex-1 bg-[#1A73E8] hover:bg-blue-700 text-white rounded-xl font-bold flex items-center justify-center transition text-sm">
                                    Lanjut ke Konfirmasi &rsaquo;
                                </button>
                            </div>
                        </div>
                    </div>

                    <div className="w-full lg:w-[380px] bg-white border border-gray-100 rounded-2xl p-6 shadow-sm flex flex-col gap-5 lg:sticky lg:top-10">
                        <h3 className="text-base font-bold text-gray-950">Ringkasan Pesanan</h3>

                        <div className="flex items-center gap-3 bg-gray-50 p-3 rounded-xl border border-gray-100">
                            <div className="w-12 h-12 rounded-lg bg-white overflow-hidden border border-gray-200 p-1 flex-shrink-0">
                                <img src={headphoneImg} alt="Headphone" className="w-full h-full object-contain" />
                            </div>
                            <div className="flex-1 flex justify-between items-center text-xs">
                                <span className="font-semibold text-gray-800 truncate max-w-[180px]">
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