/**
 * Populate DB with sample data on server start
 * to disable, edit config/environment/index.js, and set `seedDB: false`
 */

'use strict';

var Project = require('../api/project/project.model');
var User = require('../api/user/user.model');

Project.find({}).remove(function() {
  Project.create({
    title : 'Development Tools',
    summary : 'Integration with popular tools such as Bower, Grunt, Karma, Mocha, JSHint, Node Inspector, Livereload, Protractor, Jade, Stylus, Sass, CoffeeScript, and Less.',
    details : 'Integration with popular tools such as Bower, Grunt, Karma, Mocha, JSHint, Node Inspector, Livereload, Protractor, Jade, Stylus, Sass, CoffeeScript, and Less.',
    ownerName : 'Seed User',
    ownerId: 1,
    comments: [ { username:'commenter', text:'This thing looks amazing!' }, { username:'commenter2', text:'I agree with commenter, what an awesome idea!' } ]
  }, {
    title : 'Server and Client integration',
    summary : 'Built with a powerful and fun stack: MongoDB, Express, AngularJS, and Node.',
    details : 'Built with a powerful and fun stack: MongoDB, Express, AngularJS, and Node.',
    ownerName : 'Seed User',
    ownerId: 1,
    comments: [ { username:'commenter', text:'This thing looks amazing!' }, { username:'commenter2', text:'I agree with commenter, what an awesome idea!' } ]
  }, {
    title : 'Smart Build System',
    summary : 'Build system ignores `spec` files, allowing you to keep tests alongside code. Automatic injection of scripts and styles into your index.html',
    details : 'Build system ignores `spec` files, allowing you to keep tests alongside code. Automatic injection of scripts and styles into your index.html',
    ownerName : 'Seed User',
    ownerId: 1,
    comments: [ { username:'commenter', text:'This thing looks amazing!' }, { username:'commenter2', text:'I agree with commenter, what an awesome idea!' } ]
  },  {
    title : 'Modular Structure',
    summary : 'Best practice client and server structures allow for more code reusability and maximum scalability',
    details : 'Best practice client and server structures allow for more code reusability and maximum scalability',
    ownerName : 'Seed User',
    ownerId: 1,
    comments: [ { username:'commenter', text:'This thing looks amazing!' }, { username:'commenter2', text:'I agree with commenter, what an awesome idea!' } ]
  },  {
    title : 'Optimized Build',
    summary : 'Build process packs up your templates as a single JavaScript payload, minifies your scripts/css/images, and rewrites asset names for caching.',
    details : 'Build process packs up your templates as a single JavaScript payload, minifies your scripts/css/images, and rewrites asset names for caching.',
    ownerName : 'Seed User',
    ownerId: 1,
    comments: [ { username:'commenter', text:'This thing looks amazing!' }, { username:'commenter2', text:'I agree with commenter, what an awesome idea!' } ]
  },{
    title : 'Deployment Ready',
    summary : 'Easily deploy your app to Heroku or Openshift with the heroku and openshift subgenerators',
    details : 'Easily deploy your app to Heroku or Openshift with the heroku and openshift subgenerators',
    ownerName : 'Seed User',
    ownerId: 1,
    comments: [ { username:'commenter', text:'This thing looks amazing!' }, { username:'commenter2', text:'I agree with commenter, what an awesome idea!' } ]
  });
});

User.find({}).remove(function() {
  User.create({
    provider: 'local',
    name: 'Test User',
    email: 'test@test.com',
    password: 'test'
  }, {
    provider: 'local',
    role: 'admin',
    name: 'Admin',
    email: 'admin@admin.com',
    password: 'admin'
  }, function() {
      console.log('finished populating users');
    }
  );
});