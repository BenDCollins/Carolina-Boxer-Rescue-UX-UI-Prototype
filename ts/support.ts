"use strict";
export {};

function fosterButton(): void {
	window.location.href = "#foster";
}

const optionOne: Element | null = document.querySelector("#option1");
if(optionOne != null){
	optionOne.addEventListener("click", fosterButton);
}

function volunteerButton(): void {
	window.location.href = "#volunteer";
}

const optionTwo: Element | null = document.querySelector("#option2");
if(optionTwo != null){
	optionTwo.addEventListener("click", volunteerButton);
}

function donateButton(): void {
	window.location.href = "#donate";
}

const optionThree: Element | null = document.querySelector("#option3");
if(optionThree != null){
	optionThree.addEventListener("click", donateButton);
}

function supportButton(): void {
	window.location.href = "#support";
}

const policiesObject: Element | null = document.querySelector("#option4");
if(policiesObject != null){
	policiesObject.addEventListener("click", supportButton);
}

function volunteerApplication(): void {
	window.open("https://carolinaboxerrescue.org/volunteer-form/", "__blank");
}

const volunteerObject: Element | null = document.querySelector("#volunteer");
if(volunteerObject != null){
	volunteerObject.addEventListener("click", volunteerApplication);
}

function fosterApplication(): void {
	window.open("https://carolinaboxerrescue.org/foster/", "__blank");
}

const fosterObject: Element | null = document.querySelector("#foster");
if(fosterObject != null){
	fosterObject.addEventListener("click", fosterApplication);
}

function gift(): void {
	window.open("https://carolinaboxerrescue.org/make-a-gift/", "__blank")
}

const giftObject: Element | null = document.querySelector("#gift");
if(giftObject != null){
	giftObject.addEventListener("click", gift);
}

function nubClub(): void {
	window.open("https://carolinaboxerrescue.org/the-nub-club/", "__blank")
}

const nubObject: Element | null = document.querySelector("#nubClub");
if(nubObject != null){
	nubObject.addEventListener("click", nubClub);
}

function donateSupplies(): void {
	window.open("https://carolinaboxerrescue.org/donate-supplies/", "__blank");
}

const suppliesObject: Element | null = document.querySelector("#donateSupplies");
if(suppliesObject != null){
	suppliesObject.addEventListener("click", donateSupplies);
}

function inHonor(): void {
	window.open("https://carolinaboxerrescue.org/in-honor-memory-donations/", "__blank");
}

const honorObject: Element | null = document.querySelector("#inHonor");
if(honorObject != null){
	honorObject.addEventListener("click", inHonor);
}

function donorAdvised(): void {
	window.open("https://carolinaboxerrescue.org/donor-advised-funds/", "__blank");
}

const donorObject: Element | null = document.querySelector("#donorAdvised");
if(donorObject != null){
	donorObject.addEventListener("click", donorAdvised);
}

function boxerGuardians(): void {
	window.open("https://carolinaboxerrescue.org/legacy-society/", "__blank");
}

const guardianObject: Element | null = document.querySelector("#boxerGuardians");
if(guardianObject != null){
	guardianObject.addEventListener("click", boxerGuardians);
}

function lifeline(): void {
	window.open("https://carolinaboxerrescue.org/medical-donations/?doing_wp_cron=1786909846.0604350566864013671875", "__blank");
}

const lifelineObject: Element | null = document.querySelector("#memorialApplication");
if(lifelineObject != null){
	lifelineObject.addEventListener("click", lifeline);
}

function giveAtWork(): void {
	window.open("https://carolinaboxerrescue.org/matching-gifts/?doing_wp_cron=1786909924.2863640785217285156250", "__blank");
}

const workObject: Element | null = document.querySelector("#giveAtWork");
if(workObject != null){
	workObject.addEventListener("click", giveAtWork);
}

function sponsorFoster(): void {
	window.open("https://carolinaboxerrescue.org/sponsor/", "__blank");
}

const sponsorObject: Element | null = document.querySelector("#sponsorFoster");
if(sponsorObject != null){
	sponsorObject.addEventListener("click", sponsorFoster);
}

function shop(): void {
	window.open("https://www.zeffy.com/en-US/ticketing/carolina-boxer-rescues-online-store", "__blank");
}

const shopObject: Element | null = document.querySelector("#shop");
if(shopObject != null){
	shopObject.addEventListener("click", shop);
}

function nameNub(): void {
	window.open("https://carolinaboxerrescue.org/name-a-nub/", "__blank");
}

const nameObject: Element | null = document.querySelector("#nameNub");
if(nameObject != null){
	nameObject.addEventListener("click", nameNub);
}

function parterShop(): void {
	window.open("https://carolinaboxerrescue.org/friends-of-cbr/", "__blank");
}

const partnerObject: Element | null = document.querySelector("#partnerShop");
if(partnerObject != null){
	partnerObject.addEventListener("click", parterShop);
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
