import React from 'react';
import Logo from '../AppSidebar/Logo';
import { ChevronDown } from 'lucide-react';
import { Link } from 'react-router-dom';
import NavMenuLink from './NavMenuLink';
import { ModeToggle } from '../ModeToggle';
import { Button } from '../ui/button';

function Navbar() {
  return (
    <>
      <div>
        <div className="flex justify-between items-center">
          <div>
            <Logo />
          </div>
          <div className="flex gap-8">
            <NavMenuLink link="/" text="Home" />
            <NavMenuLink link="/about" text="About" />
            <NavMenuLink link="/contact" text="Contact" />
            <div className="flex gap-3">
              <Link to="/login">
                <Button className="cursor-pointer">Login</Button>
              </Link>
              <Link to="/signup">
                <Button className="cursor-pointer">Signup</Button>
              </Link>
            </div>
            <ModeToggle />
          </div>
        </div>
      </div>
    </>
  );
}

export default Navbar;
