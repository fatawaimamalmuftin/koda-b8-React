import {
    LayoutDashboard,
    Package,
    ShoppingCart,
    Users,
    Settings,
    ArrowLeft,
    X,
    Bell,
    TrendingUp,
    ArrowUp,
    ShoppingBag,
    Box,
    ArrowDown,
    ArrowRight
} from 'lucide-react';
import GambarChart from '../assets/gambar-chart.svg'
import GambarLingkaran from '../assets/gambar-Dlingkaran.svg'

export default function AdminDashboard() {
    return (
        <div className="bg-gray-100 text-gray-900 font-sans flex min-h-screen text-[13px] w-full">

            <aside className="w-60 bg-gray-900 flex flex-col fixed top-0 left-0 h-full z-50">
                <div className="flex items-center gap-2.5 px-5 pt-5 pb-4 border-b border-gray-800">
                    <div className="w-8 h-8 bg-[#1a73e8] rounded-lg flex items-center justify-center text-white font-semibold text-sm">
                        B
                    </div>
                    <span className="text-white text-sm font-medium">BeliMudah Admin</span>
                </div>

                <nav className="flex flex-col gap-0.5 p-3 flex-1">
                    <a href="/dashboard-step1.html" className="flex items-center gap-2.5 px-3 py-2.5 rounded-lg bg-[#1a73e8] text-white text-[13px] no-underline">
                        <LayoutDashboard className="w-4 h-4" /> Dashboard
                    </a>
                    <a href="/dashboard-step2.htm" className="flex items-center gap-2.5 px-3 py-2.5 rounded-lg text-gray-400 text-[13px] no-underline hover:bg-gray-800 hover:text-gray-200 transition-colors">
                        <Package className="w-4 h-4" /> Produk
                    </a>
                    <a href="/dashboard-step-3.htm" className="flex items-center gap-2.5 px-3 py-2.5 rounded-lg text-gray-400 text-[13px] no-underline hover:bg-gray-800 hover:text-gray-200 transition-colors">
                        <ShoppingCart className="w-4 h-4" /> Pesanan
                    </a>
                    <a href="#" className="flex items-center gap-2.5 px-3 py-2.5 rounded-lg text-gray-400 text-[13px] no-underline hover:bg-gray-800 hover:text-gray-200 transition-colors">
                        <Users className="w-4 h-4" /> Pelanggan
                    </a>
                    <a href="#" className="flex items-center gap-2.5 px-3 py-2.5 rounded-lg text-gray-400 text-[13px] no-underline hover:bg-gray-800 hover:text-gray-200 transition-colors">
                        <Settings className="w-4 h-4" /> Pengaturan
                    </a>
                </nav>

                <div className="px-3 py-3.5 border-t border-gray-800">
                    <div className="flex items-center gap-2 text-gray-500 text-[13px] cursor-pointer hover:text-gray-200 transition-colors">
                        <ArrowLeft className="w-3.5 h-3.5" />
                        <span>Kembali ke Toko</span>
                    </div>
                </div>
            </aside>

            <main className="ml-60 flex-1 flex flex-col min-h-screen">
                <header className="h-12 bg-white border-b border-gray-200 flex items-center justify-between px-7 sticky top-0 z-50">
                    <div className="flex items-center gap-2 text-gray-500">
                        <X className="w-3.5 h-3.5 cursor-pointer" />
                        <span>Admin</span>
                    </div>
                    <div className="flex items-center gap-2.5">
                        <div className="relative w-8 h-8 border border-gray-200 rounded-lg flex items-center justify-center cursor-pointer bg-white">
                            <Bell className="w-3.75 h-3.75 text-gray-500" />
                            <div className="absolute top-1.5 right-1.5 w-1.75 h-1.75 bg-red-500 rounded-full border-[1.5px] border-white"></div>
                        </div>
                        <div className="flex items-center gap-1.5 border border-gray-200 rounded-lg px-2.5 py-1 cursor-pointer bg-white">
                            <div className="w-5.5 h-5.5 bg-[#1a73e8] rounded-full flex items-center justify-center text-white text-[10px] font-semibold">
                                A
                            </div>
                            <span>Admin</span>
                        </div>
                    </div>
                </header>

                <div className="p-7 flex flex-col gap-5">
                    <div className="flex justify-between items-start">
                        <div>
                            <h1 className="text-5.5 font-semibold text-gray-900">Dashboard</h1>
                            <p className="text-[13px] text-gray-500 mt-1">Selamat datang kembali! Ini ringkasan bisnis hari ini.</p>
                        </div>
                        <span className="text-xs text-gray-500 pt-1">28 Mei 2026</span>
                    </div>

                    <div className="grid grid-cols-4 gap-4">
                        <div className="bg-white border border-gray-200 rounded-xl p-5 flex flex-col gap-2.5">
                            <div className="flex justify-between items-start">
                                <span className="text-xs text-gray-500 leading-snug max-w-35">Total Pendapatan (Bulan Ini)</span>
                                <div className="w-9 h-9 rounded-lg flex items-center justify-center bg-blue-50 text-[#1a73e8]">
                                    <TrendingUp className="w-4.5 h-4.5" />
                                </div>
                            </div>
                            <div className="text-xl font-semibold text-gray-900">Rp 125.000.000</div>
                            <div className="text-2.75 flex items-center gap-1 text-green-500">
                                <ArrowUp className="w-2.75 h-2.75" /> 18,2% dari bulan lalu
                            </div>
                        </div>

                        <div className="bg-white border border-gray-200 rounded-xl p-5 flex flex-col gap-2.5">
                            <div className="flex justify-between items-start">
                                <span className="text-xs text-gray-500 leading-snug max-w-35">Pesanan Baru</span>
                                <div className="w-9 h-9 rounded-lg flex items-center justify-center bg-orange-50 text-orange-500">
                                    <ShoppingBag className="w-4.5 h-4.5" />
                                </div>
                            </div>
                            <div className="text-xl font-semibold text-gray-900">890</div>
                            <div className="text-2.75 flex items-center gap-1 text-green-500">
                                <ArrowUp className="w-2.75 h-2.75" /> 12,5% dari bulan lalu
                            </div>
                        </div>

                        <div className="bg-white border border-gray-200 rounded-xl p-5 flex flex-col gap-2.5">
                            <div className="flex justify-between items-start">
                                <span className="text-xs text-gray-500 leading-snug max-w-35">Pelanggan Aktif</span>
                                <div className="w-9 h-9 rounded-lg flex items-center justify-center bg-green-50 text-green-500">
                                    <Users className="w-4.5 h-4.5" />
                                </div>
                            </div>
                            <div className="text-xl font-semibold text-gray-900">3.284</div>
                            <div className="text-2.75 flex items-center gap-1 text-green-500">
                                <ArrowUp className="w-2.75 h-2.75" /> 0,1% dari bulan lalu
                            </div>
                        </div>

                        <div className="bg-white border border-gray-200 rounded-xl p-5 flex flex-col gap-2.5">
                            <div className="flex justify-between items-start">
                                <span className="text-xs text-gray-500 leading-snug max-w-35">Produk Aktif</span>
                                <div className="w-9 h-9 rounded-lg flex items-center justify-center bg-purple-50 text-purple-500">
                                    <Box className="w-4.5 h-4.5" />
                                </div>
                            </div>
                            <div className="text-xl font-semibold text-gray-900">247</div>
                            <div className="text-2.75 flex items-center gap-1 text-red-500">
                                <ArrowDown className="w-2.75 h-2.75" /> 2,3% dari bulan lalu
                            </div>
                        </div>
                    </div>

                    <div className="grid gap-4" style={{ gridTemplateColumns: '1fr 380px' }}>
                        <div className="bg-white border border-gray-200 rounded-xl p-5">
                            <div className="flex justify-between items-center mb-4">
                                <span className="text-sm font-semibold text-gray-900">Pendapatan & Pesanan (2026)</span>
                                <span className="text-2.75 text-gray-500 bg-gray-100 px-2.5 py-0.5 rounded-md">12 Bulan Terakhir</span>
                            </div>
                            <img src={GambarChart} alt="grafik chart" />
                        </div>

                        <div className="bg-white border border-gray-200 rounded-xl p-5">
                            <div className="flex justify-between items-center mb-4">
                                <span className="text-sm font-semibold text-gray-900">Penjualan per Kategori</span>
                            </div>
                            <img src={GambarLingkaran} alt="Diagram Lingkaran" className="ml-12" />
                            <div className="flex flex-col gap-1.5 mt-3">
                                <div className="flex items-center text-xs">
                                    <div className="w-2.5 h-2.5 rounded-full bg-blue-500"></div>
                                    <span className="flex-1 ml-2 text-gray-700">Elektronik</span>
                                    <span className="text-gray-500 font-medium">45%</span>
                                </div>
                                <div className="flex items-center text-xs">
                                    <div className="w-2.5 h-2.5 rounded-full bg-orange-500"></div>
                                    <span className="flex-1 ml-2 text-gray-700">Fashion</span>
                                    <span className="text-gray-500 font-medium">28%</span>
                                </div>
                                <div className="flex items-center text-xs">
                                    <div className="w-2.5 h-2.5 rounded-full bg-green-500"></div>
                                    <span className="flex-1 ml-2 text-gray-700">Rumah & Dapur</span>
                                    <span className="text-gray-500 font-medium">15%</span>
                                </div>
                                <div className="flex items-center text-xs">
                                    <div className="w-2.5 h-2.5 rounded-full bg-purple-500"></div>
                                    <span className="flex-1 ml-2 text-gray-700">Kecantikan</span>
                                    <span className="text-gray-500 font-medium">8%</span>
                                </div>
                                <div className="flex items-center text-xs">
                                    <div className="w-2.5 h-2.5 rounded-full bg-gray-300"></div>
                                    <span className="flex-1 ml-2 text-gray-700">Lainnya</span>
                                    <span className="text-gray-500 font-medium">4%</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                        <div className="bg-white border border-gray-200 rounded-xl p-5">
                            <div className="flex justify-between items-center mb-4">
                                <span className="text-sm font-semibold text-gray-900">Pesanan Terbaru</span>
                                <span className="text-xs text-[#1a73e8] cursor-pointer hover:underline flex items-center gap-1">
                                    Lihat Semua <ArrowRight className="w-3 h-3" />
                                </span>
                            </div>

                            <div className="flex justify-between items-center py-2.5 border-b border-gray-100">
                                <div>
                                    <div className="text-xs font-medium text-gray-900 flex items-center gap-1.5">
                                        #BM87865432
                                        <span className="text-[10px] font-medium px-2 py-0.5 rounded-full bg-green-100 text-green-700">Terkirim</span>
                                    </div>
                                    <div className="text-2.75 text-gray-500 mt-0.5">Budi Santoso · 28 Mei 2026</div>
                                </div>
                                <div className="text-right">
                                    <div className="text-xs font-medium text-gray-900">Rp 900.000</div>
                                    <div className="text-2.75 text-gray-500 mt-0.5">2 item</div>
                                </div>
                            </div>

                            <div className="flex justify-between items-center py-2.5 border-b border-gray-100">
                                <div>
                                    <div className="text-xs font-medium text-gray-900 flex items-center gap-1.5">
                                        #BM87654321
                                        <span className="text-[10px] font-medium px-2 py-0.5 rounded-full bg-blue-100 text-blue-700">Dikirim</span>
                                    </div>
                                    <div className="text-2.75 text-gray-500 mt-0.5">Siti Rahayu · 28 Mei 2026</div>
                                </div>
                                <div className="text-right">
                                    <div className="text-xs font-medium text-gray-900">Rp 450.000</div>
                                    <div className="text-2.75 text-gray-500 mt-0.5">1 item</div>
                                </div>
                            </div>

                            <div className="flex justify-between items-center py-2.5 border-b border-gray-100">
                                <div>
                                    <div className="text-xs font-medium text-gray-900 flex items-center gap-1.5">
                                        #BM76543210
                                        <span className="text-[10px] font-medium px-2 py-0.5 rounded-full bg-yellow-100 text-yellow-700">Dikemas</span>
                                    </div>
                                    <div className="text-2.75 text-gray-500 mt-0.5">Ahmad Maulana · 27 Mei 2026</div>
                                </div>
                                <div className="text-right">
                                    <div className="text-xs font-medium text-gray-900">Rp 1.250.000</div>
                                    <div className="text-2.75 text-gray-500 mt-0.5">3 item</div>
                                </div>
                            </div>

                            <div className="flex justify-between items-center py-2.5 border-b border-gray-100">
                                <div>
                                    <div className="text-xs font-medium text-gray-900 flex items-center gap-1.5">
                                        #BM65432109
                                        <span className="text-[10px] font-medium px-2 py-0.5 rounded-full bg-red-100 text-red-700">Pending</span>
                                    </div>
                                    <div className="text-2.75 text-gray-500 mt-0.5">Rina Kusuma · 27 Mei 2026</div>
                                </div>
                                <div className="text-right">
                                    <div className="text-xs font-medium text-gray-900">Rp 8.500.000</div>
                                    <div className="text-2.75 text-gray-500 mt-0.5">1 item</div>
                                </div>
                            </div>

                            <div className="flex justify-between items-center py-2.5">
                                <div>
                                    <div className="text-xs font-medium text-gray-900 flex items-center gap-1.5">
                                        #BM54321098
                                        <span className="text-[10px] font-medium px-2 py-0.5 rounded-full bg-green-100 text-green-700">Terkirim</span>
                                    </div>
                                    <div className="text-2.75 text-gray-500 mt-0.5">Danny Pratama · 26 Mei 2026</div>
                                </div>
                                <div className="text-right">
                                    <div className="text-xs font-medium text-gray-900">Rp 725.000</div>
                                    <div className="text-2.75 text-gray-500 mt-0.5">2 item</div>
                                </div>
                            </div>
                        </div>

                        <div className="bg-white border border-gray-200 rounded-xl p-5">
                            <div className="flex justify-between items-center mb-4">
                                <span className="text-sm font-semibold text-gray-900">Produk Terlaris</span>
                                <span className="text-xs text-[#1a73e8] cursor-pointer hover:underline flex items-center gap-1">
                                    Kelola <ArrowRight className="w-3 h-3" />
                                </span>
                            </div>

                            <div className="flex items-center gap-2.5 py-2.5 border-b border-gray-100">
                                <span className="w-4 text-xs text-gray-400 text-center">1</span>
                                <div className="flex-1 min-w-0">
                                    <div className="text-xs font-medium text-gray-900 truncate">Headphone Wireless Premium</div>
                                    <div className="text-2.75 text-gray-500 mt-0.5">136 terjual · Stok: 45</div>
                                </div>
                                <span className="text-xs font-medium text-[#1a73e8] whitespace-nowrap">Rp 70.200.000</span>
                            </div>

                            <div className="flex items-center gap-2.5 py-2.5 border-b border-gray-100">
                                <span className="w-4 text-xs text-gray-400 text-center">2</span>
                                <div className="flex-1 min-w-0">
                                    <div className="text-xs font-medium text-gray-900 truncate">Laptop Ultrabook Pro 15"</div>
                                    <div className="text-2.75 text-gray-500 mt-0.5">87 terjual · Stok: 15</div>
                                </div>
                                <span className="text-xs font-medium text-[#1a73e8] whitespace-nowrap">Rp 739.500.000</span>
                            </div>

                            <div className="flex items-center gap-2.5 py-2.5 border-b border-gray-100">
                                <span className="w-4 text-xs text-gray-400 text-center">3</span>
                                <div className="flex-1 min-w-0">
                                    <div className="text-xs font-medium text-gray-900 truncate">Kaos Polos Premium Cotton</div>
                                    <div className="text-2.75 text-gray-500 mt-0.5">312 terjual · Stok: 200</div>
                                </div>
                                <span className="text-xs font-medium text-[#1a73e8] whitespace-nowrap">Rp 39.000.000</span>
                            </div>

                            <div className="flex items-center gap-2.5 py-2.5 border-b border-gray-100">
                                <span className="w-4 text-xs text-gray-400 text-center">4</span>
                                <div className="flex-1 min-w-0">
                                    <div className="text-xs font-medium text-gray-900 truncate">Sneakers Sport Runfast</div>
                                    <div className="text-2.75 text-gray-500 mt-0.5">203 terjual · Stok: 80</div>
                                </div>
                                <span className="text-xs font-medium text-[#1a73e8] whitespace-nowrap">Rp 111.850.000</span>
                            </div>

                            <div className="flex items-center gap-2.5 py-2.5">
                                <span className="w-4 text-xs text-gray-400 text-center">5</span>
                                <div className="flex-1 min-w-0">
                                    <div className="text-xs font-medium text-gray-900 truncate">Smartphone 5G Ultra</div>
                                    <div className="text-2.75 text-gray-500 mt-0.5">124 terjual · Stok: 30</div>
                                </div>
                                <span className="text-xs font-medium text-[#1a73e8] whitespace-nowrap">Rp 520.800.000</span>
                            </div>
                        </div>
                    </div>
                </div>
            </main>

        </div>
    );
}