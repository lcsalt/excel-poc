import { Outlet } from 'react-router-dom';
import styles from './Layout.module.css';
import { Navbar } from '../../components/application/Navbar';
import { Footer } from '../../components/application/Footer';
export default function Layout() {
  return (
    <div className={styles.container}>
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  );
}
