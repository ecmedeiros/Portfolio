// pages/api/middleware.js
import { parse } from 'cookie';

export const middleware = (handler) => async (req, res) => {
  // Adicione qualquer lógica de middleware necessária aqui
  if (req.headers.cookie) {
    req.cookies = parse(req.headers.cookie);
  }

  // Adicione o suporte para o corpo da solicitação JSON
  if (req.headers['content-type'] === 'application/json') {
    try {
      req.body = JSON.parse(req.body);
    } catch (error) {
      console.error('Erro ao analisar o corpo da solicitação JSON:', error);
    }
  }

  return handler(req, res);
};
