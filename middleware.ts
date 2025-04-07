import { clerkMiddleware, createRouteMatcher } from '@clerk/nextjs/server'
import { NextResponse } from 'next/server'

const isPublicRoute = createRouteMatcher([
	'/',
	'/sign-up(.*)',
	'/subscribe(.*)',
])

const isSignUpRoute = createRouteMatcher(['/sign-up(.*)'])

export default clerkMiddleware(async (auth, req) => {
	const userAuth = await auth()
	const { userId } = userAuth
	const { origin } = req.nextUrl

	if (!isPublicRoute(req) && !userId) {
		return NextResponse.redirect(new URL('/sign-up', origin))
	}

	if (isSignUpRoute(req) && userId) {
		return NextResponse.redirect(new URL('/mealplan', origin))
	}

	return NextResponse.next()
})

export const config = {
	matcher: [
		'/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)',
		'/(api|trpc)(.*)',
	],
}
