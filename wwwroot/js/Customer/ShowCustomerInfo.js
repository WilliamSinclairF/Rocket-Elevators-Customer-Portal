window.addEventListener("DOMContentLoaded", async () => {
    const graphQlResponse = await fetchGraphQl(customerInfoQuery)
    document.getElementById('loading').classList.add('hidden')
    document.getElementById('customerInfo').classList.remove('hidden')

    const customerData = Object.entries(graphQlResponse.data.customer)
    const userData = Object.entries(graphQlResponse.data.customer.user)
    console.log(userData)

    for (let i = 0; i < userData.length; i++) {
            let htmlElementId = userData[i][0]
            let htmlElementText = userData[i][1]
        document.getElementById(`${htmlElementId}`).textContent = `${htmlElementText}`
        document.getElementById(`${htmlElementId}Input`).placeholder = `${htmlElementText}`

    }

    for (let i = 0; i < customerData.length; i++) {
        if (i > 0) {
            let htmlElementId = customerData[i][0]
            let htmlElementText = customerData[i][1]
            document.getElementById(`${htmlElementId}`).textContent = `${htmlElementText}`
            document.getElementById(`${htmlElementId}Input`).placeholder = `${htmlElementText}`
        }
    }

})