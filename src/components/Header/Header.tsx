import Logo from '../../assets/logo.png'
import './Header.css'

function Header() {
  return (
    <div className="header">
      <img className="logo" src={Logo} alt="Logo"/>

      <ul className="header-menu">
        <li>Home</li>
        <li>Programas</li>
        <li>Sobre Nós</li>
        <li>Nossos Planos</li>
        <li>Depoimentos</li>
      </ul>

    </div>
  )
}

export default Header