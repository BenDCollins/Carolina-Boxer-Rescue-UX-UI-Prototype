"use strict";

function button1(){
	window.location.href = "adopt.html"
}

document.querySelector("#option1").addEventListener("click", button1);

function button2(){
	window.location.href = "support.html"
}

document.querySelector("#option2").addEventListener("click", button2);

function button3(){
	window.location.href = "support.html"
}

document.querySelector("#option3").addEventListener("click", button3);

function button4(){
	window.open("https://www.zeffy.com/en-US/ticketing/carolina-boxer-rescues-online-store", "__blank")
}

document.querySelector("#option4").addEventListener("click", button4);

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

function availableNowRight(){
	availableNowIndex += 1;
	availableNowIndex % availableNowImages.length;
	for (let i = 0; i < 3; i++){
		availableNowSlots[i].src = availableNowImages[(availableNowIndex + i) % availableNowImages.length];
	}
}

document.querySelector("#availableNowRightButton").addEventListener("click", availableNowRight);

function availableNowLeft(){
	availableNowIndex += (availableNowImages.length - 1);
	availableNowIndex % availableNowImages.length;
	for (let i = 0; i < 3; i++){
		availableNowSlots[i].src = availableNowImages[(availableNowIndex + i) % availableNowImages.length];
	}
}

document.querySelector("#availableNowLeftButton").addEventListener("click", availableNowLeft);

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

function theGirlsRight(){
	theGirlsIndex += 1;
	theGirlsIndex % theGirlsImages.length;
	for (let i = 0; i < 3; i++){
		theGirlsSlots[i].src = theGirlsImages[(theGirlsIndex + i) % theGirlsImages.length];
	}
}

document.querySelector("#theGirlsRightButton").addEventListener("click", theGirlsRight);

function theGirlsLeft(){
	theGirlsIndex += (theGirlsImages.length - 1);
	theGirlsIndex % theGirlsImages.length;
	for (let i = 0; i < 3; i++){
		theGirlsSlots[i].src = theGirlsImages[(theGirlsIndex + i) % theGirlsImages.length];
	}
}

document.querySelector("#theGirlsLeftButton").addEventListener("click", theGirlsLeft);

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

function theBoysRight(){
	theBoysIndex += 1;
	theBoysIndex % theBoysImages.length;
	for (let i = 0; i < 3; i++){
		theBoysSlots[i].src = theBoysImages[(theBoysIndex + i) % theBoysImages.length];
	}
}

document.querySelector("#theBoysRightButton").addEventListener("click", theBoysRight);

function theBoysLeft(){
	theBoysIndex += (theBoysImages.length - 1);
	theBoysIndex % theBoysImages.length;
	for (let i = 0; i < 3; i++){
		theBoysSlots[i].src = theBoysImages[(theBoysIndex + i) % theBoysImages.length];
	}
}

document.querySelector("#theBoysLeftButton").addEventListener("click", theBoysLeft);

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

function hospiceRight(){
	hospiceIndex += 1;
	hospiceIndex % hospiceImages.length;
	for (let i = 0; i < 3; i++){
		hospiceSlots[i].src = hospiceImages[(hospiceIndex + i) % hospiceImages.length];
	}
}

document.querySelector("#hospiceRightButton").addEventListener("click", hospiceRight);

function hospiceLeft(){
	hospiceIndex += (hospiceImages.length - 1);
	hospiceIndex % hospiceImages.length;
	for (let i = 0; i < 3; i++){
		hospiceSlots[i].src = hospiceImages[(hospiceIndex + i) % hospiceImages.length];
	}
}

document.querySelector("#hospiceLeftButton").addEventListener("click", hospiceLeft);


function sizeChecker(){
	const secondaryButtons = document.querySelectorAll(".secondaryButton")
	if (screenSize.matches) {
		for (let i = 0; i < secondaryButtons.length; i++){
			secondaryButtons[i].style.display = "none";
		}
	} else {
		for (let i = 0; i < secondaryButtons.length; i++){
			secondaryButtons[i].style.display = "block";
		}
	}
}

let screenSize = window.matchMedia("(max-width: 768px)");

screenSize.addEventListener("change", sizeChecker);

sizeChecker(screenSize);

function dogDisplay(){
	window.location.href = "dog.html"
}

function dogButtonCreate (){
	dogButtons.forEach((dog) => {
		dog.addEventListener("click", dogDisplay);
	});
}

const dogButtons = document.querySelectorAll(".dog");

dogButtonCreate();

function buttonInstagram(){
	window.open("https://www.instagram.com/carolinaboxerrescue/", "__blank")
}

document.querySelector("#instagram").addEventListener("click", buttonInstagram);

function buttonFacebook(){
	window.open("https://www.facebook.com/savetheboxers/", "__blank")
}

document.querySelector("#facebook").addEventListener("click", buttonFacebook);

function nubHub(){
	window.open("https://carolinaboxerrescue.org/home-boxed/?doing_wp_cron=1786418011.7246019840240478515625", "__blank")
}

document.querySelector("#nubHub").addEventListener("click", nubHub);

function buttonInstagram(){
	window.open("https://www.instagram.com/carolinaboxerrescue/", "__blank")
}

document.querySelector("#instagram").addEventListener("click", buttonInstagram);

function buttonFacebook(){
	window.open("https://www.facebook.com/savetheboxers/", "__blank")
}

document.querySelector("#facebook").addEventListener("click", buttonFacebook);

function nubHub(){
	window.open("https://carolinaboxerrescue.org/home-boxed/?doing_wp_cron=1786418011.7246019840240478515625", "__blank")
}

document.querySelector("#nubHub").addEventListener("click", nubHub);

function transparency(){
	window.open("https://app.candid.org/profile/7853101/carolina-boxer-rescue-inc-56-2279460?activeTab=5", "__blank")
}

document.querySelector("#transparency").addEventListener("click", transparency);

function upTriangle(){
	window.location.href = "#pageTop"
}

document.querySelector("#upTriangle").addEventListener("click", upTriangle);