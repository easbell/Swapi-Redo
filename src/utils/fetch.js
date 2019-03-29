export const fetchCalls = async (link) => {
  const response = await fetch(link)
  if(!response.ok) {
    throw new Error('Response not ok')
  } else {
    const parsedData = await response.json();
    return parsedData
  }
}