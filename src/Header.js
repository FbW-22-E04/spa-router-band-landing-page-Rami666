import { Link } from "react-router-dom";

function Header() {
  return (
    
    <div>
        <h1 className="flex justify-center item-center mb-4">METALLICA</h1>
    <div className="flex justify-center item-center gap-[40px]">
        
      <Link to="/">James</Link>
      <Link to="/kirk">Kirk</Link>
      <Link to="/lars">Lars</Link>
      <Link to="/robert">Robert</Link>
    </div>
    </div>
  );
}

export default Header;
