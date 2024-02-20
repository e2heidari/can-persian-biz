export async function GET() {
  const lat = 49.2827; // Vancouver latitude
  const lng = -123.1207; // Vancouver longitude
  const googleUrl = `https://places.googleapis.com/v1/places/ChIJhd_AaSpzhlQRR0HKIE5tj_w?fields=id,displayName&key=${process.env.NEXT_PUBLIC_GOOGLE_MAPS_KEY}`;

  const res = await fetch(googleUrl, {
    headers: {
      "Content-Type": "application/json",
    },
  });

  const data = await res.json();

  return Response.json({ data });
}
