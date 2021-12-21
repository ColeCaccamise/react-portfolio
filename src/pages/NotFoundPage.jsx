import Button from '../components/shared/Button';
import {FaFrownOpen} from 'react-icons/fa';
// import {RiArrowGoBackLine} from 'react-icons/ri'

function NotFoundPage() {
    return (
        <main>

        <section class='error' id="error">
            <div class="container container-center container-error">
                <FaFrownOpen size='65'/>
                    
                <h1>Uh oh..</h1>
                <p>The page you're looking for doesn't exist</p>

                <Button children={`Go back to site`} version='primary' goTo='/' external={false} />
            </div>
        </section>
          
      </main>
    )
}

export default NotFoundPage
