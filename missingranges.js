//Objective is to find the missing ranges of a given sequence, starting from 'lower'
//to 'upper'

let nums = [0, 1, 3, 50, 75], lower = 0, upper = 99


//O(n) solution that iterates over the array and, if the difference between two elements
//is >= 2, then we add it to the result

nums.unshift(lower - 1)
nums.push(upper + 1)
let result = []

for (let i = 0; i < nums.length; i++) {
    if (nums[i + 1] - nums[i] == 2) {
        result.push((nums[i] + 1).toString())
    } else if (nums[i + 1] - nums[i] > 2) {
        result.push((nums[i] + 1).toString() + '->' + (nums[i + 1] - 1).toString())
    }
}

return result