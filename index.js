/**
 * Created by Administrator on 2017/4/13.
 */
var VersionCompare=function(currVer,promoteVer){
    currVer=currVer||"0.0.0";
    promoteVer=promoteVer||"0.0.0";
    if(currVer==promoteVer) return false;
    var currVerArr=currVer.split(".");

    var promoteVerArr=promoteVer.split(".");
    var len=Math.max(currVerArr.length,promoteVerArr.length);
    for(var i=0;i<len;i++){
        var curVal=currVerArr[i],
            proVal=promoteVerArr[i];
        if(proVal<curVal){
            return false;
        }else if(proVal>curVal){
            return true;
        }
    }
    return false;
};
console.log(VersionCompare("5.3.5","6.3"));