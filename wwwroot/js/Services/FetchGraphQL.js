//see Constants.js for URLs
const fetchGraphQl = async () => {
    const response = await fetch(graphQlApi, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json',
        },
        body: JSON.stringify({
            query: servicesQuery
        })
    })
    return response.json()
}
