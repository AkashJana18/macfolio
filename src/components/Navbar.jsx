import { navLinks } from "#constants";

const Navbar = () => {
  return (
    <nav>
      <div>
        <img src="/images/logo.svg" alt="apple logo" />
        <p className="font-bold">Akash's Portfolio</p>

        <ul>
          {navLinks.map((item) => (
            <li key={item.id}>
              <p>{item.name}</p>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
