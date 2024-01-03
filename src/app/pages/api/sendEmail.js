import { middlaware } from "./middleware"

export default function handler(req, res) {
    if (req.method === 'POST') {
        const { nome, email, assunto, mensagem } = req.body

        const formattedMessage = `${nome}, ${mensagem}`

        res.status(200).json({ message: 'OK' })
    } else {
        res.status(405).json({ message: 'Método não permitido' })
    }
}