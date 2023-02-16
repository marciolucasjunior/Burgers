const express = require('express');
const app = express();
const cors = require('cors');
app.use(cors())
app.use(express.json())
const Usuario = require('./models/Usuario')


app.get('/cad',(req,res)=>{
    Usuario.findAll()
    .then((valores)=>{
   //  console.log(valores.map(valores => valores.toJSON()))
    if(valores.length > 0){
        res.send(valores.map(valores=>valores.toJSON()))
    }else{
        res.send('Nenhum dado encontrado')
    }
    })
    .catch((err)=>{
     console.log(`Houve um problema:${err}`)
    })
 });

app.post('/cad',(req,res)=>{
    var cliente = req.body.cliente;
    var pao = req.body.pao;
    var carne = req.body.carne;
    var bacon = req.body.bacon;
    var salame = req.body.salame;
    var cebola = req.body.cebola;
    var chedar = req.body.chedar;
    var pepino =  req.body.pepino;
   
   

    
    Usuario.create({
        cliente: cliente,
        pao: pao,
        carne: carne,
        bacon: bacon,
        salame: salame,
        cebola:cebola,
        chedar: chedar,
        pepino: pepino,
    

    })
});
   

app.post('/deletar/:id',(req,res)=>{
Usuario.destroy({
    where:{
        id: req.params.id
    }
}).then((retorno)=>{
    res.redirect('/cad')
}).catch((err)=>{
    console.log(err)
})
   
})




app.listen(3001,()=>{
    console.log('http://localhost:3001/cad')
})


