import Card from '../components/shared/Card';
import portfolioData from '../data/portfolioData';

function PortfolioPage() {
    return (
        <main>
            <section className="portfolio" id="portfolio">
                <div className="container portfolio__container">
                <h1>Portfolio.</h1>
                <p>Check out some of my past web and design work</p>

                <div className="cards">
                  
                {portfolioData.map(data => {
                  return (<Card cardInfo={data} />) 
                })}

            </div>

                </div>
            </section>
        </main>
    )
};

export default PortfolioPage;
