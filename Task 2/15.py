"""
15. Write a PHP program to retrieve all of the values for a given key.
Sample Output:
Array
(
[0] => Computer
[1] => Laptop)

"""

def solution(dict, key):
    return dict[key]

my_dict = {'examples': [1,2,3,4,5,6,7,8,9,10,11]}

print(solution(my_dict, 'examples'))