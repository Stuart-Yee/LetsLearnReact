import axios from 'axios'

const Button = (props) => {

    const fetchPokemon = () => {
        axios.get(props.url+"?limit="+props.limit).then(response => {
            const pokemon = [...response.data.results]
            console.log(pokemon[0])
            props.handler(pokemon)
        });
    }

    return (
        <button onClick={fetchPokemon}>{props.label}</button>
    )
}

export default Button