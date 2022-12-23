console.log('person1: shows ticket');
console.log('person2: shows ticket');

const preMovie = async () => {

    const promiseWifeBringingTicks = new Promise((resolve, reject) => {
        setTimeout(() => resolve('ticket'), 3000);
    });

    const getPopcorn = new Promise((resolve, reject) => resolve(`popcorn`));
    const getButter = new Promise((resolve, reject) => resolve(`butter`));
    const getColdDrinks = new Promise((resolve, reject) => resolve(`cold drink`))

    let ticket = await promiseWifeBringingTicks;

    console.log(`wife: I have ${ticket}`);
    console.log('husband: we should go in');
    console.log('wife: No I am hungry');

    let popcorn = await getPopcorn;

    console.log(`husband: I got some ${popcorn}`);
    console.log('husband: we should go in');
    console.log('wife: I need butter on my popcorn');

    let butter = await getButter;

    console.log(`husband: I got some ${butter}`);
    console.log(`husband: anything else?`);

    let coldDrink = await getColdDrinks;

    console.log(`wife: I need some ${coldDrink} too`);
    console.log(`husband: Here is your ${coldDrink}`);

    return ticket;
};

preMovie().then((t) => console.log(`person4 shows ${t}`));


console.log('person4: shows ticket');
console.log('person5: shows ticket');


// const promiseWifeBringingTicks = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         resolve('ticket');
//     }, 3000);
// });

// const getPopcorn =  promiseWifeBringingTicks.then((t) => {
//     console.log('wife: I have ticks')
//     console.log('husband: we should go in');
//     console.log('wife: no i am hungry');
//     return new Promise((resolve, reject) => {
//         resolve(`${t} popcorn`);
//     });
// });

// const getButter = getPopcorn.then((t) => {
//     console.log('husband: I got some popcorn');
//     console.log('husband: we should go in');
//     console.log('wife: I need butter on my popcorn');
//     return new Promise((resolve, reject) => resolve(`${t} butter`) );
// });

// const getColdDrinks = getButter.then((t) => {
//     console.log('wife: I want some cold drink also');
//     console.log('husband: Let me get some then');
//     return new Promise((resolve, reject) => resolve(`${t} cold drink`))
// })

// getColdDrinks.then((t) => console.log(t));




// preMovie().then((m) => console.log(`person3 shows ${m}`));