import { useState, useEffect } from "react";
import { ChevronRight, ShoppingCart, Heart, Star, ShieldCheck, Truck, RotateCcw } from "lucide-react";
import Card from "./../componen/Card";
import elektronikImg from '../assets/elektronik.png';
import { useNavigate } from "react-router-dom";
import Swal from 'sweetalert2';

export default function MainDetail() {
    const navigate = useNavigate();

    const [productInfo, setProductInfo] = useState({
        id: "p1",
        name: "Headphone Wireless Premium",
        price: 450000,
        originalPrice: 650000,
        brand: "SOUNDWAVE",
        discount: "-31%",
        image: elektronikImg,
        rating: "4.8",
        reviews: "512"
    });

    const [selectedColor, setSelectedColor] = useState("Hitam");
    const [quantity, setQuantity] = useState(1);
    const stock = 45;

    useEffect(() => {
        async function getData() {
            try {
                const stored = localStorage.getItem('selected_product');
                if (stored) {
                    const parsedProduct = JSON.parse(stored);
                    setProductInfo({
                        id: parsedProduct.id || "p1",
                        name: parsedProduct.name || "Headphone Wireless Premium",
                        price: parsedProduct.price ? Number(parsedProduct.price) : 450000,
                        originalPrice: parsedProduct.originalPrice ? Number(parsedProduct.originalPrice) : 650000,
                        brand: parsedProduct.brand || "SOUNDWAVE",
                        discount: parsedProduct.discount || "-31%",
                        image: parsedProduct.image || elektronikImg,
                        rating: parsedProduct.rating || "4.8",
                        reviews: parsedProduct.reviews || "512"
                    });
                }
            } catch (e) {
                console.error("Gagal membaca selected_product:", e);
            }
        }
        getData()
    }, []);

    const getStorageUserData = () => {
        try {
            const rawUsers = localStorage.getItem('user');
            const usersList = rawUsers ? JSON.parse(rawUsers) : [];
            const arrayUsers = Array.isArray(usersList) ? usersList : [];

            const activeUser = arrayUsers.find(u => u.isLoggedIn === true || u.isLoggedIn === "true") || null;

            return { usersList: arrayUsers, currentUser: activeUser };
        } catch (e) {
            console.error("Gagal memproses data localStorage 'user':", e);
            return { usersList: [], currentUser: null };
        }
    };

    const getCartItemData = () => {
        return {
            id: `${productInfo.id}-${selectedColor}`,
            productId: productInfo.id,
            name: `${productInfo.name} (${selectedColor})`,
            price: Number(productInfo.price),
            image: productInfo.image,
            quantity: quantity,
            color: selectedColor
        };
    };

    const handleAddToCart = () => {
        const { usersList, currentUser } = getStorageUserData();

        if (!currentUser) {
            Swal.fire({
                icon: 'warning',
                title: 'Akses Ditolak',
                text: 'Harus login terlebih dahulu untuk menambah barang ke keranjang!',
                confirmButtonColor: '#3b82f6'
            });
            return;
        }

        const newItem = getCartItemData();
        const currentCart = currentUser.cart || [];
        const existingIndex = currentCart.findIndex(item => item.id === newItem.id);

        if (existingIndex > -1) {
            currentCart[existingIndex].quantity += quantity;
        } else {
            currentCart.push(newItem);
        }

        currentUser.cart = currentCart;

        const updatedUsersList = usersList.map(user => {
            if (user.email === currentUser.email) {
                return currentUser;
            }
            return user;
        });

        localStorage.setItem("user", JSON.stringify(updatedUsersList));

        Swal.fire({
            icon: 'success',
            title: 'Berhasil!',
            text: `${quantity}x produk berhasil dimasukkan ke keranjang ${currentUser.nama || currentUser.name}.`,
            showConfirmButton: false,
            timer: 2000,
            timerProgressBar: true,
            position: 'top-end',
            toast: true
        });
    };

    const handleBuyNow = () => {
        const { usersList, currentUser } = getStorageUserData();

        if (!currentUser) {
            Swal.fire({
                icon: 'warning',
                title: 'Akses Ditolak',
                text: 'Kamu harus login terlebih dahulu sebelum melakukan checkout!',
                confirmButtonColor: '#3b82f6'
            });
            return;
        }

        const newItem = getCartItemData();
        const currentCart = currentUser.cart || [];
        const existingIndex = currentCart.findIndex(item => item.id === newItem.id);

        if (existingIndex > -1) {
            currentCart[existingIndex].quantity += quantity;
        } else {
            currentCart.push(newItem);
        }

        currentUser.cart = currentCart;

        const updatedUsersList = usersList.map(user => {
            if (user.email === currentUser.email) {
                return currentUser;
            }
            return user;
        });

        localStorage.setItem("user", JSON.stringify(updatedUsersList));
        navigate('/checkout1');
    };

    const handleQuantity = (delta) => {
        const newQty = quantity + delta;
        if (newQty >= 1 && newQty <= stock) {
            setQuantity(newQty);
        }
    };

    return (
        <>
            <main className="flex flex-col w-full px-4 sm:px-8 md:px-12 lg:px-24 bg-[#F8FAFC] gap-6 pb-16 py-6 animate-fadeIn">

                <nav className="flex items-center gap-1.5 text-xs sm:text-sm text-slate-500 overflow-hidden whitespace-nowrap">
                    <span className="hover:text-blue-600 cursor-pointer transition">Beranda</span>
                    <ChevronRight size={12} className="text-slate-400" />
                    <span className="hidden sm:inline hover:text-blue-600 cursor-pointer transition">Toko</span>
                    <ChevronRight size={12} className="text-slate-400 hidden sm:inline" />
                    <span className="hidden md:inline hover:text-blue-600 cursor-pointer transition">Electronics</span>
                    <ChevronRight size={12} className="text-slate-400 hidden md:inline" />
                    <span className="text-slate-900 font-medium truncate max-w-37 sm:max-w-75">{productInfo.name}</span>
                </nav>

                <section className="w-full grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-10 bg-white rounded-2xl md:rounded-3xl border border-slate-100 shadow-sm p-4 sm:p-6 md:p-8">

                    <div className="flex flex-col gap-3 sm:gap-4">
                        <div className="relative w-full aspect-square bg-[#F8FAFC] rounded-xl md:rounded-2xl overflow-hidden border border-slate-100 flex items-center justify-center group">
                            {productInfo.discount && (
                                <span className="absolute top-3 left-3 sm:top-4 sm:left-4 z-10 bg-red-500 text-white text-[10px] sm:text-xs font-bold px-2 py-0.5 sm:py-1 rounded-md sm:rounded-lg shadow-sm">
                                    {productInfo.discount}
                                </span>
                            )}
                            <img
                                src={productInfo.image}
                                className="w-full h-full object-contain p-4 transition-transform duration-500 group-hover:scale-105"
                                alt={productInfo.name}
                            />
                        </div>
                        <div className="flex gap-2 sm:gap-3">
                            <div className="w-12 h-12 sm:w-16 sm:h-16 rounded-lg sm:rounded-xl overflow-hidden border-2 border-blue-600 cursor-pointer flex items-center justify-center bg-[#F8FAFC] p-1 shadow-sm">
                                <img src={productInfo.image} className="w-full h-full object-contain" alt="thumb-1" />
                            </div>
                            <div className="w-12 h-12 sm:w-16 sm:h-16 rounded-lg sm:rounded-xl overflow-hidden border border-slate-200 hover:border-slate-400 cursor-pointer flex items-center justify-center bg-[#F8FAFC] p-1 transition">
                                <img src={productInfo.image} className="w-full h-full object-contain opacity-70" alt="thumb-2" />
                            </div>
                        </div>
                    </div>

                    <div className="flex flex-col justify-between gap-5 sm:gap-6 max-w-xl">
                        <div className="flex flex-col gap-1.5">
                            <div className="text-xs text-slate-500 font-medium">
                                {productInfo.brand} · Audio
                            </div>
                            <h1 className="text-xl sm:text-2xl font-bold text-slate-900 tracking-tight">
                                {productInfo.name}
                            </h1>

                            <div className="flex items-center gap-3 flex-wrap mt-0.5">
                                <div className="flex items-center gap-1">
                                    <div className="flex items-center gap-0.5">
                                        <Star size={14} className="fill-amber-400 text-amber-400" />
                                        <Star size={14} className="fill-amber-400 text-amber-400" />
                                        <Star size={14} className="fill-amber-400 text-amber-400" />
                                        <Star size={14} className="fill-amber-400 text-amber-400" />
                                        <Star size={14} className="fill-amber-400 text-amber-400" />
                                    </div>
                                    <span className="text-xs sm:text-sm text-slate-600 ml-1">
                                        {productInfo.rating} ({productInfo.reviews})
                                    </span>
                                </div>
                                <span className="text-xs font-medium text-emerald-600 flex items-center gap-1">
                                    <span>✓</span> Stok tersedia ({stock})
                                </span>
                            </div>
                        </div>

                        <div className="bg-[#f0f5fa] rounded-xl p-4 sm:p-5 border border-slate-100">
                            <div className="flex items-center gap-2 sm:gap-3 flex-wrap">
                                <span className="text-2xl sm:text-3xl font-bold text-[#1a66ff] tracking-tight">
                                    Rp {productInfo.price.toLocaleString('id-ID')}
                                </span>
                                {productInfo.originalPrice > productInfo.price && (
                                    <>
                                        <span className="text-xs sm:text-sm text-slate-400 line-through">
                                            Rp {productInfo.originalPrice.toLocaleString('id-ID')}
                                        </span>
                                        <span className="bg-red-600 text-white text-[10px] sm:text-xs font-semibold px-2 py-0.5 rounded-full">
                                            Hemat {productInfo.discount}
                                        </span>
                                    </>
                                )}
                            </div>
                            {productInfo.originalPrice > productInfo.price && (
                                <div className="text-xs font-medium text-emerald-600 mt-1.5">
                                    Kamu hemat Rp {(productInfo.originalPrice - productInfo.price).toLocaleString('id-ID')}
                                </div>
                            )}
                        </div>

                        <div>
                            <span className="text-xs text-slate-800 font-medium">
                                Warna: <span className="text-slate-500 font-normal">{selectedColor}</span>
                            </span>
                            <div className="flex gap-2 mt-2">
                                {["Hitam", "Putih", "Biru"].map((color) => (
                                    <button
                                        key={color}
                                        type="button"
                                        onClick={() => setSelectedColor(color)}
                                        className={`px-4 py-1.5 rounded-lg text-xs font-medium border transition ${selectedColor === color
                                            ? "border-blue-500 text-blue-600 bg-blue-50/50 font-semibold"
                                            : "border-slate-200 text-slate-600 bg-white hover:border-slate-300"
                                            }`}
                                    >
                                        {color}
                                    </button>
                                ))}
                            </div>
                        </div>

                        <div>
                            <span className="text-xs font-medium text-slate-800">Jumlah</span>
                            <div className="flex items-center gap-3 mt-2">
                                <div className="flex items-center border border-slate-200 rounded-xl bg-white overflow-hidden h-9">
                                    <button
                                        type="button"
                                        onClick={() => handleQuantity(-1)}
                                        className="w-9 h-full flex items-center justify-center text-slate-500 hover:bg-slate-50 text-base"
                                    >
                                        −
                                    </button>
                                    <span className="w-8 text-center text-xs font-semibold text-slate-800">
                                        {quantity}
                                    </span>
                                    <button
                                        type="button"
                                        onClick={() => handleQuantity(1)}
                                        className="w-9 h-full flex items-center justify-center text-slate-500 hover:bg-slate-50 text-base"
                                    >
                                        +
                                    </button>
                                </div>
                                <span className="text-xs text-slate-500">Stok: {stock} pcs</span>
                            </div>
                        </div>

                        <div className="flex flex-col sm:flex-row gap-2 mt-1">
                            <button
                                type="button"
                                onClick={handleAddToCart}
                                className="w-full sm:flex-1 h-11 border border-orange-500 text-orange-600 bg-white text-xs font-bold rounded-xl flex items-center justify-center gap-2 hover:bg-orange-50 transition active:scale-[0.99]"
                            >
                                <ShoppingCart size={14} />
                                Tambah ke Keranjang
                            </button>

                            <button
                                type="button"
                                onClick={handleBuyNow}
                                className="w-full sm:flex-1 h-11 bg-orange-500 text-white text-xs font-bold rounded-xl flex items-center justify-center hover:bg-orange-600 transition active:scale-[0.99]"
                            >
                                Beli Sekarang
                            </button>

                            <button
                                type="button"
                                className="w-full sm:w-11 h-11 border border-slate-200 bg-white rounded-xl flex items-center justify-center text-slate-400 hover:text-red-500 hover:bg-red-50 transition"
                            >
                                <Heart size={16} />
                            </button>
                        </div>

                        <div className="grid grid-cols-3 gap-2 mt-1">
                            <div className="flex flex-col items-center text-center p-3 bg-slate-50/80 rounded-xl gap-1">
                                <Truck size={15} className="text-blue-500" />
                                <span className="text-[10px] font-semibold text-slate-800 leading-tight">Gratis Ongkir</span>
                                <span className="text-[9px] text-slate-400">Min. Rp 100.000</span>
                            </div>
                            <div className="flex flex-col items-center text-center p-3 bg-slate-50/80 rounded-xl gap-1">
                                <ShieldCheck size={15} className="text-blue-500" />
                                <span className="text-[10px] font-semibold text-slate-800 leading-tight">Pembayaran Aman</span>
                                <span className="text-[9px] text-slate-400">SSL Terenkripsi</span>
                            </div>
                            <div className="flex flex-col items-center text-center p-3 bg-slate-50/80 rounded-xl gap-1">
                                <RotateCcw size={15} className="text-blue-500" />
                                <span className="text-[10px] font-semibold text-slate-800 leading-tight">Retur 30 Hari</span>
                                <span className="text-[9px] text-slate-400">Gratis retur</span>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="w-full bg-white rounded-xl md:rounded-2xl border border-slate-100 shadow-sm overflow-hidden">
                    <div className="flex border-b border-slate-100 bg-slate-50/50 overflow-x-auto whitespace-nowrap">
                        <button className="px-5 sm:px-6 py-3.5 text-xs sm:text-sm font-bold border-b-2 text-blue-600 border-blue-600 bg-white">
                            Deskripsi
                        </button>
                        <button className="px-5 sm:px-6 py-3.5 text-xs sm:text-sm font-semibold text-slate-400 hover:text-slate-600 transition">
                            Spesifikasi
                        </button>
                        <button className="px-5 sm:px-6 py-3.5 text-xs sm:text-sm font-semibold text-slate-400 hover:text-slate-600 transition">
                            Ulasan ({productInfo.reviews})
                        </button>
                    </div>
                    <div className="p-4 sm:p-6 text-xs sm:text-sm text-slate-600 leading-relaxed">
                        Headphone wireless dengan teknologi noise-cancelling terdepan. Nikmati musik favoritmu tanpa gangguan lingkungan dengan kualitas suara super jernih dan bass mendalam yang memukau telinga.
                    </div>
                </section>

                <section className="w-full bg-white rounded-xl md:rounded-2xl border border-slate-100 shadow-sm p-4 sm:p-6">
                    <div className="w-full flex justify-between items-center mb-4 sm:mb-6">
                        <h2 className="font-extrabold text-sm sm:text-base text-slate-900">Produk Terkait</h2>
                        <span className="text-[11px] sm:text-xs font-bold text-blue-600 cursor-pointer hover:underline">Lihat Semua →</span>
                    </div>
                    <div className="w-full grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4">
                        <Card id="p1" name="Headphone Wireless Premium" price={450000} image={elektronikImg} brand="SOUNDWAVE" discount="-31%" originalPrice={650000} rating="4.8" reviews="512" />
                        <Card id="p2" name="Soundwave Bluetooth Speaker" price={320000} image={elektronikImg} brand="SOUNDWAVE" discount="-15%" originalPrice={380000} rating="4.7" reviews="128" />
                        <Card id="p3" name="Wireless Earbuds Neo" price={250000} image={elektronikImg} brand="SOUNDWAVE" discount="-20%" originalPrice={312500} rating="4.9" reviews="94" />
                        <Card id="p4" name="Headphone Stand RGB" price={120000} image={elektronikImg} brand="SOUNDWAVE" discount="-10%" originalPrice={133000} rating="4.6" reviews="43" />
                    </div>
                </section>
            </main>
        </>
    );
}