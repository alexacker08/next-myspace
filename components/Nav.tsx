
import Link from "next/link"
import Image from "next/image"

export default function Nav(){
    return (
        <nav className="flex justify-between">
            <Link href={'/'}>
                <Image
                    src="/logo.svg" // Route of the image file
                    width={216}
                    height={30}
                    alt="NextSpace Logo"
                />
            </Link>
            <ul className="flex justify-end items-center">
                <li>
                    <Link href={'/about'}>About</Link>
                </li>
                <li>
                    <Link href={'/blog'}>Blog</Link>
                </li>
                <li>
                    <Link href={'/users'}>Users</Link>
                </li>
            </ul>
        </nav>        
    )
}