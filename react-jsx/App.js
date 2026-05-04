function Item(props) {
    return <li>{props.name}</li>;
}

function App() {
    const name = "Belva";
    const items = ["Item 1", "Item 2", "Item 3"];

    return (
        <div>
            <h1>Hello, {name}!</h1>
            <p>Welcome to React with JSX.</p>

            <h2>My Items:</h2>
            <ul>
                {items.map((item, index) => (
                    <Item key={index} name={item} />
                ))}
            </ul>
        </div>
    );
}

ReactDOM.render(<App />, document.getElementById("root"));