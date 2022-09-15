import React from 'react';

function Footer(props) {
  return (
    <div>
      {' '}
      There {props.length >= 2 ? 'are' : 'is'} {props.length}{' '}
      {props.length >= 2 ? 'items' : 'item'}
    </div>
  );
}

export default Footer;
