import elektronikImg from '../assets/elektronik.png';
import orangOlahraga from '../assets/olahraga.png';
import kopiBuku from '../assets/kopiBg.png';
import headSetBgKuning from '../assets/heatsetBgKuning.png';
import phone from '../assets/hape.png';
import sepatuMerah from '../assets/sepatuMerah.png';
import jam from '../assets/jam.png';
import tas from '../assets/tasBiru.png';
import masinElektronik from '../assets/elektronikMesin.png';
import tablet from '../assets/tabLayarMerah.png';
import woman from '../assets/orangCewe.png';
import botolCoklat from '../assets/botolCoklat.png';
import gambarKopi from '../assets/gambarKopi.png';
import fasion from '../assets/fasion.png';
import dapur from '../assets/dapur.png';
import kecantikan from '../assets/kecantikan.png';
import perpus from '../assets/BukuTulis.png';


import { MessageCircle, ChevronRight, ChevronLeft } from 'lucide-react';
import Card from '../componens/Card';
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
            warnaImages: "linear-gradient(to right, rgba(130,0,219,0.6), rgba(130,0,219,0.2))",
            id: 1,
        },
        {
            title: "Gaya Hidup Sehat, Harga Spesial",
            description: "Laptop, smartphone, headphone, dan masih banyak lagi dengan diskon hingga 50%",
            image: orangOlahraga,
            bgColor: "bg-[#111820]",
            warnaImages: "linear-gradient(to right, rgba(0,0,0,0.6), rgba(0,0,0,0.2))",
            id: 2,
        },
        {
            title: "Enjoy The Live, Harga Spesial",
            description: "Laptop, smartphone, headphone, dan masih banyak lagi dengan diskon hingga 60%",
            image: kopiBuku,
            bgColor: "bg-[#1A73A0]",
            warnaImages: "linear-gradient(to right, rgba(266,115,232,0.6), rgba(266,115,232,0.2))",
            id: 3,
        },
    ];

    const daftarKategori = [
        { nama: 'Elektronik', image: elektronikImg, totalProduk: 7 },
        { nama: 'Fashion', image: fasion, totalProduk: 5 },
        { nama: 'Rumah & Dapur', image: dapur, totalProduk: 4 },
        { nama: 'Kecantikan', image: kecantikan, totalProduk: 2 },
        { nama: 'Olahraga', image: orangOlahraga, totalProduk: 3 },
        { nama: 'Buku & Tulis', image: perpus, totalProduk: 2 },
    ];

    const flashDeal = [
        {
            discount: "-31%",
            brand: "SoundWave",
            name: "Headphone Wireless Premium",
            image: headSetBgKuning,
            rating: "4.8",
            reviews: "512",
            price: 450000,
            originalPrice: 650000,
        },
        {
            discount: "-16%",
            brand: "PhoneX",
            name: "Smartphone 5G Ultra",
            image: phone,
            rating: "4.6",
            reviews: "890",
            price: 4200000,
            originalPrice: 5000000,
        },
        {
            discount: "-20%",
            brand: "WristTech",
            name: "Smartwatch Series 5",
            image: jam,
            rating: "4.4",
            reviews: "324",
            price: 2800000,
            originalPrice: 3500000,
        },
        {
            discount: "-27%",
            brand: "SportPro",
            name: "Sneakers Sport Runfast",
            image: sepatuMerah,
            rating: "4.6",
            reviews: "445",
            price: 550000,
            originalPrice: 750000,
        }
    ]

    const produkTerbaru = [
        {
            discount: "-31%",
            brand: "SoundWave",
            name: "Headphone Wireless Premium",
            image: headSetBgKuning,
            rating: "4.8",
            reviews: "512",
            price: 450000,
            originalPrice: 650000,
        },
        {
            discount: "-16%",
            brand: "PhoneX",
            name: "Smartphone 5G Ultra",
            image: phone,
            rating: "4.6",
            reviews: "890",
            price: 4200000,
            originalPrice: 5000000,
        },
        {
            discount: "Baru",
            brand: "UrbanBag",
            name: "Tas Ransel Laptop Waterproof",
            image: tas,
            rating: "4.5",
            reviews: "234",
            price: 350000,
        },
        {
            discount: "Baru",
            brand: "BlendPro",
            name: "Blender Portable Mini",
            image: masinElektronik,
            rating: "4.2",
            reviews: "567",
            price: 189000,
        },
        {
            discount: "-20%",
            brand: "TabTech",
            name: "Tablet 10.5 Wifi +5G",
            image: tablet,
            rating: "4.5",
            reviews: "345",
            price: 3200000,
            originalPrice: 4000000,
        },
        {
            discount: "-25%",
            brand: "FashionID",
            name: "Dress Floral Midi",
            image: woman,
            rating: "4.5",
            reviews: "312",
            price: 295000,
            originalPrice: 395000,
        },
        {
            discount: "Baru",
            brand: "AromaWell",
            name: "Minyak Esensial Lavender Set",
            image: botolCoklat,
            rating: "4.8",
            reviews: "456",
            price: 145000,
        },
    ]

    const produkUnggulan = [
        {
            discount: "-31%",
            brand: "SoundWave",
            name: "Headphone Wireless Premium",
            image: headSetBgKuning,
            rating: "4.8",
            reviews: "512",
            price: 450000,
            originalPrice: 650000,
        },
        {
            discount: "-16%",
            brand: "PhoneX",
            name: "Smartphone 5G Ultra",
            image: phone,
            rating: "4.6",
            reviews: "890",
            price: 4200000,
            originalPrice: 5000000,
        },
        {
            discount: "-20%",
            brand: "WristTech",
            name: "Smartwatch Series 5",
            image: jam,
            rating: "4.4",
            reviews: "324",
            price: 2800000,
            originalPrice: 3500000,
        },
        {
            discount: "-27%",
            brand: "SportPro",
            name: "Sneakers Sport Runfast",
            image: sepatuMerah,
            rating: "4.6",
            reviews: "445",
            price: 550000,
            originalPrice: 750000,
        },
        {
            discount: "-27%",
            brand: "BrewMaster",
            name: "Coffee Maker Otomatis",
            image: gambarKopi,
            rating: "4.4",
            reviews: "189",
            price: 875000,
            originalPrice: 1200000,
        },
        {
            discount: "-25%",
            brand: "FashionID",
            name: "Dress Floral Midi",
            image: woman,
            rating: "4.5",
            reviews: "312",
            price: 295000,
            originalPrice: 395000,
        },
    ]


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

                <a
                    href="https://wa.me/6281364431365?text=Halo BeliMudah, saya butuh bantuan terkait pesanan"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="fixed bottom-6 right-4 sm:right-6 z-50 flex h-12 w-12 sm:h-14 sm:w-14 items-center justify-center rounded-full border-2 border-[#4F39F6] bg-[#4F39F6] text-white cursor-pointer hover:scale-105 active:scale-95 transition-all shadow-lg"
                >
                    <MessageCircle className="w-5 h-5 sm:w-6 sm:h-6" />
                </a>

                <section className="w-full mt-6 sm:mt-8 p-4 sm:p-6 bg-white rounded-2xl border border-gray-100 shadow-sm">
                    <div className="w-full flex justify-between items-center mb-4 sm:mb-6">
                        <h2 className="font-bold text-sm sm:text-base text-[#111827]">Belanja Berdasarkan Kategori</h2>
                        <span className="text-[11px] sm:text-xs font-semibold text-[#1A73E8] cursor-pointer hover:underline">
                            Lihat Semua →
                        </span>
                    </div>

                    <div className="w-full grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 sm:gap-4">
                        {daftarKategori.map((kat, index) => (
                            <div key={index} className='w-full border border-gray-100 rounded-xl p-3 sm:p-4 flex flex-col items-center justify-center text-center hover:shadow-md transition cursor-pointer"'>
                                <img src={kat.image} alt={kat.nama} className="w-10 h-10 sm:w-12 sm:h-12 object-contain mb-2" />
                                <span className="block text-xs font-bold text-[#111827] line-clamp-1">{kat.nama}</span>
                                <span className="block text-[10px] text-[#6B7280] mt-0.5">{kat.totalProduk} Produk</span>
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
                        {flashDeal.map((item, index) => (
                            <Card key={index} {...item} />
                        ))}
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
                        {produkTerbaru.map((item, index) => (
                            <Card key={index} {...item} />
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
                        {produkUnggulan.map((item, index) => (
                            <Card key={index} {...item} />
                        ))}
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
                        ].map((feat, index) => (
                            <div key={index} className="flex flex-col items-center p-2">
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