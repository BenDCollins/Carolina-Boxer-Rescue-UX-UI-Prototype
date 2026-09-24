"use strict";
export {};

function companyInformationButton(): void {
	window.location.href = "#companyInformation";
}

const optionOne: Element | null = document.querySelector("#option1");
if(optionOne != null){
	optionOne.addEventListener("click", companyInformationButton);
}

function contactButton(): void {
	window.location.href = "#contact";
}

const optionTwo: Element | null = document.querySelector("#option2");
if(optionTwo != null){
	optionTwo.addEventListener("click", contactButton);
}

function meetTheTeamButton(): void {
	window.location.href = "#meetTheTeam";
}

const optionThree: Element | null = document.querySelector("#option3");
if(optionThree != null){
	optionThree.addEventListener("click", meetTheTeamButton);
}

function reportsButton(): void {
	window.location.href = "#reports";
}

const policiesObject: Element | null = document.querySelector("#option4");
if(policiesObject != null){
	policiesObject.addEventListener("click", reportsButton);
}

function report2025(): void {
	window.open("https://drive.google.com/file/d/1id-5lIrRZ_fddQL_CRp7J1qZx4bGOQMn/view", "__blank");
}

const impact2025: Element | null = document.querySelector("#impact2025");
if(impact2025 != null){
	impact2025.addEventListener("click", report2025);
}

function report2024(): void {
	window.open("https://drive.google.com/file/d/1tTxA5lBCeSJ_M1ou57c-KKbG2L6IQK-4/view", "__blank");
}

const impact2024: Element | null = document.querySelector("#impact2024");
if(impact2024 != null){
	impact2024.addEventListener("click", report2024);
}

function report2023(): void {
	window.open("https://drive.google.com/file/d/1xMYQ2Ch31HP2nO_kkUjgZn1XWx1SbHDC/view", "__blank");
}

const impact2023: Element | null = document.querySelector("#impact2025");
if(impact2023 != null){
	impact2023.addEventListener("click", report2023);
}

function volunteerApplication(): void {
	window.open("https://carolinaboxerrescue.org/volunteer-form/", "__blank");
}

const volunteerObject: Element | null = document.querySelector("#volunteerApplication");
if(volunteerObject != null){
	volunteerObject.addEventListener("click", volunteerApplication);
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
