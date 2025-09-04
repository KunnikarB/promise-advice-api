// Fetch API From Advice Slip API with Promises
interface AdviceResponse {
  slip: {
    id: number;
    advice: string;
  };
}

const fetchAdviceById = (id: number): Promise<string> => {
  return new Promise((resolve, reject) => {
    fetch(`https://api.adviceslip.com/advice/${id}`)
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => {
        resolve(data.slip.advice);
        console.log(`Advice: (ID: ${id}) : ${data.slip.advice}`);
      })
      .catch((error) => {
        reject(error);
        console.error("Fetch error:", error);
      });
  });
};

fetchAdviceById(9);
