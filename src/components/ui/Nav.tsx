import Image from "next/image"

const Nav = () => {
    return (
        <div className="w-full flex items-center justify-center md:px-10 px-4 py-4 bg-transparent">
            <nav className="h-16 w-full bg-white flex items-center justify-between px-7 rounded-lg shadow-lg shadow-black">
                <div className="h-10 w-10 relative overflow-hidden">
                    <Image alt="Erprex logo" src={"/icons/erprex_logo.png"} fill className="object-cover" />
                </div>

                
            </nav>
        </div>
    )
}

export default Nav