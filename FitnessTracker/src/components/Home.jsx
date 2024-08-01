const Home = () => {
  return (
    <div>
      <div className="container mt-5">
        <div className="row">
          <div className="col-md-6 offset-md-3">
            <div className="card">
              <div className="card-header text-success">Home</div>
              <div className="card-body">
                <p>JustFit-Workout</p>
                <p className="text-muted">
                  This is a simple fitness tracker application built with React
                  and NodeJS. It allows users to register, login, and view
                  listings. The application is built with React, NodeJS,
                  Express, and MongoDB.
                </p>
              </div>
              <img
                src="https://c4.wallpaperflare.com/wallpaper/194/183/787/back-female-workout-fitness-wallpaper-preview.jpg"
                alt="Girl in a jacket"
              ></img>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
