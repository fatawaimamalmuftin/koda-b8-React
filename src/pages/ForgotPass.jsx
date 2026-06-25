import { Send } from 'lucide-react';
import TabLayarMerah from '../assets/tabLayarMerah.png';
import { Link } from 'react-router-dom';

export default function ForgotPass() {
    return (
        <main className="flex min-h-screen w-full overflow-hidden bg-white select-none">

            <section
                className="hidden md:flex md:w-1/2 flex-col justify-between p-10 text-white bg-cover bg-center h-screen"
                style={{
                    backgroundImage: `linear-gradient(rgba(26,115,232,0.75), rgba(79,57,246,0.85)), url(${TabLayarMerah})`
                }}
            >
                <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-[10px] bg-white/20 flex justify-center items-center font-bold">
                        B
                    </div>
                    <span className="text-sm font-semibold">
                        BeliMudah
                    </span>
                </div>

                <article className="max-w-105 flex flex-col gap-5">
                    <div className="w-16 h-16 rounded-2xl bg-white/15 flex justify-center items-center text-3xl">
                        🔐
                    </div>

                    <h1 className="text-5xl leading-tight font-bold">
                        Akun kamu aman <br />
                        bersama kami
                    </h1>

                    <p className="leading-8 opacity-90 text-sm">
                        Kami menggunakan enkripsi tingkat militer untuk menjaga
                        keamanan data dan transaksi.
                    </p>

                    <div className="flex flex-col gap-4 text-sm mt-2">
                        <div className="flex items-center gap-2">
                            <span>🔒</span> Enkripsi SSL 256-bit
                        </div>
                        <div className="flex items-center gap-2">
                            <span>🛡️</span> Perlindungan data pribadi
                        </div>
                        <div className="flex items-center gap-2">
                            <span>📧</span> Verifikasi dua langkah
                        </div>
                    </div>
                </article>

                <div className="text-xs opacity-80">
                    © 2026 BeliMudah. Seluruh hak cipta dilindungi.
                </div>
            </section>

            <section className="w-full md:w-1/2 flex justify-center items-center bg-white h-screen p-6">
                <article className="w-full max-w-112.5 flex flex-col gap-6">

                    <Link to='/login' className="text-sm text-slate-500 hover:text-blue-600 transition font-medium inline-flex items-center gap-1">
                        ← Kembali ke Login
                    </Link>

                    <div className="flex flex-col gap-3">
                        <h2 className="text-3xl font-bold text-slate-900">
                            Lupa Kata Sandi?
                        </h2>
                        <p className="text-slate-500 leading-7 text-sm">
                            Tidak perlu khawatir. Masukkan email yang terdaftar
                            dan kami akan mengirimkan tautan untuk membuat
                            kata sandi baru.
                        </p>
                    </div>

                    <form className="flex flex-col gap-5" onSubmit={(e) => e.preventDefault()}>
                        <div className="flex flex-col gap-2">
                            <label className="text-sm font-semibold text-slate-900">
                                Alamat Email
                            </label>
                            <input
                                type="email"
                                placeholder="✉︎ email@contoh.com"
                                className="h-12 border border-slate-300 rounded-xl px-4 outline-none focus:border-blue-500 text-sm"
                            />
                        </div>

                        <button
                            type="submit"
                            className="h-12 flex items-center justify-center gap-2 bg-blue-600 text-white rounded-xl font-semibold hover:bg-blue-700 transition w-full shadow-sm"
                        >
                            <Send className="w-4 h-4" />
                            Kirim Tautan Reset
                        </button>
                    </form>

                    <div className="bg-slate-50 border border-slate-100 rounded-xl p-5">
                        <h4 className="font-semibold text-sm text-slate-900 mb-3 flex items-center gap-1.5">
                            💡 Tips keamanan:
                        </h4>
                        <ul className="list-disc pl-5 flex flex-col gap-2 text-xs text-slate-500 leading-relaxed">
                            <li>
                                Pastikan kamu memeriksa folder spam/junk email jika tautan tidak kunjung masuk.
                            </li>
                            <li>
                                Tautan reset hanya berlaku selama 30 menit demi keamanan akunmu.
                            </li>
                            <li>
                                Jangan pernah bagikan tautan reset password kepada siapapun, termasuk pihak BeliMudah.
                            </li>
                        </ul>
                    </div>

                    <div className="text-center text-sm text-slate-500">
                        Ingat kata sandi kamu?{' '}
                        <a href="/login.htm" className="text-blue-600 font-medium hover:underline">
                            Masuk sekarang
                        </a>
                    </div>

                </article>
            </section>

        </main>
    );
}