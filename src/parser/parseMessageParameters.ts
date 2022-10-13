export const parseParameters = (
  content: string,
  separator: string = '"'
): string[] => {
  const [_, ...parsedMessageArguments] = content
    .split(separator)
    .filter((value) => !!value.trim());

  return parsedMessageArguments;
};
