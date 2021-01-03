document.addEventListener('DOMContentLoaded', (event) => {
    document.querySelectorAll('pre').forEach((block) => {
        hljs.highlightBlock(block);
    });
});

const date = new Date()
const hours = date.getHours()
$("#date").text(date.getFullYear())
if(hours<18&&hours>6){
    $("#footer").attr("style", "color: #51525d;");
    $(".flink").attr("style", "color: #51525d;");
    $(".ba").attr("style", "color: #51525d;");
    $("#bodyx").attr("class", "bg_while");
} else {
    $("#footer").attr("style", "");
    $(".flink").attr("style", "");
    $("#bodyx").attr("class", "");
    $(".ba").attr("style", "");
}

