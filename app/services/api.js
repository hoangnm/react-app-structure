const getTodos = () => {
  const todos = [
    { id: 1, text: 'Setup', completed: true },
    { id: 2, text: 'Selector', completed: false },
  ];

  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        data: todos,
      });
    }, 3000);
  });
};

export default {
  getTodos,
};
