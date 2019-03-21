	//Frequency Counter 

// declare array objects
var array1 = [2, 2, 2];
var array2 = [4, 4, 4];

// output function
console.log(same(array1, array2));

function same(arr1, arr2)
{
	var flag = 0;
	var flagc = [];	
	
	//If arrays are not the same initial length, return false
	if(arr1.length != arr2.length)	
		return false;
	
	// two loops to compare each and every number in one array to the other 
	for(var i = 0; i <= arr1.length; i++)
	{
		for(var j = 0; j <= arr2.length; j++)
		{
			//check if number in second array is the squared version of the initial number
			if(arr1[i] ** 2 == arr2[j])
			{
				//if this bit of code passes, set flag to 1 and store it in the flag array
				flag = 1;
				arr2.splice(j, 1);
				flagc.push(flag);
				break;
			}
		}
	}
	
	//if the flag array is the same length as array 1, that means that no problems have occured in the double for loop and thus return true, other wise returns false
	if(arr1.length == flagc.length)
		return true;
	else
		return false;
}
