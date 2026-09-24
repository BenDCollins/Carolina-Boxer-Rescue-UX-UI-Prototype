"use strict";
function button1() {
    window.location.href = "adopt.html";
}
const buttonOne = document.querySelector("#option1");
if (buttonOne != null) {
    buttonOne.addEventListener("click", button1);
}
function button2() {
    window.location.href = "support.html";
}
const buttonTwo = document.querySelector("#option2");
if (buttonTwo != null) {
    buttonTwo.addEventListener("click", button2);
}
function button3() {
    window.location.href = "support.html";
}
const buttonThree = document.querySelector("#option3");
if (buttonThree != null) {
    buttonThree.addEventListener("click", button3);
}
function button4() {
    window.open("https://www.zeffy.com/en-US/ticketing/carolina-boxer-rescues-online-store", "__blank");
}
const buttonFour = document.querySelector("#option4");
if (buttonFour != null) {
    buttonFour.addEventListener("click", button3);
}
const availableNowImages = [
    "images/boxers/availableNow/Apollo.jpg",
    "images/boxers/availableNow/Aspen.jpg",
    "images/boxers/availableNow/Dexter.jpg",
    "images/boxers/availableNow/Dozer.jpg",
    "images/boxers/availableNow/Ella.jpg",
    "images/boxers/availableNow/Jesse.jpg",
    "images/boxers/availableNow/Josie.jpg",
    "images/boxers/availableNow/Pepper.jpg",
    "images/boxers/availableNow/Reyna.jpg",
    "images/boxers/availableNow/Rooster.jpg",
    "images/boxers/availableNow/Tobias.jpg",
];
const availableNowSlots = [
    document.querySelector("#availableNowSlotOne"),
    document.querySelector("#availableNowSlotTwo"),
    document.querySelector("#availableNowSlotThree"),
];
let availableNowIndex = 0;
function availableNowRight() {
    availableNowIndex += 1;
    availableNowIndex % availableNowImages.length;
    for (let i = 0; i < 3; i++) {
        let slot = availableNowSlots[i];
        if (slot != null) {
            slot.setAttribute("src", availableNowImages[(availableNowIndex + i) % availableNowImages.length]);
        }
    }
}
const buttonAvailableRight = document.querySelector("#availableNowRightButton");
if (buttonAvailableRight != null) {
    buttonAvailableRight.addEventListener("click", availableNowRight);
}
function availableNowLeft() {
    availableNowIndex += (availableNowImages.length - 1);
    availableNowIndex % availableNowImages.length;
    for (let i = 0; i < 3; i++) {
        let slot = availableNowSlots[i];
        if (slot != null) {
            slot.setAttribute("src", availableNowImages[(availableNowIndex + i) % availableNowImages.length]);
        }
    }
}
const buttonAvailableLeft = document.querySelector("#availableNowLeftButton");
if (buttonAvailableLeft != null) {
    buttonAvailableLeft.addEventListener("click", availableNowLeft);
}
const theGirlsImages = [
    "images/boxers/theGirls/Beluga.jpeg",
    "images/boxers/theGirls/Ella.jpg",
    "images/boxers/theGirls/Jesse.jpg",
    "images/boxers/theGirls/Josie.jpg",
    "images/boxers/theGirls/Laila.jpg",
    "images/boxers/theGirls/Licky.jpg",
    "images/boxers/theGirls/Magnolia.jpg",
    "images/boxers/theGirls/Mercy.jpeg",
    "images/boxers/theGirls/Neva.jpg",
    "images/boxers/theGirls/Penn.jpeg",
    "images/boxers/theGirls/Pepper.jpg",
    "images/boxers/theGirls/Reyna.jpg",
    "images/boxers/theGirls/Rooster.jpg",
    "images/boxers/theGirls/Velma.jpg",
];
const theGirlsSlots = [
    document.querySelector("#theGirlsSlotOne"),
    document.querySelector("#theGirlsSlotTwo"),
    document.querySelector("#theGirlsSlotThree"),
];
let theGirlsIndex = 0;
function theGirlsRight() {
    theGirlsIndex += 1;
    theGirlsIndex % theGirlsImages.length;
    for (let i = 0; i < 3; i++) {
        let slot = theGirlsSlots[i];
        if (slot != null) {
            slot.setAttribute("src", theGirlsImages[(theGirlsIndex + i) % theGirlsImages.length]);
        }
    }
}
const buttonGirlsRight = document.querySelector("#theGirlsRightButton");
if (buttonGirlsRight != null) {
    buttonGirlsRight.addEventListener("click", theGirlsRight);
}
function theGirlsLeft() {
    theGirlsIndex += (theGirlsImages.length - 1);
    theGirlsIndex % theGirlsImages.length;
    for (let i = 0; i < 3; i++) {
        let slot = theGirlsSlots[i];
        if (slot != null) {
            slot.setAttribute("src", theGirlsImages[(theGirlsIndex + i) % theGirlsImages.length]);
        }
    }
}
const buttonGirlsLeft = document.querySelector("#theGirlsLeftButton");
if (buttonGirlsLeft != null) {
    buttonGirlsLeft.addEventListener("click", theGirlsLeft);
}
const theBoysImages = [
    "images/boxers/theBoys/Agent.jpg",
    "images/boxers/theBoys/Amari.jpg",
    "images/boxers/theBoys/Apollo.jpg",
    "images/boxers/theBoys/Aspen.jpg",
    "images/boxers/theBoys/Beau.jpg",
    "images/boxers/theBoys/Benny.jpg",
    "images/boxers/theBoys/Biggie.jpg",
    "images/boxers/theBoys/Blaze.jpg",
    "images/boxers/theBoys/Boaz.jpg",
    "images/boxers/theBoys/Bugg.jpg",
    "images/boxers/theBoys/Chip.jpg",
    "images/boxers/theBoys/Dexter.jpg",
    "images/boxers/theBoys/Dozer.jpg",
    "images/boxers/theBoys/Hudson.jpg",
    "images/boxers/theBoys/Louie.jpg",
    "images/boxers/theBoys/Major.jpg",
    "images/boxers/theBoys/Marley.jpg",
    "images/boxers/theBoys/Ozzie.jpg",
    "images/boxers/theBoys/Pedro.jpg",
    "images/boxers/theBoys/Rebel.jpg",
    "images/boxers/theBoys/Tobias.jpg",
];
const theBoysSlots = [
    document.querySelector("#theBoysSlotOne"),
    document.querySelector("#theBoysSlotTwo"),
    document.querySelector("#theBoysSlotThree"),
];
let theBoysIndex = 0;
function theBoysRight() {
    theBoysIndex += 1;
    theBoysIndex % theBoysImages.length;
    for (let i = 0; i < 3; i++) {
        let slot = theBoysSlots[i];
        if (slot != null) {
            slot.setAttribute("src", theBoysImages[(theBoysIndex + i) % theBoysImages.length]);
        }
    }
}
const buttonBoysRight = document.querySelector("#theBoysRightButton");
if (buttonBoysRight != null) {
    buttonBoysRight.addEventListener("click", theBoysRight);
}
function theBoysLeft() {
    theBoysIndex += (theBoysImages.length - 1);
    theBoysIndex % theBoysImages.length;
    for (let i = 0; i < 3; i++) {
        let slot = theBoysSlots[i];
        if (slot != null) {
            slot.setAttribute("src", theBoysImages[(theBoysIndex + i) % theBoysImages.length]);
        }
    }
}
const buttonBoysLeft = document.querySelector("#theBoysLeftButton");
if (buttonBoysLeft != null) {
    buttonBoysLeft.addEventListener("click", theBoysLeft);
}
const hospiceImages = [
    "images/boxers/hospiceDogs/Nelson.jpg",
    "images/boxers/hospiceDogs/Russell.jpg",
    "images/boxers/hospiceDogs/Smokey.jpg",
    "images/boxers/hospiceDogs/Walker.jpg",
];
const hospiceSlots = [
    document.querySelector("#hospiceSlotOne"),
    document.querySelector("#hospiceSlotTwo"),
    document.querySelector("#hospiceSlotThree"),
];
let hospiceIndex = 0;
function hospiceRight() {
    hospiceIndex += 1;
    hospiceIndex % hospiceImages.length;
    for (let i = 0; i < 3; i++) {
        let slot = hospiceSlots[i];
        if (slot != null) {
            slot.setAttribute("src", hospiceImages[(hospiceIndex + i) % hospiceImages.length]);
        }
    }
}
const buttonHospiceRight = document.querySelector("#hospiceRightButton");
if (buttonHospiceRight != null) {
    buttonHospiceRight.addEventListener("click", hospiceRight);
}
function hospiceLeft() {
    hospiceIndex += (hospiceImages.length - 1);
    hospiceIndex % hospiceImages.length;
    for (let i = 0; i < 3; i++) {
        let slot = hospiceSlots[i];
        if (slot != null) {
            slot.setAttribute("src", hospiceImages[(hospiceIndex + i) % hospiceImages.length]);
        }
    }
}
const buttonHospiceLeft = document.querySelector("#hospiceLeftButton");
if (buttonHospiceLeft != null) {
    buttonHospiceLeft.addEventListener("click", hospiceLeft);
}
function sizeChecker(size) {
    const secondaryButtons = document.querySelectorAll(".secondaryButton");
    const secondaryArray = Array.prototype.slice.call(secondaryButtons);
    if (screenSize.matches) {
        for (let i = 0; i < secondaryArray.length; i++) {
            secondaryArray[i].style.display = "none";
        }
    }
    else {
        for (let i = 0; i < secondaryArray.length; i++) {
            secondaryArray[i].style.display = "block";
        }
    }
}
let screenSize = window.matchMedia("(max-width: 768px)");
screenSize.addEventListener("change", sizeChecker);
sizeChecker(screenSize);
function dogDisplay() {
    window.location.href = "dog.html";
}
function dogButtonCreate() {
    dogButtons.forEach((dog) => {
        dog.addEventListener("click", dogDisplay);
    });
}
const dogButtons = document.querySelectorAll(".dog");
dogButtonCreate();
function buttonInstagram() {
    window.open("https://www.instagram.com/carolinaboxerrescue/", "__blank");
}
const buttonInstagramObject = document.querySelector("#instagram");
if (buttonInstagramObject != null) {
    buttonInstagramObject.addEventListener("click", buttonInstagram);
}
function buttonFacebook() {
    window.open("https://www.facebook.com/savetheboxers/", "__blank");
}
const buttonFacebookObject = document.querySelector("#facebook");
if (buttonFacebookObject != null) {
    buttonFacebookObject.addEventListener("click", buttonFacebook);
}
function nubHub() {
    window.open("https://carolinaboxerrescue.org/home-boxed/?doing_wp_cron=1786418011.7246019840240478515625", "__blank");
}
const buttonNubHubObject = document.querySelector("#nubHub");
if (buttonNubHubObject != null) {
    buttonNubHubObject.addEventListener("click", nubHub);
}
function transparency() {
    window.open("https://app.candid.org/profile/7853101/carolina-boxer-rescue-inc-56-2279460?activeTab=5", "__blank");
}
const buttonTransparencyObject = document.querySelector("#transparency");
if (buttonTransparencyObject != null) {
    buttonTransparencyObject.addEventListener("click", transparency);
}
function upTriangle() {
    window.location.href = "#pageTop";
}
const buttonUpTriangle = document.querySelector("#upTriangle");
if (buttonUpTriangle != null) {
    buttonUpTriangle.addEventListener("click", upTriangle);
}
