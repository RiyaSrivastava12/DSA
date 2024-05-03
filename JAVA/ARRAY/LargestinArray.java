

class LargestinArray{

    public int largest(int[] arr1){
        int largest = arr1[0];
        for(int i = 0; i<arr1.length-1; i++){
           // System.out.println(arr1[i]);

            if(arr1[i] > largest){
                largest = arr1[i];
            }
        }
        return largest;
    }
    public static void main(String[] args) {
       int arr1[] = {2, 7, 11, 15,0,22,20,1};

       LargestinArray objref = new LargestinArray();
       System.out.println(objref.largest(arr1));
    }
}