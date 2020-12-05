// API URLs and other strings used by the customer page
const updateUserApi = `https://bobby-joe-part-one.azurewebsites.net/api/users/update/`
const updateCustomerApi = `https://bobby-joe-part-one.azurewebsites.net/api/customers/update/`

const customerInfoQuery = `{
    customer(email: "${userEmail}"){
    user{
        firstName
        lastName
        title
    }
    companyName
    companyContactFullName
    companyContactPhone
    companyContactEmail
    companyDescription
    technicalAuthorityFullName
    technicalAuthorityPhoneNumber
    technicalManagerEmailService
    }
}
`