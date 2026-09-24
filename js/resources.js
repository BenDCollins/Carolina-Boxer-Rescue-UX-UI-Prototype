"use strict";
export {};
function blogButton() {
    window.location.href = "#blog";
}
const optionOne = document.querySelector("#option1");
if (optionOne != null) {
    optionOne.addEventListener("click", blogButton);
}
function formsButton() {
    window.location.href = "#forms";
}
const optionTwo = document.querySelector("#option2");
if (optionTwo != null) {
    optionTwo.addEventListener("click", formsButton);
}
function eventsButton() {
    window.location.href = "#events";
}
const optionThree = document.querySelector("#option3");
if (optionThree != null) {
    optionThree.addEventListener("click", eventsButton);
}
function memorialsButton() {
    window.location.href = "#memorials";
}
const policiesObject = document.querySelector("#option4");
if (policiesObject != null) {
    policiesObject.addEventListener("click", memorialsButton);
}
function blogPageButton() {
    window.location.href = ("blog.html");
}
const blogButtons = document.querySelectorAll(".blogs");
blogButtons.forEach(blogButton => {
    blogButton.addEventListener("click", blogPageButton);
});
function event1Button() {
    window.open("https://carolinaboxerrescue.org/facebook-event/beer-barks-and-brews-at-hi-wire-brewing/", "__blank");
}
const event1Object = document.querySelector("#event1");
if (event1Object != null) {
    event1Object.addEventListener("click", event1Button);
}
function event2Button() {
    window.open("https://carolinaboxerrescue.org/facebook-event/putts-fore-pups/", "__blank");
}
const event2Object = document.querySelector("#event2");
if (event2Object != null) {
    event2Object.addEventListener("click", event2Button);
}
function event3Button() {
    window.open("https://carolinaboxerrescue.org/facebook-event/piedmont-triad-farmers-market-2/", "__blank");
}
const event3Object = document.querySelector("#event3");
if (event3Object != null) {
    event3Object.addEventListener("click", event3Button);
}
function event4Button() {
    window.open("https://carolinaboxerrescue.org/facebook-event/the-10th-annual-boxer-bash/", "__blank");
}
const event4Object = document.querySelector("#event4");
if (event4Object != null) {
    event4Object.addEventListener("click", event4Button);
}
function adoptApplication() {
    window.open("https://carolinaboxerrescue.org/adoption-application/", "__blank");
}
const applicationObject = document.querySelector("#adoptionApplication");
if (applicationObject != null) {
    applicationObject.addEventListener("click", adoptApplication);
}
function volunteerApplication() {
    window.open("https://carolinaboxerrescue.org/volunteer-form/", "__blank");
}
const volunteerObject = document.querySelector("#volunteerApplication");
if (volunteerObject != null) {
    volunteerObject.addEventListener("click", volunteerApplication);
}
function fosterApplication() {
    window.open("https://carolinaboxerrescue.org/foster/", "__blank");
}
const fosterObject = document.querySelector("#fosterApplication");
if (fosterObject != null) {
    fosterObject.addEventListener("click", fosterApplication);
}
function surrenderApplication() {
    window.open("https://carolinaboxerrescue.org/owner-surrender/", "__blank");
}
const surrenderObject = document.querySelector("#surrenderApplication");
if (surrenderObject != null) {
    surrenderObject.addEventListener("click", surrenderApplication);
}
function memorialApplication() {
    window.open("https://carolinaboxerrescue.org/memorial-form/?doing_wp_cron=1787275639.5725250244140625000000", "__blank");
}
const memorialObject = document.querySelector("#memorialApplication");
if (memorialObject != null) {
    memorialObject.addEventListener("click", memorialApplication);
}
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
