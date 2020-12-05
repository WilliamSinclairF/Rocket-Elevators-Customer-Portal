//see Constants.js for URLs
const addressUpdateMessage = document.getElementById('addressUpdateMessage')

async function putAddressUpdateForm() {
    const selectedBuildingId = parseInt(document.getElementById('buildingIdInput').value)
    data = {
        Id: selectedBuildingId,
        NumberAndStreet: document.getElementById('NumberAndStreet').value || null,
        City: document.getElementById('City').value || null,
        State: document.getElementById('State').value || null
    }
    try {
        const response = await fetch(`${updateBuildingAddressApi}${selectedBuildingId}`, {
            method: 'PUT',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        })
        addressUpdateMessage.textContent = "Loading... Please wait"
        if (response.ok) {
            addressUpdateMessage.textContent = "Address updated successfully!"
            setTimeout(() => { window.location.reload(false); }, 1000);
            return response.json()
        }
        else {
            addressUpdateMessage.textContent = "An error occured. Please refresh the page and try again.\nIf the issue persists, please contact us at (418) 580-7055"
        }
    }
    catch (err) {
        throw new Error("An error occured. Please refresh the page and try again.\nIf the issue persists, please contact us at (418) 580-7055")
        addressUpdateMessage.textContent = "An error occured. Please refresh the page and try again.\nIf the issue persists, please contact us at (418) 580-7055"
    }
}

document.getElementById('saveBuildingUpdate').addEventListener('click', async () => {
    await putAddressUpdateForm()
})