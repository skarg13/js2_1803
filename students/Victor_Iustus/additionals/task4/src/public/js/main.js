//task1
function regexpTask1(text) {
    return text.replace( /\'/g, '\"');
}

//task2
function regexpTask2(text) {
    const regexp  = /(?<=\S)\'(?!\S)|(?<!\S)\'(?=\S)/g;
    return text.replace(regexp, '\"');
}

export default function app() {

    //task1
    var text = document.querySelector("#task1").innerHTML
    document.querySelector("#task1-result").innerHTML = regexpTask1(text)

    //task2
    var text = document.querySelector("#task2").innerHTML
    document.querySelector("#task2-result").innerHTML = regexpTask2(text)
}