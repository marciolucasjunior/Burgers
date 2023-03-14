

import './Header.css'


function Header() {

  function rolarPagina(e){
   
      if(window.location.pathname == "/" ){
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