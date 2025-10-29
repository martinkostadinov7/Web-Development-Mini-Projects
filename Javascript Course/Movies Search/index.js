const apiKey = "6d31f6e5";

const title = document.getElementById("title");
const poster = document.getElementById("movie-poster");
const year = document.getElementById("year");
const runtime = document.getElementById("runtime");
const genres = document.getElementById("genres");
const rating = document.getElementById("rating");
const description = document.getElementById("description");
const director = document.getElementById("director");
const actors = document.getElementById("actors-list");

async function fetchMovie(){
    try {
        const movieName = document.getElementById("input").value;
        const response = await fetch(`http://www.omdbapi.com/?apikey=${apiKey}&t=${movieName}`);
    
        if (!response.ok) {
            throw new Error("Could not find movie!")
        }

        const movieData = await response.json();
        
        document.getElementById("movie-box").style.display = "flex";
        console.log(movieData);
        title.textContent = movieData.Title;
        year.textContent = movieData.Year;
        runtime.textContent = movieData.Runtime;
        genres.textContent = movieData.Genre;
        director.textContent = movieData.Director;
        actors.textContent = movieData.Actors;
        description.textContent = movieData.Plot;
        poster.src = movieData.Poster;
        rating.textContent = movieData.imdbRating;
        if (Number(rating.textContent) > 7.5) {
            rating.style.color = "rgba(51, 233, 51, 1)";
            console.log(rating.textContent + "green");
        }
        else if(Number(rating.textContent) < 4){
            rating.style.color = "rgba(231, 105, 105, 1)";
        }
        else{
            rating.style.color = "rgba(246, 241, 80, 1)";
        }
        
    } catch (error) {
        document.getElementById("errorMessage").textContent = error;
    }
}