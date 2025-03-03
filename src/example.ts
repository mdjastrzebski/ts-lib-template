const names = ["World", "There", "Bob"];

export function hello(name: string) {
  return `Hello ${name}!`;
}

export function getRandomName() {
  const index = Math.floor(Math.random() * names.length);
  return names[index];
}
