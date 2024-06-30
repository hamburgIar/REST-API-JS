const getInfoBtn = document.getElementById("getInfo")
const createUserBtn = document.getElementById("createUser")
const infoContent = document.getElementById("infoContent")

const beckURL = "http://localhost:8080/api/v1"

async function fetchAndGetData(url, options) {
    try {
        const response = await fetch(url, options)

        if (!response.ok) {
            throw new Error(`Ошибка: ${response.status}`);
        }

        return await response.json()
    }
    catch (error) {
        console.log(error)
    }
}

getInfoBtn.addEventListener("click", async () => {
    const data = await fetchAndGetData(`${beckURL}/users/`, {})

    infoContent.innerText = JSON.stringify(data.users)
})

createUserBtn.addEventListener("click", async (event) => {
    event.preventDefault()

    const user = {
        firstName: "Ivan",
        lastName: "Petrov",
        age: 20
    }
        
    const data = await fetchAndGetData(`${beckURL}/users/create`, {
        headers: {
            'Content-Type': 'application/json; charset=utf-8'
        },
        method: 'POST',
        body: JSON.stringify(user)
    })

    console.log(data)
})