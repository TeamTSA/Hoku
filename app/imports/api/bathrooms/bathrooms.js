import { Mongo } from 'meteor/mongo';

//bathroom ID
//men or women's
//name of bathroom (ex. Keller Hall 1st floor)

export const users = new Mongo.Collection('bathrooms');