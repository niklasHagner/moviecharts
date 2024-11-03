const { useState, useEffect } = React;

function MovieDetails() {
    const initialMovie = {
        "name": "",
        "img": "",
        "scores": [ ],
        "scoresAndCounts": [],
        "reviewArray": [],
    };
    const [movie, setMovie] = useState(initialMovie);

    useEffect(() => {
        function handleMovieDataChange() {
            setMovie({...window.movieData, updatedAt: new Date()});
        }

        // Add event listener. This will be triggered after fetch etc...
        window.addEventListener('movieDataChange', handleMovieDataChange);

        // Cleanup event listener on component unmount
        return () => {
            window.removeEventListener('movieDataChange', handleMovieDataChange);
        };
    }, []); // Empty array = run only once. Since we're setting up an event listener

    if (!movie) {
        return <p>Loading...</p>;
    }

    return (
        <article className="row movie">
            <div className="grid-50-50">
                <img src={movie.img} alt={movie.name} />
                <div className="focus-movie-details">
                    <h2>{movie.name}</h2>
                    <p className="small">{movie.description}</p>
                </div>
            </div>
            <div className="chart-wrap">
                <figure className="highcharts-figure">
                    <div id="highcharts-container"></div>
                </figure>
            </div>

          <section>
            <h2>Reviews with highest and lowest rating</h2>
            <div className="review-grid">
                {
                    movie.reviewArray?.map((review, index) => {
                        return (
                            <div key={index} className="review-card">
                                <h3 className="score">{review.score} %</h3>
                                <span>{review.text}</span>
                            </div>
                        );
                    })
                }
            </div>
          </section>
        </article>
    );
}

const root = ReactDOM.createRoot(document.getElementById('react-inject-movie'));
root.render(<MovieDetails />);