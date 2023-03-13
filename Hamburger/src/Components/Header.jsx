

import './Header.css'


function Header() {

      const paginaInicial = 'http://localhost:5173/'
      const paginaProducao = 'https://hamburger-seven.vercel.app/'


  function rolarPagina(e){
   
      if(window.location.href == paginaInicial || window.location.href == paginaProducao  ){
        e.preventDefault()
        window.scroll({top: window.innerHeight,behavior: "smooth"})
      }
      
   

  }

  
  return (
    <div>
        <header>
                  <nav className="nav">              
                      <p id='logo'>M.B</p>
                      <a onClick={rolarPagina} href="/"><p>Fazer Pedidos</p></a>
                      <a href="/Pedidos" rel="next"><p>Pedidos</p></a>
                  </nav>
       </header> 
    </div>
  )


}

export default Header