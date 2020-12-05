//see Constants.js for URLs

const editPersonalInfoMessage = document.getElementById('editPersonalInfoMessage')

async function putForm(data, url) {
    try {
        console.log(url)
        const response = await fetch(url, {
            method: 'PUT',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        })
        if (response.ok) {
            return response.json()
        }
        else {
            console.log(response)
        }
    }
    catch (err) {
        throw new Error("An error occured. Please refresh the page and try again.\nIf the issue persists, please contact us at (418) 580-7055")
    }
}

document.getElementById('savePersonalInfoButton').addEventListener('click', async (e) => {
    e.preventDefault()
    const updatedUserData = {
        Title: document.getElementById('titleInput').value || null,
        FirstName: document.getElementById('firstNameInput').value || null,
        LastName: document.getElementById('lastNameInput').value || null
    }
    document.getElementById('loading').classList.remove('hidden')
    await putForm(updatedUserData, `${updateUserApi}${encodeURIComponent(userEmail)}`)
    document.getElementById('loading').classList.add('hidden')
    window.location.reload(false);
})

document.getElementById('saveCompanyInfoButton').addEventListener('click', async (e) => {
    e.preventDefault()
    const updatedCompanyData = {
        CompanyName: document.getElementById('companyNameInput').value || null,
        CompanyContactFullName: document.getElementById('companyContactFullNameInput').value || null,
        CompanyContactPhone: document.getElementById('companyContactPhoneInput').value || null,
        CompanyContactEmail: document.getElementById('companyContactEmailInput').value || null,
        CompanyDescription: document.getElementById('companyDescriptionInput').value || null,
        TechnicalAuthorityFullName: document.getElementById('technicalAuthorityFullNameInput').value || null,
        TechnicalAuthorityPhoneNumber: document.getElementById('technicalAuthorityPhoneNumberInput').value || null,
        TechnicalManagerEmailService: document.getElementById('technicalManagerEmailServiceInput').value || null,
    }
    document.getElementById('loading').classList.remove('hidden')
    await putForm(updatedCompanyData, `${updateCustomerApi}${encodeURIComponent(userEmail)}`)
    document.getElementById('loading').classList.add('hidden')
    window.location.reload(false);
})