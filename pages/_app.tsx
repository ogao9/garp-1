import '/styles/globals.css';
import { NextUIProvider } from "@nextui-org/react";
import { SessionProvider } from 'next-auth/react';
import { AppProps } from 'next/app';

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <NextUIProvider>
      <SessionProvider session={pageProps.session}>
        <Component {...pageProps} />
      </SessionProvider>
    </NextUIProvider>
  );
};

export default App;