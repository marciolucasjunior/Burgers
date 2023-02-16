import './Formulario.css'
import { useState } from 'react'


function Formulario(props){



    const [Form, SetForm] = useState({
        
        cliente: '',
        pao: '',
        carne: '',
        bacon: '',
        salame: '',
        cebola:'',
        chedar: '',
        pepino: '',
     
        
    })

   // useEffect(()=>{
     //  console.log(Form)
    // },[Form])
    
    const PegandoDados = (evento) => {
        const auxForm = {...Form}
        auxForm[evento.target.name] = evento.target.type === "checkbox" && 'checked'? evento.target.value : evento.target.value;
      
        SetForm(auxForm)
       
    }

    let enviarForm = (e)=> {
         e.preventDefault()
         console.log(Form)
         if( 
             Form.cliente == '' || Form.pao == '' || Form.carne == ''
            ){
                alert('Por Favor preencha os campos')
            } else {
                   
                   //MANDAR PARA BACK-END
                  //Cadastrando os dados na api
               
                  fetch('http://localhost:3001/cad',{
                    method:'POST',
                    headers:{
                       'Content-type':'application/json'
                    },
                    body: JSON.stringify(Form)
                  }).then(response => response.json())
                  .then(alert('Pedido realizado com sucesso!'))
                
}
}          
    return (

      <div>
        
         <form onSubmit={enviarForm}>
         <div id="verificado"></div>
         <label id="teste" htmlFor=""><p>Nome do Cliente:</p></label>
         <input onChange={PegandoDados} id='caixa1' type="text" name="cliente"  placeholder="Digite o seu nome" autoComplete='off' /><br />
         <label htmlFor="">Escolha o pão:</label>

         <select onChange={PegandoDados} name="pao" id="paos" >
                <option value=""></option>
                <option value="Integral">Integral</option>
                <option value="Pão frances">Pão frances</option>
                <option value="Italiano Branco">Italiano Branco</option>
                <option value="Parmesão e Orégano">Parmesão e Orégano</option> 
            </select><br/>

            <label  htmlFor="">Escolha a carne do seu Burger:</label>
            <select onChange={PegandoDados} name="carne" id="carnes">
                 <option></option>
                <option value="Maminha">Maminha</option>
                <option value="Alcatra">Alcatra</option>
                <option value="Filé">Filé</option>
                <option value="Picanha">Picanha</option>
            </select><br />

            <label htmlFor="">Escolha os opcionais:</label><br/>
                <div className="container">
                    <ul id='op'>
                        <li><input onChange={PegandoDados} name='bacon' type="checkbox"  className="check" value="Bacon" /> bacon</li>
                        <li><input onChange={PegandoDados} name='salame' type="checkbox"  className="check" value="Salame" /> Salame</li>
                        <li><input onChange={PegandoDados} name='cebola' type="checkbox"  className="check" value="Cebola roxa" /> Cebola roxa</li>
                        <li><input onChange={PegandoDados} name='chedar' type="checkbox"  className="check" value="Chedar" /> Chedar</li>
                        <li><input onChange={PegandoDados} name='tomate' type="checkbox"  className="check" value="Tomate" /> Tomate</li>
                        <li><input onChange={PegandoDados} name='pepino' type="checkbox"  className="check" value="Pepino" /> Pepino</li>
                    </ul>
                </div>
                <input id="pegar" className="submit" type="submit" value="Criar meu Burguer !"></input>
        </form>
     </div>
           
    )
}

export default Formulario
