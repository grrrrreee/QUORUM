const request = new XMLHttpRequest();
const url = 'https://upbit.com/home';

request.open("GET", url, false);
request.send();
var obj = JSON.parse(request.responseText);
console.log(obj);  

// const request = new XMLHttpRequest();
// const url = 'https://api.upbit.com/v1/market/all';

// request.open("GET", url, false);
// request.send();
// var obj = JSON.parse(request.responseText);
// console.log(obj);