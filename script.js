let hourSelect = document.querySelector('.hour-select')
let minuteSelect = document.querySelector('.minute-select')
let timeShow = document.querySelector('.time-show')
let setAlarmBtn = document.querySelector('.setAlarm-btn')
let audioRing = new Audio('audio/vita30.mp3')
let userChoice;
let setStatus = 'noSet'

//   create option for hour select
for (let i = 23; i >= 0; i--) {
    
    i = i < 10 ? '0' + i : i;
    // if (i<10) {i = '0' + i}else{i = i} you can do it like this
    
    let huOptions = `<option value="${i}">${i}</option>`
    hourSelect.insertAdjacentHTML('beforeend',huOptions)
}


//   create option for minute select
for (let i = 59; i >= 0; i--) {
    
    i = i < 10 ? '0' + i : i;
    // if (i<10) {i = '0' + i}else{i = i} you can do it like this

    let minOptions = `<option value="${i}">${i}</option>`
    minuteSelect.insertAdjacentHTML('beforeend',minOptions)
}

setInterval(() => {
    let date = new Date()
    let hr = date.getHours()
    let min = date.getMinutes()
    let sec = date.getSeconds()

    
    sec = sec < 10 ? '0' + sec : sec;
    min = min < 10 ? '0' + min : min;
    hr = hr < 10 ? '0' + hr : hr;
 // if (sec < 10 ) { sec = '0' + sec}else{sec = sec// }

    timeShow.innerHTML = `${hr} : ${min} : ${sec}`
    // console.log(timeShow)
    
    if (userChoice == `${hr} : ${min}` ) {
        audioRing.play()
        audioRing.loop = true;
        console.log('test')
    }


}, 1000);


setAlarmBtn.addEventListener('click',()=>{

    userChoice = `${hourSelect.value} : ${minuteSelect.value}`

    if (userChoice.includes('hour') || userChoice.includes('minute') ) {
      return alert('dari eshteb mizani dadash')
    }

    
    checkStatus(setStatus)
})



function checkStatus(state) {
    if (state == 'noSet') {
        
        hourSelect.classList.add('dsable')
        minuteSelect.classList.add('dsable')

        setAlarmBtn.innerHTML = 'clear alarm'
        setStatus = 'set'

    }else{
        hourSelect.classList.remove('dsable')
        minuteSelect.classList.remove('dsable')

        audioRing.pause()
        setStatus = 'noSet'
        audioRing.pause()
        userChoice = ''
        setAlarmBtn.innerHTML = 'Set alarm'
    }
}