const getTodos = () => {
  const todos = [
    { id: 1, text: 'Setup', completed: true },
    { id: 2, text: 'selector', completed: false },
    { id: 2, text: 'aphrodite', completed: false },
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
