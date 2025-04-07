// import { clerkMiddleware } from '@clerk/nextjs/server'

// export default clerkMiddleware(async (auth, req) => {
// 	const userAuth = await auth()
// 	const { userId } = userAuth
// 	const { pathname, origin } = req.nextUrl
// })

export const config = {
	matcher: [
		'/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)',
		'/(api|trpc)(.*)',
	],
}
