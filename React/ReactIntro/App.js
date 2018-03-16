var ListaUl = (props) => {
    return (
        <ul>
       { props.voce.map((el) => (
          <ListicaLi a={el}/>
       ))}
        
        </ul>
    );
}

var ListicaLi = (props) => {
    return (
        <li>{props.a}</li>
    );
}

var KakoHoces = (props) => {
    return (
    <h1>Hello World (preko fukcije)</h1>
    );
}

var App = (props) => {
    return (
        <div>
            <h1>Hello World</h1>
            <p>{props.title}</p>
            <KakoHoces/>
            <ListaUl voce = {props.fruits} />
        </div>
    );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App title={"Caooooooo"} fruits={["Apple", "Dog", "Telephone"]}/>,rootElement);