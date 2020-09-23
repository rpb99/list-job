import React from 'react';

function Header() {
  return (
    <>
      <div className="w-full bg-teal-600 z-10">
        <img
          className="w-full block md:hidden"
          src={require('../assets/img/bg-header-mobile.svg')}
          alt=""
        />
        <img
          className="w-full hidden md:block"
          src={require('../assets/img/bg-header-desktop.svg')}
          alt=""
        />
      </div>
    </>
  );
}

export default Header;
