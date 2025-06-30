// Promise = An object that menages asynchronous operations. Wrap a promise object around {asunchronous code} `I promise to return a value` PENDINS -> RESOLVED or REJECTED. New Promise((resolve, rejected) => {asynchronous code})

//do this in order -> 1.walk the dog | 2.clean the kitchen | 3. take out the trash.

// Unsing calback hell

function walkDog(callback){
    setTimeout(() => {
        console.log(`You walk the dog!`)
    }, 1500)
    callback();
}

function cleanKitchen(callback){
    setTimeout(() => {
        console.log(`You clean the kitchen!`)
    }, 2500)
    callback();
}

function takeOutTrash(callback){
    setTimeout(() => {
        console.log(`You take out the trash !`)
    }, 500)
    callback();
}

walkDog(() => {
    cleanKitchen(() => {
        takeOutTrash(() => {
            console.log(`You finished the chores!`)
        })
    })
})

// using promise

function walkDog(){

    return new Promise((resolve, reject) => {
        setTimeout(() => {

            const dogWalked = true;
            if(dogWalked){
                resolve(`You walk the dog!`);
            } else{
                reject(`You DIDN'T wals the dog!`);
            }
        }, 1500)
    });
}

function cleanKitchen(){

    return new Promise((resolve, reject) => {
        setTimeout(() => {
            
            const kitchenCleaned = true;
            
            if(kitchenCleaned){
                resolve(`You clean the kitchen!`);
            } else{
                reject(`You DIDN'T clean the kitchen!`)
            }
        }, 2500)
    })
}

function takeOutTrash(){

    return new Promise((resolve, reject) => {
        setTimeout(() => {

            trashTakenOut = true;

            if(trashTakenOut){
                resolve(`You take out the trash !`);
            } else{
                reject(`You DIDN'T take out the trash!`)
            }
        }, 500)
    })
}

walkDog().then(value => {console.log(value); return cleanKitchen()})
        .then(value => {console.log(value); return takeOutTrash()})
        .then(value => {console.log(value); console.log(`You finished all the chores!`)}).catch(error => console.error(error));

