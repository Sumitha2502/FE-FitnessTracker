import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import user from "../activity/user"; 

const Register = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [location, setLocation] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const navigate = useNavigate();

  const handleRegister = async (e) => {
    e.preventDefault();
    setError(""); // Clear any previous errors

    // Basic form validation to ensure all fields are filled
    if (!name || !email || !password || !location) {
      setError("Please fill in all fields.");
      return;
    }

    setLoading(true);

    try {
      // Perform the registration request using async/await
      const response = await user.register(name, email, password, location);

      alert(response.data.message); // Show success message

      // Clear the form fields
      setName("");
      setEmail("");
      setPassword("");
      setLocation("");

      // Redirect to the login page after a short delay
      setTimeout(() => {
        navigate("/login");
      }, 500);
    } catch (error) {
      // Display error message from server response or a generic one
      setError(error.response?.data?.message || "Registration failed");
    } finally {
      setLoading(false); // Stop the loading state
    }
  };

  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-md-6 offset-md-3">
          <div className="card">
            <div className="card-header text-success">Register</div>
            <div className="card-body">
                {/* Display error message if any   */}
              {error && <div className="alert alert-danger">{error}</div>}
              <form onSubmit={handleRegister}>
                <div className="mb-3">
                  <label htmlFor="name" className="form-label">
                    Name
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="email" className="form-label">
                    Email
                  </label>
                  <input
                    type="email"
                    className="form-control"
                    id="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="password" className="form-label">
                    Password
                  </label>
                  <input
                    type="password"
                    className="form-control"
                    id="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="location" className="form-label">
                    Location
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="location"
                    value={location}
                    onChange={(e) => setLocation(e.target.value)}
                    required
                  />
                </div>
                <button
                  type="submit"
                  className="btn btn-primary"
                  disabled={loading}
                >
                  {loading ? "Registering..." : "Register"}
                </button>
              </form>
              <br />
              <p>
                Already have an account? <Link to="/login">Login</Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;


















// import { useState } from "react";
// import { Link, useNavigate } from "react-router-dom";
// import user from "../activity/user";
// // import { showToast, ToastManager } from "./ToastManager";

// const Register = () => {
//   const [name, setName] = useState("");
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [location, setLocation] = useState("");

//   const navigate = useNavigate();

//   const handleRegister = (e) => {
//     e.preventDefault();

//     // showToast("test", "success");

//     // perform user registration
//     user
//       .register(name, email, password, location)
//       .then((response) => {
//         alert(response.data.message);

//         // clear the form
//         setName("");
//         setEmail("");
//         setPassword("");
//         setLocation("");

//         // redirect to login page
//         setTimeout(() => {
//           navigate("/login");
//         }, 500);
//       })
//       .catch((error) => {
//         alert(error.response.data.message);
//       });
//   };

//   return (
//     <div className="container mt-5">
//       <div className="row">
//         <div className="col-md-6 offset-md-3">
//           <div className="card ">
//             <div className="card-header text-success">Register</div>
//             <div className="card-body ">
//               <form onSubmit={handleRegister}>
//                 <div className="mb-3">
//                   <label htmlFor="name" className="form-label">
//                     Name
//                   </label>
//                   <input
//                     type="text"
//                     className="form-control"
//                     id="name"
//                     value={name}
//                     onChange={(e) => setName(e.target.value)}
//                   />
//                 </div>
//                 <div className="mb-3">
//                   <label htmlFor="email" className="form-label">
//                     Email
//                   </label>
//                   <input
//                     type="email"
//                     className="form-control"
//                     id="email"
//                     value={email}
//                     onChange={(e) => setEmail(e.target.value)}
//                   />
//                 </div>
//                 <div className="mb-3">
//                   <label htmlFor="password" className="form-label">
//                     Password
//                   </label>
//                   <input
//                     type="password"
//                     className="form-control"
//                     id="password"
//                     value={password}
//                     onChange={(e) => setPassword(e.target.value)}
//                   />
//                 </div>
//                 <div className="mb-3">
//                   <label htmlFor="location" className="form-label">
//                     Location
//                   </label>
//                   <input
//                     type="text"
//                     className="form-control"
//                     id="location"
//                     value={location}
//                     onChange={(e) => setLocation(e.target.value)}
//                   />
//                 </div>
//                 <button type="submit" className="btn btn-primary">
//                   Register
//                 </button>
//               </form>
//               <br />
//               <p>
//                 Already have an account? <Link to="/login">Login</Link>
//               </p>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Register;
