//Frequency Counter Naive Solution

var array1 = [2, 2, 2];
var array2 = [4, 4, 4];

console.log(same(array1, array2));

function same(arr1, arr2)
{
	var flag = 0;
	var flagc = [];	

	if(arr1.length != arr2.length)	
		return false;
	
	for(var i = 0; i <= arr1.length; i++)
	{
		for(var j = 0; j <= arr2.length; j++)
		{
			if(arr1[i] ** 2 == arr2[j])
			{
				flag = 1;
				arr2.splice(j, 1);
				flagc.push(flag);
				break;
			}
		}
	}
	
	if(arr1.length == flagc.length)
		return true;
	else
		return false;
}