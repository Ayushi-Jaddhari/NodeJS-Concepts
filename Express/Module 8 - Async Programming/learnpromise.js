
//how to produce promise


let myPromise = new Promise( function(resolve , reject){
    const a = 4;
    const b = 41;

    setTimeout(()=>{
        if(a == b ){
            resolve('The values are equal');
        }
        else{
            reject('The values are not equal');
        }
    }, 2000);
})
// Pending promise
//console.log('myPromise----------->',myPromise);



//fulfilled - use then method

myPromise.then((result)=>{
    console.log(result);
})


//rejected - use catch method

myPromise.catch((rejectedMessage)=>{
    console.log(rejectedMessage);
})