function goneagainO() {
    document.getElementById("option1").style.visibility = "hidden";
    document.getElementById("option2").style.visibility = "hidden";
}

let health = 9;



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
        health -= 1;


        if (health == 8) {
        document.getElementById("h9").style.visibility = `hidden`;
        } else if (health == 7) {
        document.getElementById("h8").style.visibility = `hidden`;
        } else if (health == 6) {
        document.getElementById("h7").style.visibility = `hidden`;
        } else if (health == 5) {
        document.getElementById("h6").style.visibility = `hidden`;
        } else if (health == 4) {
        document.getElementById("h5").style.visibility = `hidden`;
        } else if (health == 3) {
        document.getElementById("h4").style.visibility = `hidden`;
        } else if (health == 2) {
        document.getElementById("h3").style.visibility = `hidden`;
        } else if (health == 1) {
        document.getElementById("h2").style.visibility = `hidden`;
        } else if (health == 0) {
        document.getElementById("h1").style.visibility = `hidden`;
        window.location.href = "act2.html";
        }

        return;
    }
}, { once: true }); 

    setTimeout(() => {
        document.getElementById("qte1").style.visibility = "hidden";
        document.getElementById("qte1").style.backgroundImage = ``;
        document.getElementById("collapse").src = `collatt.gif`;
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
        health -= 1;


        if (health == 8) {
        document.getElementById("h9").style.visibility = `hidden`;
        } else if (health == 7) {
        document.getElementById("h8").style.visibility = `hidden`;
        } else if (health == 6) {
        document.getElementById("h7").style.visibility = `hidden`;
        } else if (health == 5) {
        document.getElementById("h6").style.visibility = `hidden`;
        } else if (health == 4) {
        document.getElementById("h5").style.visibility = `hidden`;
        } else if (health == 3) {
        document.getElementById("h4").style.visibility = `hidden`;
        } else if (health == 2) {
        document.getElementById("h3").style.visibility = `hidden`;
        } else if (health == 1) {
        document.getElementById("h2").style.visibility = `hidden`;
        } else if (health == 0) {
        document.getElementById("h1").style.visibility = `hidden`;
        window.location.href = "act2.html";
        }

        return;
    }
}, { once: true }); 

    setTimeout(() => {
        document.getElementById("qte2").style.visibility = "hidden";
        document.getElementById("qte2").style.backgroundImage = ``;
    }, 900);
};

function quick3() {
    document.getElementById("qte3").style.transform = `translate(0px, 0px)`;
    document.getElementById("qte3").style.backgroundImage = `url(qte3.gif)`;
    const randomer3 = Math.floor(Math.random() * 700) + 100;
    const randomest3 = Math.floor(Math.random() * 550) + 25;
    document.getElementById("qte3").style.transform = `translate(${randomer3}px, ${randomest3}px)`;
    document.getElementById("qte3").style.visibility = `visible`;
    document.addEventListener('keyup', (event) => {
    if (event.key === 'p') {
        document.getElementById("qte3").style.visibility = "hidden";
        document.getElementById("qte3").style.backgroundImage = ``;
        health -= 1;
        
        if (health == 8) {
        document.getElementById("h9").style.visibility = `hidden`;
        controller.abort();
        return;
        } else if (health == 7) {
        document.getElementById("h8").style.visibility = `hidden`;
        return;
        } else if (health == 6) {
        document.getElementById("h7").style.visibility = `hidden`;
        return;
        } else if (health == 5) {
        document.getElementById("h6").style.visibility = `hidden`;
        return;
        } else if (health == 4) {
        document.getElementById("h5").style.visibility = `hidden`;
        return;
        } else if (health == 3) {
        document.getElementById("h4").style.visibility = `hidden`;
        return;
        } else if (health == 2) {
        document.getElementById("h3").style.visibility = `hidden`;
        return;
        } else if (health == 1) {
        document.getElementById("h2").style.visibility = `hidden`;
        return;
        } else if (health == 0) {
        document.getElementById("h1").style.visibility = `hidden`;
        window.location.href = "act2.html";
        return;
        }

        return;
    }
}, { once: true }); 
    setTimeout(() => {
        document.getElementById("qte3").style.visibility = "hidden";
        document.getElementById("qte3").style.backgroundImage = ``;
    }, 900);
};

function wait() {
    setTimeout(() => {
        document.getElementById("option1").style.visibility = "visible";
        document.getElementById("option2").style.visibility = "visible";
        document.getElementById("collapse").src = `crumble.gif`;
    }, 5000);
}

function quickattack() {
    one = quick1();
    two = quick2();
    three = quick3();
    waits = wait();
}


/////////////////////////////////////////////////////////////////////////////////////////////

document.getElementById("option1").addEventListener("click", goneagainO);
document.getElementById("option1").addEventListener("click", quickattack);