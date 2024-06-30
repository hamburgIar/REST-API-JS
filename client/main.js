const getInfoBtn = document.getElementById("getInfo")
const infoContent = document.getElementById("infoContent")

const beckURL = "http://localhost:8080"

async function getUsers() {
    try {
        const response = await fetch(`${beckURL}/api/v1/users/`)

        if (!response.ok) {
            throw new Error(`Ошибка: ${response.status}`);
        }

        const data = await response.json()

        return data.users
    }
    catch (error) {
        console.log(error)
    }
}

getInfoBtn.addEventListener("click", async () => {
    const data = await getUsers()

    infoContent.innerText = JSON.stringify(...data)
})
