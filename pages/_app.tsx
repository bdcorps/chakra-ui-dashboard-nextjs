import "../styles/globals.css";

import { ChakraProvider, extendTheme } from "@chakra-ui/react";

function MyApp({ Component, pageProps }: any) {
  const theme = extendTheme({
    components: {
      Button: {
        defaultProps: {
          size: "sm",
          colorScheme: "brand",
        },
      },
    },
    colors: {
      brand: {
        50: "#f0e4ff",
        100: "#cbb2ff",
        200: "#a480ff",
        300: "#7a4dff",
        400: "#641bfe",
        500: "#5a01e5",
        600: "#5200b3",
        700: "#430081",
        800: "#2d004f",
        900: "#14001f",
      },
    },
    // fonts: {
    //   heading: `'Inter', sans-serif`,
    //   body: `'Inter', sans-serif`,
    // },
  });

  return (
    <ChakraProvider theme={theme}>
      <Component {...pageProps} />
    </ChakraProvider>
  );
}

export default MyApp;
