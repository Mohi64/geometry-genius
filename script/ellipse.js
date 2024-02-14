function ellipseAreaInput() {
  const ellipseArea = document.getElementById("ellipse-a");
  const ellipseText = ellipseArea.value;
  const a = parseFloat(ellipseText);
  console.log(a);

  const ellipseAreaB = document.getElementById("ellipse-b");
  const ellipseTextB = ellipseAreaB.value;
  const b = parseFloat(ellipseTextB);
  console.log(b);

  const area = 3.14 * a * b;
  console.log("Area of the ellipse is:", area);

  const ellipseValue = document.getElementById("Ellipse-area");
  ellipseValue.innerText = area;
}
