import elektronikImg from '../assets/elektronik.png';
import orangOlahraga from '../assets/olahraga.png';
import kopiBuku from '../assets/kopiBg.png';
import { MessageCircle, ChevronRight, ChevronLeft } from 'lucide-react';
import Card from './../componen/Card';
import { useState } from 'react';

export default function LandingPackage() {
    const [geser, setGeser] = useState(0);

    function kiri() {
        setGeser((event) => (event === 0 ? banner.length - 1 : event - 1))
    }

    function kanan() {
        setGeser((event) => (event === banner.length - 1 ? 0 : event + 1))
    }

    const banner = [
        {
            title: "Elektronik Pilihan, Harga Spesial",
            description: "Laptop, smartphone, headphone, dan masih banyak lagi dengan diskon hingga 40%",
            image: elektronikImg,
            bgColor: "bg-[#4F39F6]",
            warnaImages: "linear-gradient(to right, rgba(130,0,219,0.6), rgba(130,0,219,0.2))"
        },
        {
            title: "Gaya Hidup Sehat, Harga Spesial",
            description: "Laptop, smartphone, headphone, dan masih banyak lagi dengan diskon hingga 50%",
            image: orangOlahraga,
            bgColor: "bg-[#111820]",
            warnaImages: "linear-gradient(to right, rgba(0,0,0,0.6), rgba(0,0,0,0.2))"
        },
        {
            title: "Enjoy The Live, Harga Spesial",
            description: "Laptop, smartphone, headphone, dan masih banyak lagi dengan diskon hingga 60%",
            image: kopiBuku,
            bgColor: "bg-[#1A73A0]",
            warnaImages: "linear-gradient(to right, rgba(266,115,232,0.6), rgba(266,115,232,0.2))"
        },
    ];

    return (
        <>
            <section className='w-full relative h-64 sm:h-80 md:h-96 mt-2 overflow-hidden bg-gray-200'>
                <div className='w-full h-full flex transition-transform duration-500 ease-out'
                    style={{ transform: `translateX(-${geser * 100}%)` }}>
                    {banner.map((item, index) => (
                        <div key={index} className='w-full h-full flex flex-col md:flex-row shrink-0'>
                            <div className={`w-full md:w-1/2 ${item.bgColor} p-6 sm:p-8 md:p-12 flex flex-col justify-center`}>
                                <div className='w-full md:max-w-md md:ml-auto text-center md:text-left'>
                                    <h1 className='text-white text-xl sm:text-2xl md:text-3xl font-bold leading-tight'>
                                        {item.title}
                                    </h1>
                                    <p className='text-white/80 text-xs sm:text-sm mt-2 md:mt-3 mb-4 md:mb-6 leading-relaxed max-w-prose mx-auto md:mx-0'>
                                        {item.description}
                                    </p>
                                    <button className='w-32 sm:w-35 h-10 sm:h-11 bg-white text-gray-900 font-sans text-xs rounded-xl hover:bg-opacity-90 shadow-sm flex items-center justify-center gap-1 cursor-pointer mx-auto md:mx-0 transition'>
                                        Lihat Promo <span className='text-sm'>→</span>
                                    </button>
                                </div>
                            </div>
                            <div
                                className="w-full md:w-1/2 h-full hidden md:block bg-cover bg-center"
                                style={{ backgroundImage: `${item.warnaImages}, url(${item.image})` }}
                            />
                        </div>
                    ))}
                </div>

                <button
                    onClick={kiri}
                    className='absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 z-10 border border-white/20 text-white rounded-full w-8 h-8 sm:w-10 sm:h-10 flex items-center justify-center cursor-pointer hover:bg-white/10 transition'>
                    <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6" />
                </button>

                <button
                    onClick={kanan}
                    className='absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 z-10 border border-white/20 text-white rounded-full w-8 h-8 sm:w-10 sm:h-10 flex justify-center items-center cursor-pointer hover:bg-white/10 transition'>
                    <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6" />
                </button>

                <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex items-center gap-2 z-10">
                    {banner.map((_, index) => (
                        <button
                            key={index}
                            onClick={() => setGeser(index)}
                            className={`h-1.5 sm:h-2 rounded-full transition-all duration-300 cursor-pointer ${geser === index ? "w-5 sm:w-6 bg-white" : "w-1.5 sm:w-2 bg-white/30"}`}
                        />
                    ))}
                </div>
            </section>

            <main className="w-full px-4 sm:px-8 md:px-16 lg:px-24 bg-white relative">

                <div className="fixed bottom-6 right-4 sm:right-6 z-50 flex h-12 w-12 sm:h-14 sm:w-14 items-center justify-center rounded-full border-2 border-[#4F39F6] bg-[#4F39F6] text-white cursor-pointer hover:scale-105 active:scale-95 transition-all shadow-lg">
                    <MessageCircle className="w-5 h-5 sm:w-6 sm:h-6" />
                </div>

                <section className="w-full mt-6 sm:mt-8 p-4 sm:p-6 bg-white rounded-2xl border border-gray-100 shadow-sm">
                    <div className="w-full flex justify-between items-center mb-4 sm:mb-6">
                        <h2 className="font-bold text-sm sm:text-base text-[#111827]">Belanja Berdasarkan Kategori</h2>
                        <span className="text-[11px] sm:text-xs font-semibold text-[#1A73E8] cursor-pointer hover:underline">
                            Lihat Semua →
                        </span>
                    </div>

                    <div className="w-full grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 sm:gap-4">
                        {['Elektronik', 'Fashion', 'Rumah & Dapur', 'Kecantikan', 'Olahraga', 'Buku & Tulis'].map((kat, i) => (
                            <div key={i} className="w-full border border-gray-100 rounded-xl p-3 sm:p-4 flex flex-col items-center justify-center text-center hover:shadow-md transition cursor-pointer">
                                <img src={elektronikImg} alt={kat} className="w-10 h-10 sm:w-12 sm:h-12 object-contain mb-2" />
                                <span className="block text-xs font-bold text-[#111827] line-clamp-1">{kat}</span>
                                <span className="block text-[10px] text-[#6B7280] mt-0.5">{5 + i} Produk</span>
                            </div>
                        ))}
                    </div>
                </section>

                <section className="w-full mt-6 sm:mt-8 p-4 sm:p-6 bg-white rounded-2xl border border-gray-100 shadow-sm">
                    <div className="w-full flex flex-col sm:flex-row sm:justify-between sm:items-center gap-3 mb-4 sm:mb-6">
                        <div className="flex flex-wrap items-center gap-2 sm:gap-3">
                            <span className="bg-[#DC2626] text-white text-[9px] sm:text-[10px] font-bold rounded-md px-2.5 py-1 flex items-center gap-1">
                                ⚡ Flash Deal
                            </span>
                            <div className="flex items-center gap-1.5 text-[#4B5563] text-xs font-medium">
                                <span>⏰</span> Berakhir dalam: <span className="font-bold bg-gray-100 px-1.5 py-0.5 rounded text-[#DC2626]">02 : 14 : 55</span>
                            </div>
                        </div>
                        <span className="text-[11px] sm:text-xs font-semibold text-[#1A73E8] cursor-pointer hover:underline self-end sm:self-auto">
                            Lihat Semua →
                        </span>
                    </div>

                    <div className="w-full grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4">
                        <Card /><Card /><Card /><Card />
                    </div>
                </section>

                <section className="w-full grid grid-cols-1 md:grid-cols-2 gap-4 mt-6 sm:mt-8">
                    <div className="w-full min-h-35 bg-cover bg-center rounded-xl flex items-center p-4 sm:p-6"
                        style={{ backgroundImage: `linear-gradient(to right, rgba(0,0,0,0.8) 50%, rgba(0,0,0,0.2)), url(${orangOlahraga})` }}>
                        <div className="w-full max-w-70 text-white flex flex-col justify-between h-full gap-4">
                            <div>
                                <span className="text-white/70 text-[9px] font-bold tracking-wider block uppercase">Koleksi Pilihan</span>
                                <h3 className="font-bold text-sm sm:text-base mt-0.5 leading-snug">Diskon s/d 50% untuk Perlengkapan Olahraga</h3>
                            </div>
                            <button className="w-fit bg-[#111827] text-white text-[10px] font-bold rounded-lg px-3 sm:px-4 py-2 hover:bg-opacity-90 transition">
                                Belanja Sekarang
                            </button>
                        </div>
                    </div>

                    <div className="w-full min-h-35 bg-cover bg-center rounded-xl flex items-center p-4 sm:p-6"
                        style={{ backgroundImage: `linear-gradient(to right, rgba(26,115,232,0.6) 50%, rgba(26,115,232,0.2)), url(${kopiBuku})` }}>
                        <div className="w-full max-w-70 text-white flex flex-col justify-between h-full gap-4">
                            <div>
                                <span className="text-white/70 text-[9px] font-bold tracking-wider block uppercase">Elektronik Pilihan</span>
                                <h3 className="font-bold text-sm sm:text-base mt-0.5 leading-snug">Harga Terbaik untuk Peralatan Rumah</h3>
                            </div>
                            <button className="w-fit bg-[#1A73E8] text-white text-[10px] font-bold rounded-lg px-3 sm:px-4 py-2 hover:bg-[#1557b5] transition">
                                Lihat Produk
                            </button>
                        </div>
                    </div>
                </section>

                <section className="w-full mt-6 sm:mt-8 p-4 sm:p-6 bg-white rounded-2xl border border-gray-100 shadow-sm">
                    <div className="w-full flex justify-between items-center mb-4 sm:mb-6">
                        <h2 className="font-bold text-sm sm:text-base text-[#111827] flex items-center gap-1">
                            <span>🚀</span> Produk Terbaru
                        </h2>
                        <span className="text-[11px] sm:text-xs font-semibold text-[#1A73E8] cursor-pointer hover:underline">
                            Lihat Semua →
                        </span>
                    </div>

                    <div className="w-full grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4">
                        {[1, 2, 3, 4].map((item) => (
                            <div key={item} className="w-full border border-gray-100 rounded-xl overflow-hidden bg-white hover:shadow-md transition flex flex-col">
                                <div className="relative w-full pt-[100%] bg-gray-50">
                                    <div className="absolute top-2 left-2 z-10 bg-[#DC2626] text-white text-[9px] font-bold px-1.5 py-0.5 rounded-md">
                                        -31%
                                    </div>
                                    <img src={elektronikImg} className="absolute inset-0 w-full h-full object-cover" alt="produk" />
                                </div>
                                <div className="w-full p-3 flex flex-col justify-between grow gap-2">
                                    <div>
                                        <span className="text-[9px] text-[#9CA3AF] font-bold uppercase tracking-wider block">SoundWave</span>
                                        <h3 className="text-xs font-semibold text-[#111827] line-clamp-2 mt-0.5 min-h-8">Headphone Wireless Premium Long Name</h3>
                                        <div className="flex flex-wrap items-center gap-1 text-[#FFB200] text-[10px] mt-1">
                                            <div className="flex"><span>★</span><span>★</span><span>★</span><span>★</span><span className="text-gray-200">★</span></div>
                                            <span className="text-[#9CA3AF]">4.8 (512)</span>
                                        </div>
                                    </div>
                                    <div className="flex flex-wrap items-baseline gap-1">
                                        <span className="text-xs font-bold text-[#1A73E8]">Rp 450.000</span>
                                        <span className="text-[9px] text-[#9CA3AF] line-through">Rp 562.500</span>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </section>

                <section className="w-full mt-6 sm:mt-8 p-4 sm:p-6 bg-white rounded-2xl border border-gray-100 shadow-sm">
                    <div className="w-full flex justify-between items-center mb-4 sm:mb-6">
                        <h2 className="font-bold text-sm sm:text-base text-[#111827]">Produk Unggulan</h2>
                        <span className="text-[11px] sm:text-xs font-semibold text-[#1A73E8] cursor-pointer hover:underline">
                            Lihat Semua →
                        </span>
                    </div>

                    <div className="w-full grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4">
                        <Card /><Card /><Card /><Card />
                    </div>
                </section>

                <section className="w-full mt-8 sm:mt-12 mb-8 py-6 sm:py-8 px-4 bg-white border border-gray-100 rounded-2xl shadow-sm text-center">
                    <h2 className="font-bold text-sm sm:text-base text-[#111827] mb-6 sm:mb-8">Kenapa Belanja di BeliMudah?</h2>

                    <div className="w-full grid grid-cols-2 md:grid-cols-4 gap-4 max-w-5xl mx-auto">
                        {[
                            { icon: "🚚", title: "Gratis Ongkir", desc: "Nikmati layanan pengiriman tanpa biaya tambahan ke seluruh wilayah." },
                            { icon: "🛡️", title: "Pembayaran Aman", desc: "Menyediakan berbagai opsi metode transaksi yang terverifikasi." },
                            { icon: "🔄", title: "Retur Mudah", desc: "Proses klaim pengembalian barang mudah dan cepat tanpa ribet." },
                            { icon: "💬", title: "CS 24/7", desc: "Tim support kami siap membantu menjawab kendala belanja kamu." }
                        ].map((feat, idx) => (
                            <div key={idx} className="flex flex-col items-center p-2">
                                <span className="text-2xl sm:text-3xl mb-1.5 block">{feat.icon}</span>
                                <h3 className="text-xs font-bold text-[#111827] mb-1">{feat.title}</h3>
                                <p className="text-[10px] text-[#6B7280] leading-relaxed text-center max-w-45">{feat.desc}</p>
                            </div>
                        ))}
                    </div>
                </section>

            </main>
        </>
    )
}