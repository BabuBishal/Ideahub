import { type SchemaTypeDefinition } from "sanity";
import { author } from "./author";
import { startup } from "./startup";
import { collection } from "./collection";

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [author, startup, collection],
};
