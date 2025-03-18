import React from 'react';
import { Earth } from 'lucide-react';

function Logo() {
  return (
    <div className="flex gap-2 justify-center items-center">
      <Earth />
      <h1 className="text-3xl font-wallpoet">Next Post</h1>
    </div>
  );
}

export default Logo;
