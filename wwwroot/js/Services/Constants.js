// this file contains mostly just the URLs of the apis in use in the project

const graphQlApi = `https://bobby-joe-part-two.herokuapp.com/graphql`
const buildingApi = `https://bobby-joe.azurewebsites.net/api/buildings/find_by_email/`
const batteryApi = `https://bobby-joe.azurewebsites.net/api/batteries/building_id/`
const columnApi = `https://bobby-joe.azurewebsites.net/api/columns/battery_id/`
const elevatorApi = `https://bobby-joe.azurewebsites.net/api/elevators/column_id/`
const createInterventionApi = `https://bobby-joe.azurewebsites.net/api/interventions/portal_intervention`
const mapsKey = `AIzaSyC9uJotp0jfTtkorLtdhUQfU97Ti3H_oJQ`
const urlEncodedEmail = encodeURIComponent(userEmail)
const servicesQuery = `{
    buildings(email: "${userEmail}"){
        id
        address{
            fullAddress
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
