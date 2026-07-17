import Link from "next/link";

const NavBar = () => {
  return (
    <nav className="md:fixed z-50 w-full py-4 bg-blue-900 text-blue-200">
      <div className="max-w-400 mx-auto flex justify-between items-center w-full">
        {/* logo */}
        <div className="">
          <h1 className=" sm:text-xl font-bold">HDR PRESS</h1>
        </div>
        {/* menu item */}
        <div className="">
           <ul className="flex items-center gap-6 font-semibold">
            <Link href={"/"}><li className="hover:text-red-400 duration-150">Home</li></Link>
            <Link href={"/news"}><li className="hover:text-red-400 duration-150">News</li></Link>
            <Link href={"/register"}><li className="hover:text-red-400 duration-150">Register</li></Link>
            <Link href={"/dashboard"}><li className="hover:text-red-400 duration-150">DashBoard</li></Link>
           </ul>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
