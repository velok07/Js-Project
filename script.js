const apartments = [
    {id: 1, name: 'Admiral', city: 'Rostov-on-Don', residence: 'Admiral', area: '82 m2', repairTime: '3.5 months', cost: 'Upon request', image: 'assets/images/rod-admiral.png'},
    {id: 2, name: 'Thives', city: 'Sochi', residence: 'Thieves', area: '105 m2', repairTime: '4 months', cost: 'Upon request', image: 'assets/images/sochi.png'},
    {id: 3, name: 'Patriotic', city: 'Rostov-on-Don', residence: 'Patriotic', area: '93 m2', repairTime: '3 months', cost: 'Upon request', image: 'assets/images/rod-patriotic.png'}
]

const admiral_Btn = document.querySelector('.admiral_Btn')
const thievs_Btn = document.querySelector('.thievs_Btn')
const patriotic_Btn = document.querySelector('.patriotic_Btn')

const firstBtn = document.querySelector('.firstBtn')
const secondBtn = document.querySelector('.secondBtn')
const thirdBtn = document.querySelector('.thirdBtn')
const upperBtns = [admiral_Btn, thievs_Btn, patriotic_Btn]
const lowerBtns = [firstBtn, secondBtn, thirdBtn]
    
const current__apartCity = document.querySelector('.current__apartCity')
const current__apartCity_residence = document.querySelector('.current__apartCity_residence')
const current__apartArea = document.querySelector('.current__apartArea')
const current__apartsRepairTime = document.querySelector('.current__apartsRepairTime')
const current__img = document.querySelector('.image')


const prev = document.querySelector('.previous')
const next = document.querySelector('.next')
let currentIndex = 0

const setAparts = (index) => {

    if (index < 0) {
        currentIndex = apartments.length - 1
    } else if (index >= apartments.length) {
        currentIndex = 0
    } else {
        currentIndex = index
    }


    const apartment = apartments[currentIndex]
    current__apartCity.textContent = apartment.city
    current__apartCity_residence.textContent = apartment.residence
    current__apartArea.textContent = apartment.area
    current__apartsRepairTime.textContent = apartment.repairTime
    current__img.src = apartment.image

    upperBtns.forEach((btn, index) => {
    removeActiveBtn(btn);
    if (index === currentIndex) {
        addActiveBtn(btn);
    }
    });
    
}

setAparts(currentIndex);
addActiveBtn(upperBtns[currentIndex])


prev.addEventListener('click', () => {
  setAparts(currentIndex - 1)
})

next.addEventListener('click', () => {
    setAparts(currentIndex + 1)
})

admiral_Btn.addEventListener('click', () => {
    setAparts(0)
})

thievs_Btn.addEventListener('click', () => {
    setAparts(1)
})

patriotic_Btn.addEventListener('click', () => {
    setAparts(2)
})


firstBtn.addEventListener('click', () => {
    setAparts(0)
})

secondBtn.addEventListener('click', () => {
    setAparts(1)
})

thirdBtn.addEventListener('click', () => {
    setAparts(2)
})


function addActiveBtn(btn){
    btn.classList.add('active_Btn');
}

function removeActiveBtn(btn){
    btn.classList.remove('active_Btn');
}

