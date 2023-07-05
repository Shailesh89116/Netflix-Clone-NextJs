import React from 'react'


interface NavbarItmeProps {
    label : String
}

const NavbarItem: React.FC<NavbarItmeProps> = ({label}) => {
  return (
    <div className='text-white cursor-pointer hover:text-gray-300 transition'>
      {label}
    </div>
  )
}

export default NavbarItem
