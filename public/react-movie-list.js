const { useState, useEffect } = React;

function MovieList() {
  // return (<h1>hej</h1>);
  const [movieList, setMovieList] = useState(window.movieList || {});

  useEffect(() => {
    function handleMovieDataChange() {
      console.log('movieListDataChange', window.movieList);
      setMovieList({ ...window.movieList, updatedAt: new Date() });
    }

    // Add event listener. This will be triggered after fetch etc...
    window.addEventListener('movieListDataChange', handleMovieDataChange);

    // Cleanup event listener on component unmount
    return () => {
      window.removeEventListener('movieListDataChange', handleMovieDataChange);
    };
  }, []);

  if (!movieList.newReleases) {
    return <p>Loading...</p>;
  }

  return (
    <article className="movie-grids">
      <div className="movie-grid-wrap">
        <h2>In Theaters 🍿</h2>
        <section className="movie-grid">
          {movieList.newReleases.map((movie, index) => (
            <div key={index} className="popularMovie media">
              <div className="media-left">
                {/* <img className="media-object" src={movie.ImgSrc}"> */}
                <span className="number">{movie.Score}</span>
              </div>
              <div className="media-body">
                <a className="title-link" onClick={() => window.searchClick(movie)}>
                  <span className="media-heading">{movie.Title}</span>
                </a>
              </div>
            </div>
          ))}
        </section>
      </div>

      <div className="movie-grid-wrap">
        <h2>Streaming 📺</h2>

        <section className="movie-grid movie-grid--netflix">
          {
            movieList.moviesOnStreamingServices?.map((movie, index) => {
              return (
                <div key={index} className="popularMovie media">
                  <div className="media-left">
                    {/* <img className="media-object" src={movie.ImgSrc}"> */}
                    <span className="number">{movie.Score}</span>
                  </div>
                  <div className="media-body">
                    <a className="title-link" onClick={() => window.searchClick(movie)}>
                      <span className="media-heading">{movie.Title}</span>
                    </a>
                  </div>
                </div>
              )
            })
          }
        </section>



      </div>
    </article>
  );
}

const root = ReactDOM.createRoot(document.getElementById('react-inject-movie-list'));
root.render(<MovieList />);