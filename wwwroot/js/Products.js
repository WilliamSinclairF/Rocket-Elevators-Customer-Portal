const buildingApiURI = `https://localhost:44370/api/buildings/find_by_email/`
const batteryApiURI = `https://localhost:44370/api/batteries/building_id/`
const googleMapsApiURL = `https://maps.googleapis.com/maps/api/streetview?size=400x400&location=47.5763831,-122.4211769&fov=80&heading=70&pitch=0&key=AIzaSyC9uJotp0jfTtkorLtdhUQfU97Ti3H_oJQ`
const uriEncodeEmail = encodeURIComponent(userEmail)

const getBuildings = async () => {
    const response = await fetch(`${buildingApiURI}${uriEncodeEmail}`)
    return response.json()
}

window.addEventListener("DOMContentLoaded", async () => {
    const getBatteries = async (id) => {
        const response = await fetch(`${batteryApiURI}${id}`)
        const data = await response.json()
        const batteryHtmlString = data.map(b => `<div class="text-center"><h3>Batteries</h3> <div class="m-1 p-2 card" id="${b.id}"><h6>ID: ${b.id}</h6> <h6>Status: ${b.batteryStatus}</h6></div></div>`).join('')
        return batteryHtmlString
    }

    const buildingsContainer = document.getElementById('buildings')
    const batteriesContainer = document.getElementById('batteries')
    const userBuildings = await getBuildings()
    const buildingHtmlString = userBuildings.map(b => `<div class="text-center m-2"><img src='https://maps.googleapis.com/maps/api/streetview?size=300x200&location=${b.address.latitude},${b.address.longitude}&fov=80&heading=70&pitch=0&key=AIzaSyC9uJotp0jfTtkorLtdhUQfU97Ti3H_oJQ'><button class="buildingInputs m-3 btn btn-primary" type="button" value="${b.buildingId}">${b.address.numberAndStreet}, ${b.address.city}</button></div>`).join('')
    buildingsContainer.innerHTML = buildingHtmlString
    document.querySelectorAll('.buildingInputs').forEach(e => {
        e.addEventListener('click', async e => {
            batteriesContainer.innerHTML = ''
            batteriesContainer.innerHTML = await getBatteries(e.target.value)
        })
    }) 
 })


