# def reverseWords(s):
#     words = s.split()  # String ko words mein split karte hain
#     for i in range(len(words)):
#         word = list(words[i])  # Word ko list mein convert karte hain
#         left, right = 0, len(word) - 1
#         while left < right:
#             # Swap characters
#             word[left], word[right] = word[right], word[left]
#             left += 1
#             right -= 1
#         words[i] = ''.join(word)  # Word ko wapas string mein convert karte hain
#     return ' '.join(words)  # Sab words ko wapas join karte hain

# # Example Call
s = "Let's take LeetCode contest"
# print(reverseWords(s))


words = s.split()
print(words)
for i in range(len(words)):
    word = list(words[i])
    print(word)