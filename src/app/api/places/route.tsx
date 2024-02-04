export async function GET() {
  const lat = 49.2827; // Vancouver latitude
  const lng = -123.1207; // Vancouver longitude
  const googleUrl = `https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=${lat},${lng}&radius=5000&type=restaurant&key=${process.env.NEXT_PUBLIC_GOOGLE_MAPS_KEY}`;

  const res = await fetch(googleUrl, {
    headers: {
      "Content-Type": "application/json",
    },
  });

  const data = await res.json();

  return Response.json({ data });
}
