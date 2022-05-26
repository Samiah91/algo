var arr1 = [1, 2, 3];
var arr2=[1,2,3,4,5,6];
 function pop(arr)
    {
var last=arr[arr.length-1];
arr.length=arr.length-1
console.log(arr)
return last
    }
console.log(pop(arr1))
console.log(pop(arr2))
    
