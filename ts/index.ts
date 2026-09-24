"use strict";

function button1(): void {
	window.location.href = "adopt.html";
}

const buttonOne: Element | null = document.querySelector("#option1");
if(buttonOne != null){
	buttonOne.addEventListener("click", button1);
}

function button2(): void {
	window.location.href = "support.html";
}

const buttonTwo: Element | null = document.querySelector("#option2");
if(buttonTwo != null){
	buttonTwo.addEventListener("click", button2);
}

function button3(): void {
	window.location.href = "support.html";
}

const buttonThree: Element | null = document.querySelector("#option3");
if(buttonThree != null){
	buttonThree.addEventListener("click", button3);
}


function button4(): void {
	window.open("https://www.zeffy.com/en-US/ticketing/carolina-boxer-rescues-online-store", "__blank");
}

const buttonFour: Element | null = document.querySelector("#option4");
if(buttonFour != null){
	buttonFour.addEventListener("click", button3);
}

const availableNowImages: string[] = [
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

const availableNowSlots: (Element | null)[] = [
	document.querySelector("#availableNowSlotOne"),
	document.querySelector("#availableNowSlotTwo"),
	document.querySelector("#availableNowSlotThree"),
];

let availableNowIndex: number = 0;

function availableNowRight(): void {
	availableNowIndex += 1;
	availableNowIndex % availableNowImages.length;
	for (let i: number = 0; i < 3; i++){
		let slot: Element | null = availableNowSlots[i];
		if (slot != null){
			slot.setAttribute("src", availableNowImages[(availableNowIndex + i) % availableNowImages.length]);
		}
	}
}

const buttonAvailableRight: Element | null = document.querySelector("#availableNowRightButton");
if(buttonAvailableRight != null){
	buttonAvailableRight.addEventListener("click", availableNowRight);
}

function availableNowLeft(): void {
	availableNowIndex += (availableNowImages.length - 1);
	availableNowIndex % availableNowImages.length;
	for (let i = 0; i < 3; i++){
		let slot: Element | null = availableNowSlots[i];
		if (slot != null){
			slot.setAttribute("src", availableNowImages[(availableNowIndex + i) % availableNowImages.length]);
		}
	}
}

const buttonAvailableLeft: Element | null = document.querySelector("#availableNowLeftButton");
if(buttonAvailableLeft != null){
	buttonAvailableLeft.addEventListener("click", availableNowLeft);
}

const theGirlsImages: string[] = [
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

const theGirlsSlots: (Element | null)[] = [
	document.querySelector("#theGirlsSlotOne"),
	document.querySelector("#theGirlsSlotTwo"),
	document.querySelector("#theGirlsSlotThree"),
];

let theGirlsIndex: number = 0;

function theGirlsRight(){
	theGirlsIndex += 1;
	theGirlsIndex % theGirlsImages.length;
	for (let i = 0; i < 3; i++){
		let slot: Element | null = theGirlsSlots[i];
		if (slot != null){
			slot.setAttribute("src", theGirlsImages[(theGirlsIndex + i) % theGirlsImages.length]);
		}
	}
}

const buttonGirlsRight: Element | null = document.querySelector("#theGirlsRightButton");
if(buttonGirlsRight != null){
	buttonGirlsRight.addEventListener("click", theGirlsRight);
}

function theGirlsLeft(){
	theGirlsIndex += (theGirlsImages.length - 1);
	theGirlsIndex % theGirlsImages.length;
	for (let i = 0; i < 3; i++){
		let slot: Element | null = theGirlsSlots[i];
		if (slot != null){
			slot.setAttribute("src", theGirlsImages[(theGirlsIndex + i) % theGirlsImages.length]);
		}
	}
}

const buttonGirlsLeft: Element | null = document.querySelector("#theGirlsLeftButton");
if(buttonGirlsLeft != null){
	buttonGirlsLeft.addEventListener("click", theGirlsLeft);
}

const theBoysImages: string[] = [
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

const theBoysSlots: (Element | null)[] = [
	document.querySelector("#theBoysSlotOne"),
	document.querySelector("#theBoysSlotTwo"),
	document.querySelector("#theBoysSlotThree"),
];

let theBoysIndex: number = 0;

function theBoysRight(): void {
	theBoysIndex += 1;
	theBoysIndex % theBoysImages.length;
	for (let i = 0; i < 3; i++){
		let slot: Element | null = theBoysSlots[i];
		if (slot != null){
			slot.setAttribute("src", theBoysImages[(theBoysIndex + i) % theBoysImages.length]);
		}
	}
}

const buttonBoysRight: Element | null = document.querySelector("#theBoysRightButton");
if(buttonBoysRight != null){
	buttonBoysRight.addEventListener("click", theBoysRight);
}

function theBoysLeft(): void {
	theBoysIndex += (theBoysImages.length - 1);
	theBoysIndex % theBoysImages.length;
	for (let i = 0; i < 3; i++){
		let slot: Element | null = theBoysSlots[i];
		if (slot != null){
			slot.setAttribute("src", theBoysImages[(theBoysIndex + i) % theBoysImages.length]);
		}
	}
}

const buttonBoysLeft: Element | null = document.querySelector("#theBoysLeftButton");
if(buttonBoysLeft != null){
	buttonBoysLeft.addEventListener("click", theBoysLeft);
}

const hospiceImages: string[] = [
	"images/boxers/hospiceDogs/Nelson.jpg",
	"images/boxers/hospiceDogs/Russell.jpg",
	"images/boxers/hospiceDogs/Smokey.jpg",
	"images/boxers/hospiceDogs/Walker.jpg",
];

const hospiceSlots: (Element | null)[] = [
	document.querySelector("#hospiceSlotOne"),
	document.querySelector("#hospiceSlotTwo"),
	document.querySelector("#hospiceSlotThree"),
];

let hospiceIndex: number = 0;

function hospiceRight(): void {
	hospiceIndex += 1;
	hospiceIndex % hospiceImages.length;
	for (let i = 0; i < 3; i++){
		let slot: Element | null = hospiceSlots[i];
		if (slot != null){
			slot.setAttribute("src", hospiceImages[(hospiceIndex + i) % hospiceImages.length]);
		}
	}
}

const buttonHospiceRight: Element | null = document.querySelector("#hospiceRightButton");
if(buttonHospiceRight != null){
	buttonHospiceRight.addEventListener("click", hospiceRight);
}

function hospiceLeft(): void {
	hospiceIndex += (hospiceImages.length - 1);
	hospiceIndex % hospiceImages.length;
	for (let i = 0; i < 3; i++){
		let slot: Element | null = hospiceSlots[i];
		if (slot != null){
			slot.setAttribute("src", hospiceImages[(hospiceIndex + i) % hospiceImages.length]);
		}
	}
}

const buttonHospiceLeft: Element | null = document.querySelector("#hospiceLeftButton");
if(buttonHospiceLeft != null){
	buttonHospiceLeft.addEventListener("click", hospiceLeft);
}

function sizeChecker(size: object): void {
	const secondaryButtons: NodeList = document.querySelectorAll(".secondaryButton");
	const secondaryArray = Array.prototype.slice.call(secondaryButtons);
	if (screenSize.matches) {
		for (let i = 0; i < secondaryArray.length; i++){
			secondaryArray[i].style.display = "none";
		}
	} else {
		for (let i = 0; i < secondaryArray.length; i++){
			secondaryArray[i].style.display = "block";
		}
	}
}

let screenSize: MediaQueryList = window.matchMedia("(max-width: 768px)");

screenSize.addEventListener("change", sizeChecker);

sizeChecker(screenSize);

function dogDisplay(): void {
	window.location.href = "dog.html";
}

function dogButtonCreate (): void {
	dogButtons.forEach((dog) => {
		dog.addEventListener("click", dogDisplay);
	});
}

const dogButtons: NodeList = document.querySelectorAll(".dog");

dogButtonCreate();

function buttonInstagram(): void {
	window.open("https://www.instagram.com/carolinaboxerrescue/", "__blank");
}

const buttonInstagramObject: Element | null = document.querySelector("#instagram");
if(buttonInstagramObject != null){
	buttonInstagramObject.addEventListener("click", buttonInstagram);
}

function buttonFacebook(){
	window.open("https://www.facebook.com/savetheboxers/", "__blank");
}

const buttonFacebookObject: Element | null = document.querySelector("#facebook");
if(buttonFacebookObject != null){
	buttonFacebookObject.addEventListener("click", buttonFacebook);
}

function nubHub(): void {
	window.open("https://carolinaboxerrescue.org/home-boxed/?doing_wp_cron=1786418011.7246019840240478515625", "__blank");
}

const buttonNubHubObject: Element | null = document.querySelector("#nubHub");
if(buttonNubHubObject != null){
	buttonNubHubObject.addEventListener("click", nubHub);
}

function transparency(): void {
	window.open("https://app.candid.org/profile/7853101/carolina-boxer-rescue-inc-56-2279460?activeTab=5", "__blank");
}

const buttonTransparencyObject: Element | null = document.querySelector("#transparency");
if(buttonTransparencyObject != null){
	buttonTransparencyObject.addEventListener("click", transparency);
}

function upTriangle(): void {
	window.location.href = "#pageTop";
}

const buttonUpTriangle: Element | null = document.querySelector("#upTriangle");
if(buttonUpTriangle != null){
	buttonUpTriangle.addEventListener("click", upTriangle);
}
