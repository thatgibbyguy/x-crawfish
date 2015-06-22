var Schemas = {};

// exampleCollection = new Mongo.Collection('examplecollection');

People = new Mongo.Collection('people');

Schemas.PeopleSchema = new SimpleSchema({
	name:{
		type: String,
		label: "Registrant's Name"
	},
	email:{
		type: String,
		label: "Registrant's Email"
	},
	company:{
		type: String,
		label: "Company"
	},
	guests:{
		type:[String],
		label: "Guests",
		optional:true,
		blackbox: true
	}
});

People.attachSchema(Schemas.PeopleSchema);

