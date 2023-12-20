


window.addEventListener('DOMContentLoaded', () => {
    let divMathOutput = document.querySelectorAll('#MathText');
    for (let i = 0; i < divMathOutput.length; i++){
        divMathOutput[i].innerHTML = katex.renderToString(divMathOutput[i].innerHTML);
    }
});