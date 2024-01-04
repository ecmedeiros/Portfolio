"use client"
// import Image from 'next/image'
import styles from '../page.module.css'



export function Footer() {
    // document.getElementById('form').addEventListener('change')

    function verifyMessage(inputSubject) {

        return inputSubject.length > 0 && inputSubject.length <= 500
    }

    function verifySubject(inputSubject) {
        return inputSubject.length <= 30
    }

    function verifyEmail(inputEmail) {
        const regexEmail = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Z|a-z]{2,}$/;
        return regexEmail.test(inputEmail)
    }

    function verifyName(inputName) {
        return inputName.value !== ''
    }

    function verifyInputs() {
        alert('Recurso em desenvolvimento, por favor envie sua mensagem para elias.demedeiros@hotmail.com')
        // const inputName = document.getElementById('fname')
        // const inputEmail = document.getElementById('email')
        // const inputSubject = document.getElementById('subject')
        // const inputMessage = document.getElementById('message')

        // if (
        //     inputEmail.value !== '' &&
        //     inputName.value !== '' &&
        //     inputSubject.value !== '' &&
        //     inputMessage.value !== ''

        // ) {
        //     verifyEmail(inputEmail.value) ? console.log('Deboa') : alert('O campo e-mail deve estar preenchido')
        //     verifySubject(inputSubject.value) ? console.log('Deboa') : alert('O campo Assunto deve estar preenchido')
        //     verifyMessage(inputMessage.value) ? console.log('Deboa') : alert('O campo mensagem deve estar preenchido')
        //     verifyName(inputName.value) ? console.log('Deboa') : alert('O campo nome deve estar preenchido')
        // } else {
        //     alert('Todos os campos devem estar preenchidos')
        // }
    }

    return (
        <footer className={styles.footer}>
            <p className={styles.footerTitle}>
                Entre em contato comigo
            </p>

            <div id='footer' className={styles.footerDesc}>
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
                    <input type="text" id="fname" name="fname" placeholder='Seu nome aqui.'  required/>
                    <span id="errorName" class="error"></span>


                    <label htmlFor="subject">Assunto:</label>
                    <input type="text" id="subject" name="subject" placeholder='Qual o assunto da sua mensagem?'  required/>
                    <span id="errorSubject" class="error"></span>


                    <label htmlFor="email">Seu email:</label>
                    <input type="text" id="email" name="email" placeholder='Seu melhor E-mail.'  required/>
                    <span id="errorEmail" class="error"></span>


                    <label>Sua mensagem:</label>
                    <textarea id="message" placeholder='Olá eu tenho uma oportunidade, projeto ou sugestão...' required></textarea>
                    <span id="errorMessage" class="error"></span>


                    <input className={styles.submit} onClick={verifyInputs} value="Enviar!" />
                </form>
            </div>
        </footer>
    )
}