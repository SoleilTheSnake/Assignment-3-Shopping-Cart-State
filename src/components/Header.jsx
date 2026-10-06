import './Header.css';

function Header({ cartCount }) {
  return (
    <header className="app-header">
      <h1 className="logo">ComponentCorner</h1>
      <nav className="nav-menu">
        <a href="#" className="nav-link">Home</a>
        <a href="#" className="nav-link">Products</a>
        <a href="#" className="nav-link">About</a>
      </nav>
      <div className="cart-container">
        <img
          className="cart-icon"
          src="https://preview.redd.it/a-sinister-idea-for-a-character-related-to-save-points-v0-eow6sknm708h1.jpeg?width=640&crop=smart&auto=webp&s=0c0e094f43ce03374a270fa380b4b28a942e89bb"
          alt="Cart"
        />
        <span className="cart-count">{cartCount}</span>
      </div>
    </header>
  );
}

export default Header;