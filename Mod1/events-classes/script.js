const attackBtn = document.querySelector('#attack-btn');



class Ship {
    constructor(shipName) {
        this.shipName = shipName;
        this.attack = this.attack.bind(this);
    }

    attack() {
        console.log(`${this.shipName} is attacking....`);
        console.dir(this);
    }
}


const humanShip = new  Ship('USS General');

// event listener
attackBtn.addEventListener('click', humanShip.attack);


// attackBtn.addEventListener('click', () => {
//     console.log(this);
// });
