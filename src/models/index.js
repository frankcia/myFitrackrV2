// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { Myfitrackrv2DB } = initSchema(schema);

export {
  Myfitrackrv2DB
};