import Button from '../components/shared/Button';
import {FaFrownOpen} from 'react-icons/fa';
// import {RiArrowGoBackLine} from 'react-icons/ri'

function NotFoundPage() {
    return (
        <main>

        <section className='error' id="error">
            <div className="container container-center container-error">
                <FaFrownOpen size='65'/>
                    
                <h1>Uh oh..</h1>
                <p>The page you're looking for does not exist</p>

                <Button children={`Go back to site`} version='primary' goTo='/' external={false} />
            </div>
        </section>
          
      </main>
    )
}

export default NotFoundPage
