console.log('test');
let actualCode = '(' + function() {
    delete navigator.__proto__.webdriver;
    console.log(123467454)
} + ')();';

let script = document.createElement('script');
script.textContent = actualCode;
(document.head||document.documentElement).appendChild(script);
script.remove();
