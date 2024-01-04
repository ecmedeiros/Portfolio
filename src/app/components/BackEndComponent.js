import Image from "next/image"

export default function BackEndComponent() {
    return (
        <>
            <div>
                <Image
                    src={"./public/img/techIcons/nodejs.png"}
                    width={64}
                    height={64}
                    alt="download"
                />
            </div>
            <div>
                <Image
                    src={"./public/img/techIcons/python.png"}
                    width={64}
                    height={64}
                    alt="download"
                />
            </div>
            <div>
                <Image
                    src={"./public/img/techIcons/express.png"}
                    width={64}
                    height={64}
                    alt="download"
                />
            </div>

        </>

    )
}