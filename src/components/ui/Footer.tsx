"use client";

import Image from "next/image";
import Link from "next/link";
import {
  FaFacebook,
  FaSquareInstagram,
  FaSquareXTwitter,
} from "react-icons/fa6";
import { usePathname } from "next/navigation";

const Footer = () => {
  const pathname = usePathname();

  return pathname.includes("/contact") ? (
    <div />
  ) : (
    <footer className="w-full flex items-end justify-between z-10 bg-black py-10 font-[family-name:var(--font-inter-regular)] md:px-10 px-4">
      <div className="w-1/4">
        <Image
          alt="Erprex logo"
          src={"/images/erprex_logo_white.png"}
          width={200}
          height={200}
          className="object-cover"
        />
        <p className="mt-5 text-white text-2xl">Copyright &copy; 2025</p>
        <p className="mt-2 text-white text-base opacity-70">
          Wise Investment, Big returns
        </p>
      </div>

      <div className="w-2/3">
        <div className="flex items-start justify-between">
          <div className="flex gap-x-10">
            <div className="space-y-5">
              <Link
                href={"/"}
                className="w-full text-base text-white border-l-2 border-white border-opacity-30 py-2 px-10 block"
              >
                Home
              </Link>
              <Link
                href={"/contact"}
                className="w-full text-base text-white border-l-2 border-white border-opacity-30 py-2 px-10 block"
              >
                Contact Us
              </Link>
            </div>

            <div className="space-y-5">
              <Link
                href={"/solutions"}
                className="w-full text-base text-white border-l-2 border-white border-opacity-30 py-2 px-10 block"
              >
                Solutions
              </Link>
              <Link
                href={"/faqs"}
                className="w-full text-base text-white border-l-2 border-white border-opacity-30 py-2 px-10 block"
              >
                FAQs
              </Link>
            </div>

            <div className="space-y-5">
              <Link
                href={"/privacy"}
                className="w-full text-base text-white border-l-2 border-white border-opacity-30 py-2 px-10 block"
              >
                Privacy Policy
              </Link>
              {/* <Link
                href={"/faqs"}
                className="w-full text-lg text-white border-l-4 border-white border-opacity-30 py-2 px-10 block"
              >
                FAQs
              </Link> */}
            </div>
          </div>

          <Link
            href={"/contact?q=quote"}
            className="w-fit py-2 px-10 border border-white text-white text-base hover:bg-white hover:text-black duration-300 ease-in-out rounded-md"
          >
            Get in Touch
          </Link>
        </div>

        <hr
          className="w-full bg-white opacity-30 my-10"
          style={{ height: "2px" }}
        />

        <div className="flex justify-end space-x-7">
          <a href="">
            <FaFacebook color="#1e40af" size={30} />
          </a>
          <a href="">
            <FaSquareXTwitter color="#1e40af" size={30} />
          </a>
          <a href="">
            <FaSquareInstagram color="#1e40af" size={30} />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
