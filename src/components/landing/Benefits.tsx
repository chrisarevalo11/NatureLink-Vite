export function Benefits(): JSX.Element {
	return (
		<div className='py-16 flex flex-col items-center lg:py-20 px-2'>
			<div className='max-w-xl mb-10 md:mx-auto sm:text-center md:mb-12'>
				<div>
					<p className='text-lg font-bold text-muted-foreground/60'>Benefits</p>
				</div>
				<h2 className='max-w-lg mb-6 font-sans text-3xl font-extrabold text-primary leading-none tracking-tight sm:text-4xl md:mx-auto'>
					<span className='relative inline-block'>
						<svg
							viewBox='0 0 52 24'
							fill='currentColor'
							className='absolute top-0 left-0 z-0 hidden w-32 -mt-8 -ml-20 text-blue-gray-100 lg:w-32 lg:-ml-28 lg:-mt-10 sm:block'
						>
							<defs>
								<pattern
									id='07690130-d013-42bc-83f4-90de7ac68f76'
									x='0'
									y='0'
									width='.135'
									height='.30'
								>
									<circle cx='1' cy='1' r='.7' />
								</pattern>
							</defs>
							<rect
								fill='url(#07690130-d013-42bc-83f4-90de7ac68f76)'
								width='52'
								height='24'
							/>
						</svg>
						<span className='relative'>The</span>
					</span>{' '}
					quick, brown fox jumps over a lazy dog
				</h2>
				<p className='text-base text-gray-700 md:text-lg'>
					Sed ut perspiciatis unde omnis iste natus error sit voluptatem
					accusantium doloremque rem aperiam, eaque ipsa quae.
				</p>
			</div>
			<div className='grid mx-auto space-y-6 lg:grid-cols-2 lg:space-y-0 lg:gap-x-5'>
				<div className='space-y-6 sm:px-2'>
					<div className='flex flex-col sm:flex-row show'>
						<div className='mb-4 mr-4'>
							<div className='flex items-center justify-center w-12 h-12 rounded-full bg-indigo-50'>
								<svg
									className='w-8 h-8 text-deep-purple-accent-400 sm:w-10 sm:h-10'
									stroke='currentColor'
									viewBox='0 0 52 52'
								>
									<polygon
										strokeWidth='3'
										strokeLinecap='round'
										strokeLinejoin='round'
										fill='none'
										points='29 13 14 29 25 29 23 39 38 23 27 23'
									/>
								</svg>
							</div>
						</div>
						<div>
							<h6 className='mb-3 text-primary text-xl font-bold leading-5'>
								The deep ocean
							</h6>
							<p className='text-sm text-gray-900'>
								Webtwo ipsum orkut reddit meebo skype vimeo jajah spock empressr
								zimbra, mobly napster.
							</p>
						</div>
					</div>
					<div className='flex flex-col sm:flex-row show'>
						<div className='mb-4 mr-4'>
							<div className='flex items-center justify-center w-12 h-12 rounded-full bg-indigo-50'>
								<svg
									className='w-8 h-8 text-deep-purple-accent-400 sm:w-10 sm:h-10'
									stroke='currentColor'
									viewBox='0 0 52 52'
								>
									<polygon
										strokeWidth='3'
										strokeLinecap='round'
										strokeLinejoin='round'
										fill='none'
										points='29 13 14 29 25 29 23 39 38 23 27 23'
									/>
								</svg>
							</div>
						</div>
						<div>
							<h6 className='mb-3 text-primary text-xl font-bold leading-5'>
								When has justice
							</h6>
							<p className='text-sm text-gray-900'>
								Lookout flogging bilge rat main sheet bilge water nipper fluke
								to go on account heave down clap of thunder.
							</p>
						</div>
					</div>
				</div>
				<div className='space-y-6 sm:px-2'>
					<div className='flex flex-col sm:flex-row show'>
						<div className='mb-4 mr-4'>
							<div className='flex items-center justify-center w-12 h-12 rounded-full bg-indigo-50'>
								<svg
									className='w-8 h-8 text-deep-purple-accent-400 sm:w-10 sm:h-10'
									stroke='currentColor'
									viewBox='0 0 52 52'
								>
									<polygon
										strokeWidth='3'
										strokeLinecap='round'
										strokeLinejoin='round'
										fill='none'
										points='29 13 14 29 25 29 23 39 38 23 27 23'
									/>
								</svg>
							</div>
						</div>
						<div>
							<h6 className='mb-3 text-primary text-xl font-bold leading-5'>
								Organically grow
							</h6>
							<p className='text-sm text-gray-900'>
								Skate ipsum dolor sit amet, alley oop vert mute-air Colby Carter
								flail 180 berm over the sea.
							</p>
						</div>
					</div>
					<div className='flex flex-col sm:flex-row show'>
						<div className='mb-4 mr-4'>
							<div className='flex items-center justify-center w-12 h-12 rounded-full bg-indigo-50'>
								<svg
									className='w-8 h-8 text-deep-purple-accent-400 sm:w-10 sm:h-10'
									stroke='currentColor'
									viewBox='0 0 52 52'
								>
									<polygon
										strokeWidth='3'
										strokeLinecap='round'
										strokeLinejoin='round'
										fill='none'
										points='29 13 14 29 25 29 23 39 38 23 27 23'
									/>
								</svg>
							</div>
						</div>
						<div>
							<h6 className='mb-3 text-primary text-xl font-bold leading-5'>
								Have a good one
							</h6>
							<p className='text-sm text-gray-900'>
								Cheese on toast airedale the big cheese. Danish fontina cheesy
								grin airedale danish fontina.
							</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}
