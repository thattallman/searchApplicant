import { api } from "../services";
export const getApplicant = async (query) => {
    try {
      const response = await api.get(
        `api/students?query=${query}`
      );
      return response.data;
    } catch (error) {
      console.error("Error fetching company data:", error);
      return [];
    }
  };