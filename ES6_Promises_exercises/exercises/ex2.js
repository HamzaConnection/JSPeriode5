//assignment 1 
const fetch = require("node-fetch");

function getPlanetforFirstSpeciesInFirstMovieForPerson(id, callback) {
    let movieinfo = {}
    fetch("https://swapi.co/api/people/" + id + "/")
        .then((res) => res.json())
        .then(data => {
            movieinfo["Name"] = data.name;
            return data // return so the next .then gets the data
        })
        .then((data) => {
            let firstFilmURL = data.films.sort()[0]
            fetch(firstFilmURL)
                .then((res) => res.json())
                .then(data => {
                    movieinfo['First film'] = data.title;
                    return data
                })
                .then((data) => {
                    let firstSpeciesURL = data.species.sort()[0];
                    fetch(firstSpeciesURL)
                        .then((res) => res.json())
                        .then(data => {
                            movieinfo['First species'] = data.name;

                            return data;
                        }).then((data) => {
                            let homeworldForSpeciesURL = data.homeworld;
                            fetch(homeworldForSpeciesURL)
                                .then((res) => res.json())
                                .then(data => {
                                    movieinfo['Homeworld for species'] = data.name
                                    callback(movieinfo) // the way we pass the data around to our callback
                                    return data
                                })
                        })
                })
                .catch(err => {
                    console.log("Error: " + err.message)
                })
        })
}

module.exports = { getPlanetforFirstSpeciesInFirstMovieForPerson: getPlanetforFirstSpeciesInFirstMovieForPerson }


/*
Open a browser with this URL http://graphql.org/swapi-graphql and paste in the code below:

{
    person(id: "cGVvcGxlOjE="){
    name
    filmConnection(first:1) {
      films{
        title,
        speciesConnection(first:1){
          species{
            name,
            id,     
            homeworld{
              name
            }
          }
        }
      }
    }
  }
}

*/