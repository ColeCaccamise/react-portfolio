// import PropTypes from 'prop-types';
import Button from './Button';

function Card({cardInfo}) {
  console.log(cardInfo)
    return (
        <div className="card">

          <div className="card__icons">
            {cardInfo.icons ? cardInfo.icons.map(icon => {
              return (
                <a href={icon.url} className="card__icon" aria-label={icon.aria}>
                    {icon.component}
                  </a>
              )
            }) : ''}
          </div>

          <h3>{cardInfo.heading}</h3>
          
            {cardInfo.description.map(desc => {
              return (
                <p className="card__description">{desc}</p>
              )
            })}
          

            <Button children={cardInfo.cta.text} version={`${cardInfo.cta.version} card__cta`} goTo={cardInfo.cta.goTo} />

        </div>
    )
}

export default Card
