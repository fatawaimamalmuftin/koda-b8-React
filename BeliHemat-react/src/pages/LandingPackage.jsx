import elektronikImg from '../assets/elektronik.png';
import orangOlahraga from '../assets/olahraga.png';
import kopiBuku from '../assets/kopiBg.png';
import { MessageCircle } from 'lucide-react'
import Card from './../componen/Card';

export default function LandingPackage() {
    return (
        <>
            <section className="w-full flex flex-row overflow-hidden mt-4 relative h-95">

                <button className="absolute left-4 top-1/2 -translate-y-1/2 z-10 border border-white/20 text-white rounded-full w-10 h-10 flex items-center justify-center cursor-pointer hover:bg-white/10 transition">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
                    </svg>
                </button>

                <div className="w-1/2 bg-[#4F39F6] p-12 flex flex-col justify-center">
                    <div className="w-full max-w-[400px] ml-auto">
                        <h1 className="text-white text-4xl font-bold leading-tight">
                            Elektronik Pilihan, Harga Spesial
                        </h1>
                        <p className="text-white/80 text-sm mt-3 mb-6 leading-relaxed">
                            Laptop, smartphone, headphone, dan masih banyak lagi dengan diskon hingga 40%.
                        </p>
                        <button className="w-[140px] h-[44px] bg-white text-[#4F39F6] font-semibold text-xs rounded-xl hover:bg-opacity-90 transition shadow-sm flex items-center justify-center gap-1">
                            Lihat Promo <span className="text-sm">→</span>
                        </button>
                    </div>
                </div>

                <div
                    className="w-1/2 bg-cover bg-center"
                    style={{
                        backgroundImage: `linear-gradient(to right, rgba(130,0,219,0.5), rgba(130,0,219,0.5)), url(${elektronikImg})`
                    }}
                />

                <button className="absolute right-4 top-1/2 -translate-y-1/2 z-10 border border-white/20 text-white rounded-full w-10 h-10 flex items-center justify-center cursor-pointer hover:bg-white/10 transition">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                    </svg>
                </button>

                <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex items-center gap-2 z-10">
                    <span className="w-2 h-2 rounded-full bg-white/30 cursor-pointer"></span>
                    <span className="w-6 h-2 rounded-full bg-white cursor-pointer"></span>
                    <span className="w-2 h-2 rounded-full bg-white/30 cursor-pointer"></span>
                </div>
            </section>

            <main className="w-full px-28 bg-[#F9FAFB]">

                <div className="fixed bottom-75 right-5 z-[9999] flex h-14 w-14 items-center justify-center rounded-full border-2 border-[#4F39F6] bg-[#4F39F6] text-white cursor-pointer hover:bg-opacity-90 transition">
                    <MessageCircle className="w-6 h-6" />
                </div>

                <section className="w-full mt-8 p-6 bg-white rounded-2xl border border-gray-100 shadow-sm">
                    <div className="w-full flex justify-between items-center mb-6">
                        <h2 className="font-bold text-base text-[#111827]">Belanja Berdasarkan Kategori</h2>
                        <span className="text-xs font-semibold text-[#1A73E8] cursor-pointer hover:underline">
                            Lihat Semua →
                        </span>
                    </div>

                    <div className="w-full grid grid-cols-6 gap-4">
                        <div className="w-full border border-gray-100 rounded-xl p-4 flex flex-col items-center justify-center text-center hover:shadow-sm transition cursor-pointer">
                            <img src={elektronikImg} alt="Elektronik" className="w-12 h-12 object-contain mb-2" />
                            <span className="block text-xs font-bold text-[#111827]">Elektronik</span>
                            <span className="block text-[10px] text-[#6B7280] mt-0.5">7 Produk</span>
                        </div>

                        <div className="w-full border border-gray-100 rounded-xl p-4 flex flex-col items-center justify-center text-center hover:shadow-sm transition cursor-pointer">
                            <img src={elektronikImg} alt="Fashion" className="w-12 h-12 object-contain mb-2" />
                            <span className="block text-xs font-bold text-[#111827]">Fashion</span>
                            <span className="block text-[10px] text-[#6B7280] mt-0.5">5 Produk</span>
                        </div>

                        <div className="w-full border border-gray-100 rounded-xl p-4 flex flex-col items-center justify-center text-center hover:shadow-sm transition cursor-pointer">
                            <img src={elektronikImg} alt="Rumah & Dapur" className="w-12 h-12 object-contain mb-2" />
                            <span className="block text-xs font-bold text-[#111827]">Rumah & Dapur</span>
                            <span className="block text-[10px] text-[#6B7280] mt-0.5">4 Produk</span>
                        </div>

                        <div className="w-full border border-gray-100 rounded-xl p-4 flex flex-col items-center justify-center text-center hover:shadow-sm transition cursor-pointer">
                            <img src={elektronikImg} alt="Kecantikan" className="w-12 h-12 object-contain mb-2" />
                            <span className="block text-xs font-bold text-[#111827]">Kecantikan</span>
                            <span className="block text-[10px] text-[#6B7280] mt-0.5">2 Produk</span>
                        </div>

                        <div className="w-full border border-gray-100 rounded-xl p-4 flex flex-col items-center justify-center text-center hover:shadow-sm transition cursor-pointer">
                            <img src={elektronikImg} alt="Olahraga" className="w-12 h-12 object-contain mb-2" />
                            <span className="block text-xs font-bold text-[#111827]">Olahraga</span>
                            <span className="block text-[10px] text-[#6B7280] mt-0.5">3 Produk</span>
                        </div>

                        <div className="w-full border border-gray-100 rounded-xl p-4 flex flex-col items-center justify-center text-center hover:shadow-sm transition cursor-pointer">
                            <img src={elektronikImg} alt="Buku & Alat Tulis" className="w-12 h-12 object-contain mb-2" />
                            <span className="block text-xs font-bold text-[#111827]">Buku & Tulis</span>
                            <span className="block text-[10px] text-[#6B7280] mt-0.5">2 Produk</span>
                        </div>
                    </div>
                </section>

                <section className="w-full mt-8 p-6 bg-white rounded-2xl border border-gray-100 shadow-sm">
                    <div className="w-full flex justify-between items-center mb-6">
                        <div className="flex items-center gap-3">
                            <span className="bg-[#DC2626] text-white text-[10px] font-bold rounded-md px-2.5 py-1 flex items-center gap-1">
                                ⚡ Flash Deal
                            </span>
                            <div className="flex items-center gap-1.5 text-[#4B5563] text-xs font-medium">
                                <span>⏰</span> Berakhir dalam: <span className="font-bold bg-gray-100 px-1.5 py-0.5 rounded text-[#DC2626]">02 : 14 : 55</span>
                            </div>
                        </div>
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

                <section className="w-full grid grid-cols-2 gap-4 mt-8">
                    <div
                        className="w-full h-[140px] bg-cover bg-center rounded-xl flex items-center p-6 object-contain"
                        style={{
                            backgroundImage: `linear-gradient(to right, rgba(0,0,0,0.7) 40%, rgba(0,0,0,0.2)), url(${orangOlahraga})`
                        }}
                    >
                        <div className="w-full max-w-[280px] text-white flex flex-col justify-between h-full">
                            <div>
                                <span className="text-white/70 text-[10px] font-bold tracking-wider block uppercase">Koleksi Pilihan</span>
                                <h3 className="font-bold text-base mt-0.5 leading-snug">Diskon s/d 50% untuk Perlengkapan Olahraga</h3>
                            </div>
                            <button className="w-fit bg-[#111827] text-white text-[10px] font-bold rounded-lg px-4 py-2 hover:bg-opacity-90 transition">
                                Belanja Sekarang
                            </button>
                        </div>
                    </div>

                    <div
                        className="w-full h-[140px] bg-cover bg-center rounded-xl flex items-center p-6 object-contain"
                        style={{
                            backgroundImage: `linear-gradient(to right, rgba(26,115,232,0.4) 40%, rgba(26,115,232,0.2)),url(${kopiBuku})`
                        }}>
                        <div className="w-full max-w-[280px] text-white flex flex-col justify-between h-full">
                            <div>
                                <span className="text-white/70 text-[10px] font-bold tracking-wider block uppercase">Elektronik Pilihan</span>
                                <h3 className="font-bold text-base mt-0.5 leading-snug">Harga Terbaik untuk Peralatan Rumah</h3>
                            </div>
                            <button className="w-fit bg-[#1A73E8] text-white text-[10px] font-bold rounded-lg px-4 py-2 hover:bg-[#1557b5] transition">
                                Lihat Produk
                            </button>
                        </div>
                    </div>
                </section>

                <section className="w-full mt-8 p-6 bg-white rounded-2xl border border-gray-100 shadow-sm">
                    <div className="w-full flex justify-between items-center mb-6">
                        <h2 className="font-bold text-base text-[#111827] flex items-center gap-1">
                            <span>🚀</span> Produk Terbaru
                        </h2>
                        <span className="text-xs font-semibold text-[#1A73E8] cursor-pointer hover:underline">
                            Lihat Semua →
                        </span>
                    </div>

                    <div className="w-full grid grid-cols-4 gap-4">
                        <div className="w-full border border-gray-100 rounded-xl overflow-hidden bg-white hover:shadow-sm transition">
                            <div className="relative w-full h-[220px] bg-gray-50 flex items-center justify-center">
                                <div className="absolute top-2 left-2 z-10 bg-[#DC2626] text-white text-[9px] font-bold px-1.5 py-0.5 rounded-md">
                                    -31%
                                </div>
                                <img src={elektronikImg} className="w-full h-full object-cover" />
                            </div>
                            <div className="w-full p-3 flex flex-col justify-between h-[120px]">
                                <div>
                                    <span className="text-[9px] text-[#9CA3AF] font-bold uppercase tracking-wider">SoundWave</span>
                                    <h3 className="text-xs font-semibold text-[#111827] truncate mt-0.5">Headphone Wireless Premium</h3>
                                    <div className="flex items-center gap-0.5 text-[#FFB200] text-[10px] mt-1">
                                        <span>★</span><span>★</span><span>★</span><span>★</span><span className="text-gray-200">★</span>
                                        <span className="text-[#9CA3AF] ml-1">4.8 (512)</span>
                                    </div>
                                </div>
                                <div className="flex items-baseline gap-1.5 mt-2">
                                    <span className="text-xs font-bold text-[#1A73E8]">Rp 450.000</span>
                                    <span className="text-[10px] text-[#9CA3AF] line-through">Rp 562.500</span>
                                </div>
                            </div>
                        </div>

                        <div className="w-full border border-gray-100 rounded-xl overflow-hidden bg-white hover:shadow-sm transition">
                            <div className="relative w-full h-[220px] bg-gray-50 flex items-center justify-center">
                                <div className="absolute top-2 left-2 z-10 bg-[#DC2626] text-white text-[9px] font-bold px-1.5 py-0.5 rounded-md">
                                    -31%
                                </div>
                                <img src={elektronikImg} className="w-full h-full object-cover" />
                            </div>
                            <div className="w-full p-3 flex flex-col justify-between h-[120px]">
                                <div>
                                    <span className="text-[9px] text-[#9CA3AF] font-bold uppercase tracking-wider">SoundWave</span>
                                    <h3 className="text-xs font-semibold text-[#111827] truncate mt-0.5">Headphone Wireless Premium</h3>
                                    <div className="flex items-center gap-0.5 text-[#FFB200] text-[10px] mt-1">
                                        <span>★</span><span>★</span><span>★</span><span>★</span><span className="text-gray-200">★</span>
                                        <span className="text-[#9CA3AF] ml-1">4.8 (512)</span>
                                    </div>
                                </div>
                                <div className="flex items-baseline gap-1.5 mt-2">
                                    <span className="text-xs font-bold text-[#1A73E8]">Rp 450.000</span>
                                    <span className="text-[10px] text-[#9CA3AF] line-through">Rp 562.500</span>
                                </div>
                            </div>
                        </div>

                        <div className="w-full border border-gray-100 rounded-xl overflow-hidden bg-white hover:shadow-sm transition">
                            <div className="relative w-full h-[220px] bg-gray-50 flex items-center justify-center">
                                <div className="absolute top-2 left-2 z-10 bg-[#DC2626] text-white text-[9px] font-bold px-1.5 py-0.5 rounded-md">
                                    -31%
                                </div>
                                <img src={elektronikImg} className="w-full h-full object-cover" />
                            </div>
                            <div className="w-full p-3 flex flex-col justify-between h-[120px]">
                                <div>
                                    <span className="text-[9px] text-[#9CA3AF] font-bold uppercase tracking-wider">SoundWave</span>
                                    <h3 className="text-xs font-semibold text-[#111827] truncate mt-0.5">Headphone Wireless Premium</h3>
                                    <div className="flex items-center gap-0.5 text-[#FFB200] text-[10px] mt-1">
                                        <span>★</span><span>★</span><span>★</span><span>★</span><span className="text-gray-200">★</span>
                                        <span className="text-[#9CA3AF] ml-1">4.8 (512)</span>
                                    </div>
                                </div>
                                <div className="flex items-baseline gap-1.5 mt-2">
                                    <span className="text-xs font-bold text-[#1A73E8]">Rp 450.000</span>
                                    <span className="text-[10px] text-[#9CA3AF] line-through">Rp 562.500</span>
                                </div>
                            </div>
                        </div>

                        <div className="w-full border border-gray-100 rounded-xl overflow-hidden bg-white hover:shadow-sm transition">
                            <div className="relative w-full h-[220px] bg-gray-50 flex items-center justify-center">
                                <div className="absolute top-2 left-2 z-10 bg-[#DC2626] text-white text-[9px] font-bold px-1.5 py-0.5 rounded-md">
                                    -31%
                                </div>
                                <img src={elektronikImg} className="w-full h-full object-cover" />
                            </div>
                            <div className="w-full p-3 flex flex-col justify-between h-[120px]">
                                <div>
                                    <span className="text-[9px] text-[#9CA3AF] font-bold uppercase tracking-wider">SoundWave</span>
                                    <h3 className="text-xs font-semibold text-[#111827] truncate mt-0.5">Headphone Wireless Premium</h3>
                                    <div className="flex items-center gap-0.5 text-[#FFB200] text-[10px] mt-1">
                                        <span>★</span><span>★</span><span>★</span><span>★</span><span className="text-gray-200">★</span>
                                        <span className="text-[#9CA3AF] ml-1">4.8 (512)</span>
                                    </div>
                                </div>
                                <div className="flex items-baseline gap-1.5 mt-2">
                                    <span className="text-xs font-bold text-[#1A73E8]">Rp 450.000</span>
                                    <span className="text-[10px] text-[#9CA3AF] line-through">Rp 562.500</span>
                                </div>
                            </div>
                        </div>

                        <div className="w-full border border-gray-100 rounded-xl overflow-hidden bg-white hover:shadow-sm transition">
                            <div className="relative w-full h-[220px] bg-gray-50 flex items-center justify-center">
                                <div className="absolute top-2 left-2 z-10 bg-[#DC2626] text-white text-[9px] font-bold px-1.5 py-0.5 rounded-md">
                                    -31%
                                </div>
                                <img src={elektronikImg} className="w-full h-full object-cover" />
                            </div>
                            <div className="w-full p-3 flex flex-col justify-between h-[120px]">
                                <div>
                                    <span className="text-[9px] text-[#9CA3AF] font-bold uppercase tracking-wider">SoundWave</span>
                                    <h3 className="text-xs font-semibold text-[#111827] truncate mt-0.5">Headphone Wireless Premium</h3>
                                    <div className="flex items-center gap-0.5 text-[#FFB200] text-[10px] mt-1">
                                        <span>★</span><span>★</span><span>★</span><span>★</span><span className="text-gray-200">★</span>
                                        <span className="text-[#9CA3AF] ml-1">4.8 (512)</span>
                                    </div>
                                </div>
                                <div className="flex items-baseline gap-1.5 mt-2">
                                    <span className="text-xs font-bold text-[#1A73E8]">Rp 450.000</span>
                                    <span className="text-[10px] text-[#9CA3AF] line-through">Rp 562.500</span>
                                </div>
                            </div>
                        </div>

                        <div className="w-full border border-gray-100 rounded-xl overflow-hidden bg-white hover:shadow-sm transition">
                            <div className="relative w-full h-[220px] bg-gray-50 flex items-center justify-center">
                                <div className="absolute top-2 left-2 z-10 bg-[#DC2626] text-white text-[9px] font-bold px-1.5 py-0.5 rounded-md">
                                    -31%
                                </div>
                                <img src={elektronikImg} className="w-full h-full object-cover" />
                            </div>
                            <div className="w-full p-3 flex flex-col justify-between h-[120px]">
                                <div>
                                    <span className="text-[9px] text-[#9CA3AF] font-bold uppercase tracking-wider">SoundWave</span>
                                    <h3 className="text-xs font-semibold text-[#111827] truncate mt-0.5">Headphone Wireless Premium</h3>
                                    <div className="flex items-center gap-0.5 text-[#FFB200] text-[10px] mt-1">
                                        <span>★</span><span>★</span><span>★</span><span>★</span><span className="text-gray-200">★</span>
                                        <span className="text-[#9CA3AF] ml-1">4.8 (512)</span>
                                    </div>
                                </div>
                                <div className="flex items-baseline gap-1.5 mt-2">
                                    <span className="text-xs font-bold text-[#1A73E8]">Rp 450.000</span>
                                    <span className="text-[10px] text-[#9CA3AF] line-through">Rp 562.500</span>
                                </div>
                            </div>
                        </div>

                        <div className="w-full border border-gray-100 rounded-xl overflow-hidden bg-white hover:shadow-sm transition">
                            <div className="relative w-full h-[220px] bg-gray-50 flex items-center justify-center">
                                <div className="absolute top-2 left-2 z-10 bg-[#DC2626] text-white text-[9px] font-bold px-1.5 py-0.5 rounded-md">
                                    -31%
                                </div>
                                <img src={elektronikImg} className="w-full h-full object-cover" />
                            </div>
                            <div className="w-full p-3 flex flex-col justify-between h-[120px]">
                                <div>
                                    <span className="text-[9px] text-[#9CA3AF] font-bold uppercase tracking-wider">SoundWave</span>
                                    <h3 className="text-xs font-semibold text-[#111827] truncate mt-0.5">Headphone Wireless Premium</h3>
                                    <div className="flex items-center gap-0.5 text-[#FFB200] text-[10px] mt-1">
                                        <span>★</span><span>★</span><span>★</span><span>★</span><span className="text-gray-200">★</span>
                                        <span className="text-[#9CA3AF] ml-1">4.8 (512)</span>
                                    </div>
                                </div>
                                <div className="flex items-baseline gap-1.5 mt-2">
                                    <span className="text-xs font-bold text-[#1A73E8]">Rp 450.000</span>
                                    <span className="text-[10px] text-[#9CA3AF] line-through">Rp 562.500</span>
                                </div>
                            </div>
                        </div>

                    </div>
                </section>

                <section className="w-full mt-8 p-6 bg-white rounded-2xl border border-gray-100 shadow-sm">
                    <div className="w-full flex justify-between items-center mb-6">
                        <h2 className="font-bold text-base text-[#111827]">Produk Unggulan</h2>
                        <span className="text-xs font-semibold text-[#1A73E8] cursor-pointer hover:underline">
                            Lihat Semua →
                        </span>
                    </div>

                    <div className="w-full grid grid-cols-4 gap-4">

                        <Card />
                        <Card />
                        <Card />
                        <Card />
                        <Card />
                        <Card />

                    </div>
                </section>

                <section className="w-full mt-12 mb-8 py-8 px-6 bg-white border border-gray-100 rounded-2xl shadow-sm text-center">
                    <h2 className="font-bold text-base text-[#111827] mb-8">Kenapa Belanja di BeliMudah?</h2>

                    <div className="w-full grid grid-cols-4 gap-4 max-w-300 mx-auto">
                        <div className="flex flex-col items-center p-2">
                            <span className="text-3xl mb-2 block">🚚</span>
                            <h3 className="text-xs font-bold text-[#111827] mb-1">Gratis Ongkir</h3>
                            <p className="text-[10px] text-[#6B7280] leading-relaxed text-center">Nikmati layanan pengiriman tanpa biaya tambahan ke seluruh wilayah.</p>
                        </div>

                        <div className="flex flex-col items-center p-2">
                            <span className="text-3xl mb-2 block">🛡️</span>
                            <h3 className="text-xs font-bold text-[#111827] mb-1">Pembayaran Aman</h3>
                            <p className="text-[10px] text-[#6B7280] leading-relaxed text-center">Menyediakan berbagai opsi metode transaksi yang terverifikasi dan aman.</p>
                        </div>

                        <div className="flex flex-col items-center p-2">
                            <span className="text-3xl mb-2 block">🔄</span>
                            <h3 className="text-xs font-bold text-[#111827] mb-1">Retur Mudah</h3>
                            <p className="text-[10px] text-[#6B7280] leading-relaxed text-center">Proses klaim pengembalian barang mudah dan cepat tanpa ribet.</p>
                        </div>

                        <div className="flex flex-col items-center p-2">
                            <span className="text-3xl mb-2 block">💬</span>
                            <h3 className="text-xs font-bold text-[#111827] mb-1">CS 24/7</h3>
                            <p className="text-[10px] text-[#6B7280] leading-relaxed text-center">Tim support kami siap membantu menjawab kendala belanja kamu kapan saja.</p>
                        </div>
                    </div>
                </section>

            </main >
        </>
    )
};