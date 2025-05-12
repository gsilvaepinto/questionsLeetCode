const twoSum = (nums, target) => {
    const groupNums = [];

    for (let i = 0; i < nums.length; i++){
        for (let j = 0; j < nums.length; j++){
            if (nums[i] + nums[j] === target){
                groupNums.push([i, j]);
            }
        }
    }
    
    return groupNums;
}
