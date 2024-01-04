import Image from "next/image"

export default function DatabaseComponent() {
    return (
        <>
            <div>
                <Image
                    src={"./public/img/techIcons/sql.png"}
                    width={64}
                    height={64}
                    alt="download"
                />
            </div>
            <div>
                <Image
                    src={"./public/img/techIcons/postgresql.png"}
                    width={64}
                    height={64}
                    alt="download"
                />
            </div>

        </>

    )
}