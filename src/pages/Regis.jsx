import { CircleCheckBig, User, Mail, Lock, EyeOff, ArrowLeft } from 'lucide-react';
import TasBgRegis from '../assets/tasBgRegis.jpg';
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';

export default function Regis() {
    const [nama, setNama] = useState('');
    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');
    const [confirmPass, setComfirmpass] = useState('');

    const navigate = useNavigate();

    function handleRegis(e) {
        e.preventDefault();

        if (!nama || !email || !pass || !confirmPass) {
            Swal.fire({
                title: 'Data Belum Lengkap',
                text: 'Semua data wajib diisi!',
                icon: 'warning',
                confirmButtonText: 'Lengkapi',
                confirmButtonColor: '#1A73E8'
            });
            return;
        }

        if (pass !== confirmPass) {
            Swal.fire({
                title: 'Kata Sandi Tidak Cocok',
                text: 'Kata sandi dan Konfirmasi Kata sandi tidak cocok!!',
                icon: 'error',
                confirmButtonText: 'Perbaiki',
                confirmButtonColor: '#1A73E8'
            });
            return;
        }

        if (pass.length < 6) {
            Swal.fire({
                title: 'Kata Sandi Terlalu Pendek',
                text: 'Kata Sandi Minimal harus 6 karakter!',
                icon: 'warning',
                confirmButtonText: 'Perbaiki',
                confirmButtonColor: '#1A73E8'
            });
            return;
        }

        const dataLocal = localStorage.getItem("user");
        const userList = dataLocal ? JSON.parse(dataLocal) : [];

        const isEmailExist = userList.some(user => user.email === email);
        if (isEmailExist) {
            Swal.fire({
                title: 'Email Sudah Terdaftar',
                text: 'Silakan gunakan email lain atau langsung masuk.',
                icon: 'error',
                confirmButtonText: 'Perbaiki',
                confirmButtonColor: '#1A73E8'
            });
            return;
        }

        const newUser = { nama, email, pass: btoa(pass) };
        userList.push(newUser);
        localStorage.setItem("user", JSON.stringify(userList));

        Swal.fire({
            title: 'Registrasi Berhasil!',
            text: 'Silahkan masuk menggunakan akun baru Anda.',
            icon: 'success',
            confirmButtonText: 'Login Sekarang',
            confirmButtonColor: '#E056FD'
        }).then(() => {
            navigate('/login');
        });
    }

    return (
        <main className="flex min-h-screen w-full overflow-hidden bg-white select-none">

            <section
                className="w-1/2 flex flex-col justify-between p-10 text-white bg-cover bg-top h-screen"
                style={{
                    backgroundImage: `linear-gradient(rgba(26,115,232,0.75), rgba(79,57,246,0.85)), url(${TasBgRegis})`
                }}
            >
                <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-[10px] bg-white/20 flex items-center justify-center font-bold">
                        B
                    </div>
                    <span className="text-sm font-semibold">
                        BeliMudah
                    </span>
                </div>

                <article className="max-w-105 flex flex-col gap-8">
                    <h1 className="text-5xl leading-tight font-bold">
                        Bergabung dengan <br />
                        500.000+ pelanggan <br />
                        puas
                    </h1>

                    <div className="flex flex-col gap-4">
                        <div className="flex items-center gap-3 text-sm">
                            <div className="w-5 h-5 rounded-full bg-white/20 flex justify-center items-center">
                                <CircleCheckBig className="w-3 h-3 text-white" />
                            </div>
                            <span>Akses ribuan produk dengan harga terbaik</span>
                        </div>

                        <div className="flex items-center gap-3 text-sm">
                            <div className="w-5 h-5 rounded-full bg-white/20 flex justify-center items-center">
                                <CircleCheckBig className="w-3 h-3 text-white" />
                            </div>
                            <span>Lacak pesanan secara real-time</span>
                        </div>

                        <div className="flex items-center gap-3 text-sm">
                            <div className="w-5 h-5 rounded-full bg-white/20 flex justify-center items-center">
                                <CircleCheckBig className="w-3 h-3 text-white" />
                            </div>
                            <span>Simpan wishlist & alamat favorit</span>
                        </div>

                        <div className="flex items-center gap-3 text-sm">
                            <div className="w-5 h-5 rounded-full bg-white/20 flex justify-center items-center">
                                <CircleCheckBig className="w-3 h-3 text-white" />
                            </div>
                            <span>Dapatkan notifikasi promo eksklusif</span>
                        </div>
                    </div>
                </article>

                <div className="text-xs opacity-80">
                    © 2026 BeliMudah. Seluruh hak cipta dilindungi.
                </div>
            </section>

            <section className="w-1/2 flex justify-center items-center bg-white h-screen overflow-y-auto pt-20 px-2">
                <article className="w-full max-w-112.5 flex flex-col gap-6 px-4">

                    <div className="flex flex-col gap-2">
                        <h2 className="text-3xl font-bold text-slate-900">
                            Buat Akun Baru
                        </h2>
                        <p className="text-slate-500 leading-7">
                            Sudah punya akun?{' '}
                            <Link to="/login" className="text-blue-600 hover:underline">
                                Masuk di sini
                            </Link>
                        </p>
                    </div>

                    <div className="flex gap-3">
                        <button className="w-1/2 h-12 border border-slate-300 rounded-xl bg-white hover:bg-slate-50 transition font-medium text-slate-700 text-sm">
                            Daftar via Google
                        </button>
                        <button className="w-1/2 h-12 border border-slate-300 rounded-xl bg-white hover:bg-slate-50 transition font-medium text-slate-700 text-sm">
                            Daftar via Facebook
                        </button>
                    </div>

                    <div className="text-center text-sm text-slate-500">
                        atau daftar dengan email
                    </div>

                    <div>
                        <Link
                            to="/login"
                            className="inline-flex items-center gap-2 text-sm font-medium text-slate-500 hover:text-slate-800 transition group"
                        >
                            <ArrowLeft className="w-4 h-4 transform group-hover:-translate-x-1 transition-transform" />
                            Kembali ke Beranda
                        </Link>
                    </div>

                    <form className="flex flex-col gap-4" onSubmit={handleRegis}>

                        <div className="flex flex-col gap-1.5">
                            <label className="text-sm font-semibold text-slate-900">
                                Nama Lengkap
                            </label>
                            <div className="relative flex items-center">
                                <User className="absolute left-4 w-5 h-5 text-slate-400" />
                                <input
                                    type="text"
                                    placeholder="Nama lengkap kamu"
                                    value={nama}
                                    onChange={(e) => setNama(e.target.value)}
                                    className="w-full h-12 border border-slate-300 rounded-xl pl-12 pr-4 outline-none focus:border-blue-500 text-sm text-slate-800 bg-slate-50/50"
                                />
                            </div>
                        </div>

                        <div className="flex flex-col gap-1.5">
                            <label className="text-sm font-semibold text-slate-900">
                                Email
                            </label>
                            <div className="relative flex items-center">
                                <Mail className="absolute left-4 w-5 h-5 text-slate-400" />
                                <input
                                    type="email"
                                    placeholder="email@contoh.com"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    className="w-full h-12 border border-slate-300 rounded-xl pl-12 pr-4 outline-none focus:border-blue-500 text-sm text-slate-800 bg-slate-50/50"
                                />
                            </div>
                        </div>

                        <div className="flex flex-col gap-1.5">
                            <label className="text-sm font-semibold text-slate-900">
                                Kata Sandi
                            </label>
                            <div className="relative flex items-center">
                                <Lock className="absolute left-4 w-5 h-5 text-slate-400" />
                                <input
                                    type="password"
                                    placeholder="Minimal 6 karakter"
                                    value={pass}
                                    onChange={(e) => setPass(e.target.value)}
                                    className="w-full h-12 border border-slate-300 rounded-xl pl-12 pr-12 outline-none focus:border-blue-500 text-sm text-slate-800 bg-slate-50/50"
                                />
                                <EyeOff className="absolute right-4 w-5 h-5 text-slate-400 cursor-pointer hover:text-slate-600" />
                            </div>
                        </div>

                        <div className="flex flex-col gap-1.5">
                            <label className="text-sm font-semibold text-slate-900">
                                Konfirmasi Kata Sandi
                            </label>
                            <div className="relative flex items-center">
                                <Lock className="absolute left-4 w-5 h-5 text-slate-400" />
                                <input
                                    type="password"
                                    placeholder="Ulang kata sandi"
                                    value={confirmPass}
                                    onChange={(e) => setComfirmpass(e.target.value)}
                                    className="w-full h-12 border border-slate-300 rounded-xl pl-12 pr-12 outline-none focus:border-blue-500 text-sm text-slate-800 bg-slate-50/50"
                                />
                                <EyeOff className="absolute right-4 w-5 h-5 text-slate-400 cursor-pointer hover:text-slate-600" />
                            </div>
                        </div>

                        <label className="flex items-start gap-2.5 text-xs text-slate-500 cursor-pointer leading-relaxed mt-1">
                            <input type="checkbox" className="mt-0.5 rounded border-slate-300 text-blue-600 focus:ring-blue-500" />
                            <span>
                                Saya menyetujui{' '}
                                <Link to="/" className="text-blue-600 font-medium hover:underline">Syarat & Ketentuan</Link> and{' '}
                                <Link to="/" className="text-blue-600 font-medium hover:underline">Kebijakan Privasi</Link> BeliMudah
                            </span>
                        </label>

                        <button
                            type="submit"
                            className="h-12 bg-orange-500 text-white rounded-xl font-semibold hover:bg-orange-600 transition shadow-sm flex items-center justify-center gap-2 mt-2"
                        >
                            Daftar Sekarang →
                        </button>
                    </form>

                    <div className="text-center text-xs text-slate-400 flex items-center justify-center gap-1">
                        🔒 Data kamu aman dan terenkripsi
                    </div>

                    <div className="text-center text-xs text-slate-400 leading-relaxed">
                        Dengan membuat akun, kamu menyetujui Syarat & Ketentuan serta Kebijakan Privasi kami.
                    </div>

                </article>
            </section>

        </main>
    );
}