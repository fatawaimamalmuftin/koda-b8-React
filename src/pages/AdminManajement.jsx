import {
    LayoutDashboard, Package, ShoppingCart, Users, Settings, Bell, Plus, Search, SlidersHorizontal,
    Star, Eye, Trash2, X, Image as ImageIcon
} from 'lucide-react';
import { useState } from 'react';
import { Link } from 'react-router-dom';

const INITIAL_PRODUCTS = [
    { id: 1, nama: "Headphone Wireless Premium", brand: "SoundWave", kategori: "Elektronik", harga: 450000, oldPrice: 650000, stock: 45, rating: 4.8, view: 513, label: ["Baru", "Unggulan", "Promo"] },
    { id: 2, nama: "Kaos Polos Premium Cotton", brand: "FashionID", kategori: "Fashion", harga: 125000, oldPrice: null, stock: 200, rating: 4.3, view: 878, label: [] },
    { id: 3, nama: "Smartwatch Series 5", brand: "WristTech", kategori: "Elektronik", harga: 2800000, oldPrice: 3600000, stock: 22, rating: 4.4, view: 324, label: ["Unggulan", "Promo"] },
    { id: 4, nama: "Set Peralatan Makan Keramik", brand: "HomeDeco", kategori: "Rumah & Dapur", harga: 450000, oldPrice: null, stock: 40, rating: 4.7, view: 131, label: [] }
];

