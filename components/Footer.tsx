import React from "react";
import MagicButton from "./ui/MagicButton";
import { FaLocationArrow } from "react-icons/fa";
import { socialMedia } from "@/data";
import Link from "next/link";

function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="mb-[100px] w-full pb-10 md:mb-5" id="contact">
      <div className="flex flex-col items-center">
        <h1 className="heading lg:max-w-[45vw]">
          Ready to take <span className="text-purple">your</span> digital
          presence to the next level?
        </h1>
        <p className="my-5 text-center text-white-200 md:mt-10">
          Reach out to me today and let&apos;s discuss how i can help you
          achieve your goals
        </p>
        <a href="mailto:toludare68@gmail.com">
          <MagicButton
            title="Let's get in touch"
            icon={<FaLocationArrow />}
            position="right"
          />
        </a>
      </div>
      <div className="mt-16 flex flex-col items-center justify-between gap-3 md:flex-row md:gap-0">
        <p className="text-sm font-light md:text-base md:font-normal">
          Copyright © {year} Rufus
        </p>
        <div className="flex items-center gap-6 md:gap-3">
          {socialMedia.map((profile) => (
            <Link
              href={profile.socialLink}
              key={profile.id}
              className="saturate-180 flex h-10 w-10 cursor-pointer items-center justify-center rounded-lg border border-black-300 bg-black-200 bg-opacity-75 backdrop-blur-lg backdrop-filter hover:bg-white/30"
            >
              <img src={profile.img} alt={profile.id.toString()} />
            </Link>
          ))}
        </div>
      </div>
    </footer>
  );
}

export default Footer;
