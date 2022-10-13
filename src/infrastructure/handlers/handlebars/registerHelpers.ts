import Handlebars from "handlebars";
import { customFunctions } from "../../../commands/functions";

export const registerHelpers = (channel: string) => {
  customFunctions.forEach((cunstomHelper) =>
    Handlebars.registerHelper(cunstomHelper.name, cunstomHelper.func(channel))
  );
};
