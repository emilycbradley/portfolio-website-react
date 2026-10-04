import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <div>
      <h1><Link to="/">emily bradley</Link></h1>
      //when not in home, show links to about, work, and shop pages
    </div>
  );
}