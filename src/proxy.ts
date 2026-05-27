import { clerkMiddleware } from '@clerk/nextjs/server'
import { NextFetchEvent, NextRequest } from 'next/server'

const clerk = clerkMiddleware(async (auth) => {
  await auth.protect()
})

export function proxy(request: NextRequest, event: NextFetchEvent) {
  return clerk(request, event)
}

export const config = {
  matcher: [
    '/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)',
    '/(api|trpc)(.*)',
    '/__clerk/(.*)',
  ],
}