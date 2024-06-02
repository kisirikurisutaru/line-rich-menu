export async function GET() {
  const url = `${process.env.NEXT_PUBLIC_LINE_SERVER}/list`

  const res = await fetch(url, {
    headers: {
      'Authorization': `Bearer ${process.env.NEXT_PUBLIC_LINE_ACCESSTOKEN}`,
    },
  })

  const data = await res.json()

  return Response.json({ data })
}