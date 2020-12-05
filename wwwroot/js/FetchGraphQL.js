//see Constants.js for URLs
const fetchGraphQl = async (queryString) => {
    let query = JSON.stringify({
        query: queryString
    })
    console.log(query)
    const response = await fetch(graphQlApi, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json',
        },
        body: JSON.stringify({
            query: queryString
        })
    })
    return response.json()
}
