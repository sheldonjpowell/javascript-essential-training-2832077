class waterBottle {
    constructor(
        name,
        straw,
        oz,
        lidOpen
    ) {
        this.name = name;
        this.straw = straw;
        this.oz = oz;
        this.lidOpen = lidOpen;
    }
    toggleLid(lidStatus) {
        this.lidOpen = lidStatus;
    }
    ozAmount(waterAmount) {
        this.oz = waterAmount
    }
};
export default waterBottle;