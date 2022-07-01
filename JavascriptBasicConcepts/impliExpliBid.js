const obj = {
    name : "Mithun",
    // display : function(){
    //     console.log(this);
    // } 
    // normal fuctions points to call obj2

    display : () => {
        console.log(this);
    }

    // arrow functions are sterile which cannot constructible and cannot use new keyword;
}

const obj2 = {
    name : "Prabhu"
}

obj.display.call(obj2);

//Implicit binding is nothing but object whic can access its own properties

//expliit binding is some other object will ask for that property for this we can use call,apply and bind methods
