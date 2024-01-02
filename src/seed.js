const mongoose = require('mongoose');
const Task = require('./schemas/Task');
const seedData = require('./seed-info');

mongoose.connect('mongodb://127.0.0.1:27017/cache', {
  useUnifiedTopology: true,
});

// Função para popular os dados
async function seedDatabase() {
  try {
    // Limpa os dados existentes
    await Task.deleteMany();

    // Popula os dados
    const result = await Task.insertMany(seedData[0].documents);

    console.log('Database seeded successfully:', result);
  } catch (error) {
    console.error('Error seeding database:', error);
  } finally {
    // Fecha a conexão com o MongoDB
    mongoose.disconnect();
  }
}

// Chama a função para popular os dados
seedDatabase();
