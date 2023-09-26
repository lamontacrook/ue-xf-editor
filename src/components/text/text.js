import React from 'react';

const Text = ({ item, content }) => {
  const {REACT_APP_AEM_XF} = process.env;
  const elemProps = {
    itemID: `urn:aemconnection:${REACT_APP_AEM_XF}/jcr:content/root/container/${item}`,
    itemType: 'richtext',
    'data-editor-itemlabel': 'Text',
    itemProp: item
  };
  return (
    <span {...elemProps} dangerouslySetInnerHTML={{__html: content.text}} />
  );
}

export default Text;