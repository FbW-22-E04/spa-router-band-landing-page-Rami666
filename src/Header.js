import { Link } from "react-router-dom";

function Header() {
  return (
    
    <div className="flex justify-center item-center gap-[40px]">
        <h1>METALLICA</h1>
      <Link to="/">James</Link>
      <Link to="/kirk">Kirk</Link>
      <Link to="/lars">Lars</Link>
      <Link to="/robert">Robert</Link>
    </div>
  );
}

export default Header;
