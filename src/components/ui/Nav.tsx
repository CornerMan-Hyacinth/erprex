"use client";

import Image from "next/image";
import { RectButton } from "./Button";
import { usePathname, useRouter } from "next/navigation";
import Link from "next/link";
import { useEffect, useState } from "react";
import { BodyText, TitleText } from "./Text";

const Nav = () => {
  const router = useRouter();
  const pathname = usePathname();

  return (
    <div className="w-full flex items-center justify-center md:px-10 px-4 py-4 bg-transparent font-[family-name:var(--font-inter-regular)]">
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

          <Link href={"/solutions"} className="text-lg text-black">
            {pathname === "/solutions" ? (
              <TitleText weight="bold" className="text-my-blue">
                Solutions
              </TitleText>
            ) : (
              <TitleText
                weight="regular"
                className="opacity-70 hover:opacity-100 duration-300 ease-in-out"
              >
                Solutions
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

          <Link href={"/contact-us"} className="text-lg text-black">
            {pathname === "/contact-us" ? (
              <TitleText weight="bold" className="text-my-blue">
                Contact Us
              </TitleText>
            ) : (
              <TitleText
                weight="regular"
                className="opacity-70 hover:opacity-100 duration-300 ease-in-out"
              >
                Contact Us
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
