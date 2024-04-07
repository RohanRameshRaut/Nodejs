const Ebill = (consumedUnit)=>{
    let baseAmt = 100;
    let unitRate = 5;

    let billAmt = baseAmt + (consumedUnit*unitRate);

    return billAmt;
}
module.exports = Ebill;