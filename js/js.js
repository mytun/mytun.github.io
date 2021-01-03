

function setCookie(key, value) {
    localStorage.setItem(key, value);
}

function getCookie(key) {
    var data = localStorage.getItem(key);
    return data
}

const date = new Date()
const hours = date.getHours()
$("#date").text(date.getFullYear())
// if(hours<18&&hours>6){
//     $("#footer").attr("style", "color: #51525d;");
//     $(".flink").attr("style", "color: #51525d;");
//     $(".ba").attr("style", "color: #51525d;");
//     $("#bodyx").attr("class", "bg_while");
// } else {
//     $("#footer").attr("style", "");
//     $(".flink").attr("style", "");
//     $("#bodyx").attr("class", "");
//     $(".ba").attr("style", "");
// }

