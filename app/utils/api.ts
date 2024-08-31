export const getExplore = async () => {
  try {
    const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/explore`);
    const data = await response.json();
    return data;
  } catch (error: any) {
    console.log("Error mesage", error.message);
  }
};

export const getLive = async () => {
  try {
    const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/live`);
    const data = await response.json();
    return data;
  } catch (error: any) {
    console.log("Error mesage", error.message);
  }
};
export const getSearchResult = async () => {
  try {
    const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL1}/b/5NPS`);
    const data = await response.json();
    return data;
  } catch (error: any) {
    console.log("Error mesage", error.message);
  }
};
