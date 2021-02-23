// slowMath.add(6, 2).then(num => {
//     console.log(num);
//     return slowMath.multiply(num, 2);
// }).then(num => {
//     console.log(num);
//     return slowMath.divide(num, 4);
// }).then(num => {
//     console.log(num);
//     return slowMath.subtract(num, 3);
// }).then(num => {
//     console.log(num);
//     return slowMath.add(num, 98);
// }).then(num => {
//     console.log(num);
//     return slowMath.remainder(num, 2);
// }).then(num => {
//     console.log(num);
//     return slowMath.multiply(num, 50);
// }).then(num => {
//     console.log(num);
//     return slowMath.remainder(num, 40);
// }).then(num => {
//     console.log(num);
//     return slowMath.add(num, 32);
// }).then(num => {
//     console.log(`Final result is ${num}.`)
// }).catch(err => {
//     console.log(err);
// });

async function doMath() {  
    try{
    const sum = await slowMath.add(6, 2);
    console.log(`${sum}`);
    const product = await slowMath.multiply(sum, 2);
    console.log(`${product}`);
    const divided = await slowMath.divide(product, 4);
    console.log(`${divided}`);
    const subtracted = await slowMath.subtract(divided, 3);
    console.log(`${subtracted}`);
    const add98 = await slowMath.add(subtracted, 98);
    console.log(`${add98}`);
    const remainderAfterDividedBy2 = await slowMath.remainder(add98, 2);
    console.log(`${remainderAfterDividedBy2}`);
    const multipliedBy50 = await slowMath.multiply(remainderAfterDividedBy2, 50);
    console.log(`${multipliedBy50}`);
    const remainderAfterDividedBy40 = await slowMath.remainder(multipliedBy50, 40);
    console.log(`${remainderAfterDividedBy40}`);
    const add32 = await slowMath.add(remainderAfterDividedBy40, 32);
    console.log(`Final result is ${add32}`);
    }
    catch (err) {
        console.log(err);
    }
};
doMath();