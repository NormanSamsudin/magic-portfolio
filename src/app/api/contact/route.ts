// API routes are not supported in static export builds
// This route is disabled for static deployment
export const dynamic = "force-static";

export async function POST() {
  return Response.json({ error: "Contact form not available in static build" }, { status: 500 });
}