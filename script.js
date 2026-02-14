const greetingsList = [
    "Hello, I'm",
    "Hallo, ich bin",
    "Bonjour, je m'appelle",
    "Selam, ben",
    "Hola, soy"
]
const heading = document.getElementById("heading")

function changeGreeting() {
    const randomIndex = Math.floor(Math.random() * greetingsList.length)
    const randomGreet = greetingsList[randomIndex]
    
    heading.innerText = `${randomGreet} Hayden`
}

changeGreeting()
