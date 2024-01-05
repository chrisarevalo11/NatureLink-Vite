import { useState } from 'react'
import { useAccount } from 'wagmi'

import { Container } from '@/components//ui/container'
import Logo from '@/components/menu/NavbarLogo'
import NavLinks, { NavLinksResponsive } from '@/components/menu/NavLinks'
import { ConnectButton } from '@rainbow-me/rainbowkit'

export default function Navbar(): JSX.Element {
	const [isSidebarOpen, setIsSidebarOpen] = useState<boolean>(false)
	const { isConnected } = useAccount()

	const toggleSidebar = () => {
		setIsSidebarOpen(!isSidebarOpen)
	}

	return (
		<Container>
			<nav className='flex w-full lg:px-3 lg:rounded-full mx-auto md:justify-between relative'>
				<div className='absolute top-0 bottom-0 md:static flex items-center'>
					<div className='lg:hidden'>
						<button className='p-1 text-primary' onClick={toggleSidebar}>
							<svg
								xmlns='http://www.w3.org/2000/svg'
								className='icon icon-tabler icon-tabler-menu-2'
								width='24'
								height='24'
								viewBox='0 0 24 24'
								strokeWidth='2'
								stroke='currentColor'
								fill='none'
								strokeLinecap='round'
								strokeLinejoin='round'
							>
								<path stroke='none' d='M0 0h24v24H0z' fill='none' />
								<path d='M4 6l16 0' />
								<path d='M4 12l16 0' />
								<path d='M4 18l16 0' />
							</svg>
						</button>
						<NavLinksResponsive
							isConnected={isConnected}
							isSidebarOpen={isSidebarOpen}
							setIsSidebarOpen={setIsSidebarOpen}
						/>
					</div>
					<div className='hidden md:block'>
						<Logo />
					</div>
				</div>
				<div className='grow md:hidden flex justify-center'>
					<Logo />
				</div>
				{isConnected && <NavLinks />}

				<div className='hidden md:flex items-center gap-2'>
					<ConnectButton showBalance={false} chainStatus={'icon'} />
				</div>
			</nav>
		</Container>
	)
}
