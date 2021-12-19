import FooterSection from "./Footersection/FooterSection";
import HeaderSection from "./HeaderSection/HeaderSection";

function Layout({ children }) {
  return (
    <div>
      <HeaderSection />
      {children}
      <FooterSection />
    </div>
  );
}

export default Layout;
