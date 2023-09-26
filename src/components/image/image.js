import React from 'react';

const Image = ({ content }) => {
  const {NEXT_PUBLIC_AEM_URL} = process.env;
  const srcSet = content.srcset.split(',').map((item) => {
    return `${NEXT_PUBLIC_AEM_URL}${item}`
  })
  return (
    <img src={`${NEXT_PUBLIC_AEM_URL}${content.src}`} srcSet={srcSet.join(',')} alt={content.alt} />
  );
}

export default Image;