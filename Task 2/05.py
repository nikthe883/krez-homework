""" 
5. Write a PHP program to compute the sum of first n given prime numbers.
Input: n (n = 10000). Input 0 to exit the program.
Sample Input:
25
0
Sample Output:
Sum of first 25 prime numbers:1060


"""


def is_prime(num):
    if num <= 1:
        return False
    for i in range(2, int(num ** 0.5) + 1):
        if num % i == 0:
            return False
    return True

def solution(n):
    prime_sum = 0
    for i in range(2, n):
        if is_prime(i):
            prime_sum += i

    return prime_sum

print(solution(25)) 
