export function sum(a, b) {
  return a + b;
}

export function calc(a, b, znak) {
  switch (znak) {
    case '+':
      return a + b;
    case '-':
      return a - b;
    case '*':
      return a * b;
    case '/':
      return a / b;
    default:
      return undefined;
  }
}

export function getUser(user) {
  return {
    ...user,
    love: true,
  };
}
