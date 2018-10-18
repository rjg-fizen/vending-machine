abstract class Coin {
    constructor(public value: number){
        this.value = value;
    }
    abstract getImageUrl(): string
}

class Quarter extends Coin { 
    constructor(){
        super(.25);
    }

    get Value() { 
        return this.value;
    }

    getImageUrl() : string{
        return "img/Quarter.png";
    }
}

class Dime extends Coin {
    constructor(){
        super(.10);
    }

    get Value() {
        return this.value;
    }

    getImageUrl () { 
        return "img/Dime.png";
    }
}

class Half extends Coin {
    constructor(){
        super(.5);
    }

    get Value() {
        return this.value;
    }

    getImageUrl () { 
        return "img/Dime.png";
    }
}

class Dollar extends Coin {
    constructor(){
        super(1);
    }

    get Value() {
        return this.value;
    }

    getImageUrl () { 
        return "img/Dime.png";
    }
}