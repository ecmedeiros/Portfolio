import Image from "next/image"

export default function HostingComponent() {
    return (
        <>
            <div>
                <Image
                    src={"/img/techIcons/aws.png"}
                    width={64}
                    height={64}
                    alt="download"
                />
            </div>

        </>

    )
}