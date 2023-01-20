import { Outlet } from "react-router-dom";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Banner from '../components/Banner'

const Layout = () => {
  return (
    <>
      <Header />
      <Banner/>
      <Outlet />
      <Footer />
    </>
  );
};

export default Layout;
