import { useState, useEffect } from 'react';
import { Check, Truck, MapPin, Package } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export default function CheckOutSuccess() {
    const navigate = useNavigate();

    const [cartItems, setCartItems] = useState([]);
    const [shippingAddress, setShippingAddress] = useState(null);
    const [shippingMethod, setShippingMethod] = useState('JNE Reguler');
    const [orderNumber, setOrderNumber] = useState('');

    useEffect(() => {
        const savedCart = JSON.parse(localStorage.getItem('cart')) || [];
        const savedAddress = JSON.parse(localStorage.getItem('shippingAddress'));
        const savedShipping = localStorage.getItem('shippingMethod') || 'JNE Reguler';

        setCartItems(savedCart);
        setShippingAddress(savedAddress);
        setShippingMethod(savedShipping);

        let savedOrderNum = sessionStorage.getItem('currentOrderNumber');
        if (!savedOrderNum) {
            savedOrderNum = `BM${Math.floor(10000000 + Math.random() * 90000000)}`;
            sessionStorage.setItem('currentOrderNumber', savedOrderNum);

            if (savedCart.length > 0) {
                const totalPayment = savedCart.reduce((acc, item) => acc + (item.price * item.quantity), 0);

                const newOrder = {
                    date: new Date().toLocaleDateString('id-ID', {
                        day: 'numeric',
                        month: 'long',
                        year: 'numeric'
                    }),
                    status: 'Pesanan Diterima',
                    total: totalPayment,
                    items: savedCart.map(item => ({
                        name: item.name ? item.name.split(' (')[0] : 'Produk',
                        quantity: item.quantity,
                        price: item.price,
                    }))
                };

                const existingOrders = JSON.parse(localStorage.getItem('my_orders')) || [];
                const updatedOrders = [newOrder, ...existingOrders];

                localStorage.setItem('my_orders', JSON.stringify(updatedOrders));
            }
        }
        setOrderNumber(`#${savedOrderNum}`);
    }, []);

    const totalPayment = cartItems.reduce((acc, item) => acc + (item.price * item.quantity), 0);

    const handleContinueShopping = () => {
        localStorage.removeItem('cart');
        localStorage.removeItem('shippingAddress');
        localStorage.removeItem('shippingMethod');
        localStorage.removeItem('paymentMethod');
        sessionStorage.removeItem('currentOrderNumber');
        navigate('/');
    };

    return (
        <main className="w-full bg-[#FAFAFA] min-h-screen flex justify-center items-start py-10">
            <div className="w-full max-w-[640px] px-4 flex flex-col items-center">

                <div className="w-20 h-20 rounded-full bg-[#E6F9ED] flex items-center justify-center mb-6">
                    <div className="w-14 h-14 rounded-full bg-[#00C950] flex items-center justify-center text-white">
                        <Check size={28} strokeWidth={3} />
                    </div>
                </div>

                <h2 className="text-2xl font-extrabold text-gray-950 text-center mb-2">
                    Pesanan Berhasil! 🎉
                </h2>
                <p className="text-sm text-gray-500 text-center max-w-[480px] mb-8 leading-relaxed">
                    Terima kasih telah berbelanja di BeliMudah. Pesananmu sedang diproses.
                </p>

                <div className="w-full bg-white border border-gray-100 rounded-2xl p-6 shadow-sm flex flex-col gap-5 mb-5">
                    <div className="flex justify-between items-start border-b border-gray-100 pb-4 text-xs">
                        <div className="flex flex-col gap-1">
                            <span className="text-gray-400 font-medium">Nomor Pesanan</span>
                            <span className="text-sm font-bold text-[#1A73E8]">{orderNumber || '#BM00000000'}</span>
                        </div>
                        <div className="flex flex-col items-end gap-1">
                            <span className="text-gray-400 font-medium">Total Pembayaran</span>
                            <span className="text-sm font-extrabold text-gray-950">
                                Rp {totalPayment.toLocaleString('id-ID')}
                            </span>
                        </div>
                    </div>

                    <div className="flex flex-col gap-4 text-xs">
                        <div className="flex items-start gap-3">
                            <div className="p-2 bg-blue-50 text-[#1A73E8] rounded-lg flex-shrink-0">
                                <Truck size={16} />
                            </div>
                            <div className="flex flex-col gap-0.5 mt-0.5">
                                <span className="font-bold text-gray-900">{shippingMethod}</span>
                                <span className="text-gray-400 font-medium">Estimasi tiba: 2-3 hari kerja</span>
                            </div>
                        </div>

                        <div className="flex items-start gap-3">
                            <div className="p-2 bg-blue-50 text-[#1A73E8] rounded-lg flex-shrink-0">
                                <MapPin size={16} />
                            </div>
                            <div className="flex flex-col gap-0.5 mt-0.5">
                                <span className="font-bold text-gray-900">Alamat Pengiriman</span>
                                <span className="text-gray-400 font-medium leading-relaxed">
                                    {shippingAddress ? (
                                        `${shippingAddress.namaPenerima} | ${shippingAddress.alamatLengkap}, ${shippingAddress.kota}, ${shippingAddress.provinsi} ${shippingAddress.kodePos}`
                                    ) : (
                                        'Detail alamat tidak ditemukan'
                                    )}
                                </span>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="w-full bg-white border border-gray-100 rounded-2xl p-6 shadow-sm flex flex-col gap-5 mb-8">
                    <h3 className="text-sm font-bold text-gray-950">Status Pesanan</h3>

                    <div className="flex flex-col gap-5 relative">
                        <div className="flex items-center justify-between w-full">
                            <div className="flex items-center gap-4">
                                <div className="w-9 h-9 rounded-full bg-[#E6F9ED] text-[#00C950] flex items-center justify-center font-bold flex-shrink-0 z-10">
                                    <Check size={18} strokeWidth={2.5} />
                                </div>
                                <div className="flex flex-col">
                                    <span className="text-xs font-bold text-gray-900">Pesanan Diterima</span>
                                    <span className="text-[11px] text-[#00C950] font-medium mt-0.5">Baru saja</span>
                                </div>
                            </div>
                            <div className="w-5 h-5 rounded-full bg-[#E6F9ED] text-[#00C950] flex items-center justify-center">
                                <Check size={10} strokeWidth={3} />
                            </div>
                        </div>

                        <div className="flex items-center gap-4 w-full">
                            <div className="w-9 h-9 rounded-full bg-gray-100 text-gray-400 flex items-center justify-center flex-shrink-0 z-10">
                                <Package size={18} />
                            </div>
                            <div className="flex flex-col">
                                <span className="text-xs font-semibold text-gray-500">Sedang Dikemas</span>
                                <span className="text-[11px] text-gray-400 mt-0.5">Estimasi 1-2 jam</span>
                            </div>
                        </div>

                        <div className="flex items-center gap-4 w-full">
                            <div className="w-9 h-9 rounded-full bg-gray-100 text-gray-400 flex items-center justify-center flex-shrink-0 z-10">
                                <Truck size={18} />
                            </div>
                            <div className="flex flex-col">
                                <span className="text-xs font-semibold text-gray-500">Dalam Pengiriman</span>
                                <span className="text-[11px] text-gray-400 mt-0.5">Sesuai paket kurir</span>
                            </div>
                        </div>

                        <div className="flex items-center gap-4 w-full">
                            <div className="w-9 h-9 rounded-full bg-gray-100 text-gray-400 flex items-center justify-center flex-shrink-0 z-10">
                                <MapPin size={18} />
                            </div>
                            <div className="flex flex-col">
                                <span className="text-xs font-semibold text-gray-500">Terkirim</span>
                                <span className="text-[11px] text-gray-400 mt-0.5">Selesai</span>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full">
                    <button onClick={() => alert('Fitur tracking dalam pengembangan')} className="w-full sm:w-auto px-6 h-11 bg-[#1A73E8] hover:bg-blue-700 text-white font-bold rounded-xl text-xs flex items-center justify-center gap-2 transition shadow-sm shadow-blue-100">
                        <MapPin size={14} /> Lacak Pesanan
                    </button>
                    <button onClick={() => navigate('/profilemyorder')} className="w-full sm:w-auto px-6 h-11 bg-white border border-gray-200 hover:bg-gray-50 text-gray-600 font-bold rounded-xl text-xs flex items-center justify-center transition">
                        Lihat Riwayat Pesanan
                    </button>
                    <button onClick={handleContinueShopping} className="w-full sm:w-auto px-4 h-11 text-[#1A73E8] hover:text-blue-700 font-bold text-xs flex items-center justify-center gap-1 transition">
                        Lanjut Belanja <span className="text-sm font-normal">&rarr;</span>
                    </button>
                </div>

            </div>
        </main>
    );
}