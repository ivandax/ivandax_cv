import { Link, useLocation } from "react-router-dom";

function Links() {
  const location = useLocation();

  return (
    <div className="main_links white fancyBorder">
      <Link
        to="/"
        className={location.pathname === "/" ? "highlighted_link left" : ""}
      >
        Profile
      </Link>
      <Link
        to="/content"
        className={
          location.pathname === "/content" ? "highlighted_link right" : ""
        }
      >
        Content
      </Link>
    </div>
  );
}

export { Links };
