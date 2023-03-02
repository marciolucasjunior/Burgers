
import './Header.css'

function Header() {

  return (
    <div>
        <header>
                  <nav className="nav">
                      <p id='logo'>Burgers</p>
                      <a href="/"><p>Fazer Pedidos</p></a>
                      <a href="/Pedidos" rel="next"><p>Pedidos</p></a>
                  </nav>
    </header> 
    </div>
  )


}

export default Header