import React, { useState } from "react";
import { Navbar, NavbarToggler, NavbarBrand } from "reactstrap";

const AppNavbare = (props) => {
  const [collapsed, setCollapsed] = useState(true);

  const toggleNavbar = () => setCollapsed(!collapsed);

  return (
    <div>
      <Navbar color="light" light expand="md">
        <NavbarBrand href="/" className="mr-auto">
          Shopping
        </NavbarBrand>
        <NavbarToggler onClick={toggleNavbar} className="mr-2" />
      </Navbar>
    </div>
  );
};
export default AppNavbare;