export default function AdminManajemenProduk() {
    const [products, setProducts] = useState(INITIAL_PRODUCTS);
    const [searchTerm, setSearchTerm] = useState('');
    const [isModalOpen, setIsModalOpen] = useState(false);

    const [formData, setFormData] = useState({
        nama: '',
        brand: '',
        kategori: 'Elektronik',
        harga: '',
        stock: ''
    });

    const formatRupiah = (num) => {
        return "Rp " + num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const newProduct = {
            id: Date.now(),
            nama: formData.nama,
            brand: formData.brand,
            kategori: formData.kategori,
            harga: parseInt(formData.harga) || 0,
            oldPrice: null,
            stock: parseInt(formData.stock) || 0,
            rating: 0.0,
            view: 0,
            label: ["Baru"]
        };

        setProducts([newProduct, ...products]);
        setIsModalOpen(false);
        setFormData({ nama: '', brand: '', kategori: 'Elektronik', harga: '', stock: '' });
    };

    const handleDelete = (id) => {
        if (window.confirm("Hapus produk ini?")) {
            setProducts(products.filter(p => p.id !== id));
        }
    };

    const filteredProducts = products.filter(p =>
        p.nama.toLowerCase().includes(searchTerm.toLowerCase()) ||
        p.brand.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <div className="bg-gray-100 text-gray-900 font-sans flex min-h-screen text-[13px] w-full">

            {isModalOpen && (
                <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
                    <div className="fixed inset-0 bg-black/40 backdrop-blur-sm" onClick={() => setIsModalOpen(false)}></div>
                    <div className="bg-white rounded-2xl w-full max-w-md p-6 z-10 shadow-xl border border-gray-100">
                        <div className="flex justify-between items-center pb-3 border-b border-gray-100">
                            <h3 className="font-semibold text-gray-900 text-sm">Tambah Produk Baru</h3>
                            <button onClick={() => setIsModalOpen(false)} className="text-gray-400 hover:text-gray-600">
                                <X className="w-4 h-4" />
                            </button>
                        </div>

                        <form onSubmit={handleSubmit} className="mt-4 flex flex-col gap-3">
                            <div>
                                <label className="block text-gray-600 font-medium mb-1">Nama Produk</label>
                                <input type="text" name="nama" value={formData.nama} onChange={handleInputChange} required
                                    className="w-full px-3 py-2 bg-gray-50 border border-gray-200 rounded-xl outline-none focus:border-blue-500 focus:bg-white" />
                            </div>
                            <div>
                                <label className="block text-gray-600 font-medium mb-1">Merek / Brand</label>
                                <input type="text" name="brand" value={formData.brand} onChange={handleInputChange} required
                                    className="w-full px-3 py-2 bg-gray-50 border border-gray-200 rounded-xl outline-none focus:border-blue-500 focus:bg-white" />
                            </div>
                            <div className="grid grid-cols-2 gap-3">
                                <div>
                                    <label className="block text-gray-600 font-medium mb-1">Harga (IDR)</label>
                                    <input type="number" name="harga" value={formData.harga} onChange={handleInputChange} required
                                        className="w-full px-3 py-2 bg-gray-50 border border-gray-200 rounded-xl outline-none focus:border-blue-500 focus:bg-white" />
                                </div>
                                <div>
                                    <label className="block text-gray-600 font-medium mb-1">Stok</label>
                                    <input type="number" name="stock" value={formData.stock} onChange={handleInputChange} required
                                        className="w-full px-3 py-2 bg-gray-50 border border-gray-200 rounded-xl outline-none focus:border-blue-500 focus:bg-white" />
                                </div>
                            </div>
                            <div>
                                <label className="block text-gray-600 font-medium mb-1">Kategori</label>
                                <select name="kategori" value={formData.kategori} onChange={handleInputChange}
                                    className="w-full px-3 py-2 bg-gray-50 border border-gray-200 rounded-xl outline-none focus:border-blue-500 focus:bg-white">
                                    <option value="Elektronik">Elektronik</option>
                                    <option value="Fashion">Fashion</option>
                                    <option value="Rumah & Dapur">Rumah & Dapur</option>
                                </select>
                            </div>
                            <div className="flex gap-2 mt-3">
                                <button type="button" onClick={() => setIsModalOpen(false)} className="flex-1 py-2 bg-gray-100 text-gray-700 rounded-xl hover:bg-gray-200">Batal</button>
                                <button type="submit" className="flex-1 py-2 bg-blue-600 text-white rounded-xl hover:bg-blue-700">Simpan</button>
                            </div>
                        </form>
                    </div>
                </div>
            )}

            <aside className="w-60 min-w-60 bg-gray-900 flex flex-col fixed top-0 left-0 h-full z-50">
                <div className="flex items-center gap-2.5 px-5 pt-5 pb-4 border-b border-gray-800">
                    <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center text-white font-semibold text-sm">B</div>
                    <span className="text-white text-sm font-medium">BeliMudah Admin</span>
                </div>
                <nav className="flex flex-col gap-0.5 p-3 flex-1">
                    <Link to="/dashboard" className="flex items-center gap-2.5 px-3 py-2.5 rounded-lg text-gray-400 hover:bg-gray-800 hover:text-gray-200"><LayoutDashboard className="w-4 h-4" /> Dashboard</Link>
                    <Link to="/manajement" className="flex items-center gap-2.5 px-3 py-2.5 rounded-lg bg-blue-600 text-white"><Package className="w-4 h-4" /> Produk</Link>
                    <div href="#" className="flex items-center gap-2.5 px-3 py-2.5 rounded-lg text-gray-400 hover:bg-gray-800 hover:text-gray-200"><ShoppingCart className="w-4 h-4" /> Pesanan</div>
                    <div href="#" className="flex items-center gap-2.5 px-3 py-2.5 rounded-lg text-gray-400 hover:bg-gray-800 hover:text-gray-200"><Users className="w-4 h-4" /> Pelanggan</div>
                    <div href="#" className="flex items-center gap-2.5 px-3 py-2.5 rounded-lg text-gray-400 hover:bg-gray-800 hover:text-gray-200"><Settings className="w-4 h-4" /> Pengaturan</div>
                </nav>
            </aside>

            <div className="ml-60 flex-1 flex flex-col min-h-screen">

                <header className="h-12 bg-white border-b border-gray-200 flex items-center justify-between px-7 sticky top-0 z-50">
                    <div className="text-gray-500 font-medium">Panel Manajemen</div>
                    <div className="flex items-center gap-3">
                        <div className="relative w-8 h-8 border border-gray-200 rounded-lg flex items-center justify-center bg-white cursor-pointer">
                            <Bell className="w-4 h-4 text-gray-500" />
                            <div className="absolute top-1.5 right-1.5 w-1.5 h-1.5 bg-red-500 rounded-full"></div>
                        </div>
                        <div className="flex items-center gap-2 border border-gray-200 rounded-lg px-2.5 py-1 bg-white">
                            <div className="w-5 h-5 bg-blue-600 rounded-full flex items-center justify-center text-white text-[10px] font-bold">A</div>
                            <span className="font-medium">Admin</span>
                        </div>
                    </div>
                </header>

                <main className="p-7 flex flex-col gap-5">

                    <div className="flex justify-between items-center">
                        <h1 className="text-xl font-semibold text-gray-900">Manajemen Produk</h1>
                        <button onClick={() => setIsModalOpen(true)} className="flex items-center gap-1.5 bg-orange-500 hover:bg-orange-600 transition-colors text-white font-medium rounded-xl px-4 py-2">
                            <Plus className="w-4 h-4" /> Tambah Produk
                        </button>
                    </div>

                    <div className="flex items-center gap-3">
                        <div className="flex-1 relative">
                            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                            <input
                                type="text"
                                placeholder="Cari produk atau merek..."
                                value={searchTerm}
                                onChange={(e) => setSearchTerm(e.target.value)}
                                className="w-full pl-9 pr-4 py-2 bg-white border border-gray-200 rounded-xl text-gray-700 placeholder-gray-400 outline-none focus:border-blue-400"
                            />
                        </div>
                        <button className="flex items-center gap-2 px-4 py-2 bg-white border border-gray-200 rounded-xl text-gray-600 hover:bg-gray-50">
                            <SlidersHorizontal className="w-4 h-4" /> Filter
                        </button>
                    </div>

                    <div className="bg-white border border-gray-200 rounded-xl overflow-hidden">
                        <div className="px-5 py-3 border-b border-gray-100 bg-gray-50/50">
                            <span className="text-gray-500 font-medium">{filteredProducts.length} produk ditemukan</span>
                        </div>
                        <div className="overflow-x-auto">
                            <table className="w-full text-left border-collapse">
                                <thead>
                                    <tr className="border-b border-gray-200 bg-gray-50 text-gray-500 font-medium">
                                        <th className="px-5 py-3 w-70">Produk</th>
                                        <th className="px-4 py-3">Kategori</th>
                                        <th className="px-4 py-3">Harga</th>
                                        <th className="px-4 py-3">Stok</th>
                                        <th className="px-4 py-3">Rating</th>
                                        <th className="px-4 py-3 text-right">Aksi</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {filteredProducts.map((p) => (
                                        <tr key={p.id} className="border-b border-gray-100 hover:bg-gray-50/80 transition-colors">
                                            <td className="px-5 py-3">
                                                <div className="flex items-center gap-3">
                                                    <div className="w-8 h-8 rounded-lg bg-amber-50 flex items-center justify-center border border-amber-100 shrink-0">
                                                        <ImageIcon className="w-4 h-4 text-amber-500" />
                                                    </div>
                                                    <div>
                                                        <div className="font-medium text-gray-800">{p.nama}</div>
                                                        <div className="text-[11px] text-gray-400">{p.brand}</div>
                                                    </div>
                                                </div>
                                            </td>
                                            <td className="px-4 py-3">
                                                <span className="font-medium text-gray-600">{p.kategori}</span>
                                            </td>
                                            <td className="px-4 py-3">
                                                <div className="font-semibold text-blue-600">{formatRupiah(p.harga)}</div>
                                            </td>
                                            <td className="px-4 py-3 text-gray-600">{p.stock} pcs</td>
                                            <td className="px-4 py-3">
                                                <div className="flex items-center gap-1">
                                                    <Star className="w-3.5 h-3.5 text-yellow-400 fill-yellow-400" />
                                                    <span className="font-medium text-gray-700">{p.rating || "0"}</span>
                                                </div>
                                            </td>
                                            <td className="px-4 py-3 text-right">
                                                <div className="flex items-center justify-end gap-1.5">
                                                    <button className="w-7 h-7 flex items-center justify-center rounded-lg border border-gray-200 text-gray-400 hover:bg-gray-50"><Eye className="w-3.5 h-3.5" /></button>
                                                    <button onClick={() => handleDelete(p.id)} className="w-7 h-7 flex items-center justify-center rounded-lg border border-gray-200 text-gray-400 hover:text-red-500 hover:bg-red-50 hover:border-red-100"><Trash2 className="w-3.5 h-3.5" /></button>
                                                </div>
                                            </td>
                                        </tr>
                                    ))}
                                    {filteredProducts.length === 0 && (
                                        <tr>
                                            <td colSpan="6" className="text-center py-10 text-gray-400 font-medium">Tidak ada produk yang cocok dengan pencarian.</td>
                                        </tr>
                                    )}
                                </tbody>
                            </table>
                        </div>
                    </div>

                </main>
            </div>
        </div>
    );
}