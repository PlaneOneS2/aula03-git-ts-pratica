// SIMULAÇÃO DE API - Refatore esta função para TypeScript
export const fetchTasks = async () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve([
        { id: 1, title: "Aprender Git", completed: true },
        { id: 2, title: "Estudar TypeScript", completed: false },
        { id: 3, title: "Fazer o PR da aula", completed: false },
      ]);
    }, 1000);
  });
};