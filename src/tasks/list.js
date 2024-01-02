const Task = require('./../schemas/Task')
const clientRedis = require('./../redis')

module.exports = async (req, res) => {
  try {
    // Verifica se o cliente Redis está conectado
    if (clientRedis.connected) {
      try {
        clientRedis.get('tasks', async (error, cached) => {
          if (cached) {
            return res.status(200).json({ data: JSON.parse(cached) });
          }

          const data = await Task.find({});
          clientRedis.set('tasks', JSON.stringify(data))
          clientRedis.expire('tasks', 60)
          return res.status(200).json({ data });
        });
      } catch (error) {
        // Lidar com erros relacionados ao cliente Redis
        console.error('Erro no cliente Redis:', error);
        return res.status(500).json({ error: 'Erro no cliente Redis' });
      }
    } else {
      return res.status(500).json({ error: 'O cliente Redis não está conectado.' });
    }
  } catch (error) {
    return res.status(500).json({ error });
  }
}
