function rando() {
    return Math.floor(Math.random() * 3);
}

const randomer = Math.floor(Math.random() * 900) + 100; 

function quick() {
    document.getElementById("qte1").style.transform = `translateX(${randomer}px)`;
    document.getElementById("qte1").style.visibility = "visible";
    document.addEventListener('keydown', (event) => {
    if (event.key === 'w') {
        console.log('W key was pressed!');
        document.getElementById("qte1").style.visibility = "hidden";
        return true;
    }
});
    setTimeout(() => {
        console.log("ggggggggg");
        document.getElementById("qte1").style.visibility = "hidden";
    }, 900);
};



document.getElementById("main-box").addEventListener("click", quick);