const url = 'http://127.0.0.1:3011';
const objects = (url) => {
    fetch(url)
        .then((response) => {
            return response.json();
        })
        .then((value) => {
            console.log(value);
        })
}


// export {
//     objects
// }