"use strict";
export {};

function blogButton(): void {
	window.location.href = "#blog";
}

const optionOne: Element | null = document.querySelector("#option1");
if(optionOne != null){
	optionOne.addEventListener("click", blogButton);
}

function formsButton(): void {
	window.location.href = "#forms";
}

const optionTwo: Element | null = document.querySelector("#option2");
if(optionTwo != null){
	optionTwo.addEventListener("click", formsButton);
}

function eventsButton(): void {
	window.location.href = "#events";
}

const optionThree: Element | null = document.querySelector("#option3");
if(optionThree != null){
	optionThree.addEventListener("click", eventsButton);
}

function memorialsButton(): void {
	window.location.href = "#memorials";
}

const policiesObject: Element | null = document.querySelector("#option4");
if(policiesObject != null){
	policiesObject.addEventListener("click", memorialsButton);
}

function blogPageButton(): void {
	window.location.href = ("blog.html");
}

const blogButtons: NodeList = document.querySelectorAll(".blogs");

blogButtons.forEach(blogButton => {
	blogButton.addEventListener("click", blogPageButton);
})

function event1Button(): void {
	window.open("https://carolinaboxerrescue.org/facebook-event/beer-barks-and-brews-at-hi-wire-brewing/", "__blank");
}


const event1Object: Element | null = document.querySelector("#event1");
if(event1Object != null){
	event1Object.addEventListener("click", event1Button);
}

function event2Button(): void {
	window.open("https://carolinaboxerrescue.org/facebook-event/putts-fore-pups/", "__blank");
}

const event2Object: Element | null = document.querySelector("#event2");
if(event2Object != null){
	event2Object.addEventListener("click", event2Button);
}

function event3Button(): void {
	window.open("https://carolinaboxerrescue.org/facebook-event/piedmont-triad-farmers-market-2/", "__blank");
}

const event3Object: Element | null = document.querySelector("#event3");
if(event3Object != null){
	event3Object.addEventListener("click", event3Button);
}

function event4Button(): void {
	window.open("https://carolinaboxerrescue.org/facebook-event/the-10th-annual-boxer-bash/", "__blank");
}

const event4Object: Element | null = document.querySelector("#event4");
if(event4Object != null){
	event4Object.addEventListener("click", event4Button);
}

function adoptApplication(): void {
	window.open("https://carolinaboxerrescue.org/adoption-application/", "__blank");
}

const applicationObject: Element | null = document.querySelector("#adoptionApplication");
if(applicationObject != null){
	applicationObject.addEventListener("click", adoptApplication);
}

function volunteerApplication(): void {
	window.open("https://carolinaboxerrescue.org/volunteer-form/", "__blank");
}

const volunteerObject: Element | null = document.querySelector("#volunteerApplication");
if(volunteerObject != null){
	volunteerObject.addEventListener("click", volunteerApplication);
}

function fosterApplication(): void {
	window.open("https://carolinaboxerrescue.org/foster/", "__blank");
}

const fosterObject: Element | null = document.querySelector("#fosterApplication");
if(fosterObject != null){
	fosterObject.addEventListener("click", fosterApplication);
}

function surrenderApplication(): void {
	window.open("https://carolinaboxerrescue.org/owner-surrender/", "__blank");
}

const surrenderObject: Element | null = document.querySelector("#surrenderApplication");
if(surrenderObject != null){
	surrenderObject.addEventListener("click", surrenderApplication);
}

function memorialApplication(): void {
	window.open("https://carolinaboxerrescue.org/memorial-form/?doing_wp_cron=1787275639.5725250244140625000000", "__blank");
}

const memorialObject: Element | null = document.querySelector("#memorialApplication");
if(memorialObject != null){
	memorialObject.addEventListener("click", memorialApplication);
}

function buttonInstagram(): void {
	window.open("https://www.instagram.com/carolinaboxerrescue/", "__blank");
}

const buttonInstagramObject: Element | null = document.querySelector("#instagram");
if(buttonInstagramObject != null){
	buttonInstagramObject.addEventListener("click", buttonInstagram);
}

function buttonFacebook(): void {
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
