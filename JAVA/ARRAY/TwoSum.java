
import java.util.Arrays;
import java.util.HashMap;
import java.util.Map;

//LC_1_TwoSum.js

class TwoSum{

    public int[] twoSum(int[] nums, int target){

        Map<Integer, Integer> map = new HashMap<>();

        for(int i = 0; i<nums.length; i++){
            int diff = target - nums[i] ;

           // System.out.println("diff"+ diff);

            if(map.containsKey(diff)){
              //  System.out.println("map"+map.containsValue(diff));
             
                return new int[]{map.get(diff),i};
            }

             map.put(nums[i], i);
            }

            return null;
           
        }
    
    

    public static void main(String[] args) {
        TwoSum ts = new TwoSum();
        int nums[] = {2,7,11,15};
        int target = 9;
        System.out.println(Arrays.toString(ts.twoSum(nums, target)));
    }
}