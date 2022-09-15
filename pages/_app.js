import "../styles/globals.css";
import Navbar from "../components/Navbar";
import { ThemeProvider } from "next-themes";

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider enableSystem={true} attribute="class">
      <Navbar>
        <Component {...pageProps} />
      </Navbar>
    </ThemeProvider>
  );
}

export default MyApp;
