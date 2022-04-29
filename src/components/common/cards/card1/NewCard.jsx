import React from 'react'
import Button2 from '../../buttons/button2/Button2'
import "./NewCard.css"

const NewCard = ({ nombre, desc, tecnologia, repo, pagina, img, }) => {
  return (
      <div className="card">
        <div className="card-image">
          <img className="card-image" src={img} alt={nombre} />
        </div>
        <div className="card-text">
          <h2>{nombre}</h2>
          <p className="date">{tecnologia}</p>
          <p className="desc">{desc}</p>
        </div>
        <div className="card-buttons">
          <Button2 title="Ver repo" color="purple" link={repo} />
          <Button2 title="Ver página" color="purple" link={pagina} />
        </div>
      </div>
  )
}

export default NewCard