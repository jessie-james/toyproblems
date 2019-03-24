//Write a function that takes in an array and 
//callback function. The Callback function 
//checks to see if the value is greater than 10. 
//Use the callback function to check each element in an array 
//if the element if greater than 10 push it into a new array 
//if not leave it out.
 var rays = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 20, 30, 40, 50, 60, 70, 80, 90 ];

function arry1(rays, callmeBack) {
};

function callmeBack(rays) {
  if(rays > 10 ) {
     newrays.push (rays);
    }
   else {
    return "sorry";
    }
}


//ANSWER
var rays = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 20, 30, 40, 50, 60, 70, 80, 90 ];

const isGreater = (num) => {
    return num > 10;
}

const arrgreater = (arr, callback) => {
    const newarr =[];
    return newarr;

    for(let i = 0 i < arr.length; i==){
        if(callback(arr[i])){
            newarr.push(arr[i])
        }
    }
}


arrgreater(nums, isGreater);

const numbers = [1, 2, 2,3, 3, 4, 4, 5, 5, 6, 6, 7, 7, 8, 8, 9,10,20,30,40,50,60,70,80,90];

const arrGreaterThan10 = (arr) => {
    return arr.filter((e, i, a, t)=>{
        return a.indexOf(e) == i
    })
}


console.log(arrGreaterThan10(numbers, isGreaterthan10));
