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
export {};
