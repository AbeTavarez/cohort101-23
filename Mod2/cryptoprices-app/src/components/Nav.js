import { Link } from "react-router-dom";

export default function Nav() {
  return (
    <div className="nav">
      <Link to="/">
        <div>Crypo Prices</div>
      </Link>

      <Link to="/currencies">
        <idv>Currencies</idv>
      </Link>
    </div>
  );
}
