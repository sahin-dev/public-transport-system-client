class Stopage{
    constructor(name, c_stopage){
        this.name = name;
        this.connected_stopages = c_stopage;
    }
    getName(){
        return this.name;
    }
    getConnectedStopages(){
        return this.connected_stopages;
    }
}