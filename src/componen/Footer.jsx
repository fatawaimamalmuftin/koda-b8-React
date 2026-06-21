import {
    Truck,
    Shield,
    RefreshCw,
    Headphones,
    MapPin,
    Phone,
    Mail
} from 'lucide-react';
import { FaFacebookF, FaInstagram, FaXTwitter, FaYoutube } from 'react-icons/fa6';

export default function Footer() {
    return (
        <footer className="mt-12 flex flex-col items-center w-full bg-[#111827] border-t border-[#1F2937] box-border py-10 px-4 sm:px-8 md:px-16 lg:px-24 font-sans">

            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 border-b border-[#1F2937] pb-8 mb-10 w-full max-w-7xl">

                <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-start items-center text-center sm:text-left">
                    <div className="w-12 h-12 sm:w-14 sm:h-14 border border-[rgba(26,115,232,0.2)] bg-[rgba(26,115,232,0.1)] rounded-full flex justify-center items-center text-[#1A73E8] shrink-0">
                        <Truck className="w-5 h-5 sm:w-6 sm:h-6" />
                    </div>
                    <div className="flex flex-col text-white">
                        <h4 className="m-0 text-sm sm:text-base font-semibold">Gratis Ongkir</h4>
                        <p className="m-0 text-[11px] sm:text-xs text-[#9CA3AF]">Pembelian di atas Rp100.000</p>
                    </div>
                </div>

                <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-start items-center text-center sm:text-left">
                    <div className="w-12 h-12 sm:w-14 sm:h-14 border border-[rgba(26,115,232,0.2)] bg-[rgba(26,115,232,0.1)] rounded-full flex justify-center items-center text-[#1A73E8] shrink-0">
                        <Shield className="w-5 h-5 sm:w-6 sm:h-6" />
                    </div>
                    <div className="flex flex-col text-white">
                        <h4 className="m-0 text-sm sm:text-base font-semibold">Pembayaran Aman</h4>
                        <p className="m-0 text-[11px] sm:text-xs text-[#9CA3AF]">SSL terenkripsi 256-bit</p>
                    </div>
                </div>

                <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-start items-center text-center sm:text-left">
                    <div className="w-12 h-12 sm:w-14 sm:h-14 border border-[rgba(26,115,232,0.2)] bg-[rgba(26,115,232,0.1)] rounded-full flex justify-center items-center text-[#1A73E8] shrink-0">
                        <RefreshCw className="w-5 h-5 sm:w-6 sm:h-6" />
                    </div>
                    <div className="flex flex-col text-white">
                        <h4 className="m-0 text-sm sm:text-base font-semibold">Pengembalian Mudah</h4>
                        <p className="m-0 text-[11px] sm:text-xs text-[#9CA3AF]">30 hari garansi retur</p>
                    </div>
                </div>

                <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-start items-center text-center sm:text-left">
                    <div className="w-12 h-12 sm:w-14 sm:h-14 border border-[rgba(26,115,232,0.2)] bg-[rgba(26,115,232,0.1)] rounded-full flex justify-center items-center text-[#1A73E8] shrink-0">
                        <Headphones className="w-5 h-5 sm:w-6 sm:h-6" />
                    </div>
                    <div className="flex flex-col text-white">
                        <h4 className="m-0 text-sm sm:text-base font-semibold">Dukungan 24/7</h4>
                        <p className="m-0 text-[11px] sm:text-xs text-[#9CA3AF]">Bantuan kapan saja</p>
                    </div>
                </div>

            </div>

            <div className="w-full max-w-7xl grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-10 pb-10 border-b border-[#1F2937]">

                <div className="flex flex-col gap-4 text-[#9CA3AF] text-sm">
                    <div className="flex items-center gap-2.5">
                        <span className="flex justify-center items-center w-8 h-8 bg-[#1A73E8] text-white rounded-lg font-bold text-base">
                            B
                        </span>
                        <h3 className="m-0 text-xl font-bold text-white tracking-tight">BeliMudah</h3>
                    </div>
                    <span className="text-[#9CA3AF] leading-relaxed">
                        Platform belanja online terpercaya dengan ribuan produk pilihan. Belanja mudah, aman, dan menyenangkan.
                    </span>
                    <div className="flex items-center gap-3 mt-1">
                        <div className="w-9 h-9 text-[#9CA3AF] bg-[#1F2937] rounded-full flex justify-center items-center cursor-pointer transition-all duration-200 hover:text-white hover:bg-[#1A73E8]">
                            <FaFacebookF className="w-4 h-4" />
                        </div>
                        <div className="w-9 h-9 text-[#9CA3AF] bg-[#1F2937] rounded-full flex justify-center items-center cursor-pointer transition-all duration-200 hover:text-white hover:bg-[#1A73E8]">
                            <FaInstagram className="w-4 h-4" />
                        </div>
                        <div className="w-9 h-9 text-[#9CA3AF] bg-[#1F2937] rounded-full flex justify-center items-center cursor-pointer transition-all duration-200 hover:text-white hover:bg-[#1A73E8]">
                            <FaXTwitter className="w-4 h-4" />
                        </div>
                        <div className="w-9 h-9 text-[#9CA3AF] bg-[#1F2937] rounded-full flex justify-center items-center cursor-pointer transition-all duration-200 hover:text-white hover:bg-[#1A73E8]">
                            <FaYoutube className="w-4 h-4" />
                        </div>
                    </div>
                </div>

                <div className="flex flex-col gap-3 text-[#9CA3AF] text-sm">
                    <h4 className="m-0 text-base font-semibold text-white mb-1">Layanan</h4>
                    <div className="w-fit cursor-pointer transition-colors duration-200 hover:text-white">Tentang Kami</div>
                    <div className="w-fit cursor-pointer transition-colors duration-200 hover:text-white">Karir</div>
                    <div className="w-fit cursor-pointer transition-colors duration-200 hover:text-white">Blog</div>
                    <div className="w-fit cursor-pointer transition-colors duration-200 hover:text-white">Program Afiliasi</div>
                    <div className="w-fit cursor-pointer transition-colors duration-200 hover:text-white">Jual di BeliMudah</div>
                </div>

                <div className="flex flex-col gap-3 text-[#9CA3AF] text-sm">
                    <h4 className="m-0 text-base font-semibold text-white mb-1">Bantuan</h4>
                    <div className="w-fit cursor-pointer transition-colors duration-200 hover:text-white">Cara Belanja</div>
                    <div className="w-fit cursor-pointer transition-colors duration-200 hover:text-white">Kebijakan Pengembalian</div>
                    <div className="w-fit cursor-pointer transition-colors duration-200 hover:text-white">Lacak Pesanan</div>
                    <div className="w-fit cursor-pointer transition-colors duration-200 hover:text-white">FAQ</div>
                    <div className="w-fit cursor-pointer transition-colors duration-200 hover:text-white">Hubungi Kami</div>
                </div>

                <div className="flex flex-col gap-4 text-[#9CA3AF] text-sm">
                    <h4 className="m-0 text-base font-semibold text-white">Kontak</h4>
                    <div className="flex items-start gap-2.5 text-[#9CA3AF] cursor-pointer transition-colors duration-200 hover:text-white">
                        <div className="mt-0.5 shrink-0 text-[#1A73E8]"><MapPin size={16} /></div>
                        <div className="leading-relaxed">Jl. Sudirman No. 1, Jakarta Selatan, DKI Jakarta 12190</div>
                    </div>
                    <div className="flex items-center gap-2.5 text-[#9CA3AF] cursor-pointer transition-colors duration-200 hover:text-white">
                        <div className="shrink-0 text-[#1A73E8]"><Phone size={16} /></div>
                        <div>0800-1234-5678 (Gratis)</div>
                    </div>
                    <div className="flex items-center gap-2.5 text-[#9CA3AF] cursor-pointer transition-colors duration-200 hover:text-white">
                        <div className="shrink-0 text-[#1A73E8]"><Mail size={16} /></div>
                        <div className="break-all">bantuan@belimudah.id</div>
                    </div>

                    <div className="flex flex-col gap-2 border border-[#1F2937] bg-[#1F2937]/40 rounded-xl p-3.5 mt-1 w-full">
                        <h5 className="m-0 text-white font-semibold text-sm">Newsletter</h5>
                        <div className="flex items-center gap-2 w-full relative">
                            <input
                                id="email"
                                type="email"
                                placeholder="Email kamu"
                                className="w-full rounded-lg border border-[#374151] bg-[#1F2937] h-9 text-white pl-3 pr-24 outline-none text-xs focus:border-[#1A73E8] transition"
                            />
                            <label
                                htmlFor="email"
                                className="absolute right-1 bg-[#1A73E8] text-white h-7 flex items-center px-3 rounded-md text-[11px] cursor-pointer font-semibold shrink-0 hover:bg-[#1557b0] transition"
                            >
                                Langganan
                            </label>
                        </div>
                    </div>
                </div>

            </div>

            <div className="w-full max-w-7xl flex flex-col md:flex-row justify-between items-center pt-6 gap-4 text-[#6B7280] text-xs text-center md:text-left">
                <div>
                    © 2026 BeliMudah. Seluruh hak cipta dilindungi.
                </div>
                <div className="flex flex-wrap justify-center gap-4 sm:gap-6">
                    <div className="cursor-pointer transition-colors duration-200 hover:text-[#9CA3AF]">Kebijakan Privasi</div>
                    <div className="cursor-pointer transition-colors duration-200 hover:text-[#9CA3AF]">Syarat & Ketentuan</div>
                    <div className="cursor-pointer transition-colors duration-200 hover:text-[#9CA3AF]">Admin</div>
                </div>
            </div>

        </footer>
    );
}