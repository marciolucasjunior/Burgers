const Sequelize = require('sequelize');
const sequelize = new Sequelize('makeburger','marcinho_felisbe','vevAcSXpCw97!B7',{
    host:'db4free.net',
    dialect: 'mysql',
    define:{
        charset: 'utf8',
        collate: 'utf8_general_ci',
        timestamps: true
    },
    logging: false
});

 //TESTANDO A CONEXÃO COM O BANCO

sequelize.authenticate().then(()=> {
    console.log('Conectado no banco com sucesso!');
}).catch((err)=>{
   console.log('Falha ao se conectar:'+err)
})  

module.exports = {Sequelize,sequelize}