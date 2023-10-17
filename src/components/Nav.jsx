import { hamburger } from "../assets/icons";
import { headerLogo } from "../assets/images";
import { navLinks } from "../constants";

const Nav = () => {
  return (
    <header className="padding-x py-8 absolute z-10 w-full">
      <nav className="flex justify-between items-center max-container">
        <a href="/">
          <img
            src={headerLogo}
            alt="logo"
            width={129}
            height={29}
            className="m-0 w-[100px] h-[50px] object-contain"
          />
        </a>
        <ul className="flex-1 flex justify-end items-center gap-16 max-lg:hidden pr-6">
          {navLinks.map((item) => (
            <li key={item.label}>
              <a
                href={item.href}
                className="font-syne font-normal tracking-wide leading-normal text-lg text-[#000000] hover:text-coral-red"
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>
        <div className="hidden max-lg:block">
          <img src={hamburger} alt="hamburger icon" width={25} height={25} />
        </div>
      </nav>
    </header>
  );
};

export default Nav;
