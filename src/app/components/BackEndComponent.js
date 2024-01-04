import Image from "next/image"

export default function BackEndComponent() {
    return (
        <>
            <div>
                <Image
                    src={"./img/techIcons/nodejs.png"}
                    width={64}
                    height={64}
                    alt="download"
                />
            </div>
            <div>
                <Image
                    src={"./img/techIcons/python.png"}
                    width={64}
                    height={64}
                    alt="download"
                />
            </div>
            <div>
                <Image
                    src={"./img/techIcons/express.png"}
                    width={64}
                    height={64}
                    alt="download"
                />
            </div>

        </>

    )
}