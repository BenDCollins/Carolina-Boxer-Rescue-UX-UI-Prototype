"use strict";

function dogButton(){
	window.location.href = "#dogs"
}

document.querySelector("#option1").addEventListener("click", dogButton);

function applicationButton(){
	window.location.href = "#application"
}

document.querySelector("#option2").addEventListener("click", applicationButton);

function requirementsButton(){
	window.location.href = "#requirements"
}

document.querySelector("#option3").addEventListener("click", requirementsButton);

function policiesButton(){
	window.location.href = "#policies"
}

document.querySelector("#option4").addEventListener("click", policiesButton);

function adoptionApplication(){
	window.open("https://carolinaboxerrescue.org/adoption-application/", "__blank")
}

document.querySelector("#adoptionApplication").addEventListener("click", adoptionApplication)

function theGirlsButton(){
	window.open("https://carolinaboxerrescue.org/the-girls/?doing_wp_cron=1787322216.2802960872650146484375", "__blank")
}

document.querySelector("#theGirlsButton").addEventListener("click", theGirlsButton)

function theBoysButton(){
	window.open("https://carolinaboxerrescue.org/the-boys/", "__blank")
}

document.querySelector("#theBoysButton").addEventListener("click", theBoysButton)

function hospiceButton(){
	window.open("https://carolinaboxerrescue.org/hospice-fosters/?doing_wp_cron=1787322522.1419188976287841796875", "__blank")
}

document.querySelector("#hospiceButton").addEventListener("click", hospiceButton)

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

function upTriangle(){
	window.location.href = "#pageTop"
}

document.querySelector("#upTriangle").addEventListener("click", upTriangle);
