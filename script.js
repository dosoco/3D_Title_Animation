const containerEl = document.querySelector('.container')
const titles = ["a Father", "a Husband", "a Son", "a Brother", "an Uncle", "a Nephew", "a Man"]

let titleIndex = 0

changeTitle()

function changeTitle() {

        containerEl.innerHTML = `<div class="header">I am</div><div class="active">${titles[titleIndex]}</div>`
        titleIndex++
        
    
            if (titleIndex === titles.length) {
                titleIndex = 0
            }
                setTimeout(changeTitle, 2000)
}


