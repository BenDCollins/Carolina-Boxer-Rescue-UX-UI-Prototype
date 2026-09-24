"use strict";
export {};

function dogButton(): void {
	window.location.href = "#dogs";
}

const optionOne: Element | null = document.querySelector("#option1");
if(optionOne != null){
	optionOne.addEventListener("click", dogButton);
}

function applicationButton(): void {
	window.location.href = "#application";
}

const optionTwo: Element | null = document.querySelector("#option2");
if(optionTwo != null){
	optionTwo.addEventListener("click", applicationButton);
}

function requirementsButton(): void {
	window.location.href = "#requirements";
}

const optionThree: Element | null = document.querySelector("#option3");
if(optionThree != null){
	optionThree.addEventListener("click", requirementsButton);
}

function policiesButton(): void {
	window.location.href = "#policies";
}

const policiesObject: Element | null = document.querySelector("#option4");
if(policiesObject != null){
	policiesObject.addEventListener("click", policiesButton);
}

function adoptionApplication(): void {
	window.open("https://carolinaboxerrescue.org/adoption-application/", "__blank");
}

const adoptionObject: Element | null = document.querySelector("#adoptionApplication");
if(adoptionObject != null){
	adoptionObject.addEventListener("click", adoptionApplication);
}

function theGirlsButton(): void {
	window.open("https://carolinaboxerrescue.org/the-girls/?doing_wp_cron=1787322216.2802960872650146484375", "__blank");
}


const theGirlsObject: Element | null = document.querySelector("#theGirlsButton");
if(theGirlsObject != null){
	theGirlsObject.addEventListener("click", theGirlsButton);
}

function theBoysButton(): void {
	window.open("https://carolinaboxerrescue.org/the-boys/", "__blank");
}

const theBoysObject: Element | null = document.querySelector("#theBoysButton");
if(theBoysObject != null){
	theBoysObject.addEventListener("click", theBoysButton);
}

function hospiceButton(){
	window.open("https://carolinaboxerrescue.org/hospice-fosters/?doing_wp_cron=1787322522.1419188976287841796875", "__blank");
}

const hospiceObject: Element | null = document.querySelector("#hospiceButton");
if(hospiceObject != null){
	hospiceObject.addEventListener("click", hospiceButton);
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
