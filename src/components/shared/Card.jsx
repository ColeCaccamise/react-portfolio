// import PropTypes from 'prop-types';
import Button from './Button';

function Card({cardInfo}) {

    return (
        <div className="card">
          <div className="card__img">
          {cardInfo.img ? <img src={cardInfo.img.src} alt={cardInfo.img.alt}></img> : ''}
          </div>

        <div className='card__icons'>
          {cardInfo.icons ? cardInfo.icons.map(icon => {
            return (
              <a href={icon.url} className="card__icon" aria-label={icon.aria}>{icon.component}</a>
            )
          }) : 'test2'}
        </div>
          
        <div className="card__info">
          <h3>{cardInfo.heading}</h3> 
          {cardInfo.tag ? <p className='tag'>{cardInfo.tag}</p> : ''}
        </div>          

       {cardInfo.description.map(desc => {
          return (
            <p className='card__description'>{desc}</p>
          )
        })}

        {cardInfo.subheading ? <h4 className='card__subheading'>{cardInfo.subheading.heading}</h4> : ''}

        {cardInfo.subheading ? <ul className='card__list'>
          {cardInfo.subheading.list.map(item => {
            return (
              <li>{item}</li>
            )
          })}
        </ul> : ''}

        {/* {cardInfo.btns ? 'exists' : 'does not'} */}
        <div className="card__buttons">
          {cardInfo.btns.map(btn => {
            return (
              <Button children={btn.children} version={btn.version} goTo={btn.goTo} external={btn.external} />
            )
          })}

        </div>

        </div>
    )
}

export default Card
