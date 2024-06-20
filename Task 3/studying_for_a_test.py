"""

arr = [2 2 3 3 4 4 1]
days = 4

[2 2] = 4
[3 3] = 6 
[4] = 4
[4 1] = 5


Min max time = 6


min = 4 - the minimum nuber from which we will start the iteration is the largest number in the array
max = 19 - tha maximum nuber where we will end the iteration is the sum of all the elements

The numbers from 4 to 19 are the maximimum minimum numbers we can get.

We should iterate over all the numbers from 4 to 19
We should iterate over the elements of the array and add them one by one
For example -> 2 + 2 = 4
Then we should check if that number 4 is equal to the numbers from 4 to 19 
And if the sum if less or equal we add the next element in the array
else we start the next day + 1 with the next element in the array
The first time we get 4 days this is our maximum number

Example:

for max_number in 4 to 19:
    sum = 0
    days = 1
    for i in range lenght array:
        if array[i] + sum <= max_number
            sum += array[i]
        else: 
            sum = array[i]
            days += 1
    if days == 4:
    print(sum)

Iterataions:

First iteration number 4

subarrays:

[2 2] = 4
[3] = 3
[3] = 3
[4] = 4
[4] = 4
[1] = 1

total days -> 6

Second iteration number 5

[2 2] = 4
[3] = 3
[3] = 3
[4] = 4
[4, 1] = 5

total days -> 5

Third iteration

[2 2] = 4
[3,3] = 6
[4] = 4
[4,1] = 5

total days -> 4

This is the first iteration that we got the total days right so the number should be 6


"""


def solution(n,m,times):
    """
    n - days
    m - chapters
    times - list of time each chapter takes

    """

    for t in range(max(times), sum(times) + 1):
        max_sum = 0
        total_days = 1
        
        for i in range(m):
            if times[i] + max_sum <= t:
                max_sum += times[i]
            else:
                max_sum = times[i]
                total_days += 1
        
        if total_days == n:
            return t


# tests
# print(solution(4,7,[2, 2, 3, 3, 4, 4, 1]))
# print(solution(3,6,[30, 20, 10, 40, 5, 45]))
# print(solution(3,5,[1, 2, 2, 3, 1]))

