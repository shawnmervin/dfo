function say_hello (hello, world) {
    var ending  = " hope you have a nice day!";
    // combine_greeting creates a closure having access to the 3 outer strings
    function combine_greeting () {
        return   hello + " " + world + ending;
    }

    return combine_greeting ();
}

console.log( say_hello ("Hello", "World") );//Hello World hope you have a nice day!
//very simple example but the function is returning a function  
