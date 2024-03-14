import "./ResultSearch.css"

const ResultSearch = ({image = "", item = ""}) =>  {
    return (
        <div className="results-list">
            <img className="result-image" src={image} alt="cinnamon" />
            <div className="result-text">{item}</div>
        </div>
    )
}

export default ResultSearch