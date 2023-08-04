import profileImg from '../assets/profile.jpg';
import LinkItem from '../components/LinkItem';

function LinksPage() {
	return (
		<main>
			<section id='links'>
				<div className='container links__container'>
					<img
						className='links__img'
						src={profileImg}
						alt='Cole Caccamise'
					></img>
					<h1 className='links__heading'>Cole Caccamise</h1>
					<p>Content Creator</p>

					<div className='links__card links'>
						<LinkItem
							url='https://youtube.com/c/colecaccamise'
							heading='YouTube'
							description='Tech videos'
							external={true}
						/>

						<LinkItem
							url='https://kit.co/colecaccamise'
							heading='Gear Links'
							description='All of the products I use'
							external={true}
						/>

						<LinkItem
							url='/wallpapers'
							heading='Wallpapers'
							description="Download wallpapers I've designed"
						/>

						<LinkItem
							url='https://instagram.com/cole.caccamise'
							heading='Instagram'
							description='Photos of tech'
							external={true}
						/>

						<LinkItem
							url='https://twitter.com/colecaccamise'
							heading='Twitter'
							description='Hot takes'
							external={true}
						/>
					</div>
				</div>
			</section>
		</main>
	);
}

export default LinksPage;
