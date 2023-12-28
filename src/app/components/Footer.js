"use client"
// import Image from 'next/image'
import styles from '../page.module.css'


export function Footer() {
    return (
        <footer className={styles.footer}>
            <p className={styles.footerTitle}>
                Entre em contato comigo
            </p>

            <div className={styles.footerDesc}>
                <p>
                    No email <strong className={styles.email}>elias.demedeiros@hotmail.com</strong>
                </p>

                <p>
                    Ou envie diretamente uma mensagem
                </p>
            </div>

            <div >
                <form className={styles.form}>
                    <label htmlFor="fname">Seu nome:</label>
                    <input type="text" id="fname" name="fname" placeholder='Seu nome aqui.' />
                    <label htmlFor="subject">Assunto:</label>
                    <input type="text" id="subject" name="subject" placeholder='Qual o assunto da sua mensagem?' />
                    <label htmlFor="email">Seu email:</label>
                    <input type="text" id="email" name="email" placeholder='Seu melhor E-mail.' />
                    <label>Sua mensagem:</label>
                    <textarea placeholder='Olá eu tenho uma oportunidade, projeto ou sugestão...'></textarea>
                    <input className={styles.submit} type="submit" value="Enviar!" />
                </form>
            </div>
        </footer>
    )
}