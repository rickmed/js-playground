
/*
Composable factories (using prototypes for memory conservations instead of copying methods on each instance) consist to merge various objects that contain the methods and use the result as prototype.
 */

const stampit = require('stampit');
// one behaviour
const greetBehaviour = {
  hello(){
    console.log('Hello');
  }
};
//another behaviour
const byeBehaviour = {
  goodbye(){
    console.log('goodbye');
  }
};

//stamp
const greetStamp = stampit()
  .methods(greetBehaviour);

const byeStamp = stampit()
  .methods(byeBehaviour);

const politeStamp = stampit().compose(greetStamp, byeStamp);

const instance = politeStamp();
instance.hello();

//vanilla
const composedProto = Object.assign({}, greetBehaviour, byeBehaviour);
const politeFactory = function () {
  return Object.create(composedProto);
};

const otherInstance = politeFactory();
otherInstance.hello();
// so here you don't really need stampit: Object.assign is native js, no extra dependency, etc


// However, stampit allows you to merge the way you instantiate objects as well, which is very nice
const stampit = require('stampit');

const greetBehaviour = {
  hello(){
    console.log('Hello ', [this.firstname, this.lastname].join(' ')); // will be wrong if we don't assign firstname and lastname
  }
};

const byeBehaviour = {
  goodbye(){
    console.log('goodbye', [this.firstname, this.lastname].join(' ')); // will be wrong if we don't assign firstname and lastname
  }
};

//stamp
const greetStamp = stampit()
  .methods(greetBehaviour);

const byeStamp = stampit()
  .methods(byeBehaviour);

const defaultStamp = stampit.props({
  firstname: 'laurent',
  lastname: 'Renard'
}); // instantiation directive (use default value if not provided)


const politeStamp = stampit().compose(greetStamp, byeStamp, defaultStamp);

const helloToRobert = politeStamp({firstname: 'Robert', lastname: 'Redford'});
const helloToLaurent = politeStamp();
helloToLaurent.hello();
helloToRobert.hello();

//vanilla
const composedProto = Object.assign({}, greetBehaviour, byeBehaviour);
const politeFactory = function (options = {}) {
  const actualValues = Object.assign({}, {firstname: 'Laurent', lastname: 'Renard'}, options); //instantiation directive (use default value if not provided)
  return Object.assign(Object.create(composedProto), actualValues);
};

const otherHelloToLaurent = politeFactory();
const otherHelloToRobert = politeFactory({firstname:'Robert',lastname:'Redford'});
otherHelloToLaurent.hello();
otherHelloToRobert.hello();


// The main advantage of stampit is that the result (polite stamp) remains composable with other behaviour for example. It can be a little bit more complicated with the traditional factory, especially if you are not the owner of the code (if you want to extend an existing module for example).
const stampit = require('stampit');
const politeStamp = require('polite-stamp');
const politeFactory = require('polite-factory');

const fooBehaviour = {
  foo(){
    //
  }
};

const fooStamp = politeStamp().compose({methods: fooBehaviour}); // a brand new stamp, polite stamp remain untouched

function compose(targetFactory, behaviour){
  const newProto = Object.assign({},Object.getPrototypeOf(targetFactory()),behaviour);
  return function newFactory(options={}){
    const actualValues = Object.assign({}, {firstname: 'Laurent', lastname: 'Renard'}, options); //have to repeat instantiation directive (use default value if not provided)
    return Object.assign(Object.create(newProto), actualValues);

    // or
    //const instance = targetFactory(options);
    //return Object.assign(instance,behaviour)
    // however foo is not part of the prototype anymore but is on the instance itself
  }
}

const fooFactory = compose(politeFactory,fooBehaviour)
