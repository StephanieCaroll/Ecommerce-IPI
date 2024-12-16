import Footer from '../components/Footer';
import Header from '../components/Header';
import ProductList from '../components/ProductList';


export default function Home() {
  return (
    <div>
      <Header />
      <main style={styles.main}>
        <ProductList />
      </main>
      <Footer />
    </div>
  );
}

const styles = {
  main: {
    padding: '20px',
    maxWidth: '1200px',
    margin: '0 auto',
  },
};
