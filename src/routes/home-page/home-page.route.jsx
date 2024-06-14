import { Link } from "react-router-dom";

function HomePage() {
  return (
    <div className="h-[90%]">
      <div className="h-[40%] flex-row justify-center items-center">
        <Link className="block" to="/">
          New game
        </Link>
        <Link className="block" to="/">
          Load game
        </Link>
        <Link className="block" to="/">
          New game
        </Link>
      </div>
    </div>
  );
}
export default HomePage;
