const reverseCountdown = (num) => {
    const id = setInterval(() => {
        if(num == 0) {
            console.log("Bang Bang!!");
            clearInterval(id);
        } else {
            console.log(num);
            num --;
        }
    }, 1000);
}

reverseCountdown(5);