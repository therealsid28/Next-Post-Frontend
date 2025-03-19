import Navbar from '@/components/Navbar/Navbar';
import React from 'react';
import { Outlet } from 'react-router-dom';

function HomeLayout() {
  return (
    <div className="pt-4 mx-6">
      <Navbar />
      <Outlet />
    </div>
  );
}

export default HomeLayout;
