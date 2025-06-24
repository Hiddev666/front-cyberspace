import Image from "next/image"

const Popup = () => {
    return (
        <>
            <div className="fixed w-screen h-screen flex justify-center items-center bg-white top-0 left-0">
                <div className="text-[#303030] text-center flex flex-col items-center gap-10">
                    <Image
                        width={200}
                        height={200}
                        src={"logo.svg"}
                        alt="Cyber Space CB Logo"
                    />
                    <div>
                        <h1 className="font-bold text-2xl">Pesan Berhasil Disimpan!</h1>
                        <p>See You Years Later👋</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Popup
