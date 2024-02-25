import { Link } from "react-router-dom";
import "./customLink.scss";

function CustomLink({ children, to, className }) {
   return (
      <Link className={className} to={to}>{children}</Link>
   );
}

export default CustomLink;
