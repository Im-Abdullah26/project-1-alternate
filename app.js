const button = document.querySelector("#collect-button")
const pearlCounter = document.querySelector("#pearl-count")
const message = document.querySelector("#message")

let pearlCount = 0

button.addEventListener("click", function(){

    pearlCount = pearlCount + 1

    pearlCounter.textContent = "Pearls Collected: " + pearlCount

    if (pearlCount=== 10){

        message.textContent= "You won! You collected 10 pearls."
    }
})

