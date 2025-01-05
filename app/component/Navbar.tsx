'use client'
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useEffect, useState } from "react";
import { CiSearch } from "react-icons/ci";

const Navbar: React.FC = () => {
    const rout = usePathname();
    const [color, setColor] = useState<string>('white');
    const [border, setBorder] = useState<boolean>(false);
    
    useEffect(() => {
        if (rout === '/') {
            setColor("white");
            setBorder(false);
        } else {
            setColor("gray");
            setBorder(true); // اضافه کردن بوردر برای مسیرهای غیر از '/'
        }
    }, [rout]);

    return (
        <ul className={`w-full py-4 flex justify-between items-center backdrop-blur-md bg-white/30 px-4 ${border ? 'border-b border-border' : ''}`}>
            <ul className="flex justify-between w-[60%]">
                <Link href={"/"} className={`cursor-pointer text-${color}`}>خانه</Link>
                <Link href={"/contact-us"} className={`cursor-pointer text-${color}`}>تماس با ما</Link>
                <li className={`cursor-pointer text-${color}`}>لیست شهیدان</li>
                <li className={`cursor-pointer text-${color}`}>خاطرات</li>
                <div className="flex border border-border rounded-md px-2 text-white">
                    <input
                        type="text"
                        placeholder="نام شهید را جستوجو کنید"
                        className={`px-2 py-1 rounded-md outline-none bg-transparent text-${color} placeholder-${color}`}
                    />
                    <span className="text-3xl">
                        <CiSearch />
                    </span>
                </div>
            </ul>

            <img src="\assets\logo.webp" className="w-16 h-16 rounded-full" alt="" />
        </ul>
    );
};

export default Navbar;
