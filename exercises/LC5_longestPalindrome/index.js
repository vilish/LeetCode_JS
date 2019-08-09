//Given a string s, find the longest palindromic substring in s
// --- Example
// longestPalindrome("cbbd") --> "bb"
// longestPalindrome("abba") --> "abba"
// longestPalindrome("a") --> "a"

function longestPalindrome(s) {
    // expandAroundMiddle
    let startIndex = 0;
    let maxLength = 1;  // since single char string is a palindrome

    let midpoint = Math.floor(s.length) / 2;

    const expandAroundMiddle = (left, right) => {

        while (s[left] === s[right] && left >= 0 && right < s.length) {
            const currentPalindromeLength = right - left + 1;
            if (currentPalindromeLength > maxLength) {
                maxLength = currentPalindromeLength;
                startIndex = left;
            }

            left--;
            right++
        }

    }


    // loop all elements and expandAroundMiddle
    for (let i = 0; i < s.length; i++) {
        expandAroundMiddle(i - 1, i + 1);
        expandAroundMiddle(i, i + 1);
    }


    return s.slice(startIndex, startIndex + maxLength);


}

module.exports = longestPalindrome;
