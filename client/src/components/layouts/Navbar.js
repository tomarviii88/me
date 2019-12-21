import React from 'react';

const Navbar = () => {
  return (
    <nav className='navbar navbar-expand-lg navbar-dark bg-dark fixed-top scrolling-navbar'>
      <button
        className='navbar-toggler'
        type='button'
        data-toggle='collapse'
        data-target='#navbarNav'
        aria-controls='navbarNav'
        aria-expanded='false'
        aria-label='Toggle navigation'
      >
        <span className='navbar-toggler-icon'></span>
      </button>
      <div className='collapse navbar-collapse' id='navbarNav'>
        <div className='col-sm'>
          <ul className='navbar-nav justify-content-center'>
            <li className='nav-item'>
              <a className='nav-link' href='#about'>
                ABOUT{' '}
              </a>
            </li>
            <li className='nav-item'>
              <a className='nav-link' href='#about'>
                EDUCATION
              </a>
            </li>
            <li className='nav-item'>
              <a className='nav-link' href='#skills'>
                SKILLS
              </a>
            </li>
            <li className='nav-item'>
              <a className='nav-link' href='#projects'>
                PROJECTS
              </a>
            </li>
            <li className='nav-item'>
              <a className='nav-link' href='#contact'>
                CONTACT ME
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
