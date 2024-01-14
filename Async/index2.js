//async function always return a promise if we use a return keyword inside it, and await keyword only resolve the respone of (response,reject) of promises i.e it is 
//equivalent to  (.then) which we use with promises, therefore we have to use error handling;


const p=new Promise((res,rej)=>{
    // res("hii");
    rej("Hahah");
});

async function fun(){
    try {
        const x=await p;
        console.log(x);
    } catch (error) {
        console.log(error);
    }
    // x=await p;
}
// fun().then((res)=>{
//     console.log(res);
// }).catch((rej)=>{
//     console.log(rej);
// })
fun();

for(i=0;i<100;i++) console.log('hi');
// .catch((err)=>{console.log("dsds")});