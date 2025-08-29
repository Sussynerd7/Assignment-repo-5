
const copyButtons = document.querySelectorAll('.copy-btn');
const counter = document.getElementById('copycount');

copyButtons.forEach(button => {
    button.addEventListener('click', function() {
        
        const phoneNumber = this.getAttribute('data-number');

               navigator.clipboard.writeText(phoneNumber).then(() => {
            alert(`Copied ${phoneNumber} to clipboard`);
            
            
            let currentcount = parseInt(counter.textContent);
            currentcount = currentcount + 1;
            counter.textContent = currentcount;
        });
    });
});

const copyhearted = document.querySelectorAll('button[id="heartbtn"]');
const heartcounter = document.getElementById('heart');

copyhearted.forEach(button => {
    button.addEventListener('click', function() {
        let currentheartcount = parseInt(heartcounter.textContent);
        currentheartcount = currentheartcount + 1;
        heartcounter.textContent = currentheartcount;
    });
});




document.getElementById('callerbtn-nation').addEventListener('click', function () {
    
    let coinstring = document.getElementById('coin')
    let coinnumber = Number(coinstring.textContent)
         let newcoin = coinnumber - 20;
    document.getElementById('coin').innerText = newcoin;
    if (coinnumber < 20) {
        alert("Invlid Coins")
    } else {
   
        alert("📞 Calling National Emergency Service")
        return
    }

  


    const h1s = this.closest('.bg-white').querySelectorAll('h1');

  const myclock = new Date().toLocaleTimeString();

let text = Array.from(h1s).map(h1 => h1.textContent).join(' - ');


const p = document.createElement('p');
p.textContent = text + ' - '+myclock;


document.getElementById('historybox').appendChild(p);
;

});

document.getElementById('callerbtn-police').addEventListener('click', function () {
    let coinstring = document.getElementById('coin')
    let coinnumber = Number(coinstring.textContent)
  
    if (coinnumber < 20) {
        alert("Invlid Coins")
    } else {
          let newcoin = coinnumber - 20;
    document.getElementById('coin').innerText = newcoin;
        alert("📞 Calling Police Helpline")
        
    }
        
   
    const h1s = this.closest('.bg-white').querySelectorAll('h1');

  const myclock = new Date().toLocaleTimeString();

let text = Array.from(h1s).map(h1 => h1.textContent).join(' - ');


const p = document.createElement('p');
p.textContent = text + ' - '+myclock;


document.getElementById('historybox').appendChild(p);
;

})

document.getElementById('callerbtn-fire').addEventListener('click', function () {
    let coinstring = document.getElementById('coin')
    let coinnumber = Number(coinstring.textContent)
    
    if (coinnumber < 20) {
        alert("Invlid Coins")
    } else {
        let newcoin = coinnumber - 20;
    document.getElementById('coin').innerText = newcoin;
        alert("📞 Calling fire service")
    }
   
    const h1s = this.closest('.bg-white').querySelectorAll('h1');

  const myclock = new Date().toLocaleTimeString();

let text = Array.from(h1s).map(h1 => h1.textContent).join(' - ');


const p = document.createElement('p');
p.textContent = text + ' - '+myclock;


document.getElementById('historybox').appendChild(p);
;

});

document.getElementById('callerbtn-ambulance').addEventListener('click', function () {
    let coinstring = document.getElementById('coin')
    let coinnumber = Number(coinstring.textContent)
   
    if (coinnumber < 20) {
        alert("Invlid Coins")
    } else {
         let newcoin = coinnumber - 20;
    document.getElementById('coin').innerText = newcoin;
        alert("📞 Calling Ambulance service 1994-999999")
    }
        
    
    const h1s = this.closest('.bg-white').querySelectorAll('h1');

  const myclock = new Date().toLocaleTimeString();

let text = Array.from(h1s).map(h1 => h1.textContent).join(' - ');


const p = document.createElement('p');
p.textContent = text + ' - '+myclock;


document.getElementById('historybox').appendChild(p);
;

})

document.getElementById('callerbtn-women').addEventListener('click', function () {
    let coinstring = document.getElementById('coin')
    let coinnumber = Number(coinstring.textContent)
    let newcoin = coinnumber - 20;
    document.getElementById('coin').innerText = newcoin;
    if (coinnumber < 20) {
        alert("Invlid Coins")
    } else {
        let newcoin = coinnumber - 20;
    document.getElementById('coin').innerText = newcoin;
        alert("📞 Calling Women Child Helpline 109")
    }
        
   
    const h1s = this.closest('.bg-white').querySelectorAll('h1');

  const myclock = new Date().toLocaleTimeString();

let text = Array.from(h1s).map(h1 => h1.textContent).join(' - ');


const p = document.createElement('p');
p.textContent = text + ' - '+myclock;


document.getElementById('historybox').appendChild(p);
;

})

document.getElementById('callerbtn-dudok').addEventListener('click', function () {
    let coinstring = document.getElementById('coin')
    let coinnumber = Number(coinstring.textContent)
    
    if (coinnumber < 20) {
        alert("Invlid Coins")
    } else {
           let newcoin = coinnumber - 20;
    document.getElementById('coin').innerText = newcoin;
        alert("📞 Calling anti corruption helpline 106")
        
    }
        
   
    const h1s = this.closest('.bg-white').querySelectorAll('h1');

  const myclock = new Date().toLocaleTimeString();

let text = Array.from(h1s).map(h1 => h1.textContent).join(' - ');


const p = document.createElement('p');
p.textContent = text + ' - '+myclock;


document.getElementById('historybox').appendChild(p);
;

})


document.getElementById('clearbtn').addEventListener('click', function () {
    const historyBox = document.getElementById('historybox');
    historyBox.innerHTML = `
      <div class="flex justify-between ">
        <h1 class="font-[40px]"> <i class="fa-solid fa-clock"></i>HISTORY</h1>
        <button id="clearbtn" class="bg-green-500 text-white p-2 rounded-md ">
          <i class="fa-solid fa-brush"></i> Clear
        </button>
      </div>
    `;
   
    document.getElementById('clearbtn').addEventListener('click', );
});





