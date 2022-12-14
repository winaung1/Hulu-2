
import requests from "../utils/requests";
import {useRouter} from "next/router";

export default function Navbar() {

    const router = useRouter();

  return (
    <nav className="relative">
        <div className="no-scrollbar flex flex-grow px-10 sm:px-20 items-center overflow-x-scroll text-2xl whitespace-nowrap space-x-10">
            {Object.entries(requests).map(([key, { title, url }]) => (
                <h2 key={key} onClick={() => router.push(`/?genre=${key}`)} className='last:pr-24 cursor-pointer transition duration-100 transform hover:scale-125 hover:text-white active:text-green-400'>{title}</h2>
            ))}
        </div>
        <div className="absolute top-0 right-0 bg-gradient-to-l from-[#06202A] h-10 w-1/12"/>
    </nav>
  )
}
