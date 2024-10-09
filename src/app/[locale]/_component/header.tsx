import Image from 'next/image'
import React from 'react'
import banner from '../../../../public/images/pic13.jpg'
import { useTranslations } from "next-intl";

export const Header = () => {

  const t = useTranslations("header");

  return (
    <div className="relative w-full h-[70vh]">
      <Image 
        src={banner} 
        alt="banner"
        layout="fill"
        objectFit="cover"
        priority 
      />
      <div className="absolute inset-0 bg-black bg-opacity-40" />
      <div className="absolute inset-0 flex items-end pb-24 pl-24">
        <h1 className="text-white font-playfairThin text-[4vw] leading-none z-10">
          {t('title')}<br />
          {t('subtitle')}<br />
          {/* <span className="font-herrVon text-[3vw]">{t('impact')}</span> */}
        </h1>
      </div>
    </div>
  )
}