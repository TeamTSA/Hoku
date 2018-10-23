import { Meteor } from 'meteor/meteor';
import '../imports/api/bathrooms/bathrooms.js';
import '../imports/api/bathrooms/bathroomLocations.js';
import '../imports/api/courses/courses.js';
import '../imports/api/courses/courseLocations.js';
import '../imports/api/events/events.js';
import '../imports/api/events/eventLocations.js';
import '../imports/api/locations/locations.js';
import '../imports/api/users/users.js';
import '../imports/api/users/userEvents.js';
import '../imports/api/users/userCourses.js';


Meteor.startup(() => {
  // code to run on server at startup
});
