import "../styles/globals.scss";
import Bg from "../components/bg";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <div className="background">
        <Bg></Bg>
      </div>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
