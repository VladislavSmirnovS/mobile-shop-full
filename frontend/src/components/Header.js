import logo from "../images/shop.png";

function Header() {
  return (
    <header className="header">
      <img className="header__logo" src={logo} alt="Логотип Mobile Market" />
      <h1 className="header__title">Mobile Market</h1>
    </header>
  );
}

export default Header;
