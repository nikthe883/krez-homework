"""

7. Write a PHP program to sum of all numerical values (positive integers)
embedded in a sentence.
Sentences with positive integers are given over multiple lines. Each line is a
character string containing one-byte alphanumeric characters, symbols, spaces,
or an empty line. However the input is 80 characters or less per line and the sum
is 10,000 or less.
Sample Input:
5 apple and 10 orange are rotten in the basket
Sample Output:
Sum of the numeric values: 15


"""


def solution(sentance):
    sum = 0
    check = sentance.split(' ')
    for i in check:
        if i.isdigit():
            sum += int(i)
    return sum


print(solution("5 apple and 10 orange are rotten in the basket"))