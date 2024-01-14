// the difference between the promise and async await is that, In promise the task which gets completed first will be displayed first but in asyn await the task 
//which is called first will be displayed first, you can cross check with the given setup;


console.log("Hii1");

const p2=new Promise((res,rej)=>{
    console.log('testing 2');
    setTimeout(()=>{
        res("resolved 2nd");
    },5000);
})

const p1=new Promise((res,rej)=>{
    console.log('testing 1');
    setTimeout(()=>{
        res("resolved 1st");
    },2000);
})

const p3=new Promise((res,rej)=>{
    console.log('testing 3');
    setTimeout(()=>{
        res("resolved 3rd");
    },8000);
})

p2.then((res)=>{
    console.log(res);
})
p1.then((res)=>{
    console.log(res);
})
p3.then((res)=>{
    console.log(res);
})

// async function fun(){
//     console.log('ddfs');
//     console.log(await p3);
//     console.log(await p1);
//     console.log(await p2);
//     console.log("hii2");
// }

// fun();

for(i=0;i<10;i++) console.log(`hii${i}`);