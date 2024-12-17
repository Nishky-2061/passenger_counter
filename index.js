let saveEl=document.getElementById("save-el")
let countEl=document.getElementById("count-el")
let resetEl=document.getElementById("reset-el")
let count=0
console.log(saveEl)
function increment()
{
    console.log("Button was clicked")
    count+= 1
    countEl.textContent = count
}

function save() {
    if(!count) return
    let countStr = count + " - "
    saveEl.textContent += countStr
    countEl.textContent = 0
    count = 0
}

function reset()
{
    countStr=0
    saveEl.textContent= "Previous Enteries: "
}

