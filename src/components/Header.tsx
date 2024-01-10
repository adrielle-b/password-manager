import React from 'react';
import { FaLock } from 'react-icons/fa';

function Header() {
  return (
    <header>
      <h1
        className="text-5xl
      font-medium
      text-center
      tracking-wider
      text-orange-600
      pt-14
      mb-28"
      >
        Gerenciador de senhas
        <FaLock className="inline-block ml-3 text-4xl" />
      </h1>
    </header>
  );
}

export default Header;
