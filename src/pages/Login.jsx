import BgLogin from '../assets/ceweBgLogin.jpg';

export default function Login() {
    return (
        <main className="flex min-h-screen w-full overflow-hidden bg-white select-none">

            <section
                className="w-1/2 flex flex-col justify-between p-10 text-white bg-cover bg-center h-screen"
                style={{
                    backgroundImage: `linear-gradient(rgba(26,115,232,0.75), rgba(79,57,246,0.75)), url(${BgLogin})`
                }}
            >
                <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-[10px] bg-white/20 flex justify-center items-center font-bold text-white">
                        B
                    </div>
                    <span className="text-sm font-semibold">
                        BeliMudah
                    </span>
                </div>

                <article className="max-w-[420px] flex flex-col gap-5">
                    <h1 className="text-5xl leading-tight font-bold">
                        Belanja lebih <br />
                        mudah, hidup lebih <br />
                        praktis
                    </h1>

                    <p className="leading-8 opacity-90">
                        Ribuan produk pilihan dengan harga terbaik,
                        pengiriman cepat, dan pembayaran yang aman.
                    </p>

                    <div className="flex gap-8">
                        <div className="flex flex-col gap-1">
                            <h3 className="text-2xl font-bold">
                                10rb+
                            </h3>
                            <span className="text-xs">
                                Produk
                            </span>
                        </div>

                        <div className="flex flex-col gap-1">
                            <h3 className="text-2xl font-bold">
                                500rb+
                            </h3>
                            <span className="text-xs">
                                Pelanggan
                            </span>
                        </div>

                        <div className="flex flex-col gap-1">
                            <h3 className="text-2xl font-bold">
                                4.8★
                            </h3>
                            <span className="text-xs">
                                Rating
                            </span>
                        </div>
                    </div>
                </article>

                <div className="text-xs opacity-80">
                    © 2026 BeliMudah. Seluruh hak cipta dilindungi.
                </div>
            </section>

            <section className="w-1/2 flex justify-center items-center bg-white h-screen">
                <article className="w-full max-w-[450px] flex flex-col gap-2">

                    <div className="flex flex-col gap-2">
                        <h2 className="text-3xl font-bold text-slate-900">
                            Masuk ke Akun
                        </h2>
                        <p className="text-slate-500 leading-7">
                            Belum punya akun?{' '}
                            <a href="/regis.htm" className="text-blue-600 hover:underline">
                                Daftar gratis
                            </a>
                        </p>
                    </div>

                    <div className="flex gap-3">
                        <button className="w-1/2 h-12 border border-slate-300 rounded-xl bg-white hover:bg-slate-50 transition font-medium text-slate-700">
                            Google
                        </button>
                        <button className="w-1/2 h-12 border border-slate-300 rounded-xl bg-white hover:bg-slate-50 transition font-medium text-slate-700">
                            Facebook
                        </button>
                    </div>

                    <div className="text-center text-sm text-slate-500">
                        atau masuk dengan email
                    </div>

                    <form className="flex flex-col gap-5" onSubmit={(e) => e.preventDefault()}>
                        <div className="flex flex-col gap-2">
                            <label className="text-sm font-semibold text-slate-900">
                                Email
                            </label>
                            <input
                                type="email"
                                placeholder="✉︎ email@contoh.com"
                                className="h-12 border border-slate-300 rounded-xl px-4 outline-none focus:border-blue-500"
                            />
                        </div>

                        <div className="flex flex-col gap-2">
                            <div className="flex justify-between items-center">
                                <label className="text-sm font-semibold text-slate-900">
                                    Kata Sandi
                                </label>
                                <a href="/forgotPassword.htm" className="text-xs text-blue-600 hover:underline">
                                    Lupa kata sandi?
                                </a>
                            </div>
                            <input
                                type="password"
                                placeholder="🔒︎ Masukkan kata sandi"
                                className="h-12 border border-slate-300 rounded-xl px-4 outline-none focus:border-blue-500"
                            />
                        </div>

                        <label className="flex items-center gap-2 text-sm text-slate-500 cursor-pointer">
                            <input type="checkbox" className="rounded border-slate-300 text-blue-600 focus:ring-blue-500" />
                            Ingat saya selama 30 hari
                        </label>

                        <button
                            type="submit"
                            className="h-12 bg-blue-600 text-white rounded-xl font-semibold hover:bg-blue-700 transition shadow-sm"
                        >
                            Masuk
                        </button>
                    </form>

                    <div className="text-center text-sm text-slate-500">
                        🔒 Login aman dengan enkripsi SSL 256-bit
                    </div>

                    <div className="text-center text-sm text-slate-500 leading-6">
                        Dengan masuk, kamu menyetujui{' '}
                        <a href="/terms" className="text-blue-600 hover:underline">Syarat & Ketentuan</a> dan{' '}
                        <a href="/privacy" className="text-blue-600 hover:underline">Kebijakan Privasi</a> kami.
                    </div>

                </article>
            </section>

        </main>
    );
}