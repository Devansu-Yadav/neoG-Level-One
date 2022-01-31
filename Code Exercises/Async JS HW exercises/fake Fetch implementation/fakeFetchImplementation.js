function fakeFetchThatSearchesStackOverflow(searchMsg, shouldReject) {
    return new Promise((resolve, reject) => {
        const stackOverflowAPIEndpoint = "https://api.stackexchange.com/2.3/search/advanced?order=desc&sort=relevance&q=";
        setTimeout(() => {
            if(shouldReject) {
                statusCode = 404;
                reject({msg: "Error: The term you searched was not found :(", statusCode: 404});
            }

            fetch(`${stackOverflowAPIEndpoint}${searchMsg}&site=stackoverflow`)
            .then(apiData => apiData.json())
            .then(data => {
                resolve({res: data, statusCode: 200});
            })
            .catch(err => reject({msg: err, statusCode: 404}));
        }, 2000);
    })
}

fakeFetchThatSearchesStackOverflow("how to center a div", true)
.then(data => {
    console.log(data.res);
    console.log(`Status Code: ${data.statusCode}`);
})
.catch(err => console.log(`${err.msg} \n ${err.statusCode}`));

fakeFetchThatSearchesStackOverflow("how to center a div")
.then(data => {
    console.log(data.res);
    console.log(`Status Code: ${data.statusCode}`);
})
.catch(err => console.log(`${err.msg} \n ${err.statusCode}`));