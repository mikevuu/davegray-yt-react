import React from 'react';

function Footer() {
  const today = new Date();
  return <div>Copyright @{today.getFullYear()}</div>;
}

export default Footer;
