import { Link, useLocation } from "react-router-dom";

const Breadcrumbs = () => {
  const location = useLocation();

  const pathnames = location.pathname.split("/").filter((x) => x);

  return (
    <nav className="text-sm text-gray-500 my-4">
      <ul className="flex space-x-2">
        <li>
          <Link to="/" className="text-blue-600 hover:underline">Home</Link>
        </li>
        {pathnames.map((value, index) => {
          const routeTo = "/" + pathnames.slice(0, index + 1).join("/");
          const isLast = index === pathnames.length - 1;

          return (
            <li key={routeTo} className="flex items-center">
              <span className="mx-1">/</span>
              {isLast ? (
                <span>{decodeURIComponent(value)}</span>
              ) : (
                <Link to={routeTo} className="text-blue-600 hover:underline">
                  {decodeURIComponent(value)}
                </Link>
              )}
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default Breadcrumbs; 