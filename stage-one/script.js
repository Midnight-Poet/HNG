let colorSet = [
    ['#565555', '#4e4b4b', '#424046', '#424242', '#3e3d3f', '#4c4c4c'],
    ['#feafbb', '#f4a9b4', '#ffc0ca', '#fba2b1', '#fac1ca', '#fac7cd'],
    ['#A5A9B8', '#9fa2b3', '#b3b3c8', '#9595a3', '#b4b5c0', '#bfc0ce'],
    ['#5A7C9D', '#516f8a', '#638bb0', '#4f6a84', '#6794ba', '#476884']
]



let btn = document.querySelector('.button')
let body = document.querySelector('.body')
let score = document.querySelector('h3')
let txt = document.querySelector('.h1')
let div = document.querySelector('.hey')
// let next = document.querySelector('.nxt')
let reset = document.querySelector('.reset')

let x = 0
let random
let btnArray = []


let func = () => {
    
    for (let i = 0; i < btn.children.length; i++) {
        random = Math.floor(Math.random() * colorSet[0].length)
        btnArray.push(btn.children[i])
        btn.children[i].style.backgroundColor = colorSet[x][i]
        body.style.backgroundColor = colorSet[x][random]
    }
}
func()
score.innerText = 0

let y = 0

btnArray.forEach(btn => {
    btn.addEventListener('click', () => {
        
        func()    
        txt.className += ' pop'
        div.className += ' anime'
        console.log(div.className);
        setTimeout(() => {
            txt.className = 'h1'
            div.className = 'hey'
        }, 3000);
        


        if (btn.style.backgroundColor == body.style.backgroundColor) {
            txt.innerText = 'Congratulations! You got it Right!'
            y += 1
            score.innerText = y
        } else {
            txt.innerText = 'Sorry, You got it wrong'
        }

        x += 1
        if (x > colorSet.length - 1) {
            x = 0
        }
        
    })
})

reset.addEventListener('click', () => {
    y = 0
    score.innerText = y
})
