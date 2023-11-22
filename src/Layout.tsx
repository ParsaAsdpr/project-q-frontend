import { useTitle } from "@/utils/Hooks/useTitle";
import Header from "@/Parts/Header";
import Footer from "@/Parts/Footer";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { UserContextProvider } from "./utils/Contexts/UserContext";
import authApi from "./utils/Services/auth.api";
import { UserTypes } from "./types/UserTypes";

interface Props {
  children: React.ReactNode;
  title: string;
  className?: string;
}



const Layout = ({ children, title, className }: Props) => {
  const [user, setUser] = useState<UserTypes>({
    id: "",
    name: "",
    username: "",
    email: "",
    isAdmin: false,
  });
  useTitle(title);

useEffect(() => {
  const decodedToken = authApi.getCurrentUser();
  console.log(decodedToken); // Add this line
  setUser(decodedToken);
}, []);

  return (
    <UserContextProvider value={user}>
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
    </UserContextProvider>
  );
};

export default Layout;
