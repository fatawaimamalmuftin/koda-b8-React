import { useNavigate } from 'react-router-dom';

export default function Card({ id, name, price, image, brand, discount, originalPrice, rating, reviews }) {
    const navigate = useNavigate();
    // if(discount === "Baru"){

    // }

    const handleDetailNavigation = () => {
        const productData = { id, name, price, image, brand, discount, originalPrice, rating, reviews };
        localStorage.setItem('selected_product', JSON.stringify(productData));
        navigate('/maindetail');
    };

    return (
        <div onClick={handleDetailNavigation} className="w-full max-w-70 bg-white border border-gray-100 rounded-2xl overflow-hidden shadow-sm flex flex-col cursor-pointer hover:shadow-md transition group">
            <div className="w-full aspect-square relative bg-gray-50 p-4 flex items-center justify-center">
                {discount === "Baru" ? (
                    <span className="absolute top-3 left-3 bg-blue-600 text-white text-[10px] font-extrabold px-1.5 py-0.5 rounded-md z-10">
                        {discount}
                    </span>
                ) : (
                    <span className="absolute top-3 left-3 bg-red-600 text-white text-[10px] font-extrabold px-1.5 py-0.5 rounded-md z-10">
                        {discount}
                    </span>
                )}
                <img
                    src={image}
                    alt={name}
                    className="w-full h-full object-cover group-hover:scale-105 transition duration-300 rounded-t-2xl"
                />
            </div>

            <div className="p-4 flex flex-col flex-1 gap-1.5">
                <span className="text-[10px] font-bold text-gray-400 tracking-wider uppercase">
                    {brand || "NO BRAND"}
                </span>

                <h4 className="font-bold text-gray-900 leading-relaxed">
                    {name}
                </h4>

                <div className="flex items-center gap-1 text-[10px] text-gray-400 font-medium">
                    <span className="text-orange-400">★★★★★</span>
                    <span>{rating || "0.0"} ({reviews || "0"})</span>
                </div>

                <div className="flex items-baseline gap-2">
                    <span className="text-sm font-extrabold text-[#1A73E8]">
                        Rp {Number(price || 0).toLocaleString('id-ID')}
                    </span>
                    {originalPrice && (
                        <span className="text-gray-400 line-through">
                            Rp {Number(originalPrice).toLocaleString('id-ID')}
                        </span>
                    )}
                </div>
            </div>
        </div>
    );
}