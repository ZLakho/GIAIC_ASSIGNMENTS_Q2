
const Threesection = () => {
  return (
    <div className="bg-white h-[650px] flex text-black">
      <div className="w-[50%] text-center h-[710px]">
        <div className="bg-white-400 w-full h-[325px] text-center py-8">
          <h2 className="text-lg font-light py-8">Pro.Beyond.</h2>
          <h1 className="text-5xl font-bold leading-tight">iPhone 14 Pro</h1>
          <h3 className="text-xl font-normal">Created to change everything for the better. For everyone</h3>
        </div>
        <div className=" w-full h-[325px] flex ">
          <div className="bg-gray-200 w-[50%] ">
            <h2 className="text-lg font-light py-8">Pro.Beyond.</h2>
            <h1 className="text-5xl font-bold leading-tight">iPhone 14 Pro</h1>
            <h3 className="text-xl font-normal">Created to change everything for the better. For everyone</h3>
          </div>
          <div className="bg-custom-gray w-[50%] text-white">
            <h2 className="text-lg font-light py-8">Pro.Beyond.</h2>
            <h1 className="text-5xl font-bold leading-tight">iPhone 14 Pro</h1>
            <h3 className="text-xl font-normal">Created to change everything for the better. For everyone</h3>
          </div>
        </div>

      </div>
      <div className="text-center w-[50%] flex bg-gray-200 ">
        <div>
          <h1 className="text-4xl leading-tight mb-4 pt-44">Macbook <strong>Air</strong></h1>
          <p className="text-lg mb-6 pt-2 pb-12">The new 15-inch MacBook Air makes room for more of what you love with a spacious Liquid Retina display.</p>
          <button className="bg-blue-500 text-white py-2 px-6 rounded-lg">Shop Now</button>
        </div>
        <div className="pl-42 w-[70%]">
          <img src="https://www.pngmart.com/files/15/Apple-iPhone-11-PNG-Background-Image.png" alt="" className="h-96 w-full flex pl-0" />
        </div>
      </div>
    </div>


  );
};

export default Threesection;
