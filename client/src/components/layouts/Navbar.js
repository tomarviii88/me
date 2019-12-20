import React from 'react';

const Navbar = () => {
  return (
    <nav class='nav nav-pills flex-column flex-sm-row'>
      <a class='flex-sm-fill text-sm-center nav-link active' href='#'>
        Active
      </a>
      <a class='flex-sm-fill text-sm-center nav-link' href='#'>
        Longer nav link
      </a>
      <a class='flex-sm-fill text-sm-center nav-link' href='#'>
        Link
      </a>
      <a
        class='flex-sm-fill text-sm-center nav-link disabled'
        href='#'
        tabindex='-1'
        aria-disabled='true'
      >
        Disabled
      </a>
    </nav>
  );
};

export default Navbar;
