var arr=[];
arr=[1, 2, 3, 4, 2, 4];
for (var i=0;i<arr.length;i++)
{
    for (var j=i+1;j<arr.length;j++)
    {
        if (arr[i]===arr[j]) {arr.splice(i,1); break;}
    }
}
console.log(arr);