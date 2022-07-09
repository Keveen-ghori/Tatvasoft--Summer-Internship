class Ride{
    public static _activeRides: number = 0;

    static get activeRides() {
        return Ride._activeRides;
    } 

    start(){
        Ride._activeRides++;
    }
    stop(){
        Ride._activeRides--;
    }
 
}

// Ride.activeRides = 10;
let ride1 = new Ride();
ride1.start()

let ride2 = new Ride();
ride2.start()

ride1.stop();

console.log(Ride._activeRides);

