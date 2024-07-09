export async function GET() {
    return new Response ('hello world')
}

//route handlers allows us to create custom request handlers for a given route.
// they are defined in a "route.ts" file in the app directory.  