let container = document.getElementById('container')

let content = document.getElementById('content')

let btn = document.getElementById('btn')

let h3 = document.getElementById('content-h3')

let p = document.getElementById('content-p')

function centerDiv(){
    container.setAttribute('style', 'display:flex; justify-content:center; align-items:center;')
    content.setAttribute('style', 'position:absolute; top:50%; left:50%; transform:translate(-50%, -50%); padding:1em; border-radius:5px;')
    content.style.border = '1px solid black'
    p.setAttribute('style', 'font-style:italic;')
    h3.style.color = 'red'
}

btn.addEventListener('click', centerDiv)