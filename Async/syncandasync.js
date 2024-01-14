console.log("Start")

setTimeout(function(){
    console.log("Zero Second Timeout!")
},0)

setTimeout(() => {
    console.log("Two Second Timeout!")
}, 2000)

console.log("End")