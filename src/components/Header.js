import Button from "./Button";
import { useLocation } from "react-router";

const Header = ({ title, toggle }) => {
  const location = useLocation();
  return (
    <header className="header">
      <h1>{title}</h1>
      {location.pathname === "/" && (
        <Button color={"pink"} text="Add" onClick={toggle} />
      )}
    </header>
  );
};

Header.defaultProps = {
  title: "To Do List",
};

export default Header;
