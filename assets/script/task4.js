// the fourth task

function Device(name) {
    this.name = name;
    this.goal = 'useful';
}

Device.prototype.energySource = function() {
    console.log(`${this.name} uses power socket!`)
}

Gadget.prototype = new Device();

function Gadget(hasOwnBattery, batteryHealth, name) {
    this.name = name;
    this.hasOwnBattery = hasOwnBattery;
    this.batteryHealth = batteryHealth;
}

Gadget.prototype.innerEnergySource = function() {
    if (this.hasOwnBattery) {
        console.log(`${this.name} uses his own battery!
        And it has battery health - ${this.batteryHealth}v`);
    } else {
        this.energySource();
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
mobile.innerEnergySource();
mobile.updateProcess();


setTimeout(() => {
    console.log(notebook)
    notebook.innerEnergySource();
    notebook.warning();
}, 4000)