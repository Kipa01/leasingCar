import '@/styles/styles.scss'
import '@models/formValidate'
import IMask from 'imask';
import Swiper from 'swiper/swiper-bundle.min.js';
import 'swiper/swiper-bundle.min.css';

let burger = document.querySelector('.burger')
let nav = document.querySelector('.nav')
let body = document.querySelector('body')

// Burger Menu
burger.addEventListener('click', () => {
    if (burger.classList.contains('active')) {
        burger.classList.remove('active')
        nav.classList.remove('active')
        body.classList.remove('lock')
    } else {
        burger.classList.add('active')
        nav.classList.add('active')
        body.classList.add('lock')
    }
})

// / Burger Menu

// Modal Form
let btnsFormTrigger = document.querySelectorAll('.btn')
let formApplication = document.querySelector('.form')
let formApplicationClose = document.querySelector('.form__close')

btnsFormTrigger.forEach(e => {
    e.addEventListener('click', () => {
        formApplication.classList.add('show')
        body.classList.add('form-lock')
    })
})

formApplicationClose.addEventListener('click', () => {
    formApplication.classList.remove('show')
    body.classList.remove('form-lock')
})

let phoneMask = IMask(
    document.getElementById('tel'), {
        mask: '+{7}(000) 000-00-00'
    });
// / Modal Form

// slider
let mySwiper = new Swiper('.main-slider', {
    spaceBetween: 30,
    loop: true,
    effect: 'fade',
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    autoplay: {
        delay: 10000,
        disableOnInteraction: false,
    },
});

let mySwiperNextButton = document.querySelector('.main-slider__buttonNext')

mySwiper.on('slideChangeTransitionStart', function () {
    mySwiperNextButton.classList.remove('active')
    mySwiperNextButton.classList.add('active')
});
// /slider

// Calculator

const totalCost = document.getElementById('total-cost'),
    anInitialFree = document.getElementById('an-initial-free'),
    termLeasing = document.getElementById('term-leasing')

const totalCostRange = document.getElementById('total-cost-range'),
    anInitialFreeRange = document.getElementById('an-initial-free-range'),
    termLeasingRange = document.getElementById('term-leasing-range')

const inputsRange = document.querySelectorAll('.input-calculator__slider')
const inputsCount = document.querySelectorAll('.input-calculator__count')

const totalAmountOfCredit = document.querySelector('.calculator__count--sum')
const totalMonthlyPayment = document.querySelector('.calculator__count--month')
const anInitialFreePercent = document.querySelector('.input-calculator__unit--proc')

const assignValue = () => {
    totalCost.value = totalCostRange.value
    anInitialFree.value = totalCost.value * (anInitialFreeRange.value / 100)
    termLeasing.value = termLeasingRange.value
}

const assignNumberValue = (e) => {
    let elemParentChildrenRange = e.closest('.input-calculator').querySelector('.input-calculator__slider')
    if (e.value < elemParentChildrenRange.min * (totalAmountOfCredit.value / 100)) {
        if (e.classList.contains('input-calculator__unit--proc')) {
            elemParentChildrenRange.value = elemParentChildrenRange.min
            e.value = elemParentChildrenRange.min * (totalAmountOfCredit.value / 100)
        } else {
            elemParentChildrenRange.value = elemParentChildrenRange.min
            e.value = elemParentChildrenRange.min
        }
    } else if (e.value > elemParentChildrenRange.max * (totalAmountOfCredit.value / 100)) {
        if (e.classList.contains('input-calculator__unit--proc')) {
            elemParentChildrenRange.value = elemParentChildrenRange.max
            e.value = elemParentChildrenRange.max * (totalAmountOfCredit.value / 100)
        } else {
            elemParentChildrenRange.value = elemParentChildrenRange.max
            e.value = elemParentChildrenRange.max * (totalAmountOfCredit.value / 100)
        }
    } else {
        if (e.classList.contains('input-calculator__unit--proc')) {
            elemParentChildrenRange.value = Math.round((e.value / totalAmountOfCredit.value) * 100)
        } else {
            elemParentChildrenRange.value = e.value
        }
    }
}

const calculation = (totalCost = 1000000, anInitialFree = 10, termLeasing = 1) => {
    let firstFeePercent = Math.round((anInitialFree / 100) * totalCost)
    let totalCostNumber = +totalCost
    let monthlyPayment = Math.round((totalCostNumber + totalCostNumber * 9.1 / 100) / termLeasing) // 9.1 - процентная ставка
    let loanAmount = firstFeePercent + termLeasing * monthlyPayment
    totalAmountOfCredit.innerHTML = `${loanAmount} ₽`
    totalMonthlyPayment.innerHTML = `${monthlyPayment} ₽`
    anInitialFreePercent.innerHTML = `${anInitialFree}%`
}

assignValue()
calculation(totalCost.value, anInitialFreeRange.value, termLeasing.value)

inputsRange.forEach((e) => {
    e.addEventListener('input', () => {
        assignValue()
        calculation(+totalCost.value, +anInitialFreeRange.value, +termLeasing.value)
    })
})

inputsCount.forEach((e) => {
    e.addEventListener('change', () => {
        assignNumberValue(e)
        assignValue()
        calculation(+totalCost.value, +anInitialFreeRange.value, +termLeasing.value)
    })
})

// /Calculator
