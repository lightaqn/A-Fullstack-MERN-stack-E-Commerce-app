// const baseUrl = process.env.API

const baseUrl =
  location && location.hostname === "localhost" 
    ? "http://localhost:3000" 
    : "";

export const api = `${baseUrl}/api`;
export const generatePublicUrl = (fileName) => {
  return `${baseUrl}/public/${fileName}`;
};
