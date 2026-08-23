"use strict";

function blogButton(){
	window.location.href = "#blog"
}

document.querySelector("#option1").addEventListener("click", blogButton);

function formsButton(){
	window.location.href = "#forms"
}

document.querySelector("#option2").addEventListener("click", formsButton);

function eventsButton(){
	window.location.href = "#events"
}

document.querySelector("#option3").addEventListener("click", eventsButton);

function memorialsButton(){
	window.location.href = "#memorials"
}

document.querySelector("#option4").addEventListener("click", memorialsButton);

function blogPageButton(){
	window.location.href = ("blog.html")
}

let blogButtons = document.querySelectorAll(".blogs");

blogButtons.forEach(blogButton => {
	blogButton.addEventListener("click", blogPageButton)
})

function event1Button(){
	window.open("https://carolinaboxerrescue.org/facebook-event/beer-barks-and-brews-at-hi-wire-brewing/", "__blank")
}

document.querySelector("#event1").addEventListener("click", event1Button)

function event2Button(){
	window.open("https://carolinaboxerrescue.org/facebook-event/putts-fore-pups/", "__blank")
}

document.querySelector("#event2").addEventListener("click", event2Button)

function event3Button(){
	window.open("https://carolinaboxerrescue.org/facebook-event/piedmont-triad-farmers-market-2/", "__blank")
}

document.querySelector("#event3").addEventListener("click", event3Button)

function event4Button(){
	window.open("https://carolinaboxerrescue.org/facebook-event/the-10th-annual-boxer-bash/", "__blank")
}

document.querySelector("#event4").addEventListener("click", event4Button)

function adoptApplication(){
	window.open("https://carolinaboxerrescue.org/adoption-application/", "__blank")
}

document.querySelector("#adoptionApplication").addEventListener("click", adoptApplication)

function volunteerApplication(){
	window.open("https://carolinaboxerrescue.org/volunteer-form/", "__blank")
}

document.querySelector("#volunteerApplication").addEventListener("click", volunteerApplication)

function fosterApplication(){
	window.open("https://carolinaboxerrescue.org/foster/", "__blank")
}

document.querySelector("#fosterApplication").addEventListener("click", fosterApplication)

function surrenderApplication(){
	window.open("https://carolinaboxerrescue.org/owner-surrender/", "__blank")
}

document.querySelector("#surrenderApplication").addEventListener("click", surrenderApplication)

function memorialApplication(){
	window.open("https://carolinaboxerrescue.org/memorial-form/?doing_wp_cron=1787275639.5725250244140625000000", "__blank")
}

document.querySelector("#memorialApplication").addEventListener("click", memorialApplication)

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