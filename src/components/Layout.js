import Header from "./Header";
import { Message } from "../components";
const Layout = ({ children }) => {
  return (
    <>
      <Message />
      <Header />
      {children}
    </>
  );
};

export default Layout;
