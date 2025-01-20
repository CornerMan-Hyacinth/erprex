import Image from "next/image";
import Link from "next/link";
import { FaFacebookSquare } from "react-icons/fa";
import { FaInstagram, FaLocationPin, FaXTwitter } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className="w-full pb-7 z-10 bg-black md:pt-20 pt-10 font-[family-name:var(--font-inter-regular)]">
      <div className="flex flex-col md:flex-row items-start justify-between xl:px-20 lg:px-10 px-4">
        <div className="md:w-1/2">
          <div className="lg:w-20 md:w-[15vw] w-[30vw] md:h-20 h-[8vh] relative">
            <Image
              alt="Erprex logo"
              src={"/icons/erprex_logo.png"}
              fill
              className="object-cover"
            />
          </div>

          <p className="text-xl text-white md:mt-5 mt-3 opacity-80 lg:w-2/3">
            Give your business the competitive edge it needs. Our robust ERP
            systems provide the tools you need to succeed.
          </p>

          <div className="flex flex-wrap items-center lg:space-x-10 space-x-5 md:mt-10 mt-6 text-base">
            <Link
              href={"/"}
              className=" text-white hover:text-myBrown md:text-base text-sm hover:underline duration-300 ease-in-out"
            >
              Home
            </Link>
            <Link
              href={"/solutions"}
              className=" text-white hover:text-myBrown md:text-base text-sm hover:underline duration-300 ease-in-out"
            >
              Solutions
            </Link>
            <Link
              href={"/contact"}
              className=" text-white hover:text-myBrown md:text-base text-sm hover:underline duration-300 ease-in-out"
            >
              Contact
            </Link>
            <a
              href="https://demo.erprex.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button className=" text-white hover:text-myBrown md:text-base text-sm hover:underline duration-300 ease-in-out">
                Demo
              </button>
            </a>

            <Link
              href={"/privacy"}
              className=" text-white hover:text-myBrown md:text-base text-sm hover:underline duration-300 ease-in-out"
            >
              Privacy
            </Link>
          </div>
        </div>

        <div className="flex flex-col">
          <p className="md:text-lg text-base text-white mt-10 md:mt-0">
            Offices
          </p>
          <div className="w-fit">
            <div className="flex items-center space-x-2 text-white md:text-base text-sm md:mt-5 mt-3">
              <FaLocationPin />
              <span>Nigeria - Headquarters</span>
            </div>
            <p className="text-white text-sm opacity-70 md:mt-3 mt-1">
              Chief Worlu Street, Elelenwo Road,
              <br />
              Port-Harcourt, Rivers
            </p>
          </div>
        </div>
      </div>

      <div className="xl:px-20 md:px-10 px-4 flex flex-col-reverse md:flex-row justify-between items-center mt-14">
        <p className="text-white opacity-70 text-sm mt-4 md:mt-0">
          2024 Erprex Technologies. All rights reserved.
        </p>
        <div className="flex items-center space-x-7 text-white text-3xl">
          <a
            href="https://facebook.com/profile.php?id=61564679800405"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button>
              <FaFacebookSquare />
            </button>
          </a>

          <a
            href="https://instagram.com/erprex"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button>
              <FaInstagram />
            </button>
          </a>

          <a
            href="https://x.com/erprex_tech?t=F1pTWLWO2d07aW0TkX6ipw&s=09"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button>
              <FaXTwitter />
            </button>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
