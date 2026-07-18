import { useState } from 'react';
import { ShoppingBag, Check } from 'lucide-react';
import headphoneImg from '../assets/elektronik.png';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';

export default function CheckOut3() {
    const navigate = useNavigate();

    const [cartItems] = useState(() => {
        try {
            const cart = JSON.parse(localStorage.getItem('cart'));
            return Array.isArray(cart) ? cart : [];
        } catch {
            return [];
        }
    });

    const [shippingAddress] = useState(() => {
        try {
            const address = JSON.parse(localStorage.getItem('shippingAddress'));
            return address && typeof address === 'object' && !Array.isArray(address)
                ? address
                : null;
        } catch {
            return null;
        }
    });

    const [shippingMethod] = useState(() => {
        return localStorage.getItem('shippingMethod') || 'JNE Reguler';
    });

    const [paymentMethod] = useState(() => {
        return localStorage.getItem('paymentMethod') || 'Virtual Account BCA';
    });

    const subtotal = cartItems.reduce((acc, item) => acc + (item.price * item.quantity), 0);

    const handlePlaceOrder = () => {
        if (cartItems.length === 0) {
            Swal.fire({
                title: 'Keranjang Kosong',
                text: 'Silakan tambahkan produk ke keranjang sebelum melanjutkan checkout.',
                icon: 'warning',
                confirmButtonText: 'OK',
                confirmButtonColor: '#1A73E8',
            });

            return;
        }

        navigate('/checkoutsucces');
    };

    return (
        <main className="w-full bg-gray-50 px-4 md:px-16 lg:px-26 py-10">
            <div className="max-w-7xl mx-auto flex flex-col gap-10">

                <section className="flex justify-center items-center py-4">
                    <div className="flex items-center gap-4 text-xs font-medium text-gray-400">
                        <div className="flex flex-col items-center gap-1 text-[#00C950]">
                            <div className="w-8 h-8 rounded-full bg-[#00C950] text-white flex items-center justify-center font-bold">
                                <Check size={16} strokeWidth={3} />
                            </div>
                            <span>Pengiriman</span>
                        </div>
                        <div className="w-16 h-0.5 bg-[#00C950] mt-[-20px]"></div>
                        <div className="flex flex-col items-center gap-1 text-[#00C950]">
                            <div className="w-8 h-8 rounded-full bg-[#00C950] text-white flex items-center justify-center font-bold">
                                <Check size={16} strokeWidth={3} />
                            </div>
                            <span>Pembayaran</span>
                        </div>
                        <div className="w-16 h-0.5 bg-[#00C950] mt-[-20px]"></div>
                        <div className="flex flex-col items-center gap-1 text-[#1A73E8]">
                            <div className="w-8 h-8 rounded-full bg-[#1A73E8] text-white flex items-center justify-center font-bold">
                                3
                            </div>
                            <span>Konfirmasi</span>
                        </div>
                    </div>
                </section>

                <section className="flex flex-col lg:flex-row gap-8 items-start">

                    <div className="flex-1 w-full flex flex-col gap-6">
                        <div className="w-full bg-white border border-gray-100 rounded-2xl p-6 shadow-sm flex flex-col gap-6">
                            <div className="flex items-center gap-2 text-xl font-bold text-gray-950 border-b border-gray-50 pb-4">
                                <ShoppingBag className="text-[#1A73E8]" size={24} />
                                <h2>Tinjau Pesanan Anda</h2>
                            </div>

                            {shippingAddress && (
                                <div className="flex flex-col gap-2 border-b border-gray-100 pb-5">
                                    <h3 className="text-sm font-bold text-gray-900">Alamat Pengiriman</h3>
                                    <div className="text-xs text-gray-600 leading-relaxed bg-gray-50 p-4 rounded-xl border border-gray-100">
                                        <p className="font-semibold text-gray-800">{shippingAddress.namaPenerima} ({shippingAddress.nomorTelepon})</p>
                                        <p>{shippingAddress.alamatLengkap}, {shippingAddress.kota}, {shippingAddress.provinsi} - {shippingAddress.kodePos}</p>
                                        {shippingAddress.catatan && <p className="text-gray-400 mt-1 italic">Catatan: "{shippingAddress.catatan}"</p>}
                                        <div className="mt-3 pt-2 border-t border-gray-200/60 text-[11px] text-gray-500">
                                            Kurir Pilihan: <span className="font-bold text-gray-700">{shippingMethod}</span>
                                        </div>
                                    </div>
                                </div>
                            )}

                            <div className="flex flex-col gap-2 border-b border-gray-100 pb-5">
                                <h3 className="text-sm font-bold text-gray-900">Metode Pembayaran</h3>
                                <div className="text-xs font-semibold text-gray-800 bg-gray-50 p-4 rounded-xl border border-gray-100 flex justify-between items-center">
                                    <span>{paymentMethod}</span>
                                    <span className="text-[11px] bg-blue-50 text-blue-600 px-2.5 py-1 rounded-md font-medium border border-blue-100">Dipilih</span>
                                </div>
                            </div>

                            <div className="flex flex-col gap-3">
                                <h3 className="text-sm font-bold text-gray-900 mb-1">Rincian Item</h3>
                                <div className="flex flex-col gap-3">
                                    {cartItems.map((item) => (
                                        <div key={item.id} className="flex items-center gap-4 p-3 border border-gray-100 rounded-xl hover:bg-gray-50/50 transition">
                                            <div className="w-14 h-14 rounded-lg bg-white overflow-hidden border border-gray-100 p-1 flex-shrink-0">
                                                <img src={item.image || headphoneImg} alt={item.name} className="w-full h-full object-contain" />
                                            </div>
                                            <div className="flex-1 flex justify-between items-center text-xs">
                                                <div className="flex flex-col gap-0.5">
                                                    <span className="font-bold text-gray-900">
                                                        {item.name ? item.name.split(' (')[0] : 'Produk'}
                                                    </span>
                                                    <span className="text-gray-400">Jumlah: {item.quantity}</span>
                                                </div>
                                                <span className="font-bold text-gray-800">
                                                    Rp {(item.price * item.quantity).toLocaleString('id-ID')}
                                                </span>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            <div className="flex gap-4 h-12 mt-4">
                                <button onClick={() => navigate('/checkout2')} className="px-6 border border-gray-200 hover:bg-gray-50 text-gray-700 rounded-xl font-bold transition text-sm flex items-center justify-center">
                                    Kembali
                                </button>
                                <button onClick={handlePlaceOrder} className="flex-1 bg-[#00A63E] hover:bg-green-700 text-white rounded-xl font-bold flex items-center justify-center transition text-sm shadow-sm shadow-green-200">
                                    Bayar Sekarang & Check Out
                                </button>
                            </div>
                        </div>
                    </div>

                    <div className="w-full lg:w-[380px] bg-white border border-gray-100 rounded-2xl p-6 shadow-sm flex flex-col gap-5 lg:sticky lg:top-10">
                        <h3 className="text-base font-bold text-gray-950">Ringkasan Pembayaran</h3>

                        <div className="flex flex-col gap-3 border-b border-gray-100 pb-4 text-xs">
                            <div className="flex justify-between text-gray-600">
                                <span>Total Harga ({cartItems.reduce((sum, i) => sum + i.quantity, 0)} Barang)</span>
                                <span className="font-medium text-gray-800">
                                    Rp {subtotal.toLocaleString('id-ID')}
                                </span>
                            </div>
                            <div className="flex justify-between text-gray-600">
                                <span>Ongkos Kirim ({shippingMethod})</span>
                                <span className="font-bold text-[#00A63E]">Gratis</span>
                            </div>
                        </div>

                        <div className="flex justify-between items-center text-sm">
                            <span className="text-gray-950 font-bold">Total Tagihan</span>
                            <span className="text-base font-extrabold text-[#1A73E8]">
                                Rp {subtotal.toLocaleString('id-ID')}
                            </span>
                        </div>

                        <div className="text-center text-[11px] text-gray-400 border-t border-gray-50 pt-3">
                            Dengan menekan tombol 'Bayar Sekarang', Anda menyetujui seluruh syarat dan ketentuan platform kami.
                        </div>
                    </div>

                </section>
            </div>
        </main>
    );
}