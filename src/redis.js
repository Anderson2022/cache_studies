const redis = require('redis');

// Configuração para produção (por exemplo, configurar o host e a porta do seu servidor Redis)
const redisConfig = {
  host: '127.0.0.1',  // Substitua pelo host do seu servidor Redis
  port: 6379,         // Substitua pela porta do seu servidor Redis
  // Adicione outras opções, se necessário
};

const client = redis.createClient(redisConfig);

module.exports = client;
