const Button = (props) => {

    const action = () => {
        fetch("https://pokeapi.co/api/v2/pokemon?limit=2000").then(response => response.json() )
            .then(response => props.handler([...response.results]))
    }


    return (
        <button onClick={action}>{props.label}</button>
    )

}

export default Button