document.querySelector('.btn1').addEventListener('click', function () {
        document.querySelector('.earlyAccess').scrollIntoView({
                behavior: 'smooth'
        });
})

const input = document.querySelector('input')
let alertInfo = document.querySelector('p.alert')

document.querySelector('.btn2').addEventListener('click', function () {

        alertInfo.style.color = 'red'

        if (!input.value) {
                alertInfo.textContent = 'Please enter your email adress'
        } else if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(input.value)) {
                alertInfo.style.color = 'green'
                alertInfo.textContent = 'Email address is correct'
                input.value = ''
        } else {
                alertInfo.textContent = 'Please enter a valid email adress'
        }
})

const imgBg = document.querySelector('img.background')

function resizeBg() {
        let rect = imgBg.getBoundingClientRect();
        let scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        let currHeight = imgBg.clientHeight

        let top = rect.top + scrollTop + currHeight + 'px'

        document.body.style.background = `linear-gradient(hsl(217, 28%, 15%) ${top}, hsl(218, 28%, 13%) ${top})`
}

window.addEventListener('resize', resizeBg)
resizeBg()