import axios from "axios";

export async function fetchData() {
    try {
        const response = await axios.get("http://localhost:8000/data");
        console.log(response.data);
        return response.data;
      } catch (error) {
        console.error("Error fetching data:", error);
        throw error;
      }    
}
