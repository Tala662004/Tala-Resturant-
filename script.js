alert("Welcome to Tala Food!");

// 2) عند إرسال الفورم: نقرأ القيم ونتأكد من howMuch رقم
var form = document.querySelector(".form");

form.onsubmit= function () {

  var name = document.getElementById("name").value;
  var email = document.getElementById("email").value;
  var number = document.getElementById("number").value;
  var howMuch = document.getElementById("howMuch").value;
  var food = document.getElementById("food").value;
  var address = document.getElementById("address").value;

  // howMuch لازم يكون رقم
  if (isNaN(howMuch) || howMuch === "") {
    alert("Please enter a valid number in 'How Much'.");
    return false;
  }

  // رسالة تأكيد
  alert(
    "Order Confirmed ✅\n" +
    "Name: " + name + "\n" +
    "Food: " + food + "\n" +
    "How Much: " + howMuch + "\n" +
    "Address: " + address
  );
  return false;
};