//VARIOUS CONCOLE METHODS
//1. console.log() method
console.log(1);
console.log('abc');
console.log(true);
console.log(null);
console.log(undefined);
console.log([1,2,3,4]);//array inside log
console.log({a:1,b:2,c:3});//object inside log


//2. console.error() method
console.error('This is a simple error');

//3. console.warn() method
console.warn('This is a warning');

//4. console.clear() method
console.clear();

//5. console.time() and console.timeEnd() method
console.time("abc");
let fun=function(){
    console.log('fun is running');
}
let fun2=function(){
    console.log('fun2 is running');
}
fun();
fun2();
console.timeEnd('abc');

//6 console.table() method
console.table({'a':1,'b':2});

//7. console.count() method
for(let i=0;i,5;i++){
    console.count(i);
}

//8.console.group() and console.groupEnd() method
console.group('simple');
console.warn('warning');
console.log('letsupgrade javascript');
console.groupEnd('simple');
console.log('new section');
