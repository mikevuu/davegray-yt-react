import React from 'react';

function Content() {
  const handleClick = () => {
    console.log('You clikced it');
  };

  return (
    <div>
      Content
      <button onClick={handleClick}> Click it </button>
    </div>
  );
}

export default Content;
