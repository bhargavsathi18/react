
let parent=React.createElement( 
    "div",
    {id:"parent"},
    React.createElement("div",{id:"child"},React.createElement("h1",{},"Hello")))



// let heading = React.createElement("h1", {id:"heading"}, "hello react");
let root = ReactDOM.createRoot(document.getElementById("root"))
root.render(parent)