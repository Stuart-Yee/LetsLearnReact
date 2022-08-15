const Pokemon = (props) => {

    console.log("pokemon", props.pokemon);

    return (
        props.pokemon ?
        props.pokemon.map((item, index) => {
            return <p key={index}>{index+1}. {item.name}</p>
        }) : null
    )

}

export default Pokemon