
import './Header.css'

function Header() {

  return (
    <div>
        <header>
                  <nav className="nav">
                      <img id='logo' src="../../public/logo.png" alt="logo" />
                      <a href="/"><p>Fazer Pedidos</p></a>
                      <a href="/Pedidos" rel="next"><p>Pedidos</p></a>
                  </nav>
    </header> 
    </div>
  )


}

export default Header