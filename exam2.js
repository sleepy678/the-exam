let reverse = function (x) {
    if (x<0) return -reverse(-x)
    else
    {
    var n,d=x%10,a;
    n=x;
    while(parseInt(n/10)>0)
    {
        n=parseInt(n/10);
        d*=10;
    }
    if (x<10) return x;
    else return (parseInt(x/10))+d;
}
}
var a=reverse(-312)
console.log(a)