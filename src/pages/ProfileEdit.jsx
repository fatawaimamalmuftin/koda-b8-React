import { Link, useNavigate } from 'react-router-dom';
import {
    FiShoppingBag,
    FiHeart,
    FiMapPin,
    FiCreditCard,
    FiSettings,
    FiLogOut,
    FiEdit3,
} from 'react-icons/fi';
import { useEffect, useState } from 'react';


export default function ProfileEdit() {
    const navigate = useNavigate();

    const [formData, setFormData] = useState({
        namaLengkap: 'Budi Santoso',
        email: 'budi@email.com',
        nomorTelepon: '0812-3456-7890',
        tanggalLahir: '1990-03-15',
        jenisKelamin: 'Laki-laki'
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSave = (e) => {
        e.preventDefault();
        alert('Profil berhasil disimpan!');
    };


    const [currentUser, setCurrentUser] = useState(null);

    useEffect(() => {
        async function getLocal() {
            const storedUsers = localStorage.getItem('user');

            if (storedUsers) {
                try {
                    const usersArray = JSON.parse(storedUsers);

                    if (Array.isArray(usersArray)) {
                        const loggedInUser = usersArray.find(user => user.isLoggedIn === true);
                        if (loggedInUser) {
                            setCurrentUser(loggedInUser);
                        }
                    }
                } catch (error) {
                    console.error("Gagal membaca data user dari localStorage:", error);
                }
            }
        }
        getLocal()
    }, []);

    const getInitialName = () => {
        if (currentUser && currentUser.nama) {
            return currentUser.nama.charAt(0).toUpperCase();
        }
        return "?";
    };

    return (
        <main className="max-w-300 mx-auto px-4 py-8 flex flex-col md:flex-row gap-6 items-start bg-gray-50 min-h-screen">

            <section className="w-full md:w-65 flex flex-col gap-4">

                <article className="bg-white border border-gray-200 rounded-2xl p-6 flex flex-col items-center shadow-sm">
                    <div className="w-16 h-16 rounded-full bg-blue-100 text-[#1A73E8] flex items-center justify-center text-xl font-bold uppercase">
                        {getInitialName()}
                    </div>

                    <h2 className="text-base font-bold text-gray-900 mt-3 capitalize">
                        {currentUser ? currentUser.nama : "Memuat nama..."}
                    </h2>

                    <p className="text-xs text-gray-400 mt-0.5">
                        {currentUser ? currentUser.email : "memuat email..."}
                    </p>

                    <div className="w-full h-px bg-gray-100 my-4" />

                    <div className="flex w-full justify-around">
                        <div className="flex flex-col items-center">
                            <span className="text-sm font-bold text-gray-900">2</span>
                            <span className="text-[11px] text-gray-400 mt-0.5">Pesanan</span>
                        </div>
                        <div className="flex flex-col items-center">
                            <span className="text-sm font-bold text-gray-900">0</span>
                            <span className="text-[11px] text-gray-400 mt-0.5">Wishlist</span>
                        </div>
                    </div>
                </article>

                <article className="bg-white border border-gray-200 rounded-2xl p-3 shadow-sm flex flex-col gap-1">
                    <Link to="/profilemyorder" className="flex items-center gap-3 p-3 rounded-xl text-gray-500 hover:bg-gray-50 transition" style={{ textDecoration: 'none' }}>
                        <FiShoppingBag className="w-4 h-4" />
                        <span className="text-xs flex-1">Pesanan Saya</span>
                    </Link>

                    <Link to="/profilewishlist" className="flex items-center gap-3 p-3 rounded-xl text-gray-500 hover:bg-gray-50 transition" style={{ textDecoration: 'none' }}>
                        <FiHeart className="w-4 h-4 text-gray-400" />
                        <span className="text-xs flex-1">Wishlist</span>
                    </Link>

                    <Link to="/profilealamat" className="flex items-center gap-3 p-3 rounded-xl text-gray-500 hover:bg-gray-50 transition" style={{ textDecoration: 'none' }}>
                        <FiMapPin className="w-4 h-4 text-gray-400" />
                        <span className="text-xs flex-1">Alamat Saya</span>
                    </Link>

                    <Link to="/checkout2" className="flex items-center gap-3 p-3 rounded-xl text-gray-500 hover:bg-gray-50 transition" style={{ textDecoration: 'none' }}>
                        <FiCreditCard className="w-4 h-4 text-gray-400" />
                        <span className="text-xs flex-1">Metode Pembayaran</span>
                    </Link>

                    <Link to="/profileedit" className="flex items-center gap-3 p-3 rounded-xl bg-blue-50 text-[#1A73E8] font-semibold transition" style={{ textDecoration: 'none' }}>
                        <FiSettings className="w-4 h-4 text-blue-400" />
                        <span className="text-xs flex-1">Pengaturan Profil</span>
                        <span className="text-xs font-bold">&rsaquo;</span>
                    </Link>

                    <div className="w-full h-px bg-gray-100 my-1" />

                    <button onClick={() => navigate('/logout')} className="flex items-center gap-3 p-3 rounded-xl text-red-500 hover:bg-red-50 transition w-full text-left">
                        <FiLogOut className="w-4 h-4" />
                        <span className="text-xs font-semibold">Keluar</span>
                    </button>
                </article>
            </section>

            <section className="flex-1 w-full flex flex-col gap-5">

                <div className="flex justify-between items-center">
                    <h1 className="text-xl font-bold text-gray-900">Pengaturan Profil</h1>
                    <button
                        onClick={handleSave}
                        className="flex items-center gap-1.5 border border-[#1A73E8] text-[#1A73E8] bg-white hover:bg-blue-50 px-4 py-1.5 rounded-xl text-xs font-semibold shadow-sm transition"
                    >
                        <FiEdit3 className="w-3.5 h-3.5" />
                        Simpan
                    </button>
                </div>

                <form onSubmit={handleSave} className="w-full bg-white border border-gray-200 rounded-2xl p-6 flex flex-col gap-5 shadow-sm">

                    <div className="flex items-center gap-4">
                        <div className="w-16 h-16 rounded-full bg-blue-100 text-[#1A73E8] flex items-center justify-center text-xl font-bold">
                            B
                        </div>
                        <button type="button" className="text-xs font-bold text-[#1A73E8] hover:underline">
                            Ganti Foto Profil
                        </button>
                    </div>

                    <div className="flex flex-col gap-1.5">
                        <label className="text-xs font-medium text-gray-400">Nama Lengkap</label>
                        <input
                            type="text"
                            name="namaLengkap"
                            value={formData.namaLengkap}
                            onChange={handleChange}
                            className="w-full bg-[#F3F4F6] border border-transparent rounded-xl px-4 py-3 text-xs text-gray-800 font-medium focus:bg-white focus:border-gray-300 outline-none transition"
                        />
                    </div>

                    <div className="flex flex-col gap-1.5">
                        <label className="text-xs font-medium text-gray-400">Email</label>
                        <input
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            className="w-full bg-[#F3F4F6] border border-transparent rounded-xl px-4 py-3 text-xs text-gray-800 font-medium focus:bg-white focus:border-gray-300 outline-none transition"
                        />
                    </div>

                    <div className="flex flex-col gap-1.5">
                        <label className="text-xs font-medium text-gray-400">Nomor Telepon</label>
                        <input
                            type="text"
                            name="nomorTelepon"
                            value={formData.nomorTelepon}
                            onChange={handleChange}
                            className="w-full bg-[#F3F4F6] border border-transparent rounded-xl px-4 py-3 text-xs text-gray-800 font-medium focus:bg-white focus:border-gray-300 outline-none transition"
                        />
                    </div>

                    <div className="flex flex-col gap-1.5 relative">
                        <label className="text-xs font-medium text-gray-400">Tanggal Lahir</label>
                        <div className="relative w-full">
                            <input
                                type="date"
                                name="tanggalLahir"
                                value={formData.tanggalLahir}
                                onChange={handleChange}
                                className="w-full bg-[#F3F4F6] border border-transparent rounded-xl px-4 py-3 text-xs text-gray-800 font-medium focus:bg-white focus:border-gray-300 outline-none transition appearance-none"
                            />
                        </div>
                    </div>

                    <div className="flex flex-col gap-1.5">
                        <label className="text-xs font-medium text-gray-400">Jenis Kelamin</label>
                        <select
                            name="jenisKelamin"
                            value={formData.jenisKelamin}
                            onChange={handleChange}
                            className="w-full bg-[#F3F4F6] border border-transparent rounded-xl px-4 py-3 text-xs text-gray-800 font-medium focus:bg-white focus:border-gray-300 outline-none transition cursor-pointer"
                        >
                            <option value="Laki-laki">Laki-laki</option>
                            <option value="Perempuan">Perempuan</option>
                        </select>
                    </div>

                </form>

                <article className="w-full bg-white border border-gray-200 rounded-2xl p-6 flex flex-col gap-3 shadow-sm">
                    <h2 className="text-sm font-bold text-gray-900 mb-1">Keamanan Akun</h2>

                    <button type="button" className="text-xs font-bold text-[#1A73E8] hover:underline text-left w-fit">
                        Ubah Kata Sandi
                    </button>

                    <button type="button" className="text-xs font-bold text-[#1A73E8] hover:underline text-left w-fit">
                        Aktifkan Verifikasi 2 Langkah
                    </button>
                </article>

            </section>
        </main>
    );
}