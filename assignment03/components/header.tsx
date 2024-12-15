import Link from "next/link";

const Header = ()=>{
    return(
        <div className="Navbar">
            <div className="child-head">Travel Blogs By Zainab</div>
            <div className="child-nav">
                <Link href="/">Home</Link>
                <Link href="#">Blogs</Link>
                <Link href="#">Contact us</Link>
            </div>

        </div>
    );
}
export default Header