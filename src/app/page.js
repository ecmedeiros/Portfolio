"use client"
import Image from 'next/image'
import { useState, useEffect } from 'react'
import styles from './page.module.css'
import Link from 'next/link'
import NavBar from './components/NavBar'
import ParticlesBackground from './components/ParticlesBackground'
import Skills from './components/Skills'
import { ProjectBox } from './components/ProjectBox'
import { Footer } from './components/Footer'

export default function Home() {
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    const handleSmoothScroll = (e) => {
      e.preventDefault();

      const targetId = e.target.getAttribute('href').substring(1);
      const targetElement = document.getElementById(targetId);

      if (targetElement) {
        targetElement.scrollIntoView({ behavior: 'smooth' });
      }
    };

    document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
      anchor.addEventListener('click', handleSmoothScroll);
    });

    // Cleanup event listeners when the component unmounts
    return () => {
      document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
        anchor.removeEventListener('click', handleSmoothScroll);
      });
    };
  }, []); // Run the effect only once when the component mounts

  return (
    <>
      <NavBar />

      <ParticlesBackground className={styles.particles} />


      <div id="home" className={styles.main} style={{ position: 'relative', zIndex: 1 }}>


        <div className={styles.nameTitle} >
          <h1>
            Olá, meu nome é Elias Medeiros.
          </h1>
        </div>

        <div className={styles.description}>
          Um Desenvolvedor Full-stack &lt;/&gt;
        </div>

        <hr className={styles.line} />

        <div className={styles.iconsContainer}>

          <Link href={'https://www.linkedin.com/in/eliascmedeiros/'}
            target='_blank'>

            <Image
              src="./public/img/drawIcons/linkedin.png"
              width={32}
              height={32}
              alt="linkedin"
            />
          </Link>

          <Link href={'https://github.com/ecmedeiros/Portfolio'}
            target='_blank'
          >
            <Image
              src="./public/img/drawIcons/github.png"
              width={32}
              height={32}
              alt="linkedin"
            />
          </Link>

          <a href="mailto:elias.demedeiros@hotmail.com">
            <Image
              src="./public/img/drawIcons/mail.png"
              width={32}
              height={32}
              alt="mail"
            />
          </a>

        </div>

        <div >
          <a
            className={styles.resumeButton}
            href='./pdf/resume.pdf'
            target='_blank'
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >

            <p>Baixar Curriculo</p>
            {isHovered ? (
              <Image
                src={"./public/img/drawIcons/download_black.png"}
                width={32}
                height={32}
                alt="download"
              />
            ) : (
              <Image
                src={"./public/img/drawIcons/download_white.png"}
                width={32}
                height={32}
                alt="download"
              />
            )}

          </a>
        </div>

      </div>

      <div id="aboutMe" className={styles.aboutMe} style={{ position: 'relative', zIndex: 1 }}>
        <h2>
          Sobre Mim &lt;/&gt;
        </h2>
        <div className={styles.myDescription}>

          <Image
            style={{ borderRadius: '20vh' }}
            src={"./public/img/profile.jpeg"}
            width={250}
            height={250}
            alt="asda"
          />

          <p>
            Sou um desenvolvedor autodidata que busca entender detalhes por trás da tecnologia. Desde o início da minha jornada, busquei conhecimento em diversas fontes, incluindo documentações, internet e experimentação prática. Venho adquirindo conhecimento pela criação e experimentação. Tenho facilidade em absorver rapidamente novos conhecimentos e aplicá-los na prática. Engajado com desenvolvimento há 5 anos, iniciei desenvolvendo códigos para jogos quando tinha 15 anos.
          </p>
        </div>

        <Skills />

      </div>

      <div id='projects' className={styles.projects}>
        <h2>
          Projetos
        </h2>

        <div className={styles.projectContainer}>

          <div>
            <ProjectBox
              ImagePath={'./public/img/projects/dashboard.gif'}
              title={'Production-Dashboard'}
              description={'Utilizando o Node.js com o Express.js, esta API busca dados de forma assíncrona do servidor e atualiza com informações em tempo real do banco de dados.'}
              projectLink={'https://github.com/ecmedeiros/production-planning-system'}
              projectView={'github'}
              usedTechs={['nodejs', 'html', 'js', 'bootstrap']}
            />
            <ProjectBox
              ImagePath={'./public/img/projects/tiny.png'}
              title={'Quality-Control-System'}
              description={'O TINY ERP é uma plataforma de gestão empresarial, esta API desenvolvida em Node.js facilita o processo de criação de etiquetas no TINY ERP.'}
              projectLink={'https://github.com/ecmedeiros/postTradeToTiny'}
              projectView={'github'}
              usedTechs={['nodejs', 'postgresql']}

            />
          </div>

          <div>

            <ProjectBox
              ImagePath={'./public/img/projects/revisao.gif'}
              title={'Quality-Control-System'}
              description={'Solução para controle de qualidade para revisão de cabedais. Examine, registre modelos e defeitos com eficiência, obtenha relatórios detalhados.'}
              projectLink={'https://github.com/ecmedeiros/quality-control-system'}
              projectView={'github'}
              usedTechs={['html', 'js', 'css', 'postgresql']}

            />
            <ProjectBox
              ImagePath={'./public/img/projects/portfolio.png'}
              title={'Portfolio'}
              description={'Meu portfólio é demonstração das habilidades que venho adquirindo. Utilizando Next.js, o portfólio é responsivo e oferece uma experiência em dispositivos móveis.'}
              projectLink={'https://github.com/ecmedeiros/Portfolio'}
              projectView={'github'}
              usedTechs={['nextjs_', 'nodejs', 'html', 'js', 'css']}

            />
          </div>
        </div>

        <div className={styles.moreProjects}>
          <a href='https://github.com/ecmedeiros' target='_blank'>
            Mais projetos
          </a>
        </div>

      </div>

      <Footer />

    </>
  )
}
