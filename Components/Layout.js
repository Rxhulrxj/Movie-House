import HeaderSection from "./HeaderSection/HeaderSection";

function Layout({ children }) {
  return (
    <div>
      <HeaderSection />
      {children}
    </div>
  );
}

export default Layout;
