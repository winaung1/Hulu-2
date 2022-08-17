import Image from  "next/image";
import Icons from "./Icons";

import { 
  HomeIcon,
  CollectionIcon,
  BadgeCheckIcon,
  LightningBoltIcon,
  SearchIcon,
  UserIcon,
 } from '@heroicons/react/outline';

function Header() {
  return (
    <header className="m-5 flex flex-col sm:flex-row justify-between items-center h-auto">
      <div className="flex flex-grow justify-evenly max-w-2xl">
        <Icons Icon={HomeIcon} title="Home"/>
        <Icons Icon={LightningBoltIcon} title="Trending"/>
        <Icons Icon={BadgeCheckIcon} title="Home"/>
        <Icons Icon={SearchIcon} title="Home"/>
        <Icons Icon={UserIcon} title="Home"/>
        <Icons Icon={CollectionIcon} title="Home"/>
      </div>
      <h1>Developed by: <span className="font-bold">Win Aung</span></h1>
        <Image className="object-contain" src="https://download.logo.wine/logo/Hulu/Hulu-Logo.wine.png" width={200} height={100}/>
    </header>

  )
}

export default Header