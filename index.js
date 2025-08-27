// let coinstring = document.getElementById('coin')

// let coinnumber = Number(coinstring.textContent)


// Fix for all copy buttons


const copyhearted = document.querySelectorAll('button[id="heartbtn"]');
const heartcounter = document.getElementById('heart');

copyhearted.forEach(button => {
    button.addEventListener('click', function() {
        let currentheartcount = parseInt(heartcounter.textContent);
        currentheartcount = currentheartcount + 1;
        heartcounter.textContent = currentheartcount;
        
       
    });
});


const copyButtons = document.querySelectorAll('button[id="copybtn"]');
const counter = document.getElementById('copycount');

copyButtons.forEach(button => {
    button.addEventListener('click', function() {
        let currentcount = parseInt(counter.textContent);
        currentcount = currentcount + 1;
        counter.textContent = currentcount;
        
       
    });
});

document.getElementById('callerbtn-nation').addEventListener('click', function () {
    let coinstring = document.getElementById('coin')

    let coinnumber = Number(coinstring.textContent)

    let newcoin = coinnumber - 20;
    document.getElementById('coin').innerText = newcoin;
    if (newcoin < 20) {
        alert("Invlid Coins")
    } else {
        alert("📞 Calling National Emergency Service")
    }
});
// national national
// national national
// national national
// national national
document.getElementById('callerbtn-police').addEventListener('click', function () {
    let coinstring = document.getElementById('coin')

    let coinnumber = Number(coinstring.textContent)

    let newcoin = coinnumber - 20;
    document.getElementById('coin').innerText = newcoin;
    if (newcoin < 20) {
        alert("Invlid Coins")
    } else {
        alert("📞 Calling Police Helpline")
    }
})

// police police
// police police
// police police
// police police
document.getElementById('callerbtn-fire').addEventListener('click', function () {
    let coinstring = document.getElementById('coin')

    let coinnumber = Number(coinstring.textContent)

    let newcoin = coinnumber - 20;
    document.getElementById('coin').innerText = newcoin;
    if (newcoin < 20) {
        alert("Invlid Coins")
    } else {
        alert("📞 Calling fire service")
    }
});
// fire
// fire
// fire
// fire
document.getElementById('callerbtn-ambulance').addEventListener('click', function () {
    let coinstring = document.getElementById('coin')

    let coinnumber = Number(coinstring.textContent)

    let newcoin = coinnumber - 20;
    document.getElementById('coin').innerText = newcoin;
    if (newcoin < 20) {
        alert("Invlid Coins")
    } else {
        alert("📞 Calling Ambulance service 1994-999999")
    }
})

// ambulance
// ambulance
// ambulance
// ambulance

document.getElementById('callerbtn-women').addEventListener('click', function () {
    let coinstring = document.getElementById('coin')

    let coinnumber = Number(coinstring.textContent)

    let newcoin = coinnumber - 20;
    document.getElementById('coin').innerText = newcoin;
    if (newcoin < 20) {
        alert("Invlid Coins")
    } else {
        alert("📞 Calling Women Child Helpline 109")
    }
})
// women
// women
// women
document.getElementById('callerbtn-dudok').addEventListener('click', function () {
    let coinstring = document.getElementById('coin')

    let coinnumber = Number(coinstring.textContent)

    let newcoin = coinnumber - 20;
    document.getElementById('coin').innerText = newcoin;
    if (newcoin < 20) {
        alert("Invlid Coins")
    } else {
        alert("📞 Calling anti corruption helpline 106")
    }
})

document.getElementById('callerbtn-electricity').addEventListener('click', function () {
    let coinstring = document.getElementById('coin')

    let coinnumber = Number(coinstring.textContent)

    let newcoin = coinnumber - 20;
    document.getElementById('coin').innerText = newcoin;
    if (newcoin < 20) {
        alert("Invlid Coins")
    } else {
        alert("📞 Calling electricity helpline 16216")
    }
})
document.getElementById('callerbtn-brac').addEventListener('click', function () {
    let coinstring = document.getElementById('coin')

    let coinnumber = Number(coinstring.textContent)

    let newcoin = coinnumber - 20;
    document.getElementById('coin').innerText = newcoin;
    if (newcoin < 20) {
        alert("Invlid Coins")
    } else {
        alert("📞 Calling Brac Helpline 16445")
    }
})
document.getElementById('callerbtn-railway').addEventListener('click', function () {
    let coinstring = document.getElementById('coin')

    let coinnumber = Number(coinstring.textContent)

    let newcoin = coinnumber - 20;
    document.getElementById('coin').innerText = newcoin;
    if (newcoin < 20) {
        alert("Invlid Coins")
    } else {
        alert("📞 Calling Bangladesh railway helpline 163")
    }
})
