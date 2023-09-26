import React from 'react';

const Image = ({ content }) => {
  const {REACT_APP_AEM_URL} = process.env;
  const srcSet = content.srcset.split(',').map((item) => {
    return `${REACT_APP_AEM_URL}${item}`
  })
  return (
    <img src={`${REACT_APP_AEM_URL}${content.src}`} srcSet={srcSet.join(',')} alt={content.alt} />
  );
}

export default Image;