// Given a string, return the length of the longest substring without
// repeating characters.
// --- Example
// lengthOfLongestSubstring("abcabcbb") --> 3 since length of "abc"
// lengthOfLongestSubstring("bbbbb") --> 1 since length of "b"

function lengthOfLongestSubstring(s) {
    // sliding window having char and index. approach - O(n)
    let windowCharMap = {};


    let max = 0;
    let maxString = '';  // just in case need to return max string
    let start = 0;

    for (let i = 0; i < s.length; i++) {
        let endChar = s[i];


        //check whether it is map and has value more than start, increase start then
        if (windowCharMap[endChar] >= start) {
            start = windowCharMap[endChar] + 1;
        }

        // update the endChar in map
        windowCharMap[endChar] = i;

        max = Math.max(max, i - start + 1);

        if (maxString.length < i - start + 1) {
            maxString = s.substring(start, i + 1);
        }

    }
    console.log(maxString);
    return max;
}

module.exports = lengthOfLongestSubstring;

// let max = lengthOfLongestSubstring("abca");
// console.log(max);
//
// max = lengthOfLongestSubstring("abcb");
// console.log(max);
//
// max = lengthOfLongestSubstring("abcc");
// console.log(max);

// max = lengthOfLongestSubstring("abbbbb");
// console.log(max);
