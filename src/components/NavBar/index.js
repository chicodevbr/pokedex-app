const NavBar = (props) => {
  return (
    <nav className="bg-purple-700 relative flex flex-wrap items-center justify-between px-2 py-3 bg-teal-500 mb-3">
      <div className=" px-4 mx-auto flex flex-wrap items-center justify-between">
        <div className="w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start">
          <a
            className="text-sm font-bold leading-relaxed inline-block mr-4 py-2 whitespace-nowrap uppercase text-white"
            href="/"
          >
            Pokedex
          </a>
          <ul className="m-2 flex row-span-1 justify-between text-white">
            <li className="m-1">Home</li>
            <li className="m-1">Login</li>
            <li className="m-1">Dashboard</li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
