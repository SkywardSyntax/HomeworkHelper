import '../global.css'
import { ThemeProvider, BaseStyles } from '@primer/react';

export default function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider>
      <BaseStyles>
        <Component {...pageProps} />
      </BaseStyles>
    </ThemeProvider>
  );
}
