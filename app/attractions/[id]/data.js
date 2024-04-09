export async function getData(id) {
  const res = await fetch(`${process.env.API_URL}/attractions/${id}/api`)
  if (!res.ok) {
    throw new Error('Failed to fetch data')
  }
  return res.json()
}