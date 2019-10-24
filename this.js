console.log('Hello World');
// (function init() {
//     console.log('Init...');

//     var btn = document.createElement('button');
//     btn.addEventListener('click', function(){
//         if(true){
//             addContent();
//         }
//     });
//     btn.textContent = 'Add 0';
//     btn.classList.add('btn', 'btn-primary', 'shadow-none');
//     document.body.appendChild(btn);

// })();

// function addContent() {
//     var counter = ((this.textContent) ? Number.parseInt(this.textContent.split(" ")[1]) : 0) + 1;
//     this.textContent = 'Add ' + counter;

// }
   



console.log(this); //will return *undefined*
function fn(){
    console.log(  'fn:',this);  //will return window
}

var abc = fn();
(function(){
    console.log('IIFE',this); //will return *undefined*
})();







function myConstructor() {
    this.a = 'foo';
    this.b = 'bar';
}

var myInstance     = new myConstructor(); // all cool, all fine. a and b were created in a new local object
//var myBadInstance  = myConstructor(); // oh my gosh, we just created a, and b on the window object







