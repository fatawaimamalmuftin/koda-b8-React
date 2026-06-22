import { useState, useEffect } from 'react';
import { Truck } from 'lucide-react';
import headphoneImg from '../assets/elektronik.png';
import { useNavigate } from 'react-router-dom';

export default function CheckOut1() {
    const navigate = useNavigate();
    const [cartItems, setCartItems] = useState([]);

    const [shippingAddress, setShippingAddress] = useState({
        namaPenerima: '',
        nomorTelepon: '',
        email: '',
        alamatLengkap: '',
        kota: '',
        provinsi: '',
        kodePos: '',
        catatan: ''
    });

    const [shippingMethod, setShippingMethod] = useState('JNE Reguler');

    useEffect(() => {
        const savedCart = JSON.parse(localStorage.getItem('cart')) || [];
        async function setCart() {
            setCartItems(savedCart);

            const savedAddress = JSON.parse(localStorage.getItem('shippingAddress'));
            if (savedAddress) setShippingAddress(savedAddress);

            const savedMethod = localStorage.getItem('shippingMethod');
            if (savedMethod) setShippingMethod(savedMethod);
        }
        setCart()

    }, []);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setShippingAddress(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const subtotal = cartItems.reduce((acc, item) => acc + (item.price * item.quantity), 0);

    const handleNextStep = (e) => {
        e.preventDefault();

        const { namaPenerima, nomorTelepon, email, alamatLengkap, kota, provinsi, kodePos } = shippingAddress;
        if (!namaPenerima || !nomorTelepon || !email || !alamatLengkap || !kota || !provinsi || !kodePos) {
            alert('Silakan lengkapi semua bidang alamat pengiriman yang wajib diisi (*).');
            return;
        }

        localStorage.setItem('shippingAddress', JSON.stringify(shippingAddress));
        localStorage.setItem('shippingMethod', shippingMethod);

        navigate('/checkout2');
    };

    return (
        <main className="w-full bg-gray-50 px-4 md:px-16 lg:px-26 py-10">
            <div className="max-w-7xl mx-auto flex flex-col gap-10">

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

                    <form onSubmit={handleNextStep} className="flex-1 w-full bg-white border border-gray-100 rounded-2xl p-6 shadow-sm flex flex-col gap-6">
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
                                        name="namaPenerima"
                                        value={shippingAddress.namaPenerima}
                                        onChange={handleInputChange}
                                        placeholder="Budi Santoso"
                                        className="h-11 px-4 bg-gray-50 border border-gray-200 rounded-xl outline-none text-sm text-gray-900 focus:border-blue-300 focus:bg-white transition"
                                        required
                                    />
                                </div>
                                <div className="flex flex-col gap-1.5">
                                    <label className="text-sm font-semibold text-gray-700">Nomor Telepon *</label>
                                    <input
                                        type="tel"
                                        name="nomorTelepon"
                                        value={shippingAddress.nomorTelepon}
                                        onChange={handleInputChange}
                                        placeholder="0812-3456-7890"
                                        className="h-11 px-4 bg-gray-50 border border-gray-200 rounded-xl outline-none text-sm text-gray-900 focus:border-blue-300 focus:bg-white transition"
                                        required
                                    />
                                </div>
                            </div>

                            <div className="flex flex-col gap-1.5">
                                <label className="text-sm font-semibold text-gray-700">Email *</label>
                                <input
                                    type="email"
                                    name="email"
                                    value={shippingAddress.email}
                                    onChange={handleInputChange}
                                    placeholder="budi@email.com"
                                    className="h-11 px-4 bg-gray-50 border border-gray-200 rounded-xl outline-none text-sm text-gray-900 focus:border-blue-300 focus:bg-white transition"
                                    required
                                />
                            </div>

                            <div className="flex flex-col gap-1.5">
                                <label className="text-sm font-semibold text-gray-700">Alamat Lengkap *</label>
                                <input
                                    type="text"
                                    name="alamatLengkap"
                                    value={shippingAddress.alamatLengkap}
                                    onChange={handleInputChange}
                                    placeholder="Jl. Kebon Jeruk No. 15"
                                    className="h-11 px-4 bg-gray-50 border border-gray-200 rounded-xl outline-none text-sm text-gray-900 focus:border-blue-300 focus:bg-white transition"
                                    required
                                />
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <div className="flex flex-col gap-1.5">
                                    <label className="text-sm font-semibold text-gray-700">Kota *</label>
                                    <input
                                        type="text"
                                        name="kota"
                                        value={shippingAddress.kota}
                                        onChange={handleInputChange}
                                        placeholder="Jakarta Barat"
                                        className="h-11 px-4 bg-gray-50 border border-gray-200 rounded-xl outline-none text-sm text-gray-900 focus:border-blue-300 focus:bg-white transition"
                                        required
                                    />
                                </div>
                                <div className="flex flex-col gap-1.5">
                                    <label className="text-sm font-semibold text-gray-700">Provinsi *</label>
                                    <input
                                        type="text"
                                        name="provinsi"
                                        value={shippingAddress.provinsi}
                                        onChange={handleInputChange}
                                        placeholder="DKI Jakarta"
                                        className="h-11 px-4 bg-gray-50 border border-gray-200 rounded-xl outline-none text-sm text-gray-900 focus:border-blue-300 focus:bg-white transition"
                                        required
                                    />
                                </div>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <div className="flex flex-col gap-1.5">
                                    <label className="text-sm font-semibold text-gray-700">Kode Pos *</label>
                                    <input
                                        type="number"
                                        name="kodePos"
                                        value={shippingAddress.kodePos}
                                        onChange={handleInputChange}
                                        placeholder="11530"
                                        className="h-11 px-4 bg-gray-50 border border-gray-200 rounded-xl outline-none text-sm text-gray-900 focus:border-blue-300 focus:bg-white transition"
                                        required
                                    />
                                </div>
                                <div className="flex flex-col gap-1.5">
                                    <label className="text-sm font-semibold text-gray-700">Catatan (opsional)</label>
                                    <input
                                        type="text"
                                        name="catatan"
                                        value={shippingAddress.catatan}
                                        onChange={handleInputChange}
                                        placeholder="Warna pagar, dll."
                                        className="h-11 px-4 bg-gray-50 border border-gray-200 rounded-xl outline-none text-sm text-gray-900 focus:border-blue-300 focus:bg-white transition"
                                    />
                                </div>
                            </div>
                        </div>

                        <div className="flex flex-col gap-4 mt-4">
                            <h3 className="text-lg font-bold text-gray-950">Metode Pengiriman</h3>

                            <div className="flex flex-col gap-3">
                                <label className={`flex items-center justify-between p-4 border rounded-xl cursor-pointer transition ${shippingMethod === 'JNE Reguler' ? 'border-2 border-blue-500 bg-blue-50/30' : 'border-gray-200 hover:bg-gray-50'}`}>
                                    <div className="flex items-center gap-4">
                                        <input type="radio" name="kurir" value="JNE Reguler" checked={shippingMethod === 'JNE Reguler'} onChange={(e) => setShippingMethod(e.target.value)} className="w-4 h-4 text-[#1A73E8]" />
                                        <div className="flex flex-col">
                                            <span className="text-sm font-bold text-gray-950">JNE Reguler</span>
                                            <span className="text-xs text-gray-500">3-5 hari kerja</span>
                                        </div>
                                    </div>
                                    <span className="text-sm font-bold text-[#00A63E]">GRATIS</span>
                                </label>

                                <label className={`flex items-center justify-between p-4 border rounded-xl cursor-pointer transition ${shippingMethod === 'JNE Express' ? 'border-2 border-blue-500 bg-blue-50/30' : 'border-gray-200 hover:bg-gray-50'}`}>
                                    <div className="flex items-center gap-4">
                                        <input type="radio" name="kurir" value="JNE Express" checked={shippingMethod === 'JNE Express'} onChange={(e) => setShippingMethod(e.target.value)} className="w-4 h-4 text-[#1A73E8]" />
                                        <div className="flex flex-col">
                                            <span className="text-sm font-bold text-gray-950">JNE Express</span>
                                            <span className="text-xs text-gray-500">1-2 hari kerja</span>
                                        </div>
                                    </div>
                                    <span className="text-sm font-bold text-[#00A63E]">GRATIS</span>
                                </label>

                                <label className={`flex items-center justify-between p-4 border rounded-xl cursor-pointer transition ${shippingMethod === 'Same Day Delivery' ? 'border-2 border-blue-500 bg-blue-50/30' : 'border-gray-200 hover:bg-gray-50'}`}>
                                    <div className="flex items-center gap-4">
                                        <input type="radio" name="kurir" value="Same Day Delivery" checked={shippingMethod === 'Same Day Delivery'} onChange={(e) => setShippingMethod(e.target.value)} className="w-4 h-4 text-[#1A73E8]" />
                                        <div className="flex flex-col">
                                            <span className="text-sm font-bold text-gray-950">Same Day Delivery</span>
                                            <span className="text-xs text-gray-500">Hari ini (sebelum 16:00)</span>
                                        </div>
                                    </div>
                                    <span className="text-sm font-bold text-[#00A63E]">GRATIS</span>
                                </label>
                            </div>
                        </div>

                        <button type="submit" className="w-full h-12 bg-[#1A73E8] hover:bg-blue-700 text-white rounded-xl font-bold flex items-center justify-center transition mt-4 text-sm">
                            Lanjut ke Pembayaran &rsaquo;
                        </button>
                    </form>

                    <div className="w-full lg:w-95 bg-white border border-gray-100 rounded-2xl p-6 shadow-sm flex flex-col gap-5 lg:sticky lg:top-10">
                        <h3 className="text-base font-bold text-gray-950">Ringkasan Pesanan</h3>

                        <div className="flex flex-col gap-3 max-h-60 overflow-y-auto pr-1">
                            {cartItems.map((item) => (
                                <div key={item.id} className="flex items-center gap-3 bg-gray-50 p-3 rounded-xl border border-gray-100">
                                    <div className="w-12 h-12 rounded-lg bg-white overflow-hidden border border-gray-200 p-1">
                                        <img src={item.image || headphoneImg} alt={item.name} className="w-full h-full object-contain" />
                                    </div>
                                    <div className="flex-1 flex justify-between items-center text-xs gap-2">
                                        <div className="flex flex-col truncate">
                                            <span className="font-semibold text-gray-800 truncate">
                                                {item.name ? item.name.split(' (')[0] : 'Produk'}
                                            </span>
                                            <span className="text-[10px] text-gray-400">Rp {item.price?.toLocaleString('id-ID')}</span>
                                        </div>
                                        <span className="text-gray-500 font-medium">x{item.quantity}</span>
                                    </div>
                                </div>
                            ))}
                        </div>

                        <div className="flex flex-col gap-3 border-b border-gray-100 pb-4 text-xs">
                            <div className="flex justify-between text-gray-600">
                                <span>Subtotal</span>
                                <span className="font-medium text-gray-800">
                                    Rp {subtotal.toLocaleString('id-ID')}
                                </span>
                            </div>
                            <div className="flex justify-between text-gray-600">
                                <span>Ongkir</span>
                                <span className="font-bold text-[#00A63E]">Gratis</span>
                            </div>
                        </div>

                        <div className="flex justify-between items-center text-sm">
                            <span className="text-gray-950 font-bold">Total</span>
                            <span className="text-base font-extrabold text-[#1A73E8]">
                                Rp {subtotal.toLocaleString('id-ID')}
                            </span>
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