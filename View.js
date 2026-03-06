class View{
    constructor(){
        // todo
        console.log("hello from inside of View constructor");
    }

    display(){
        // todo
        console.log("hello from inside of View display");

        // notice I'm using `` here so that I can make a multiline String
        document.getElementById("stage").innerHTML = `
            <h1>View One</h1>
            <p>check the console</p>
            <button onclick="app.handleAddButton()">add</button>
        `;
    }
}