import { useTitle } from "@/utils/Hooks/useTitle";
import Header from "@/Parts/Header";
import Footer from "@/Parts/Footer";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { jwtDecode } from "jwt-decode";
import { UserContext } from "./utils/Contexts/UserContext";

interface Props {
  children: React.ReactNode;
  title: string;
  className?: string;
}

const Layout = ({ children, title, className }: Props) => {
  const [user, setUser] = useState({});
  useTitle(title);

  useEffect(() => {
    try {
      const jwt = localStorage.getItem("token");
      const decoded = jwt ? jwtDecode(jwt) : ""; // Set user to an empty object if jwt is null or undefined

      setUser(decoded);
    } catch (e) {
      console.log(e);
    }
  }, []);

  return (
    <UserContext.Provider value={user}>
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
          className={`mx-auto pt-3 h-screen ${
            className ? className : "max-w-7xl"
          }`}
        >
          {children}
        </div>
        <Footer />
      </motion.div>
    </UserContext.Provider>
  );
};

export default Layout;
