const commandName = "random";

const randomCmd =
  (channel: string) => (minString: string, maxString: string) => {
    const min = Math.ceil(parseFloat(minString));
    const max = Math.floor(parseFloat(maxString));

    return Math.floor(Math.random() * (max - min + 1)) + min;
  };

export const randomCommand = {
  name: commandName,
  func: randomCmd,
};
