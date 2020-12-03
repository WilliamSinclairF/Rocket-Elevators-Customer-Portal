// this file contains mostly just the URLs of the apis in use in the project

const graphQlApi = `http://localhost:4000/graphql`
const buildingApi = `https://localhost:44370/api/buildings/find_by_email/`
const batteryApi = `https://localhost:44370/api/batteries/building_id/`
const columnApi = `https://localhost:44370/api/columns/battery_id/`
const elevatorApi = `https://localhost:44370/api/elevators/column_id/`
const createInterventionApi = `https://localhost:44370/api/interventions/portal_intervention`
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
