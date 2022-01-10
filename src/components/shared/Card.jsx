// import PropTypes from 'prop-types';
import * as uuid from 'uuid';
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
              <a href={icon.url} className="card__icon" aria-label={icon.aria} key={uuid.v4()}>{icon.component}</a>
            )
          }) : ''}
        </div>
          
        <div className="card__info">
          <h3>{cardInfo.heading}</h3> 
          {cardInfo.tag ? <p className='tag'>{cardInfo.tag}</p> : ''}
        </div>          

       {cardInfo.description.map(desc => {
          return (
            <p className='card__description' key={uuid.v4()}>{desc}</p>
          )
        })}

        {cardInfo.subheading ? <h4 className='card__subheading'>{cardInfo.subheading.heading}</h4> : ''}

        {cardInfo.subheading ? <ul className='card__list'>
          {cardInfo.subheading.list.map(item => {
            return (
              <li key={uuid.v4()}>{item}</li>
            )
          })}
        </ul> : ''}

        <div className="card__buttons">
          {cardInfo.btns.map(btn => {
            return (
              <Button children={btn.children} version={btn.version} goTo={btn.goTo} external={btn.external} key={uuid.v4()} />
            )
          })}

        </div>

        </div>
    )
}

export default Card
