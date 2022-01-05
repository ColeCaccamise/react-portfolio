// import Button from "../components/shared/Button";
import justcreate from '../assets/just-create.png';

function WallpapersPage() {
    return (
        <main>

        <section className='error' id="error">
            <div className="container wallpapers__container container-center">
                
                <h1>Wallpapers.</h1>
                <p>A collection of wallpapers I designed and use. Feel free to download for <span className='bold'>personal</span> use.</p>

                <div className="wallpapers align-left">
                    <h2 className="wallpapers__heading">just create</h2>

                    <img src={justcreate} alt="justcreate" className='img' />


                    <div className="wallpapers__buttons">

                        <script src="https://gumroad.com/js/gumroad.js"></script>
                        <a className="gumroad-button btn btn--primary btn-wallpaper" href="https://colecaccamise.gumroad.com/l/justcreate">Buy my product</a>
                    </div>
                    
                    
                </div>

            </div>
        </section>
          
      </main>
    )
}

export default WallpapersPage
