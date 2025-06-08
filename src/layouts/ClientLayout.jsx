import { Outlet } from "react-router-dom";
import Navbar from "../components/navbar/Navbar";
import Footer from "../components/footer/Footer";

const ClientLayout = () => {
  return (
    <div className='w-full h-full relative'>
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  );
};

export default ClientLayout;
