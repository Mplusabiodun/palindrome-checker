let palindrome = document.getElementById("text-input");
let result = document.getElementById("result");
const button = document.getElementById("check-btn");

function palindromeChecker() {
  console.log(palindrome.value);
  if (palindrome.value === "") {
    return alert("Please input a value");
  }

  // Remove non-alphanumeric characters
  let lindrome = palindrome.value.toLowerCase().replace(/[^a-zA-Z0-9]/g, "");
  let alindrome = lindrome.split("").reverse().join("");

  // Compare the cleaned string with its reverse
  if (lindrome === alindrome) {
    result.textContent = `${palindrome.value} is a palindrome`;
  } else {
    result.textContent = `${palindrome.value} is not a palindrome`;
  }
}
button.addEventListener("click", palindromeChecker);
