import { ChevronRight } from 'lucide-react'
import Card from '../componens/Card';
import elektronikImg from '../assets/elektronik.png';

export default function MainBrowse() {
    return (
        <>
            <main className="flex flex-col w-full px-26 bg-[#F9FAFB] gap-6">
                <h1 className="flex items-center gap-1 text-sm text-gray-500">
                    <div>Beranda</div>
                    <div className='text-gray-500 pt-1'>
                        <ChevronRight size={16} />
                    </div>
                    <span>Toko</span>
                </h1>
                <h1 className="flex text-xl font-bold text-black-600">Semua Produk</h1>
                <div className='grid grid-cols-[20%_75%] w-full gap-6'>

                    <div className='flex flex-col text-gray-500'>
                        <div className='flex flex-col gap-6'>
                            <h1>Harga</h1>
                            <div className='flex justify-between'>
                                <span>Rp 0</span>
                                <span>Rp 20.000.000</span>
                            </div>
                        </div>
                        <div className='flex flex-col mt-6 gap-4 '>
                            <h1 className="flex text-xl font-bold text-black">Merek</h1>

                            <div className='flex justify-start items-center gap-2'>
                                <input type="checkbox" id='TechMaster' className=' w-4 h-4' />
                                <label htmlFor="TechMaster">TechMaster</label>
                            </div>

                            <div className='flex justify-start items-center gap-2'>
                                <input type="checkbox" id='SoundWave' className=' w-4 h-4' />
                                <label htmlFor="SoundWave">SoundWave</label>
                            </div>

                            <div className='flex justify-start items-center gap-2'>
                                <input type="checkbox" id='PhoneX' className=' w-4 h-4' />
                                <label htmlFor="PhoneX">PhoneX</label>
                            </div>

                            <div className='flex justify-start items-center gap-2'>
                                <input type="checkbox" id='OptiCam' className=' w-4 h-4' />
                                <label htmlFor="OptiCam">OptiCam</label>
                            </div>

                            <div className='flex justify-start items-center gap-2'>
                                <input type="checkbox" id='FashionID' className=' w-4 h-4' />
                                <label htmlFor="FashionID">FashionID</label>
                            </div>

                            <div className='flex justify-start items-center gap-2'>
                                <input type="checkbox" id='SportPro' className=' w-4 h-4' />
                                <label htmlFor="SportPro">SportPro</label>
                            </div>

                            <div className='flex justify-start items-center gap-2'>
                                <input type="checkbox" id='BrewMaster' className=' w-4 h-4' />
                                <label htmlFor="BrewMaster">BrewMaster</label>
                            </div>

                            <div className='flex justify-start items-center gap-2'>
                                <input type="checkbox" id='GlowLab' className=' w-4 h-4' />
                                <label htmlFor="GlowLab">GlowLab</label>
                            </div>

                        </div>
                        <div className='flex flex-col mt-6 gap-4 '>
                            <h1 className="flex text-xl font-bold text-black">Rating Minimum</h1>

                            <div className='flex justify-start items-center gap-2'>
                                <input type="radio" id='Stoktersedia' name='rating' className='w-4 h-4 rounded-full accent-blue-600 cursor-pointer' />
                                <label htmlFor="Stoktersedia">★★★★☆ ke atas</label>
                            </div>

                            <div className='flex justify-start items-center gap-2'>
                                <input type="radio" id='Stoktersedia' name='rating' className='w-4 h-4 rounded-full accent-blue-600 cursor-pointer' />
                                <label htmlFor="Stoktersedia">★★★★☆ ke atas</label>
                            </div>

                            <div className='flex justify-start items-center gap-2'>
                                <input type="radio" id='Stoktersedia' name='rating' className='w-4 h-4 rounded-full accent-blue-600 cursor-pointer' />
                                <label htmlFor="Stoktersedia">★★★★☆ ke atas</label>
                            </div>

                        </div>
                        <div className='flex flex-col mt-6 gap-4 '>
                            <h1 className="flex text-xl font-bold text-black">Ketersediaan</h1>

                            <div className='flex justify-start items-center gap-2'>
                                <input type="checkbox" id='Stoktersedia' className=' w-4 h-4' />
                                <label htmlFor="Stoktersedia">Stok tersedia</label>
                            </div>

                        </div>
                    </div>

                    <div className='flex flex-col gap-4'>

                        <div className='flex justify-between'>
                            <span>18 produk ditemukan</span>
                            <div className='flex justify-center items-center gap-2'>
                                <span className=' text-gray-500 '>Urutkan:</span>
                                <div className=' border-2 border-gray-300 bg-white px-2 py-1 rounded-2xl'>
                                    <button >Paling Populer</button>
                                </div>
                            </div>

                        </div>

                        <div className=' grid grid-cols-4 gap-2 '>
                            <Card
                                id="p1"
                                name="Headphone Wireless Premium"
                                price={450000}
                                image={elektronikImg}
                                brand="SOUNDWAVE"
                                discount="-31%"
                                originalPrice={562500}
                                rating="4.8"
                                reviews="512"
                            />
                            <Card
                                id="p1"
                                name="Headphone Wireless Premium"
                                price={450000}
                                image={elektronikImg}
                                brand="SOUNDWAVE"
                                discount="-31%"
                                originalPrice={562500}
                                rating="4.8"
                                reviews="512"
                            />
                            <Card
                                id="p1"
                                name="Headphone Wireless Premium"
                                price={450000}
                                image={elektronikImg}
                                brand="SOUNDWAVE"
                                discount="-31%"
                                originalPrice={562500}
                                rating="4.8"
                                reviews="512"
                            />
                            <Card
                                id="p1"
                                name="Headphone Wireless Premium"
                                price={450000}
                                image={elektronikImg}
                                brand="SOUNDWAVE"
                                discount="-31%"
                                originalPrice={562500}
                                rating="4.8"
                                reviews="512"
                            />
                            <Card
                                id="p1"
                                name="Headphone Wireless Premium"
                                price={450000}
                                image={elektronikImg}
                                brand="SOUNDWAVE"
                                discount="-31%"
                                originalPrice={562500}
                                rating="4.8"
                                reviews="512"
                            />
                            <Card
                                id="p1"
                                name="Headphone Wireless Premium"
                                price={450000}
                                image={elektronikImg}
                                brand="SOUNDWAVE"
                                discount="-31%"
                                originalPrice={562500}
                                rating="4.8"
                                reviews="512"
                            />
                            <Card
                                id="p1"
                                name="Headphone Wireless Premium"
                                price={450000}
                                image={elektronikImg}
                                brand="SOUNDWAVE"
                                discount="-31%"
                                originalPrice={562500}
                                rating="4.8"
                                reviews="512"
                            />
                            <Card
                                id="p1"
                                name="Headphone Wireless Premium"
                                price={450000}
                                image={elektronikImg}
                                brand="SOUNDWAVE"
                                discount="-31%"
                                originalPrice={562500}
                                rating="4.8"
                                reviews="512"
                            />
                            <Card
                                id="p1"
                                name="Headphone Wireless Premium"
                                price={450000}
                                image={elektronikImg}
                                brand="SOUNDWAVE"
                                discount="-31%"
                                originalPrice={562500}
                                rating="4.8"
                                reviews="512"
                            />
                            <Card
                                id="p1"
                                name="Headphone Wireless Premium"
                                price={450000}
                                image={elektronikImg}
                                brand="SOUNDWAVE"
                                discount="-31%"
                                originalPrice={562500}
                                rating="4.8"
                                reviews="512"
                            />
                            <Card
                                id="p1"
                                name="Headphone Wireless Premium"
                                price={450000}
                                image={elektronikImg}
                                brand="SOUNDWAVE"
                                discount="-31%"
                                originalPrice={562500}
                                rating="4.8"
                                reviews="512"
                            />
                            <Card
                                id="p1"
                                name="Headphone Wireless Premium"
                                price={450000}
                                image={elektronikImg}
                                brand="SOUNDWAVE"
                                discount="-31%"
                                originalPrice={562500}
                                rating="4.8"
                                reviews="512"
                            />
                        </div>
                        <div className='px-56'>
                            <div className='flex justify-center items-center py-2 px-4 border-2 border-b-blue-500 text-indigo-500 rounded-3xl'>Muat Lebih Banyak (6 produk lagi)</div>
                        </div>

                    </div>
                </div>
            </main>
        </>
    )
}