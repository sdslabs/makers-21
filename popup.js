window.addEventListener("DOMContentLoaded",()=>{
    Link_open();
})
function Link_open() {
    var myWindow = window.open('https://www.facebook.com/');
    setTimeout(function () {
        window.alert("Your facebook watching time is over so the tab was closed");
           myWindow.close();
    }, 10000);
}
// function timer() {
//     setTimeout(Close_window, 10000);
// }
// function Close_window() {
//     myWindow.close();
// }
// function Click_me() {
//     document.getElementById('button').onclick = Link_open();
// }