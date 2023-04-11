
// console.log(React);
// console.log(ReactDOM);

const domContainer = document.querySelector('#root');

// const myElement = React.createElement("div", null, React.createElement("p", null, "Hello World"));

// const myElement = React.createElement("div", null, [
//     React.createElement("p",null,"Hello World"),
//     React.createElement("p",null,"Hello World")
// ]);

const Increment = () => {
    const [counter, setCounter] = React.useState(0);
    
    return (
        <div>
            <h1 id="display">{counter}</h1>
            <div>
                <button id="button" onClick={()=>setCounter(counter + 1)}>Increment +</button>
            </div>
        </div>
    )
}





// const myElement = (
//     <div>
//         <h1 id="display">0</h1>
//         <div>
//             <button id="button">Increment +</button>
//         </div>
//     </div>
// );

ReactDOM.render(< Increment />, domContainer);



// let p = document.createElement("p");
// p.innerHTML = "Hello World";
// domContainer.appendChild(p);