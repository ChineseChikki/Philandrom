const textInput = document.getElementById('text-input');
const checkBtn = document.getElementById('check-btn');
const result = document.getElementById('result');

checkBtn.addEventListener('click', () => {
  const text = textInput.value.trim().toLowerCase();
  if (text === '') {
    alert('Please input a value');
    return;
  }

  const isPalindrome = checkPalindrome(text);
  if (isPalindrome) {
    result.textContent = `${text} is a palindrome`;
  } else {
    result.textContent = `${text} is not a palindrome`;
  }
});

function checkPalindrome(text) {
  const cleanText = text.replace(/[^a-z0-9]/g, '');
  const reversedText = cleanText.split('').reverse().join('');
  return cleanText === reversedText;
}
