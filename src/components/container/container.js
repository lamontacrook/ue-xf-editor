import React from 'react';
import Title from '../title/title.js';
import Text from '../text/text.js';
import Image from '../image/image.js';

export const componentMapping = {
  Title,
  Text,
  Image,
};

const Container = ({ content }) => {
  const elements = content[':items'];
  const {REACT_APP_AEM_XF} = process.env;
  const elemProps = {
    itemID: `urn:aemconnection:${REACT_APP_AEM_XF}/jcr:content/root/container`,
    itemType: 'container',
    'data-editor-itemlabel': 'Container'
  };

  const toProperCase = (str) => {
    return str.replace(/\w\S*/g, ((txt) => {
      return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
    }));
  };

  return (
    <div {...elemProps} className='container'>
      {elements && (
        Object.keys(elements).map((elem) => {
          console.log(elem);
          const type = elements[elem][':type'].split('/').pop();
          const Component = componentMapping[toProperCase(type)];
          if(Component)
            return <Component key={elem} item={elem} content={elements[elem]} />;
          else
            return <p key={elem}>{elem}</p>
        }))
      }
    </div>
  );
}

export default Container;