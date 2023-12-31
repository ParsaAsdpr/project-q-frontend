import { useTitle } from "@/utils/Hooks/useTitle";
import Header from "@/Parts/Header";
import Footer from "@/Parts/Footer";
import { motion } from "framer-motion";
import { UserContextProvider } from "./utils/Contexts/UserContext";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

interface Props {
  children: React.ReactNode;
  title: string;
  className?: string;
}



const Layout = ({ children, title, className }: Props) => {
  useTitle(title);

  return (
    <UserContextProvider>
      <ToastContainer />
      <motion.div
        dir="rtl"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        variants={{
          visible: { opacity: 1, scale: 1 },
          hidden: { opacity: 0, scale: 0.98 },
        }}
      >
        <Header />
        <div
          className={`mx-auto pt-3 min-h-screen ${
            className ? className : "max-w-7xl"
          }`}
        >
          {children}
        </div>
        <Footer />
      </motion.div>
    </UserContextProvider>
  );
};

export default Layout;
