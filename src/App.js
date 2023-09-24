import './App.css';
import React, { useState, useEffect } from 'react';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import ModelManager from './utils/modelmanager';

const App = () => {
  const [container, setContainer] = useState({});
  const {REACT_APP_AEM_URL, REACT_APP_AEM_XF} = process.env;
  useEffect(() => {
    fetch(`${REACT_APP_AEM_URL}${REACT_APP_AEM_XF}.model.json`,
      { credentials: 'include' })
      .then((data) => {
        if (data) {
          data.json().then((json) => {
            setContainer(json[':items'].root);
          });
        }
      })
  }, [REACT_APP_AEM_URL, REACT_APP_AEM_XF]);

  return (
    <HelmetProvider>
      <div className='App'>
        <Helmet>
          <meta name='urn:adobe:aem:editor:aemconnection' content={`aem:${REACT_APP_AEM_URL}`} />
          <title>{container?.title}</title>
        </Helmet>
        <ModelManager json={container} />
      </div>
    </HelmetProvider>
  );
}

export default App;
