import React from 'react';
import { ChevronDown } from 'lucide-react';
import { Link } from 'react-router-dom';

function NavMenuLink({ link, text, icon }) {
  return (
    <Link to={link}>
      <div className="flex gap-1 items-end dark:hover:bg-zinc-900 hover:bg-stone-100 rounded-md px-5 py-1">
        <span>{text}</span>
        {icon}
      </div>
    </Link>
  );
}

export default NavMenuLink;
