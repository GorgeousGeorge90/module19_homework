// the fifth task

class Device {
    constructor(name) {
        this.name = name;
        this.goal = 'useful';
    }

    energySource() {
        console.log(`${this.name} uses power socket!`)
    }
}


class Gadget extends Device {
    constructor(hasOwnBattery, batteryHealth, name) {
        super(name);
        this.hasOwnBattery = hasOwnBattery
        this.batteryHealth = batteryHealth
    }

    energySource() {
        if (this.hasOwnBattery) {
            console.log(`${this.name} uses his own battery!
            And it has battery health - ${this.batteryHealth}v`);
        } else {
            super.energySource();
        }
    }
}

const mobile = new Gadget(true, 37, 'mobile');
mobile.size = 'compact';
mobile.updateProcess = () => {
    console.log('Start update!');
    setTimeout(() => {
        console.log('Complete!')
    }, 2000)
}


const notebook = new Gadget(false, null, 'notebook');
notebook.screenResolution = '13 inches';
notebook.warning = () => console.warn('Warning!');


// example

console.log(mobile)
mobile.energySource();
mobile.updateProcess();


setTimeout(() => {
    console.log(notebook)
    notebook.energySource();
    notebook.warning();
}, 4000)