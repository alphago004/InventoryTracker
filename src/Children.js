import React from 'react';

const MyComponent = (props) => {
    let childCount = 0;
    React.Children.forEach(props.children, (child) => {
      if (React.isValidElement(child)) {
        childCount++;
      }
    });
    console.log(childCount);
    return <div>{props.children}</div>;
  };
  

export default MyComponent;
