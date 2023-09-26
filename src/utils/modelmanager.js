import React from 'react';
import Container from '../components/container/container.js';

export const componentMapping = {
  Container
};

const toProperCase = (str) => {
  return str.replace(/\w\S*/g, ((txt) => {
    return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
  }));
};

const ModelManager = ({ json }) => {
  function container(item) {
    if(item.hasOwnProperty(':items')) {
      return container(item[':items']);
    } else {
      return item;
    }
  }

  const entry = container(json);
 
  return Object.keys(entry).map((e) => {
    const Component = componentMapping[toProperCase(e)];
    return <Component key={e} content={entry[e]} />;
  });
};

export default ModelManager;