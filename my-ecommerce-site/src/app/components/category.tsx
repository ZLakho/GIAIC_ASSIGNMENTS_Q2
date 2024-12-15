const CategoryGrid = () => {
    return (
        <div className=" justify-center items-center h-[250px] bg-white gap-12 text-black">
            <h1 className="pt-12 ml-48 text-3xl bg-white">Browse by category</h1>
        
      <div className="flex justify-center items-center h-[250px] bg-white gap-12 text-black">
        
        <div className="w-32 h-32 bg-gray-200 border-2 rounded-lg justify-center items-center p-4 shadow-md hover:shadow-lg">
            <div className="rounded-lg border-2 w-20 hover:scale-105 transition-transform">
                <img src="https://www.iconpacks.net/icons/2/free-mobile-phone-icon-2636-thumb.png" alt="" />
                
            </div>
            <h1 className="pl-4">Phone</h1>
        </div>
        <div className="w-32 h-32 bg-gray-200 border-2 rounded-lg shadow-md hover:shadow-lg">
            <div className="rounded-lg border-2 w-20 hover:scale-105 transition-transform pl-2 m-3">
                <img src="https://uxwing.com/wp-content/themes/uxwing/download/computers-mobile-hardware/smart-watch-icon.png" alt="" />
                
            </div>
            <h1 className="pl-4 ">Smart Watch</h1>
        </div>
        <div className="w-32 h-32 bg-gray-200 border-2 rounded-lg shadow-md hover:shadow-lg">
            <div className="rounded-lg border-2 w-20 hover:scale-105 transition-transform p-2 pl-4 m-3">
                <img src="https://www.freeiconspng.com/thumbs/camera-icon/camera-icon-21.png" alt="" />
                
            </div>
            <h1 className="pl-6">Cameras</h1>
        </div>
        <div className="w-32 h-32 bg-gray-200 border-2 rounded-lg shadow-md hover:shadow-lg">
            <div className="rounded-lg border-2 w-20 hover:scale-105 transition-transform pl-4 pt-2 m-3">
                <img src="https://www.iconpacks.net/icons/1/free-headphone-icon-916-thumb.png" alt="" />
                
            </div>
            <h1 className="pl-4 ">Headphones</h1>
        </div>
        <div className="w-32 h-32 bg-gray-200 border-2 rounded-lg shadow-md hover:shadow-lg">
            <div className="rounded-lg border-2 w-20 hover:scale-105 transition-transform pl-2 m-3">
                <img src="https://cdn-icons-png.flaticon.com/512/4372/4372820.png" alt="" />
                
            </div>
            <h1 className="pl-4">Computers</h1>
        </div>
        <div className="w-32 h-32 bg-gray-200 border-2 rounded-lg shadow-md hover:shadow-lg">
            <div className="rounded-lg border-2 w-20 hover:scale-105 transition-transform p-2 pl-4 m-3">
                <img src="https://cdn-icons-png.flaticon.com/512/7708/7708371.png" alt="" />
                
            </div>
            <h1 className="pl-8 ">Gaming</h1>
        </div>
        
      </div>
      </div>
     
    );
  };
  
  export default CategoryGrid;
  