import React from 'react';
import './link.scss';

const Link = ({onClick, title}) => {
  return (
    <p onClick={onClick} className="link">{title}</p>
  )
}

export default Link