import Image from "next/image"

export default function FrontEndComponent() {
    return (
        <>
            <div>
                <Image
                    src={"./img/techIcons/html.png"}
                    width={64}
                    height={64}
                    alt="download"
                />
            </div>

            <div>
                <Image
                    src={"./img/techIcons/css.png"}
                    width={64}
                    height={64}
                    alt="download"
                />
            </div>

            <div>
                <Image
                    src={"./img/techIcons/react.png"}
                    width={64}
                    height={64}
                    alt="download"
                />
            </div>

            <div>
                <Image
                    src={"./img/techIcons/nextjs_.png"}
                    width={64}
                    height={64}
                    alt="download"
                />
            </div>

            <div>
                <Image
                    src={"./img/techIcons/bootstrap.png"}
                    width={64}
                    height={64}
                    alt="download"
                />
            </div>

        </>

    )
}