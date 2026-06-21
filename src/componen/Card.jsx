import { Link } from 'react-router-dom';
import elektronikImg from '../assets/elektronik.png';

export default function Card() {
    return (
        <Link to="/maindetail" className="w-full border border-gray-100 rounded-xl overflow-hidden bg-white hover:shadow-sm transition">
            <div className="relative w-full h-55 bg-gray-50 flex items-center justify-center">
                <div className="absolute top-2 left-2 z-10 bg-[#DC2626] text-white text-[9px] font-bold px-1.5 py-0.5 rounded-md">
                    -31%
                </div>
                <img src={elektronikImg} className="w-full h-full object-cover" />
            </div>
            <div className="w-full p-3 flex flex-col justify-between h-30">
                <div>
                    <span className="text-[9px] text-[#9CA3AF] font-bold uppercase tracking-wider">SoundWave</span>
                    <h3 className="text-xs font-semibold text-[#111827] truncate mt-0.5">Headphone Wireless Premium</h3>
                    <div className="flex items-center gap-0.5 text-[#FFB200] text-[10px] mt-1">
                        <span>★</span><span>★</span><span>★</span><span>★</span><span className="text-gray-200">★</span>
                        <span className="text-[#9CA3AF] ml-1">4.8 (512)</span>
                    </div>
                </div>
                <div className="flex items-baseline gap-1.5 mt-2">
                    <span className="text-xs font-bold text-[#1A73E8]">Rp 450.000</span>
                    <span className="text-[10px] text-[#9CA3AF] line-through">Rp 562.500</span>
                </div>
            </div>
        </Link>
    )
}