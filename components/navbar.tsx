'use client'

import {
	SignedIn,
	SignedOut,
	SignInButton,
	SignOutButton,
	useUser,
} from '@clerk/nextjs'
import Image from 'next/image'
import Link from 'next/link'

export default function NavBar() {
	const { isLoaded, isSignedIn, user } = useUser()
	if (!isLoaded) return <p>Loading...</p>
	return (
		<nav>
			<div>
				<Link href='/'>
					<Image src='/logo.png' width={60} height={60} alt='Logo' />
				</Link>
			</div>

			<div>
				<SignedIn>
					<Link href='/mealplan'>Meal Plan</Link>
					{user?.imageUrl ? (
						<Link href='/profile'>
							<Image
								src={user.imageUrl}
								alt={user.fullName || 'Profile Picture'}
								width={40}
								height={40}
							/>
						</Link>
					) : (
						<div>User</div>
					)}

					<SignOutButton>
						<button>Sign Out</button>
					</SignOutButton>
				</SignedIn>
				<SignedOut>
					<SignInButton>
						<button>Sign In</button>
					</SignInButton>
				</SignedOut>
			</div>
		</nav>
	)
}
