    const heading = React.createElement("div",{id:"parent"}, 
    [
        React.createElement("div",{id:"child1"}, [React.createElement("h1",{},"I am an H1 TAG.."),React.createElement("h2",{},"I am an H2 TAG..") ]),

        React.createElement("div",{id:"child2"}, [
            React.createElement("h1",{},"I am H1 tag"),
            React.createElement("h2",{},"I am H2 tag"),
        ])
    ],
    
    );




const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(heading);