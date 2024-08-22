
const dayOne = document.querySelector("#day-one");
const dayTwo = document.querySelector("#day-two");
const dayThree = document.querySelector("#day-three");
const dayFour = document.querySelector("#day-four");

dayOne.addEventListener("click", function () {
    dayOne.classList.add('active');
    dayTwo.classList.remove('active');
    dayThree.classList.remove('active');
    dayFour.classList.remove('active');
})

dayTwo.addEventListener("click", function () {
    dayTwo.classList.add('active');
    dayOne.classList.remove('active');
    dayThree.classList.remove('active');
    dayFour.classList.remove('active');
})

dayThree.addEventListener("click", function () {
    dayThree.classList.add('active');
    dayTwo.classList.remove('active');
    dayOne.classList.remove('active');
    dayFour.classList.remove('active');
})

dayFour.addEventListener("click", function () {
    dayFour.classList.add('active');
    dayTwo.classList.remove('active');
    dayThree.classList.remove('active');
    dayOne.classList.remove('active');
})

