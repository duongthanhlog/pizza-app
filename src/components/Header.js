import Link from "next/link";

function Header() {
    return ( 
        <header className="py-3 shadow-md">
            <div className="max-w-5xl mx-auto flex-1 flex gap-8 items-center font-bold text-gray-500">
                <Link href={'/'} className="text-primary text-3xl">
                    PizzaVN
                </Link>
                <Link href={'/'}>Home</Link>
                <Link href={''}>Menu</Link>
                <Link href={''}>About</Link >
                <Link href={''}>Contact</Link >
                <nav className="flex ml-auto gap-4 text-lg text-gray-500 font-bold items-center">
                    <Link href={''} className=" text-lg font-bold text-black py-2 cursor-pointer transition-all">
                        Login
                    </Link>
                    <Link href={'/register'} className="btn-primary">
                        Register
                    </Link>
                </nav>
            </div>
        </header>
    );
}

export default Header;