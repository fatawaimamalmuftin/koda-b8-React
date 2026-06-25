import { useState, useEffect } from 'react';
import { Trash2, Minus, Plus, Heart, Tag, Shield, ShoppingBag } from 'lucide-react';
import elektronikImg from '../assets/elektronik.png';
import Card from '../componen/Card';
import { Link } from 'react-router-dom';

export default function MainCart() {
    const [allUsers, setAllUsers] = useState([]);
    const [cartItems, setCartItems] = useState([]);

    useEffect(() => {
        function getLocalCart() {
            const storedUsers = JSON.parse(localStorage.getItem('user')) || [];
            setAllUsers(storedUsers);

            const activeUser = storedUsers.find(user => user.isLoggedIn === true);

            if (activeUser && activeUser.cart) {
                setCartItems(activeUser.cart);
            } else {
                setCartItems([]);
            }
        }
        getLocalCart();
    }, []);

    const updateLocalStorageUsers = (updatedCart) => {
        const updatedUsers = allUsers.map(user => {
            if (user.isLoggedIn === true) {
                return { ...user, cart: updatedCart };
            }
            return user;
        });

        setAllUsers(updatedUsers);
        setCartItems(updatedCart);
        localStorage.setItem('user', JSON.stringify(updatedUsers));
    };

    const updateQuantity = (id, delta) => {
        const updatedCart = cartItems.map(item => {
            if (item.id === id) {
                const newQty = item.quantity + delta;
                return newQty >= 1 ? { ...item, quantity: newQty } : item;
            }
            return item;
        });
        updateLocalStorageUsers(updatedCart);
    };

    const removeItem = (id) => {
        const updatedCart = cartItems.filter(item => item.id !== id);
        updateLocalStorageUsers(updatedCart);
    };

    const totalItems = cartItems.reduce((acc, item) => acc + item.quantity, 0);
    const subtotal = cartItems.reduce((acc, item) => acc + (item.price * item.quantity), 0);

    return (
        <main className="w-full bg-gray-50 px-26 py-10">
            <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 gap-10">

                <h1 className="text-3xl font-bold text-gray-950">
                    Keranjang Belanja ({totalItems} item)
                </h1>

                <div className="flex flex-col lg:flex-row gap-8 items-start">

                    <div className="flex-1 w-full flex flex-col gap-6">

                        {cartItems.length === 0 ? (
                            <div className="bg-white border border-gray-100 rounded-2xl p-10 text-center flex flex-col items-center gap-4 shadow-sm">
                                <div className="w-16 h-16 bg-gray-50 rounded-full flex items-center justify-center text-gray-400">
                                    <ShoppingBag size={28} />
                                </div>
                                <h3 className="text-lg font-bold text-gray-900">Keranjang Belanja Kosong</h3>
                                <p className="text-sm text-gray-500 max-w-xs">Kamu belum menambahkan produk apa pun ke dalam keranjang belanjamu.</p>
                                <Link to="/" className="mt-2 px-6 h-11 bg-[#1A73E8] text-white text-xs font-bold rounded-xl flex items-center justify-center hover:bg-blue-700 transition">
                                    Mulai Belanja
                                </Link>
                            </div>
                        ) : (
                            cartItems.map((item) => (
                                <div key={item.id} className="bg-white border border-gray-100 rounded-2xl p-6 flex gap-6 shadow-sm">
                                    <div className="w-28 h-28 rounded-xl overflow-hidden bg-gray-50 flex items-center justify-center p-2">
                                        <img
                                            src={item.image || elektronikImg}
                                            alt={item.name}
                                            className="w-full h-full object-contain"
                                        />
                                    </div>

                                    <div className="flex-1 flex flex-col justify-between">
                                        <div className="flex justify-between items-start">
                                            <div>
                                                <h3 className="text-base font-semibold text-gray-950">
                                                    {item.name}
                                                </h3>
                                                <p className="text-sm text-gray-500 mt-1">Warna: {item.color || "Default"}</p>
                                            </div>
                                            <button
                                                onClick={() => removeItem(item.id)}
                                                className="text-gray-400 hover:text-red-500 transition"
                                                type="button"
                                            >
                                                <Trash2 size={20} />
                                            </button>
                                        </div>

                                        <div className="flex justify-between items-center mt-4">
                                            <div className="flex items-center gap-3 border border-gray-200 rounded-full h-10 px-2 bg-gray-50">
                                                <button
                                                    onClick={() => updateQuantity(item.id, -1)}
                                                    className="text-gray-500 hover:text-gray-950 p-1"
                                                    type="button"
                                                >
                                                    <Minus size={16} />
                                                </button>
                                                <span className="font-bold text-gray-950 w-8 text-center select-none text-lg">
                                                    {item.quantity}
                                                </span>
                                                <button
                                                    onClick={() => updateQuantity(item.id, 1)}
                                                    className="text-gray-500 hover:text-gray-950 p-1"
                                                    type="button"
                                                >
                                                    <Plus size={16} />
                                                </button>
                                            </div>

                                            <span className="text-xl font-bold text-[#1A73E8]">
                                                Rp {(item.price * item.quantity).toLocaleString('id-ID')}
                                            </span>
                                        </div>

                                        <button className="flex items-center gap-2 text-sm text-gray-500 hover:text-red-500 transition mt-3 w-max" type="button">
                                            <Heart size={16} />
                                            <span>Simpan ke Wishlist</span>
                                        </button>
                                    </div>
                                </div>
                            ))
                        )}

                        <div className="bg-white border border-gray-100 rounded-2xl p-6 shadow-sm flex flex-col gap-4">
                            <div className="flex items-center gap-3 text-lg font-semibold text-gray-950">
                                <Tag className="text-[#1A73E8]" size={20} />
                                <span>Punya Kode Promo?</span>
                            </div>
                            <div className="flex gap-0">
                                <input
                                    type="text"
                                    placeholder="Contoh: HEMAT50"
                                    className="flex-1 h-12 px-5 bg-gray-50 border border-gray-200 rounded-l-xl outline-none text-gray-900 placeholder-gray-400 focus:border-blue-300 focus:bg-white transition"
                                />
                                <button className="h-12 px-7 bg-[#1A73E8] hover:bg-blue-700 text-white font-semibold rounded-r-xl transition text-sm" type="button">
                                    Terapkan
                                </button>
                            </div>
                        </div>

                    </div>

                    <div className="w-full lg:w-95 bg-white border border-gray-100 rounded-2xl p-6 shadow-sm flex flex-col gap-6 lg:sticky lg:top-10">
                        <h2 className="text-xl font-bold text-gray-950">
                            Ringkasan Pesanan
                        </h2>

                        <div className="flex flex-col gap-4 border-b border-gray-100 pb-6 text-sm">
                            <div className="flex justify-between text-gray-600">
                                <span>Subtotal ({totalItems} item)</span>
                                <span className="font-medium text-gray-800">
                                    Rp {subtotal.toLocaleString('id-ID')}
                                </span>
                            </div>
                            <div className="flex justify-between items-center text-gray-600">
                                <span>Ongkos Kirim</span>
                                <span className="text-xs font-bold text-[#00A63E] bg-green-50 px-3 py-1 rounded-full">
                                    GRATIS
                                </span>
                            </div>
                        </div>

                        <div className="flex justify-between items-center text-lg">
                            <span className="text-gray-950 font-semibold">Total</span>
                            <span className="text-2xl font-extrabold text-[#1A73E8]">
                                Rp {subtotal.toLocaleString('id-ID')}
                            </span>
                        </div>

                        <Link
                            to={cartItems.length > 0 ? "/checkout1" : "#"}
                            className={`w-full h-14 rounded-xl font-bold flex items-center justify-center gap-3 transition-all duration-300 transform text-white ${cartItems.length > 0
                                ? "bg-[#F97316] hover:bg-orange-600 hover:scale-[1.02] shadow-lg shadow-orange-100"
                                : "bg-gray-300 cursor-not-allowed"
                                }`}
                        >
                            <Shield size={22} />
                            <span>Lanjut ke Checkout Aman</span>
                        </Link>

                        <div className="text-center text-xs text-gray-400 mt-2">
                            <p className="font-medium text-gray-500 mb-1">🔒 Pembayaran 100% Aman & Terenkripsi</p>
                            <p className="leading-relaxed">
                                Mendukung Transfer Bank, Virtual Account, Kartu Kredit, & e-Wallet
                            </p>
                        </div>
                    </div>

                </div>

                <div className="mt-12 flex flex-col gap-6">
                    <h2 className="text-2xl font-semibold text-gray-950">
                        Mungkin Kamu Suka Ini
                    </h2>

                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                        <Card id="p1" name="Headphone Wireless Premium" price={450000} image={elektronikImg} brand="SOUNDWAVE" discount="-31%" originalPrice={562500} rating="4.8" reviews="512" />
                        <Card id="p2" name="Headphone Wireless Premium" price={450000} image={elektronikImg} brand="SOUNDWAVE" discount="-31%" originalPrice={562500} rating="4.8" reviews="512" />
                        <Card id="p3" name="Headphone Wireless Premium" price={450000} image={elektronikImg} brand="SOUNDWAVE" discount="-31%" originalPrice={562500} rating="4.8" reviews="512" />
                        <Card id="p4" name="Headphone Wireless Premium" price={450000} image={elektronikImg} brand="SOUNDWAVE" discount="-31%" originalPrice={562500} rating="4.8" reviews="512" />
                    </div>
                </div>

            </div>
        </main>
    );
}