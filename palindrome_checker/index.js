let palindrome = document.getElementById("text-input");
let alindrome = palindrome.value.toLowerCase();
let result = document.getElementById("result");
const button = document.getElementById("check-btn");

function palindromeChecker() {
  console.log(palindrome.value);
  if (palindrome.value === "") {
    return alert("Please input a value");
  }
  // Compare the cleaned string with its reverse
  if (alindrome === alindrome.split("").reverse().join("")) {
    result.textContent = `${palindrome.value} is a palindrome`;
  } else {
    result.textContent = `${palindrome.value} is not a palindrome`;
  }
}
button.addEventListener("click", palindromeChecker);
