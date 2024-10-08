import { Link, Outlet, useLoaderData, useNavigate } from "react-router-dom";
import user from "../activity/user";
import Sidebar from "../components/Sidebar";

export async function loader() {
  // get the currently logged in user
  const user = await user.getCurrentUser();

  // return the user data
  return { user };
}

const DashboardNav = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    // perform user logout
    user
      .logout()
      .then((response) => {
        alert(response.data.message);

        // redirect to login page
        setTimeout(() => {
          navigate("/login");
        }, 500);
      })
      .catch((error) => {
        alert(error.response.data.message);
      });
  };

  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col">
          <nav className="navbar navbar-expand-lg bg-body-tertiary">
            <Link className="navbar-brand" to="/">
              JustFit
            </Link>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <a className="nav-link disabled" aria-disabled="true">
                    {user?.data?.user?.name}
                  </a>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" onClick={handleLogout}>
                    Logout
                  </Link>
                </li>
              </ul>
            </div>
          </nav>
        </div>
      </div>

      <div className="row mt-5">
        <div className="col-md-3">
          <Sidebar />
        </div>
        <div className="col">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default DashboardNav;
