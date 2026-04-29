function rando() {
    return Math.floor(Math.random() * 3);
}

function quick1() {
    document.getElementById("qte1").style.transform = `translate(0px, 0px)`;
    document.getElementById("qte1").style.backgroundImage = `url(qte1.gif)`;
    const randomer = Math.floor(Math.random() * 700) + 100;
    const randomest = Math.floor(Math.random() * 550) + 25;
    document.getElementById("qte1").style.transform = `translate(${randomer}px, ${randomest}px)`;
    document.getElementById("qte1").style.visibility = `visible`;
    document.addEventListener('keyup', (event) => {
    if (event.key === 'w') {
        document.getElementById("qte1").style.visibility = "hidden";
        document.getElementById("qte1").style.backgroundImage = ``;
        return true;
    }
});
    setTimeout(() => {
        document.getElementById("qte1").style.visibility = "hidden";
        document.getElementById("qte1").style.backgroundImage = ``;
    }, 900);
};

function quick2() {
    document.getElementById("qte2").style.transform = `translate(0px, 0px)`;
    document.getElementById("qte2").style.backgroundImage = `url(qte2.gif)`;
    const randomer2 = Math.floor(Math.random() * 700) + 100;
    const randomest2 = Math.floor(Math.random() * 550) + 25;
    document.getElementById("qte2").style.transform = `translate(${randomer2}px, ${randomest2}px)`;
    document.getElementById("qte2").style.visibility = `visible`;
    document.addEventListener('keyup', (event) => {
    if (event.key === 'a') {
        document.getElementById("qte2").style.visibility = "hidden";
        document.getElementById("qte2").style.backgroundImage = ``;
        return true;
    }
});
    setTimeout(() => {
        document.getElementById("qte2").style.visibility = "hidden";
        document.getElementById("qte2").style.backgroundImage = ``;
    }, 900);
};

function quick3() {
    document.getElementById("qte3").style.transform = `translate(0px, 0px)`;
    document.getElementById("qte3").style.backgroundImage = `url(qte3.gif)`;
    const randomer3 = Math.floor(Math.random() * 700) + 100;
    console.log(randomer3);
    const randomest3 = Math.floor(Math.random() * 550) + 25;
    document.getElementById("qte3").style.transform = `translate(${randomer3}px, ${randomest3}px)`;
    document.getElementById("qte3").style.visibility = `visible`;
    document.addEventListener('keyup', (event) => {
    if (event.key === 'p') {
        document.getElementById("qte3").style.visibility = "hidden";
        document.getElementById("qte3").style.backgroundImage = ``;
        return true;
    }
});
    setTimeout(() => {
        document.getElementById("qte3").style.visibility = "hidden";
        document.getElementById("qte3").style.backgroundImage = ``;
    }, 900);
};



document.getElementById("main-box").addEventListener("click", quick1);
document.getElementById("main-box").addEventListener("click", quick2);
document.getElementById("main-box").addEventListener("click", quick3);