// Do not edit this file manually
import { parseBlockCredentials, parseBlockSchema } from "@typebot.io/forge";
import { zendeskBlock } from ".";
import { auth } from "./auth";

export const zendeskBlockSchema = parseBlockSchema(zendeskBlock);
export const zendeskCredentialsSchema = parseBlockCredentials(
  zendeskBlock.id,
  auth.schema,
);