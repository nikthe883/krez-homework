"""
2. Write a PHP program that accepts six numbers as input and sorts them in
descending order.
Input: Input consists of six numbers n1, n2, n3, n4, n5, n6 (-100000 = n1, n2, n3,
n4, n5, n6 = 100000). The six numbers are separated by a space.
Output:

"""


def sort_descending(numbers):
    numbers.sort(reverse=True)
    return numbers


# alternative

def bubble_sort(numbers):
    n = len(numbers)
    for i in range(n):
        for j in range(0, n-i-1):
            if numbers[j] > numbers[j+1]:
                numbers[j], numbers[j+1] = numbers[j+1], numbers[j]
    return numbers[::-1]


arr = [2,6,7,8,4,3]

print(sort_descending(arr))
print(bubble_sort(arr))

