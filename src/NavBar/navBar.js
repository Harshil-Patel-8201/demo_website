import './navBar.css';

const NavBar = () => {
    return (
      <div className="nav-bar">
        <span className="logo">OnePage</span>
        <div className='item'>
          <a href="/">Home</a>
          <a href="/about">About</a>
          <a href="/service">Service</a>
          <a href="/portfolio">Portfolio</a>
          <a href="/team">Team</a>
          <a href="/pricing">Pricing</a>
          <a href="/drop-down">Drop Down</a>
          <a href="/contact">Contact</a>
          <a className='after-text' href='/get-started'>Get Started</a>
        </div>
      </div>
    );
}
 
export default NavBar;