"use client"
import Image from 'next/image'
import styles from '../page.module.css'


export function ProjectBox({ ImagePath, title, description, projectLink, projectView, usedTechs }) {
    console.log(title, ImagePath)
    return (
        <div
            className={styles.projectBox}
        >
            <Image
                className={styles.projectImage}
                src={ImagePath}
                width={400}
                height={200}
                alt="asda"
            />
            <div className={styles.headerProjects}>
                <h3>{title}</h3>
                <div className={styles.projectLinks}>
                    <div>
                        <a href={projectLink} target='_blank'>
                            <Image
                                src={"./img/drawIcons/github.png"}
                                width={32}
                                height={32}
                                alt="download"
                            />
                        </a>
                    </div>

                    {/* <div>
                        <a href={projectView} target='_blank'>
                        <Image
                            src={"/img/drawIcons/view.png"}
                            width={32}
                            height={32}
                            alt="download"
                        />
                        </a>

                    </div> */
                    }
                </div>
            </div>
            <div className={styles.usedTechs}>
                {usedTechs.map((tech, index) => (
                    <div key={index}>
                        <Image
                            src={`./img/techIcons/${tech}.png`}
                            width={32}
                            height={32}
                            alt={tech}
                        />
                    </div>
                ))}

            </div>

            <p>
                {description}
            </p>

        </div>
    )
}