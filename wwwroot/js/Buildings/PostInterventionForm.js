//see Constants.js for URLs

let BatteryId = null
let ColumnId = null
let ElevatorId = null
const interventionMessage = document.getElementById('interventionMessage')

async function postInterventionForm() {
    data = {
        CustomerEmail: userEmail,
        BuildingId: parseInt(document.getElementById('buildingIdInput').value),
        BatteryId: BatteryId,
        ColumnId: ColumnId,
        ElevatorId: ElevatorId,
        Report: document.getElementById('reportInput').value || null
    }
    try {
        const response = await fetch(createInterventionApi, {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        })
        interventionMessage.textContent = "Loading... Please wait"
        if (response.ok) {
            interventionMessage.textContent = "Your intervention request has been submitted successfully. A Rocket Elevators representative will be contacting you shortly."
            return response.json()
        }
        else {
            interventionMessage.textContent = "An error occured. Please refresh the page and try again.\nIf the issue persists, please contact us at (418) 580-7055"
        }
    }
    catch (err) {
        throw new Error("An error occured. Please refresh the page and try again.\nIf the issue persists, please contact us at (418) 580-7055")
        interventionMessage.textContent = "An error occured. Please refresh the page and try again.\nIf the issue persists, please contact us at (418) 580-7055"
    }
}

document.getElementById('submit').addEventListener('click', () => {
    postInterventionForm()
    interventionForm.reset()
    buildingSelectionIndicator.textContent = 'None'
    batterySelectionIndicator.textContent = 'None'
    columnSelectionIndicator.textContent = 'None'
    elevatorSelectionIndicator.textContent = 'None'
    document.getElementById('floatingMenu').classList.add('hidden')
    document.getElementById('batteriesContainer').innerHTML = ''
    document.getElementById('columnsContainer').innerHTML = ''
    document.getElementById('elevatorsContainer').innerHTML = ''
})