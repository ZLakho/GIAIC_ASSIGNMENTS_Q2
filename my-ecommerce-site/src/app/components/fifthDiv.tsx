import Image from "next/image";
const FifthDiv = () => {
    return (
        <div className="flex h-[400px] justify-center align-center ">
            
            <div className="bg-white overflow-hidden cursor-pointer">
                <div className="w-[350px] h-[250px] overflow-hidden mx-auto aspect-w-16 aspect-h-8">
                    <img src="https://png.pngtree.com/png-clipart/20230205/original/pngtree-digital-camera-digital-camera-digital-product-png-image_8945432.png" alt="product1"
                        className="h-full w-full object-contain" />
                </div>

                <div className="mt-6 text-center justify center">
                    <h3 className="text-lg font-bold text-gray-800">Digital original camera</h3>
                    <h4 className="text-lg text-black font-bold mt-3">$1437</h4>
                    <div>
                    <button type="button"
                    className="w-22 h-12 items-center justify-center mt-2 px-12 py-1 bg-black text-base text-white font-semibold rounded-xl"> 
                    Shop Now</button>
                    </div>
                </div>


                
            </div>
            <div className="bg-gray-100 overflow-hidden cursor-pointer">
                <div className="w-[350px] h-[250px] overflow-hidden mx-auto aspect-w-16 aspect-h-8">
                    <img src="https://www.transparentpng.com/download/laptop/9oRuDc-refreshed-pavilion-gaming-series-launching-next-month.png" alt="product1"
                        className="h-full w-full object-contain" />
                </div>

                <div className="mt-6 text-center">
                    <h3 className="text-lg font-bold text-gray-800">Laptop 12 gen Icore 7</h3>
                    <h4 className="text-lg text-black font-bold mt-3">$3100</h4>
                    <div>
                    <button type="button"
                    className="w-22 h-12 items-center justify-center mt-2 px-12 py-1 bg-black text-base text-white font-semibold rounded-xl"> 
                    Shop Now</button>
                    </div>
                </div>

                
            </div>
            <div className="bg-gray-200 overflow-hidden cursor-pointer">
                <div className="w-[350px] h-[250px] overflow-hidden mx-auto aspect-w-16 aspect-h-8">
                    <img src="https://www.transparentpng.com/download/laptop/9oRuDc-refreshed-pavilion-gaming-series-launching-next-month.png" alt="product1"
                        className="h-full w-full object-contain" />
                </div>

                <div className="mt-6 text-center">
                    <h3 className="text-lg font-bold text-gray-800">Laptop 12 gen Icore 4</h3>
                    <h4 className="text-lg text-black font-bold mt-3">$2110</h4>
                    <div>
                    <button type="button"
                    className="w-22 h-12 items-center justify-center mt-2 px-12 py-1 bg-black text-base text-white font-semibold rounded-xl"> 
                    Shop Now</button>
                    </div>
                </div>

                
            </div>
            <div className="bg-custom-gray text-white overflow-hidden cursor-pointer">
                <div className="w-[350px] h-[250px] overflow-hidden mx-auto aspect-w-16 aspect-h-8">
                    <img src="https://readymadeui.com/images/watch1.webp" alt="product1"
                        className="h-full w-full object-contain" />
                </div>

                <div className="mt-6 text-center">
                    <h3 className="text-lg font-bold ">Laptop 10 gen Icore 5</h3>
                    <h4 className="text-lg  font-bold mt-3">$2500</h4>
                    <div>
                    <button type="button"
                    className="w-22 h-12 items-center justify-center mt-2 px-12 py-1 bg-black text-base text-white font-semibold rounded-xl"> 
                    Shop Now</button>
                    </div>
                </div>

                
            </div>






        </div>

    );
};

export default FifthDiv;
