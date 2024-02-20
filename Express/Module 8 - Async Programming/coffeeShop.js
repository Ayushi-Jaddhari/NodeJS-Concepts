
function placeOrder(drink){
    return new Promise ((resolve , reject)=>{
        if(drink == 'coffee'){
            resolve('Order for coffee is recieved');
        }
        else{
            reject('Other orders are rejected');
        }
    })
}

function processOrder(order){
    return new Promise(function(resolve){
        console.log('Order is being processed');
        resolve(`${order} and is Served`);
    })
};

//Chaining of promises
// placeOrder('coffee').then(( orderPlaced) =>{
//     console.log(orderPlaced);

//     let orderIsProcessed = processOrder(orderPlaced);
//     return orderIsProcessed;

// }).then(function (processedOrder){
//     console.log(processedOrder);

// }).catch((error) =>{
//     console.log(error);
// })


//To avoid chaing of promises, we can use Async Await

async function ServeOrder(order){
    try{
        let orderPlaced = await placeOrder(order);
        console.log(orderPlaced);
        let processedOrder = await processOrder(orderPlaced);
        console.log(processedOrder);
    }catch(err){
        console.log(err);
    }

}

ServeOrder('coffee');
ServeOrder('Soup');