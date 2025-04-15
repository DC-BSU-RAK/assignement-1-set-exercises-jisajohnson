//Calculation functions
function calculate() {
  const price = parseFloat(document.getElementById("Price").value); //To connect with the Price in html
  const litres = parseFloat(document.getElementById("Litrespurchased").value); //To connect with the litersPurchased in html
  const total = price * litres; //Does the calculation 
  document.querySelector("p").textContent = `Total Cost: £${total.toFixed(2)}`; //After the calculation the default value will change to the calculated value
}