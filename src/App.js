import './App.css';
import ProfileCard from './components/ProfileCard/ProfileCard.jsx'
import Nav from './components/Nav/Nav.jsx'
// import pics
import homer from './homer.jpg'
import bart from './bart.png'
import lisa from './lisa.png'
import maggie from './maggie.png'
import marge from './marge.png'


const navLinks = [
  { href: "/", text: "Home"},
  { href: "/about-us", text: "About the Simpsons"},
  { href: "/escapades", text: "Escapades"},
  { href: "/contact-us", text: "Contact the Simpsons"},
  { href: "/products", text: "Shop"},
  { href: "/FAQ", text: "FAQ"},
];

function App() {
  return (
    <div>
      <Nav links={navLinks} />
      <section className="blog-items team-cards">
          <div className="inner-wrapper">
            <div className="blog-container">
              <ProfileCard name={"Homer Simpson"} email={"homer@simpson.com"} description={"Loves his family as much as donuts"} pic={homer} />
              <ProfileCard name={"Lisa Simpson"} email={"lisa@harvard.edu"} description={"Amazing saxophone player"} pic={lisa} />
              <ProfileCard name={"Maggie Simpson"} email={"maggie@simpson.com"} description={"Maggie is known to have murdered at least one person"} pic={maggie} />
              <ProfileCard name={"Marge Simpson"} email={"marge@simpson.com"} description={"Marge is a role model"} pic={marge} />
              <ProfileCard name={"Bart Simpson"} email={"bart@simpson.com"} description={"Bart is the eternal prankster"} pic={bart} />
            </div>
          </div>
      </section>
    </div>
  );
}

export default App;
