import { CommandEntity } from "../models/Command";

export const getCommandByTriggerAndChannel = ({
  trigger,
  channel,
}: {
  trigger: string;
  channel: string;
}) =>
  CommandEntity.findOne({
    where: { trigger, channel },
  });
