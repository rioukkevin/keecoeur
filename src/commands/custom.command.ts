import Handlebars from "handlebars";
import { registerHelpers } from "../infrastructure/handlers/handlebars/registerHelpers";
import { TCustomMessageHandler } from "../infrastructure/handlers/onMessageCustomComandHandler";
import { parseParameters } from "../parser/parseMessageParameters";

export const runCustomCommand: TCustomMessageHandler = async (
  { Chat },
  { channel, command, msg }
) => {
  const userInputParameters = parseParameters(msg.content.value, " ");
  const variableNames = parseParameters(command.input, " ");

  registerHelpers(channel);

  if (userInputParameters.length < variableNames.length)
    return Chat.say(
      channel,
      `Le nombre de paramètres est incorrect => ${command.input}`
    );

  const variables = mapParametersWithTemplatesVariables(
    variableNames,
    userInputParameters
  );

  console.log("variables : ", variables);

  const template = Handlebars.compile(command.output);

  const result = template(variables);

  Chat.say(channel, `${result}`);
};

const mapParametersWithTemplatesVariables = (
  variableNames: string[],
  userInputParameters: string[]
) => {
  const variableValues = new Map();

  variableNames.forEach((element, index) => {
    if (index === variableNames.length - 1) {
      variableValues.set(
        element,
        userInputParameters.slice(index - userInputParameters.length).join(" ")
      );
      return;
    }
    variableValues.set(element, userInputParameters[index]);
  });

  return Object.fromEntries(variableValues);
};
