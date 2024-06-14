import { Outlet, Link } from "react-router-dom";

function NavBar() {
  return (
    <>
      <div className="h-[10%] flex justify-between items-center bg-red-600">
        <Link
          to="/home"
          className="mx-10 px-4 py-2 bg-blue-800 text-white rounded transition-all hover:bg-blue-600 hover:translate-y-[-0.10rem]"
        >
          NuzTracker
        </Link>
        <div className="w-[50%] mx-12 flex justify-evenly">
          <Link
            to="/"
            className="px-4 py-2 bg-yellow-400 rounded transition-all hover:bg-yellow-300"
          >
            Routes
          </Link>
          <Link
            to="/"
            className="px-4 py-2 bg-yellow-400 rounded transition-all hover:bg-yellow-300"
          >
            Popular Pokemon
          </Link>
          <Link
            to="/"
            className="px-4 py-2 bg-yellow-400 rounded transition-all hover:bg-yellow-300"
          >
            Popular Movesets
          </Link>
          <Link
            to="/"
            className="px-4 py-2 bg-yellow-400 rounded transition-all hover:bg-yellow-300"
          >
            Help
          </Link>
        </div>
      </div>
      <Outlet />
    </>
  );
}
export default NavBar;
