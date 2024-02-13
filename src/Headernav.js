

import React from 'react';

const Headernav = () => {
  return (
    <div>
      <h1>Name: John Doe</h1>
      <p>Age: 30</p>
      <p>City: New York</p>
    </div>
  );
};


const Navigationmenu = () => {
  return <Headernav />;
};
export default Navigationmenu;