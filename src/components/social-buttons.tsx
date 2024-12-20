import React from 'react'
import { FaTelegramPlane } from 'react-icons/fa';

import { FaDiscord, FaXTwitter } from 'react-icons/fa6'

const socialLinks = [
    { href: 'https://discord.gg/Rc4BMUjbNB', icon: <FaDiscord /> },
    { href: 'https://x.com/EnReachNetwork', icon: <FaXTwitter /> },
    { href: 'https://t.me/EnReachNetwork', icon: <FaTelegramPlane /> },
]


export function SocialButtons() {

    return <div className="flex items-center gap-8">
        {
            socialLinks.map((item) => {
                return <a
                    key={item.href}
                    className=" mo:w-6  border  text-lg items-center justify-center flex hover:text-[#4281FF] hover:border-[#4281FF]  w-[1.9375rem] h-[1.9375rem] mo:h-6 border-white/20 rounded-full "
                    href={item.href}
                    target="_blank"
                    rel="noreferrer"
                >
                    {item.icon}
                </a>
            })
        }
    </div>
}