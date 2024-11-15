import './NavbarLink.css'

const NavbarLink = (props) => {
    return (
      <div className="navlink">
        <a href={props.href}>{props.text}</a>
      </div>
    );
  };
  
  export default NavbarLink;