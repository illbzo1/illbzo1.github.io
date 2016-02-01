// Write a JavaScript program to find the area of a triangle
// where lengths of the three of its sides are 5, 6, 7.

// Note: I've changed the program slightly, such that this program will
// accept user input for 3 values, validate that they can make a triangle,
// and then return the area to 4 decimal places.

function triangleArea() {
  var a = parseInt(document.getElementById('side1').value);
  var b = parseInt(document.getElementById('side2').value);
  var c = parseInt(document.getElementById('side3').value);

  var s = ((a + b + c) * 0.5);
  area = Math.sqrt(s * (s - a) * (s - b) * (s - c));
  area = area.toFixed(4);

  if (a <= 0 || b <= 0 || c <= 0) {
  	alert("All lengths must be greater than zero. Try again!")
  } else if (a + b > c && a + c > b && b + c > a) {
    alert("The area of your triangle is " + area);
  } else
  alert("These lengths can't make a triangle. Try again!");
};