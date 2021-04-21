// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { Note, Pad } = initSchema(schema);

export {
  Note,
  Pad
};