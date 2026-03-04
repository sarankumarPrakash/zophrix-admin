import api from "./api";

export const getAllProblems = async () => {
    const { data } = await api.get("/problems");
   
    return data;
};

export const getDailyChallenge = async () => {
    const { data } = await api.get("/problems/daily-challenge");
    return data;
};

// Deprecated alias for compatibility if needed, but better to update caller
export const getDailyProblems = getAllProblems;

export const getProblemById = async (slug) => {
    const { data } = await api.get(`/problems/${slug}`);
    console.log(data,'-----------')
    return data;
};

export const submitCode = async (payload) => {
    const { data } = await api.post("/submissions", payload);
    return data;
};
