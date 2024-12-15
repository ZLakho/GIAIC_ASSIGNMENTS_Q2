import Image from "next/image";
import Link from "next/link";

// Video background URL
const videoSrc = "/Image/cover.mp4";



const Blog = () => {
  return (
    <div className="blogs">
      <video
        src={videoSrc}
        autoPlay
        loop
        muted
        className="vid-cover"
      />
      <div className="overlay"></div>

      {/* Blog Posts Container */}
      <div className="blog-post hu__hu__ ">
        <Image src="/Image/egypt-pyramids.jpg" alt="" width={600} height={450} className="img"></Image>
        <p className="title">HOW TO VISIT THE PYRAMIDS IN EGYPT</p>
        <p className="descrip">What kind of bucket list doesn’t include the Great Pyramids of Giza in Egypt? Believe it or not, the Giza pyramids are fairly easy to visit on a day trip from Cairo,</p>
        <Link href="https://theworldtravelguy.com/the-great-pyramids-of-giza-in-egypt-facts-tours-pictures/" passHref target="_blank">
          <button className="readmore">Read More</button>
        </Link>
      </div>
      <div className="blog-post hu__hu__ ">
        <Image src="/Image/bali.jpg" alt="" width={600} height={450} className="img"></Image>
        <p className="title">NUSA PENIDA ISLAND GUIDE FOR BALI</p>
        <p className="descrip">The beautiful, exotic Nusa Penida island lies just 25 kilometers from Bali, the most famous tourist destination in Indonesia.Nusa Penida is a much smaller island than Bali,</p>
        <Link href="https://theworldtravelguy.com/nusa-penida-island-in-bali-complete-travel-guide/" target="_blank">
          <button className="readmore">Read More </button>
        </Link>
      </div>
      <div className="blog-post hu__hu__ ">
        <Image src="/Image/japan.jpg" alt="" width={600} height={450} className="img"></Image>
        <p className="title">22 BEST THINGS TO DO IN <br />JAPAN</p>
        <p className="descrip">It’s hard to make a list of the best things to do in Japan, because there are just so many cool and fun activities in this country.</p>
        <Link href="https://theworldtravelguy.com/best-things-to-do-in-japan-what-to-do-for-fun/" target="_blank">
          <button className="readmore">Read More </button>
        </Link>
      </div>
      <div className="blog-post hu__hu__ ">
        <Image src="/Image/icelands.jpg" alt="" width={600} height={450} className="img"></Image>
        <p className="title">15 AMAZING WATERFALLS IN ICELAND</p>
        <p className="descrip">Iceland waterfalls are incredibly beautiful, and that’s why this country has become famous for having some of the best falls in the world.</p>
        <Link href="https://theworldtravelguy.com/iceland-waterfalls-the-best-waterfalls-in-iceland/" target="_blank">
          <button className="readmore">Read More </button>
        </Link>
      </div>
      <div className="blog-post hu__hu__ ">
        <Image src="/Image/turkey.jpg" alt="" width={600} height={450} className="img"></Image>
        <p className="title">CAPPADOCIA TURKEY TRAVEL <br />GUIDE</p>
        <p className="descrip">Cappadocia Turkey is the most popular hot air ballooning location in the world, and for good reason — the prices are affordable,</p>
        <Link href="https://theworldtravelguy.com/cappadocia-turkey-travel-guide/" target="_blank">
          <button className="readmore">Read More </button>
        </Link>
      </div>
      <div className="blog-post hu__hu__ ">
        <Image src="/Image/greece.jpg" alt="" width={600} height={450} className="img"></Image>
        <p className="title">ZAKYNTHOS ISLAND GUIDE FOR GREECE</p>
        <p className="descrip">The island of Zakynthos in Greece has become famous for its picturesque shipwreck beach, but there are also lots of other things to do and see </p>
        <Link href="https://theworldtravelguy.com/zakynthos-greece-island/" target="_blank">
          <button className="readmore">Read More </button>
        </Link>
      </div>
      <div className="blog-post hu__hu__ ">
        <Image src="/Image/guatemala.webp" alt="" width={600} height={450} className="img"></Image>
        <p className="title">TIKAL TEMPLE GUIDE FOR GUATEMALA</p>
        <p className="descrip">A visit to the Mayan ruins of Tikal Guatemala would have to be one of the most spectacular things you can do in Central America</p>
        <Link href="https://theworldtravelguy.com/tikal-guatemala-national-park-ruins/" target="_blank">
          <button className="readmore">Read More </button>
        </Link>
      </div>
      <div className="blog-post hu__hu__ ">
        <Image src="/Image/thailand.jpg" alt="" width={600} height={450} className="img"></Image>
        <p className="title">PHI PHI ISLAND GUIDE FOR THAILAND</p>
        <p className="descrip">Koh Phi Phi island is a beautiful spot in Thailand with limestone hills, turquoise lagoons, and the world famous beach at Maya Bay.</p>
        <Link href="https://theworldtravelguy.com/phi-phi-island-thailand/" target="_blank">
          <button className="readmore">Read More </button>
        </Link>
      </div>
      <div className="blog-post hu__hu__ ">
        <Image src="/Image/nepal.jpg" alt="" width={600} height={450} className="img"></Image>
        <p className="title">EVEREST BASE CAMP TREK IN NEPAL</p>
        <p className="descrip">The Mount Everest Base Camp Trek in Nepal is one of the world’s best bucket list hikes. In less than 2 weeks, you can trek to the foot of Mt</p>
        <Link href="https://theworldtravelguy.com/mount-everest-base-camp-trek-complete-ebc-trekking-guide/" target="_blank">
          <button className="readmore">Read More </button>
        </Link>
      </div>
      <div className="blog-post hu__hu__ ">
        <Image src="/Image/new-zelands.jpg" alt="" width={600} height={450} className="img"></Image>
        <p className="title">TONGARIRO CROSSING IN NEW ZEALAND</p>
        <p className="descrip">Mars-like volcanic peaks and smoking craters may not be the first thing you had in mind for your trip to NZ, but the epic factor on this one is off the charts.</p>
        <Link href="https://theworldtravelguy.com/tongariro-crossing-alpine-volcano-hike-national-park-in-new-zealand/" target="_blank">
          <button className="readmore">Read More </button>
        </Link>
      </div>
      <div className="blog-post hu__hu__ ">
        <Image src="/Image/utah.jpg" alt="" width={600} height={450} className="img"></Image>
        <p className="title">18 BEST SLOT CANYONS IN <br />UTAH</p>
        <p className="descrip">Recently we went on a big road trip around the American Southwest, seeing many of the best slot canyons in Utah along the way, and then we put together this guide!</p>
        <Link href="https://theworldtravelguy.com/best-slot-canyons-in-utah/" target="_blank">
          <button className="readmore">Read More </button>
        </Link>
      </div>
      <div className="blog-post hu__hu__ ">
        <Image src="/Image/patagonia.jpg" alt="" width={600} height={450} className="img"></Image>
        <p className="title">MOUNT FITZ ROY HIKE IN <br />PATAGONIA</p>
        <p className="descrip">The famous Patagonia region of Argentina has some amazing hiking trails, but the very best would have to be the Fitz Roy hike!</p>
        <Link href="https://theworldtravelguy.com/fitz-roy-patagonia-hike/" target="_blank">
          <button className="readmore">Read More </button>
        </Link>
      </div>
    </div>
  );
};

export default Blog;
