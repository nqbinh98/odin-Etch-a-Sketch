const container = document.querySelector(".container")
const btn = document.querySelector(".btn")
let numb = 16;

btn.addEventListener("click", handleBtn)
function handleBtn (e) {
    container.textContent = "";

    let input;
    do {
        input = prompt("What's number?");
        if (input === null) return;
        numb = Number(input);
    } while (!Number.isInteger(numb) || numb <= 0 || numb > 100)

    createGrid(numb)
    
}

function handleMouseOver (e) {
    const target = e.target;
    target.style.backgroundColor = `${getRandomColor()}`
}
function handleMouseOut (e) {
    const target = e.target;
    target.style.backgroundColor = ""

}

function createGrid (numb) {
    const width = `calc(100% / ${numb})`
    console.log(width)
    const fragment = document.createDocumentFragment();
    
    for (let i = 0; i < numb; i++) {
        const row = document.createElement("div")
        row.classList.add("row")
        
        for (let j = 0; j < numb; j++) {
            const item = document.createElement("div")
            item.classList.add("item")
            item.style.width = width;
            item.addEventListener("mouseover",handleMouseOver)
            item.addEventListener("mouseout",handleMouseOut)

            row.appendChild(item)
        }
        fragment.appendChild(row)
    }
    container.appendChild(fragment);
}

function getRandomColor () {
    const r = Math.floor(Math.random() * 256)
    const g = Math.floor(Math.random() * 256)
    const b = Math.floor(Math.random() * 256)
    // const a = Math.random()
    const a = (Math.floor(Math.random() * 10) + 1) / 10

    return `rgba(${r}, ${g}, ${b}, ${a})`
}

