class RemoveDuplicateLC26{
     public int duplicate(int[] arr1){
        int k = 1;
        for(int i = 1; i<arr1.length; i++){
            if(arr1[i] != arr1[k-1]){
                arr1[k] = arr1[i];
                k++;
            }
        }
        return k;
    }

    public static void main(String[] args) {
        int arr1[] = {0,0,1,1,1,2,2,3,3,4};
       RemoveDuplicateLC26 rd = new RemoveDuplicateLC26();
       System.out.println(rd.duplicate(arr1));
    }
}