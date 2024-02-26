'use client';

import Image from "next/image";

import { useRouter } from "next/navigation";

const Logo = () => {

    const router = useRouter();

    return (
        <Image
         alt='Logo'
         className="inline-block w-[140px]"
         height="100"
         width="100"
         src="/images/logo.svg"
         priority
        />
    )
}

export default Logo;