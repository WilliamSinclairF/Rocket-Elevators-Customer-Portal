//see Constants.js for URLs

window.addEventListener("DOMContentLoaded", async () => {
    const buildingsContainer = document.getElementById('buildingsContainer')
    const batteriesContainer = document.getElementById('batteriesContainer')
    const columnsContainer = document.getElementById('columnsContainer')
    const elevatorsContainer = document.getElementById('elevatorsContainer')

    const graphQlResponse = await fetchGraphQl()
    const servicesData = graphQlResponse.data.buildings

    const buildingsHtmlString = servicesData.map(e => {
        let columnCount = e.batteries.map(b => b.columns.length)
        let elevatorCount = e.batteries.map(b => { let count = 0; b.columns.map(e => count += e.elevators.length); return count })
        let buildingInfoHtml = `<div class="card text-center buildingInfoCard"><a id=${e.id} class="stretched-link buildingHover"><div class="m-1"><img src='https://maps.googleapis.com/maps/api/streetview?size=300x200&location=${e.address.latitude},${e.address.longitude}&fov=80&heading=70&pitch=0&key=${mapsKey}'></div><h6 class="m-1">${e.address.fullAddress}</h6><ul class="list-group"><li class="list-group-item">Building ID: ${e.id}</li><li class="list-group-item">Number of batteries: ${e.batteries.length}</li><li class="list-group-item">Number of columns: ${columnCount}</li><li class="list-group-item">Number of elevators: ${elevatorCount}</li></ul></a></div>`
        return buildingInfoHtml
    }).join('')
    buildingsContainer.innerHTML = buildingsHtmlString

    document.querySelectorAll('a').forEach(e => e.addEventListener('click', e => {
        e.stopPropagation()

        const selectedBuilding = servicesData.find(b => b.id == e.target.id)

        const buildingSelectionIndicator = document.getElementById('buildingSelectionIndicator')
        buildingSelectionIndicator.textContent = selectedBuilding.address.fullAddress

        document.getElementById('buildingIdInput').value = e.target.id

        const batteryHtmlString = selectedBuilding.batteries.map(b => `<div class="card text-center p-2" id="${b.id}"><h6>ID: ${b.id}</h6> <h6>Status: ${b.batteryStatus}</h6><h6>Date of commissioning: ${b.dateOfCommissioning}</h6><h6>Certificate of operations: ${b.certificateOfOperations}</h6><input name="BatteryId" class="form-control form-control-sm batteryIdInput" type="radio" value="${b.id}" data-toggle="tooltip" title="Add to intervention request"/></div>`).join('')
        batteriesContainer.innerHTML = `<div class="gridContainer"><div><h3 class="text-center">Services at ${selectedBuilding.address.fullAddress}</h3> <br/> <h4 class="text-center productHeading">Batteries</h4>${batteryHtmlString}</div></div>`

        const columnHtmlString = selectedBuilding.batteries.map(b => {
            let string = b.columns.map(c => `<div class="card text-center p-2" id="${c.id}"><h6>ID: ${c.id}</h6> <h6>Status: ${c.columnStatus}</h6><h6>Assigned Floors: ${c.numberOfFloorsServed}</h6><input name="ColumnId" class="form-control form-control-sm columnIdInput" type="radio" value="${c.id}" data-toggle="tooltip" title="Add to intervention request"/></div>`).join(''); return string
        })
        columnsContainer.innerHTML = `<h4 class="text-center productHeading">Columns</h4><div class="gridContainer">${columnHtmlString}</div>`
        let elevatorHtmlString = ''

        selectedBuilding.batteries.map(b => b.columns.map(c => c.elevators.map(e => elevatorHtmlString += `<div id="${e.id}" class="card text-center p-2"><h6>Serial number: ${e.serialNumber}</h6><h6>ID: ${e.id}</h6> <h6>Status: ${e.elevatorStatus}</h6><input name="ElevatorId" class="form-control form-control-sm elevatorIdInput" type="radio" value="${e.id}" data-toggle="tooltip" title="Add to intervention request"/></div>`)
        ))
        elevatorsContainer.innerHTML = `<h4 class="text-center productHeading">Elevators</h4><div class="elevatorGridContainer">${elevatorHtmlString}</div>`

        const batteryIdInputs = document.querySelectorAll('.batteryIdInput')
        const columnIdInputs = document.querySelectorAll('.columnIdInput')
        const elevatorIdInputs = document.querySelectorAll('.elevatorIdInput')
        //variables for menu that pops up after a product is selected
        const floatingMenu = document.getElementById('floatingMenu')
        const batterySelectionIndicator = document.getElementById('batterySelectionIndicator')
        const columnSelectionIndicator = document.getElementById('columnSelectionIndicator')
        const elevatorSelectionIndicator = document.getElementById('elevatorSelectionIndicator')

        batteryIdInputs.forEach(b => {
            b.addEventListener('click', (e) => {
                BatteryId = parseInt(e.target.value)
                floatingMenu.classList.remove('hidden')
                batterySelectionIndicator.textContent = e.target.value
            })
        })

        columnIdInputs.forEach(c => {
            c.addEventListener('click', (e) => {
                ColumnId = parseInt(e.target.value)
                floatingMenu.classList.remove('hidden')
                columnSelectionIndicator.textContent = e.target.value
            })

        })

        elevatorIdInputs.forEach(e => {
            e.addEventListener('click', (e) => {
                ElevatorId = parseInt(e.target.value)
                floatingMenu.classList.remove('hidden')
                elevatorSelectionIndicator.textContent = e.target.value
            })
        })
    }))
})