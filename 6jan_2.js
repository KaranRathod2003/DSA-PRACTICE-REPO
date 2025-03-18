

var reverseWords = function (s) {
    let words = s.split(" "); // Split string into words
    for (let i = 0; i < words.length; i++) {
        let word = words[i].split(""); // Split word into characters
        let left = 0, right = word.length - 1;
        while (left < right) {
            // Swap characters
            [word[left], word[right]] = [word[right], word[left]];
            console.log([word[left], word[right]] = [word[right], word[left]])
            left += 1;
            right -= 1;
        }
        words[i] = word.join(""); // Join reversed characters back to form the word
    }
    return words.join(" "); // Join words with spaces to form the final string
};
console.log(reverseWords("Let's take LeetCode contest"))