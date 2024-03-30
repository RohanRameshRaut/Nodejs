const circle = (r) => {
    console.log("Area of a circle is: " + 3.14 * r * r);
};
const circumference_circle = (r) => {
    console.log("Circumference of a circle is: " + 2 * 3.14 * r);
};
module.exports.circle = circle;
module.exports.circumference_circle = circumference_circle;
