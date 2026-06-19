import { Check, Shield } from 'lucide-react';
import headphoneImg from '../assets/elektronik.png';

export default function CheckOut3() {
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
                        <div className="flex flex-col items-center gap-1 text-[#00C950]">
                            <div className="w-8 h-8 rounded-full bg-[#00C950] text-white flex items-center justify-center font-bold">
                                <Check size={16} strokeWidth={3} />
                            </div>
                            <span>Pembayaran</span>
                        </div>
                        <div className="w-16 h-[2px] bg-[#00C950] mt-[-20px]"></div>
                        <div className="flex flex-col items-center gap-1 text-[#1A73E8]">
                            <div className="w-8 h-8 rounded-full bg-[#1A73E8] text-white flex items-center justify-center font-bold">
                                3
                            </div>
                            <span>Konfirmasi</span>
                        </div>
                    </div>
                </section>

                <section className="flex flex-col lg:flex-row gap-8 items-start">

                    <div className="flex-1 w-full bg-white border border-gray-100 rounded-2xl p-6 shadow-sm flex flex-col gap-6">
                        <h2 className="text-xl font-bold text-gray-950 border-b border-gray-50 pb-2">
                            Konfirmasi Pesanan
                        </h2>

                        <div className="flex flex-col gap-4">
                            <div className="bg-gray-50/60 border border-gray-100 rounded-xl p-4 flex flex-col gap-1">
                                <span className="text-sm font-bold text-gray-900">Alamat Pengiriman</span>
                                <span className="text-sm text-gray-600 mt-1">Budi Santoso · 0812-3456-7890</span>
                                <span className="text-sm text-gray-500">Jl. Kebon Jeruk No. 15, Jakarta Barat, DKI Jakarta 11530</span>
                            </div>

                            <div className="bg-gray-50/60 border border-gray-100 rounded-xl p-4 flex flex-col gap-1">
                                <span className="text-sm font-bold text-gray-900">Metode Pengiriman</span>
                                <span className="text-sm text-gray-600 mt-1">JNE Reguler · 3-5 hari kerja</span>
                            </div>

                            <div className="bg-gray-50/60 border border-gray-100 rounded-xl p-4 flex flex-col gap-3">
                                <span className="text-sm font-bold text-gray-900">Produk yang Dipesan</span>
                                <div className="flex items-center justify-between gap-4 bg-white border border-gray-100 rounded-xl p-3">
                                    <div className="flex items-center gap-4">
                                        <div className="w-14 h-14 rounded-lg border border-gray-200 overflow-hidden bg-white p-1 flex-shrink-0">
                                            <img src={headphoneImg} alt="Headphone" className="w-full h-full object-contain" />
                                        </div>
                                        <div className="flex flex-col">
                                            <span className="text-sm font-bold text-gray-950">Headphone Wireless Premium</span>
                                            <span className="text-xs text-gray-400 font-medium mt-0.5">x1</span>
                                        </div>
                                    </div>
                                    <span className="text-base font-bold text-[#1A73E8] flex-shrink-0">
                                        Rp 450.000
                                    </span>
                                </div>
                            </div>
                        </div>

                        <div className="flex flex-col gap-4 mt-2">
                            <div className="p-4 bg-blue-50/40 border border-blue-100 rounded-xl text-xs text-gray-600 flex items-start gap-3 leading-relaxed">
                                <Shield className="text-[#1A73E8] flex-shrink-0 mt-0.5" size={16} />
                                <span>
                                    Dengan menekan "Bayar Sekarang", kamu menyetujui Syarat & Ketentuan kami. Pembayaran baru akan diproses setelah kamu mengkonfirmasi di langkah ini.
                                </span>
                            </div>

                            <div className="flex gap-4 h-12">
                                <button className="px-6 border border-gray-200 hover:bg-gray-50 text-gray-700 rounded-xl font-bold transition text-sm flex items-center justify-center">
                                    Kembali
                                </button>
                                <button className="flex-1 bg-[#F97316] hover:bg-orange-600 text-white rounded-xl font-bold flex items-center justify-center transition text-sm gap-2">
                                    <span>🔒</span> Bayar Rp 450.000 Sekarang
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