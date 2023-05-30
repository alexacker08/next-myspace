
import Link from "next/link"
import Image from "next/image"

export default function Nav(){
    return (
        <nav className="pt-7 pb-7 bg-blue-600 text-white">
            <div className="container max-w-7xl m-auto flex justify-between">
                <Link href={'/'} className="w-28">
                    <Image
                        src="/next.svg" // Route of the image file
                        width={216}
                        height={30}
                        alt="NextSpace Logo"
                    />
                </Link>
                <ul className="flex justify-end items-center gap-10">
                    <li>
                        <Link className="p-2 h-16" href={'/about'}>About</Link>
                    </li>
                    <li>
                        <Link className="p-2 h-16" href={'/blog'}>Blog</Link>
                    </li>
                    <li>
                        <Link className="p-2 h-16" href={'/users'}>Users</Link>
                    </li>
                </ul>
            </div>
        </nav>        
    )
}