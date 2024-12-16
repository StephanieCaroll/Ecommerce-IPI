// pages/_app.js
import 'bootstrap/dist/css/bootstrap.min.css'; // Importando o CSS do Bootstrap
import '../styles/globals.css';
function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />;
}
export default MyApp;