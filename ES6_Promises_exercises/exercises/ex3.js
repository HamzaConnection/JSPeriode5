// assignment 3 
const fetch = require("node-fetch");

const urls = [
    'https://jsonplaceholder.typicode.com/photos?albumId=1',
    'https://jsonplaceholder.typicode.com/photos?albumId=3',
    'https://jsonplaceholder.typicode.com/photos?albumId=5',
    'https://jsonplaceholder.typicode.com/photos?albumId=7',
    'https://jsonplaceholder.typicode.com/photos?albumId=9'
]

let getAlbumInfo = function (callback, wordCount) {
// get the album id and title with the given wordCount in their title
    let requests = urls.map(url => fetch(url)
        .then(data => data.json()))

    Promise.all(requests).then(results => {
        let flattenedData = [].concat.apply([], results); // to remove the outer array
        let threeWordsTitle = flattenedData.filter(data => data.title.split(" ").length == wordCount)
            .map(data => {
                return {
                    id : data.id,
                    title : data.title
                }
            })

        callback(threeWordsTitle)
    }).catch(err => {
        console.log("Error: " + err.message)
    })
}


module.exports = { getAlbumInfo: getAlbumInfo }
