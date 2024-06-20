"""
15. Write a PHP program to return all elements in a given array except for the first
one.
Sample Output:
Array
(
[0] => 2
[1] => 3


"""

def solution(array):

    return array[1:]


arr = [1,2,3,4,5,6,7,8,9,10,11]

print(solution(arr))
