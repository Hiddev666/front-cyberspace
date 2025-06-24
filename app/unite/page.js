import Image from "next/image"
import Navbar from "./components/Navbar"
import Form from "./components/Form"

const Unite = () => {
    return (
        <>
            <div className="px-5 pt-5 pb-5 md:px-10">
                <Navbar />
                <div className="w-full flex flex-col md:flex-row items-center mt-8">
                    <Image
                        width={100}
                        height={100}
                        alt="Unite"
                        src={"unite.svg"}
                        className="w-full md:w-3/4"
                    />
                    <Form />
                </div>
            </div>
        </>
    )
}

export default Unite
