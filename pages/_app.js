// import '@/styles/globals.css'

// export default function App({ Component, pageProps }) {
//   return (
//     <Component {...pageProps} />
//   );
// }
import Preloader from '../components/Preloader';
import { useState, useEffect } from 'react';
import '@/styles/globals.css';

function MyApp({ Component, pageProps }) {
  const [showPreloader, setShowPreloader] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setShowPreloader(false);
    }, 5000);
  }, []);

  return (
    <>
      {!showPreloader ? (
        <>
          <Component {...pageProps} />
        </>
      ) : (
        <Preloader  {...pageProps}/>
      )}
    </>
  );
}

export default MyApp;
