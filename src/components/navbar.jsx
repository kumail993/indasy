import logo from '../assets/logo.png';

const Navbar = () => {
  return (
    <div className="main-container">
<div className="navBar-container">
      <div className="navBar">
        <div className="logo">
          <img src={logo} alt="" className='logo-image' />
        </div>
        <div className="navLinks">
        <a href="#projects">Home</a>
          <a href="#projects">Projects</a>
          <a href="#services">Services</a>
          <a href="#contact">Contact</a>
        </div>
        <button className="btn"><i className="fas fa-envelope"></i> Send Message</button>
      </div>
    </div>

    </div>
  );
}

export default Navbar;
