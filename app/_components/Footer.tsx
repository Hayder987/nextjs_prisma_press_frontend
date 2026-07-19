

import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-blue-900 w-full text-blue-100 mt-16">
      <div className="max-w-400 mx-auto px-4 py-10">
        {/* Logo / Title */}
        <div className="text-center mb-8">
          <h2 className="text-2xl font-bold">HDR Press</h2>
          <p className="text-sm text-blue-200 mt-2">
            Stay updated with the latest news around the world.
          </p>
        </div>

        {/* Navigation */}
        <ul className="flex flex-wrap justify-center items-center gap-6 font-semibold mb-8">
          <li>
            <Link
              href="/"
              className="hover:text-red-300 duration-200"
            >
              Home
            </Link>
          </li>

          <li>
            <Link
              href="/news"
              className="hover:text-red-300 duration-200"
            >
              News
            </Link>
          </li>

          <li>
            <Link
              href="/register"
              className="hover:text-red-300 duration-200"
            >
              Register
            </Link>
          </li>

          <li>
            <Link
              href="/dashboard"
              className="hover:text-red-300 duration-200"
            >
              Dashboard
            </Link>
          </li>
        </ul>

        {/* Divider */}
        <div className="border-t border-blue-600 pt-6 text-center text-sm text-blue-200">
          © 2026 HDR Press. All Rights Reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;