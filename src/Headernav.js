import React from 'react';

const Headernav = () => {
    return (
        <>
            <div>
                <div>Exported component 1</div>
                <h1>Name: John Doe</h1>
                <p>Age: 40</p>
                <p>City: New York</p>
            </div>
        </>
    );
};

// Attach Headernav to the window object
window.Headernav = Headernav;

export default Headernav;