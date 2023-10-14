import '/styles/globals.css';
import { NextUIProvider } from "@nextui-org/react";
import { SessionProvider } from 'next-auth/react';

const App = ({ Component, pageProps }) => {
  return (
    <NextUIProvider>
      <SessionProvider session={pageProps.session}>
        <Component {...pageProps} />
      </SessionProvider>
    </NextUIProvider>
  );
};

export default App;