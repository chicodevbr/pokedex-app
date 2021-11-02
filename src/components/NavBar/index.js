const NavBar = (props) => {
  return (
    <nav className="relative flex flex-wrap items-center justify-between px-2 py-3 bg-teal-500 mb-3">
      <div className="bg-purple-700 container px-4 mx-auto flex flex-wrap items-center justify-between">
        <div className="w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start">
          <a
            className="text-sm font-bold leading-relaxed inline-block mr-4 py-2 whitespace-nowrap uppercase text-white"
            href="/"
          >
            {props.children}
          </a>
          <ul>
            <li>{props.login}</li>
            <li>{props.dashboard}</li>
            <li>{props.logout}</li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
