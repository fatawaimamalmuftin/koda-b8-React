import { ChevronRight, ShoppingCart, Heart } from "lucide-react";
import Card from "./../componen/Card";
import elektronikImg from '../assets/elektronik.png';


export default function MainDetail() {
    return (
        <>
            <main className="flex flex-col w-full px-26 bg-[#F9FAFB] gap-6 pb-12">

                <nav className="flex items-center gap-1 text-sm text-[#6B7280]">
                    <span>Beranda</span>
                    <ChevronRight size={14} className="text-[#9CA3AF]" />
                    <span>Toko</span>
                    <ChevronRight size={14} className="text-[#9CA3AF]" />
                    <span>Electronics</span>
                    <ChevronRight size={14} className="text-[#9CA3AF]" />
                    <span className="text-[#111827] font-medium">Headphone Wireless Premium</span>
                </nav>

                <section className="w-full grid grid-cols-2 gap-8 bg-white rounded-2xl border border-gray-100 shadow-sm p-6">

                    <div className="flex flex-col gap-3">
                        <div className="relative w-full aspect-square bg-[#F9FAFB] rounded-xl overflow-hidden border border-gray-100 flex items-center justify-center">
                            <span className="absolute top-2.5 left-2.5 z-10 bg-[#DC2626] text-white text-[9px] font-bold px-1.5 py-0.5 rounded-md">
                                -31%
                            </span>
                            <img src={elektronikImg} className="w-full h-full object-cover" />
                        </div>
                        <div className="flex gap-2">
                            <div className="w-15 h-15 rounded-lg overflow-hidden border-2 border-[#1A73E8] cursor-pointer flex items-center justify-center bg-[#F9FAFB]">
                                <img src={elektronikImg} className="w-full h-full object-cover" />
                            </div>
                            <div className="w-15 h-15 rounded-lg overflow-hidden border-2 border-gray-200 hover:border-gray-300 cursor-pointer flex items-center justify-center bg-[#F9FAFB] transition">
                                <img src={elektronikImg} className="w-full h-full object-cover" />
                            </div>
                        </div>
                    </div>

                    <div className="flex flex-col gap-4">
                        <div>
                            <span className="text-[10px] text-[#9CA3AF] font-bold uppercase tracking-wider">
                                SoundWave · Audio
                            </span>
                            <h1 className="text-2xl font-bold text-[#111827] leading-tight mt-1">
                                Headphone Wireless Premium
                            </h1>
                        </div>

                        <div className="flex items-center gap-2">
                            <span className="text-[#FFB200] text-sm tracking-wide">★★★★★</span>
                            <span className="text-xs font-bold text-[#111827]">4.8</span>
                            <span className="text-xs text-[#6B7280]">(512 ulasan)</span>
                            <span className="text-[10px] font-semibold text-[#16A34A] bg-[#DCFCE7] px-2 py-0.5 rounded-full">
                                ✓ Stok tersedia (45)
                            </span>
                        </div>

                        <div className="h-px bg-gray-100" />

                        <div className="bg-[#EFF6FF] rounded-xl p-4">
                            <div className="flex items-baseline gap-2 flex-wrap">
                                <span className="text-2xl font-bold text-[#1A73E8]">Rp 450.000</span>
                                <span className="text-sm text-[#9CA3AF] line-through">Rp 650.000</span>
                                <span className="bg-[#DC2626] text-white text-[9px] font-bold px-1.5 py-0.5 rounded-md">
                                    Hemat 31%
                                </span>
                            </div>
                            <p className="text-xs text-emerald-500 mt-1">Kamu hemat Rp 200.000 </p>
                        </div>

                        <div>
                            <span className="text-xs font-semibold text-[#374151]">
                                Warna: <span className="text-[#1A73E8]">Hitam</span>
                            </span>
                            <div className="flex gap-2 mt-2">
                                <button className="px-3.5 py-1 rounded-lg text-xs font-semibold border-[1.5px] border-[#1A73E8] text-[#1A73E8] bg-[#EFF6FF]">
                                    Hitam
                                </button>
                                <button className="px-3.5 py-1 rounded-lg text-xs font-semibold border-[1.5px] border-gray-200 text-[#374151] bg-white hover:border-gray-300 transition">
                                    Putih
                                </button>
                                <button className="px-3.5 py-1 rounded-lg text-xs font-semibold border-[1.5px] border-gray-200 text-[#374151] bg-white hover:border-gray-300 transition">
                                    Biru
                                </button>
                            </div>
                        </div>

                        <div>
                            <span className="text-xs font-semibold text-[#374151]">Jumlah</span>
                            <div className="flex items-center gap-3 mt-2">
                                <div className="flex items-center border-[1.5px] border-gray-200 rounded-lg overflow-hidden">
                                    <button className="w-8 h-8 flex items-center justify-center text-[#374151] font-bold bg-[#F9FAFB] hover:bg-gray-100 transition text-base">
                                        −
                                    </button>
                                    <span className="w-9 text-center text-sm font-semibold">1</span>
                                    <button className="w-8 h-8 flex items-center justify-center text-[#374151] font-bold bg-[#F9FAFB] hover:bg-gray-100 transition text-base">
                                        +
                                    </button>
                                </div>
                                <span className="text-xs text-[#6B7280]">Stok: 45 pcs</span>
                            </div>
                        </div>

                        <div className="flex gap-2.5">
                            <button className="flex-1 h-11 border-[1.5px] border-[#1A73E8] text-[#1A73E8] bg-white text-xs font-bold rounded-xl flex items-center justify-center gap-1.5 hover:bg-[#EFF6FF] transition">
                                <ShoppingCart size={14} />
                                Tambah ke Keranjang
                            </button>
                            <button className="flex-[1.4] h-11 bg-[#F97316] text-white text-xs font-bold rounded-xl hover:bg-[#EA6A0A] transition">
                                Beli Sekarang
                            </button>
                            <button className="w-11 h-11 border-[1.5px] border-gray-200 bg-white rounded-xl flex items-center justify-center hover:border-gray-300 transition">
                                <Heart size={16} className="text-[#6B7280]" />
                            </button>
                        </div>

                        <div className="grid grid-cols-3 gap-2">
                            <div className="flex flex-col items-center text-center p-2.5 bg-[#F9FAFB] rounded-lg border border-gray-100 gap-1">
                                <span className="text-lg">🚚</span>
                                <span className="text-[10px] font-bold text-[#111827]">Gratis Ongkir</span>
                                <span className="text-[9px] text-[#6B7280]">Min. Rp 100.000</span>
                            </div>
                            <div className="flex flex-col items-center text-center p-2.5 bg-[#F9FAFB] rounded-lg border border-gray-100 gap-1">
                                <span className="text-lg">🛡️</span>
                                <span className="text-[10px] font-bold text-[#111827]">Pembayaran Aman</span>
                                <span className="text-[9px] text-[#6B7280]">SSL Terenkripsi</span>
                            </div>
                            <div className="flex flex-col items-center text-center p-2.5 bg-[#F9FAFB] rounded-lg border border-gray-100 gap-1">
                                <span className="text-lg">🔄</span>
                                <span className="text-[10px] font-bold text-[#111827]">Retur 30 Hari</span>
                                <span className="text-[9px] text-[#6B7280]">Gratis retur</span>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="w-full bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden">
                    <div className="flex border-b border-gray-100">
                        <button className="px-5 py-3.5 text-sm font-semibold border-b-2 text-[#1A73E8] border-[#1A73E8]">
                            Deskripsi
                        </button>
                        <button className="px-5 py-3.5 text-sm font-semibold border-b-2 border-transparent text-[#6B7280] hover:text-[#374151] transition">
                            Spesifikasi
                        </button>
                        <button className="px-5 py-3.5 text-sm font-semibold border-b-2 border-transparent text-[#6B7280] hover:text-[#374151] transition">
                            Ulasan (21)
                        </button>
                    </div>
                    <div className="p-6 text-sm text-[#374151] leading-relaxed">
                        Headphone wireless dengan teknologi noise-cancelling terdepan. Nikmati musik favoritmu tanpa gangguan dengan kualitas suara yang memukau.
                    </div>
                </section>

                <section className="w-full bg-white rounded-2xl border border-gray-100 shadow-sm p-6">
                    <div className="w-full flex justify-between items-center mb-6">
                        <h2 className="font-bold text-base text-[#111827]">Produk Terkait</h2>
                        <span className="text-xs font-semibold text-[#1A73E8] cursor-pointer hover:underline">
                            Lihat Semua →
                        </span>
                    </div>
                    <div className="w-full grid grid-cols-4 gap-4">
                        <Card />
                        <Card />
                        <Card />
                        <Card />
                    </div>
                </section>

            </main>
        </>
    );
}