const sequelize = require('./db');

sequelize.query('SELECT * FROM atividade_js')
  .then((resultado) => {
    console.log('Resultado da consulta:', resultado[0]);
  })
  .catch((erro) =>{
    console.error('Erro na consulta:', erro);
  });