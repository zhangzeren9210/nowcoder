function testUpper(s){
    var pattern = /^[A-Z]+$/;
    return pattern.test(s);
}
function trans(s,n)
{
    var res = [];
    if(n === 0) return res;
    s = s.split('');
    for(var i = 0;i < s.length;i++)
    {
        if(testUpper(s[i])){
            s[i] = s[i].toLocaleLowerCase();
        }
        else{
        s[i] = s[i].toLocaleUpperCase();
        }
    }
     res = s.join('').split(' ').reverse().join(' ');
    return res;
}
module.exports = {
    trans : trans
}