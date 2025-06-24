import Image from "next/image"

const Navbar = () => {
    return (
        <>
            <nav className="flex items-center px-3 py-2 rounded-md gap-3 text-[#303030] border-1 border-[#EAEAEA] bg-[#EAEAEA]">
                <Image
                    width={40}
                    height={40}
                    src={"logo.svg"}
                    alt="Cyber Space CB Logo"
                />

                <p className="font-bold text-xl">Cyber Space CB</p>
            </nav>
        </>
    )
}

export default Navbar
