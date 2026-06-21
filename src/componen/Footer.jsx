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
        <footer className="mt-12 flex flex-col items-center w-full bg-[#111827] border border-[#6B7280] box-border py-10 px-4 font-sans">

            <div className="flex flex-wrap justify-between border-b border-[#1F2937] gap-8 pb-8 mb-10 w-full max-w-7xl">

                <div className="flex gap-4 justify-start items-center">
                    <div className="w-14 h-14 border border-[rgba(26,115,232,0.2)] bg-[rgba(26,115,232,0.1)] rounded-full flex justify-center items-center text-[#1A73E8] shrink-0">
                        <Truck size={24} />
                    </div>
                    <div className="flex flex-col text-white">
                        <h4 className="m-0 text-base font-semibold">Gratis Ongkir</h4>
                        <p className="m-0 text-xs text-[#9CA3AF]">Pembelian di atas Rp100.000</p>
                    </div>
                </div>

                <div className="flex gap-4 justify-start items-center">
                    <div className="w-14 h-14 border border-[rgba(26,115,232,0.2)] bg-[rgba(26,115,232,0.1)] rounded-full flex justify-center items-center text-[#1A73E8] shrink-0">
                        <Shield size={24} />
                    </div>
                    <div className="flex flex-col text-white">
                        <h4 className="m-0 text-base font-semibold">Pembayaran Aman</h4>
                        <p className="m-0 text-xs text-[#9CA3AF]">SSL terenkripsi 256-bit</p>
                    </div>
                </div>

                <div className="flex gap-4 justify-start items-center">
                    <div className="w-14 h-14 border border-[rgba(26,115,232,0.2)] bg-[rgba(26,115,232,0.1)] rounded-full flex justify-center items-center text-[#1A73E8] shrink-0">
                        <RefreshCw size={24} />
                    </div>
                    <div className="flex flex-col text-white">
                        <h4 className="m-0 text-base font-semibold">Pengembalian Mudah</h4>
                        <p className="m-0 text-xs text-[#9CA3AF]">30 hari pengembalian gratis</p>
                    </div>
                </div>

                <div className="flex gap-4 justify-start items-center">
                    <div className="w-14 h-14 border border-[rgba(26,115,232,0.2)] bg-[rgba(26,115,232,0.1)] rounded-full flex justify-center items-center text-[#1A73E8] shrink-0">
                        <Headphones size={24} />
                    </div>
                    <div className="flex flex-col text-white">
                        <h4 className="m-0 text-base font-semibold">Dukungan 24/7</h4>
                        <p className="m-0 text-xs text-[#9CA3AF]">Bantuan kapan saja</p>
                    </div>
                </div>

            </div>

            <div className="w-full max-w-7xl grid grid-cols-1 md:grid-cols-4 gap-10 pb-10 border-b border-[#1F2937]">

                <div className="flex flex-col gap-4 text-[#9CA3AF] text-sm">
                    <div className="flex items-center gap-2.5">
                        <span className="flex justify-center items-center w-8 h-8 bg-[#1A73E8] text-white rounded-lg font-semibold text-base">
                            B
                        </span>
                        <h3 className="m-0 text-xl font-bold text-white">BeliMudah</h3>
                    </div>
                    <span className="text-[#99A1AF]">
                        Platform belanja online terpercaya dengan ribuan produk pilihan. Belanja mudah, aman, dan menyenangkan.
                    </span>
                    <div className="flex items-center gap-3">
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

                <div className="flex flex-col gap-4 text-[#9CA3AF] text-sm">
                    <h4 className="m-0 text-base font-semibold text-white">Layanan</h4>
                    <div className="cursor-pointer transition-colors duration-200 hover:text-white">Tentang Kami</div>
                    <div className="cursor-pointer transition-colors duration-200 hover:text-white">Karir</div>
                    <div className="cursor-pointer transition-colors duration-200 hover:text-white">Blog</div>
                    <div className="cursor-pointer transition-colors duration-200 hover:text-white">Program Afiliasi</div>
                    <div className="cursor-pointer transition-colors duration-200 hover:text-white">Jual di BeliMudah</div>
                </div>

                <div className="flex flex-col gap-4 text-[#9CA3AF] text-sm">
                    <h4 className="m-0 text-base font-semibold text-white">Bantuan</h4>
                    <div className="cursor-pointer transition-colors duration-200 hover:text-white">Cara Belanja</div>
                    <div className="cursor-pointer transition-colors duration-200 hover:text-white">Kebijakan Pengembalian</div>
                    <div className="cursor-pointer transition-colors duration-200 hover:text-white">Lacak Pesanan</div>
                    <div className="cursor-pointer transition-colors duration-200 hover:text-white">FAQ</div>
                    <div className="cursor-pointer transition-colors duration-200 hover:text-white">Hubungi Kami</div>
                </div>

                <div className="flex flex-col gap-4 text-[#9CA3AF] text-sm">
                    <h4 className="m-0 text-base font-semibold text-white">Kontak</h4>
                    <div className="flex items-start gap-2.5 text-[#99A1AF] cursor-pointer transition-colors duration-200 hover:text-white">
                        <div className="mt-0.5 shrink-0"><MapPin size={18} /></div>
                        <div>Jl. Sudirman No. 1, Jakarta Selatan, DKI Jakarta 12190</div>
                    </div>
                    <div className="flex items-center gap-2.5 text-[#99A1AF] cursor-pointer transition-colors duration-200 hover:text-white">
                        <div className="shrink-0"><Phone size={18} /></div>
                        <div>0800-1234-5678 (Gratis)</div>
                    </div>
                    <div className="flex items-center gap-2.5 text-[#99A1AF] cursor-pointer transition-colors duration-200 hover:text-white">
                        <div className="shrink-0"><Mail size={18} /></div>
                        <div>bantuan@belimudah.id</div>
                    </div>

                    <div className="flex flex-col gap-2 border border-[#364153] bg-[#1E2939] rounded-lg p-3 mt-2 w-full">
                        <h5 className="m-0 text-white font-semibold text-sm">Newsletter</h5>
                        <div className="flex items-center gap-2 w-full">
                            <input
                                id="email"
                                type="email"
                                placeholder="Email kamu"
                                className="rounded-lg border border-[#364153] bg-[#364153] h-9 text-white px-3 flex-1 min-w-0 outline-none text-sm"
                            />
                            <label
                                htmlFor="email"
                                className="bg-[#1A73E8] text-white h-9 flex items-center px-3 rounded-lg text-xs cursor-pointer font-medium shrink-0 hover:bg-[#1557b0] transition-colors"
                            >
                                Langganan
                            </label>
                        </div>
                    </div>
                </div>

            </div>

            <div className="w-full max-w-7xl flex flex-col sm:flex-row justify-between items-center pt-5 gap-4 text-[#6B7280] text-xs">
                <div>
                    © 2026 BeliMudah. Seluruh hak cipta dilindungi.
                </div>
                <div className="flex gap-5">
                    <div className="cursor-pointer transition-colors duration-200 hover:text-[#9CA3AF]">Kebijakan Privasi</div>
                    <div className="cursor-pointer transition-colors duration-200 hover:text-[#9CA3AF]">Syarat & Ketentuan</div>
                    <div className="cursor-pointer transition-colors duration-200 hover:text-[#9CA3AF]">Admin</div>
                </div>
            </div>

        </footer>
    );
}