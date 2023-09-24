import React from 'react';

const Title = ({ item, content }) => {
  const {REACT_APP_AEM_XF} = process.env;
  const elemProps = {
    itemID: `urn:aemconnection:${REACT_APP_AEM_XF}/jcr:content/root/container/${item}`,
    itemType: 'text',
    'data-editor-itemlabel': 'Title',
    itemProp: item
  };
  const Tag = content?.type;
  
  return (
    <Tag {...elemProps}>{content.text}</Tag>
  );
}

export default Title;