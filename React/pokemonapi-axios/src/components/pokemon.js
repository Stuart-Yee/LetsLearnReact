const Pokemon = (props) => {

    return(
        props.pokemon.map(
            (item, key) => {
                return (
                    <p key={key}>{item.name}</p>
                )
            })
    )
}

export default Pokemon;