const Limit = (props) => {

    const changeHandler = (e) => {
        props.update(
            e.target.value
        );
        console.log(props.limit)
    }

    return (
        <div>
            <label>Fetch Limit:</label>
            <input onChange={changeHandler} type="text"></input>
        </div>
        
    )
}

export default Limit