import Image from "next/image"

export default function FrontEndComponent() {
    return (
        <>
            <div>
                <Image
                    src={"./public/img/techIcons/html.png"}
                    width={64}
                    height={64}
                    alt="download"
                />
            </div>

            <div>
                <Image
                    src={"./public/img/techIcons/css.png"}
                    width={64}
                    height={64}
                    alt="download"
                />
            </div>

            <div>
                <Image
                    src={"./public/img/techIcons/react.png"}
                    width={64}
                    height={64}
                    alt="download"
                />
            </div>

            <div>
                <Image
                    src={"./public/img/techIcons/nextjs_.png"}
                    width={64}
                    height={64}
                    alt="download"
                />
            </div>

            <div>
                <Image
                    src={"./public/img/techIcons/bootstrap.png"}
                    width={64}
                    height={64}
                    alt="download"
                />
            </div>

        </>

    )
}