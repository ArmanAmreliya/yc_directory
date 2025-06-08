import { type SchemaTypeDefinition } from "sanity";

import { author } from "../schemaTypes/author";
import { startup } from "../schemaTypes/startup";
import { playlist } from "../schemaTypes/playlist";

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [author, startup, playlist],
};