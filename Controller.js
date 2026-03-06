class Controller{
    constructor(){
        console.log("hello from inside of Controller constructor");
        this.model = new Model();
        this.view = new View();
        this.view.display();
    }

    handleAddButton(){
        console.log("Controller handleAddButton")
        this.model.increaseScore();
        this.model.getScore(); // this does nothing right now
        this.view.display(); // should probably tell the view to display the score
    }

    handleChangeViewButton(){
        this.model.nextState();
        let gameState = this.model.getState();
        if(gameState == "???"){
            //this.view = new OtherView();
        }
        this.view.display();
    }
}