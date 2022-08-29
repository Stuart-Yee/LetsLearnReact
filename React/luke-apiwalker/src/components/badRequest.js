import obiwan from '../static/obi-wan.png'

const BadRequest = (props) => {
    return(
        <div>
            <h1>404: These aren't the droids you're looking for...</h1>
            <img src={obiwan} alt="Obi-Wan Kenobi"></img>
        </div>
    )
}

export default BadRequest;