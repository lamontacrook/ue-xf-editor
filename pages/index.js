
import { Helmet, HelmetProvider } from 'react-helmet-async';
import { useState, useEffect } from 'react';
import ModelManager from '../src/utils/modelmanager';

function App() {
  const [container, setContainer] = useState({});
  const [title, setTitle] = useState('no title');
  console.log(process.env.NEXT_PUBLIC_AEM_URL);
  const { NEXT_PUBLIC_AEM_URL } = process.env;
  const { NEXT_PUBLIC_AEM_XF } = process.env;

  useEffect(() => {
    fetch(`${NEXT_PUBLIC_AEM_URL}${NEXT_PUBLIC_AEM_XF}.model.json`,
      { credentials: 'include' })
      .then((data) => {
        if (data) {
          data.json().then((json) => {
            setTitle(json?.title);
            setContainer(json[':items'].root);
          });
        }
      })
  }, [NEXT_PUBLIC_AEM_URL, NEXT_PUBLIC_AEM_XF]);

  // const json = await fetch(`${NEXT_PUBLIC_AEM_URL}${NEXT_PUBLIC_AEM_XF}.model.json`, { credentials: 'include' });
  console.log(container);
  return (
    <HelmetProvider>
      <div className='App'>
        <Helmet>
          <meta name='urn:adobe:aem:editor:aemconnection' content={`aem:${NEXT_PUBLIC_AEM_URL}`} />
          <title>{title}</title>
        </Helmet>
        <ModelManager json={container} />
      </div>
    </HelmetProvider>
  );
}

export default App;