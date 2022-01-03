import Button from "../components/shared/Button";
import justcreate from '../assets/just-create.png';

function WallpapersPage() {
    return (
        <main>

        <section className='error' id="error">
            <div className="container wallpapers__container container-center">
                
                <h1>Wallpapers.</h1>
                <p>A collection of wallpapers I designed and use. Feel free to download for <span class='bold'>personal</span> use.</p>

                <div className="wallpapers align-left">
                    <h2 className="wallpapers__heading">just create</h2>

                    <img src={justcreate} alt="justcreate" class='img' />


                    <div className="wallpapers_buttons">
                    <Button children={'Download wallpaper'} version={'primary'}/>
                    </div>
                    
                    
                </div>

            </div>
        </section>
          
      </main>
    )
}

export default WallpapersPage
