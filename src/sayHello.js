import React from "react";

function Hello() {
    const sayHello = () => {
        console.log("hello");
    };
    return (
        <div>
            <h3> This is the hello component</h3>
            <button onClick={sayHello}>Say hello</button>
        </div>
    );
}

export default Hello;