"use client"
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useState } from 'react'
import PropTypes from 'prop-types';

const NavLink = ({ link }) => {
  const pathName = usePathname();
  console.log(pathName);
  const [hover, setHover] = useState(false);

  return (
    <Link
      className="relative inline-block text-black hover:text-gray-500 transition-colors duration-300"
      href={link.url}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      {link.title}
      <span
        style={{
          position: 'absolute',
          left: 0,
          bottom: '-2px',
          width: '100%',
          height: '2px',
          backgroundColor: 'black',
          transform: hover ? 'scaleX(1)' : 'scaleX(0)',
          transformOrigin: 'left',
          transition: 'transform 0.3s ease',
        }}
      ></span>
    </Link>
  );
};

NavLink.propTypes = {
  link: PropTypes.shape({
    url: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
  }).isRequired,
};

export default NavLink;