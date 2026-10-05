import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <div>
      <nav>
        <h1><Link to="/">emily bradley</Link></h1>
        <Link to="/about">About</Link>
        <Link to="/work">Work</Link>
        <Link to="/shop">Shop</Link>
        <Link to="/contact">Contact</Link>
      </nav>
      
      
    </div>
  );
}

//when not in home, show links to about, work, and shop pages. Nav bar will be different for home page