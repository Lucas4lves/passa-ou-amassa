export default function Card(props){

    return (
        <article className= "card">
          <div className = "card-img" style = {{backgroundImage: `url(${props.img})`}}>
            <div className="card-content">
                <ul className="card-content-list">
                <h2 className="card-title">{props.name}</h2>
                  <li className="content-item price">{props.currency}{props.price}</li>
                  <li className="content-item location">{props.location}</li>
                  <li className="content-item source"><a href={props.source} class="source">@FootyScran</a></li>
                </ul>
            </div>
            <div class ="card-action">
                  <button onClick={props.nxtImg} >Passo :(</button>
                  <button onClick={props.nxtImg} >Amasso!</button>
              </div>
            </div>
          </article>
    )
}