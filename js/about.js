"use strict";

function companyInformationButton(){
	window.location.href = "#companyInformation"
}

document.querySelector("#option1").addEventListener("click", companyInformationButton);

function contactButton(){
	window.location.href = "#contact"
}

document.querySelector("#option2").addEventListener("click", contactButton);

function meetTheTeamButton(){
	window.location.href = "#meetTheTeam"
}

document.querySelector("#option3").addEventListener("click", meetTheTeamButton);

function reportsButton(){
	window.location.href = "#reports"
}

document.querySelector("#option4").addEventListener("click", reportsButton);

function report2025(){
	window.open("https://drive.google.com/file/d/1id-5lIrRZ_fddQL_CRp7J1qZx4bGOQMn/view", "__blank")
}

document.querySelector("#impact2025").addEventListener("click", report2025);

function report2024(){
	window.open("https://drive.google.com/file/d/1tTxA5lBCeSJ_M1ou57c-KKbG2L6IQK-4/view", "__blank")
}

document.querySelector("#impact2024").addEventListener("click", report2024);

function report2023(){
	window.open("https://drive.google.com/file/d/1xMYQ2Ch31HP2nO_kkUjgZn1XWx1SbHDC/view", "__blank")
}

document.querySelector("#impact2023").addEventListener("click", report2023);

function volunteerApplication(){
	window.open("https://carolinaboxerrescue.org/volunteer-form/", "__blank")
}

document.querySelector("#volunteerApplication").addEventListener("click", volunteerApplication);

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
