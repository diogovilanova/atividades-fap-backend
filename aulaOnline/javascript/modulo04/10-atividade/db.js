const Sequelize = require('sequelize');

const sequelize = new Sequelize ('atividade_js', 'teste', 'Diogo@123', {
  host: '127.0.0.1:3306',
  dialect: 'mysql',
});

sequelize
  .authenticate()
  .then(() => {
    console.log('Conexão com o banco de dados estabelecida com sucesso.');
  })
  .catch((erro) => {
    console.error('Erro ao conectar ao banco de dados: ', erro);
  });

  module.exports = sequelize;