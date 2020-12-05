// API URLs and other strings used by the building page
const buildingApi = `https://bobby-joe-part-one.azurewebsites.net/api/buildings/find_by_email/`
const batteryApi = `https://bobby-joe-part-one.azurewebsites.net/api/batteries/building_id/`
const columnApi = `https://bobby-joe-part-one.azurewebsites.net/api/columns/battery_id/`
const elevatorApi = `https://bobby-joe-part-one.azurewebsites.net/api/elevators/column_id/`
const createInterventionApi = `https://bobby-joe-part-one.azurewebsites.net/api/interventions/portal_intervention`
const updateBuildingAddressApi = `https://bobby-joe-part-one.azurewebsites.net/api/buildings/address/`
const mapsKey = `AIzaSyC9uJotp0jfTtkorLtdhUQfU97Ti3H_oJQ`
const urlEncodedEmail = encodeURIComponent(userEmail)
const servicesQuery = `{
    buildings(email: "${userEmail}"){
        id
        administratorFullName
        administratorEmail
        administratorPhoneNumber
        technicalContactFullName
        technicalContactEmail
        technicalContactPhone
        address{
            id
            fullAddress
            numberAndStreet
            city
            state
            postalCode
            latitude
            longitude
        }
        batteries{
            id
            batteryStatus
            dateOfCommissioning
            certificateOfOperations
            columns{
                id
                columnStatus
                numberOfFloorsServed
                elevators{
                    id
                    serialNumber
                    elevatorStatus
                }
            }
        }
    }
}`

const interventionForm = document.getElementById('interventionForm')

const updateButtonHtmlString = `<div class="col-12 d-flex justify-content-center m-4"><button id="updateBuildingButton" class="btn btn-primary" type="button" data-toggle="modal" data-target="#updateBuildingModal">Update Building Information</button></div>`
