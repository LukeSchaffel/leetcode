# class Solution:
#   def intToRoman(self, num: int) -> str:
#     key = [["I", 1], ["IV", 4], ["V", 5], ["IX", 9], ["X", 10], ["XL", 40], ["L", 50], ["XC", 90], ["C", 100], ["CD", 400], ["D", 500], ["CM", 900], ["M", 1000]]

#     answer = ""
#     for sym, val in reversed(key):
#       if num // val:
#         count = num // val
#         answer += (sym * count)
#         num = num % val

#     return answer

#   intToRoman("Self", 25)



# Split Strings https://www.codewars.com/kata/515de9ae9dcfc28eb6000001/train/python

# def solution(s):
#     if len(s) == 0:
#         return []
#     res = []
#     pair = ''
#     for letter in s:
#         pair += letter
#         if len(pair) == 2:
#             res.append(pair)
#             pair = ''
#     if len(pair) % 2 != 0:
#         res.append(pair + '_')
#     return res
