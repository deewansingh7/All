const p = new Promise((res, rej) => {
    // res("hii");
    setTimeout(() => {

        res("Hahah");
    }, 5000);
});


async function func() {
    // try {

    // } catch (error) {

    // }
    const x = await p;
    console.log(x);
    console.log("HEllo2");
}

func();