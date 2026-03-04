import api from "./api";

export const runCode = async (payload) => {
    console.log(payload)
    const { data } = await api.post("/compiler/run", payload);
    // Backend returns array of results. We might want to just show the first result or aggregated.
    // The Playground currently expects one result for run?
    // I'll return the data as is.
    return data;
};
