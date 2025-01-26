"use client";

import Image from "next/image";
import { RectButton } from "./Button";
import { usePathname, useRouter } from "next/navigation";
import Link from "next/link";
import { TitleText } from "./Text";

const Nav = () => {
  const router = useRouter();
  const pathname = usePathname();

  return pathname.startsWith("/contact") ? (
    <div />
  ) : (
    <div className="w-full sticky flex items-center justify-center md:px-10 px-4 py-4 bg-transparent font-[family-name:var(--font-inter-regular)]">
      <nav className="h-16 w-full bg-white flex items-center justify-between px-7 rounded-lg shadow-lg shadow-my-shadow">
        <div className="h-10 w-10 relative overflow-hidden">
          <Image
            alt="Erprex logo"
            src={"/icons/erprex_logo.png"}
            fill
            className="object-cover"
          />
        </div>

        <div className="flex items-center gap-x-8">
          <Link href={"/"} className="text-lg text-black">
            {pathname === "/" ? (
              <TitleText weight="bold" className="text-my-blue">
                Home
              </TitleText>
            ) : (
              <TitleText
                weight="regular"
                className="opacity-70 hover:opacity-100 duration-300 ease-in-out"
              >
                Home
              </TitleText>
            )}
          </Link>

          <Link href={"/features"} className="text-lg text-black">
            {pathname === "/features" ? (
              <TitleText weight="bold" className="text-my-blue">
                Features
              </TitleText>
            ) : (
              <TitleText
                weight="regular"
                className="opacity-70 hover:opacity-100 duration-300 ease-in-out"
              >
                Features
              </TitleText>
            )}
          </Link>

          <Link href={"/faqs"} className="text-lg text-black">
            {pathname === "/faqs" ? (
              <TitleText weight="bold" className="text-my-blue">
                Faqs
              </TitleText>
            ) : (
              <TitleText
                weight="regular"
                className="opacity-70 hover:opacity-100 duration-300 ease-in-out"
              >
                Faqs
              </TitleText>
            )}
          </Link>

          <Link href={"/contact"} className="text-lg text-black">
            {pathname === "/contact" ? (
              <TitleText weight="bold" className="text-my-blue">
                Contact
              </TitleText>
            ) : (
              <TitleText
                weight="regular"
                className="opacity-70 hover:opacity-100 duration-300 ease-in-out"
              >
                Contact
              </TitleText>
            )}
          </Link>
        </div>

        <RectButton color="black" onClick={() => router.push("/contact")}>
          Get a quote
        </RectButton>
      </nav>
    </div>
  );
};

export default Nav;
