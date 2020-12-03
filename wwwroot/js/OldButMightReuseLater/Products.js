const getData = async url => {
    const response = await fetch(url)
    return response.json()
}

window.addEventListener("DOMContentLoaded", async () => {
    const buildingsContainer = document.getElementById('buildingsContainer')
    const batteriesContainer = document.getElementById('batteriesContainer')
    const columnsContainer = document.getElementById('columnsContainer')
    const elevatorsContainer = document.getElementById('elevatorsContainer')


    const userBuildings = await getData(`${buildingApi}${urlEncodedEmail}`)
    const buildingHtmlString = userBuildings.map(b => `<div class="text-center"><img src='https://maps.googleapis.com/maps/api/streetview?size=300x200&location=${b.address.latitude},${b.address.longitude}&fov=80&heading=70&pitch=0&key=AIzaSyC9uJotp0jfTtkorLtdhUQfU97Ti3H_oJQ'><div class="form-check"><label for="buildings">${b.address.numberAndStreet}, ${b.address.city}</label><input class="buildingInput form-control" name="buildings" type="radio" value="${b.buildingId}"/></div></div>`).join('')
    buildingsContainer.innerHTML = `<h3 class="text-center m-2">Select Your Building</h3><div class="gridContainer text-center">${buildingHtmlString}</div>`

    document.querySelectorAll('.buildingInput').forEach(e => {
        e.addEventListener('click', async e => {
            const batteryData = await getData(`${batteryApi}${e.target.value}`)
            const batteryHtmlString = batteryData.map(b => `<div class="m-1 p-2 card" id="${b.id}"><h6>ID: ${b.id}</h6> <h6>Status: ${b.batteryStatus}</h6><input name="battery" class="form-control batteryInput" type="radio" value="${b.id}"/></div>`).join('')
            columnsContainer.innerHTML = ''
            batteriesContainer.innerHTML = ''
            batteriesContainer.innerHTML = `<h3 class="text-center m-2">Battery Selection</h3><div class="gridContainer text-center">${batteryHtmlString}</div>`

            document.querySelectorAll('.batteryInput').forEach(e => {
                e.addEventListener('click', async e => {
                    const columnData = await getData(`${columnApi}${e.target.value}`)
                    const columnHtmlString = columnData.map(c => `<div class="p-1 card d-flex justify-content-center"><h6>ID: ${c.id}</h6> <h6>Status: ${c.columnStatus}</h6><input name="column" class="form-control columnInput" type="radio" value="${c.id}"/></div>`).join('')
                    columnsContainer.innerHTML = ''
                    columnsContainer.innerHTML = `<h3 class="text-center m-2">Column Selection</h3><div class="gridContainer text-center">${columnHtmlString}</div>`

                    document.querySelectorAll('.columnInput').forEach(e => {
                        e.addEventListener('click', async e => {
                            const elevatorData = await getData(`${elevatorApi}${e.target.value}`)
                            const elevatorHtmlString = elevatorData.map(e => `<div class="p-1 card d-flex justify-content-center"><h6>ID: ${e.id}</h6> <h6>Status: ${e.elevatorStatus}</h6><input name="elevator" class="form-control elevatorInput" type="radio" value="${e.id}"/></div>`).join('')
                            elevatorsContainer.innerHTML = ''
                            elevatorsContainer.innerHTML = `<h3 class="text-center m-2">Elevator Selection</h3><div class="gridContainer text-center">${elevatorHtmlString}</div>`
                        })
                    })
                })
            })
        })
    })
})