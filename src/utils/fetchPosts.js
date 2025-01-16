export async function fetchPosts() {
  try {
    const response = await fetch("https://super-edital-api-git-main-guilhermes-projects-31b64a2d.vercel.app/posts");
    
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    
    const data = await response.json(); // Parse JSON data
    return data; // Ensure this matches the structure of your API response
  } catch (error) {
    console.error("Error fetching articles:", error);
    return [];
  }
}
