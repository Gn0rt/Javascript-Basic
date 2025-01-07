const rs = document.getElementById('result');

const a = 5;
const b = 6;
const c = 7;

const halfPerimeter = (a + b + c) / 2;

const areaTriangle = Math.sqrt(halfPerimeter * (halfPerimeter - a) * (halfPerimeter - b) * (halfPerimeter - c));


rs.innerHTML = `The area of the Triangle is ${areaTriangle.toFixed(3)}`;