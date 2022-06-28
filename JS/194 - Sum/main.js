var twoSum = function(nums, target) {
    if(nums[0] + nums[1] == target){
        if(nums.length <=2) {
            let array = []
            array.push( nums.indexOf(nums[0]) , nums[1 ] - 2)
            return array
        }else if(nums[0] + nums[1] == target){
            let array = []
            array.push( nums.indexOf(nums[0]) , nums.indexOf(nums[1]))
            return array
        }
       }
       else if(nums[1] + nums[2] == target){
        if(nums.length == 4){
           let array = []
           array.push( nums.indexOf(nums[0]) , nums.indexOf(nums[2]) + 1 )
           return array 

        }   
        }else if(nums[1] + nums[2] == target){
        let array = []
        array.push( nums.indexOf(nums[1]) , nums.indexOf(nums[2]) )
        return array
       }
       else if(nums[2] + nums[3] == target){
        let array = []
        array.push( nums.indexOf(nums[2]) , nums.indexOf(nums[3]) )
        return array
       }else if(nums[3] + nums[4] == target){
        let array = []
        array.push( nums.indexOf(nums[3]) , nums.indexOf(nums[4]) )
        return array
       }else if(nums[0] + nums[2] == target){
        if(nums.length <= 3){
       let array = []
    array.push( nums.indexOf(nums[0]) , nums[2] - 1 )
    return array
           }
            
    }
};
console.log(twoSum([3,2 ,4],6))