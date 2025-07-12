// API routes are not supported in static export builds
// This route is disabled for static deployment
export const dynamic = "force-static";

export async function GET() {
  return Response.json({ authenticated: false }, { status: 401 });
}
