Texts = new Meteor.Collection('texts');

if (Meteor.isClient) {
  Meteor.subscribe("theTexts");
  // TEMPLATE EVENTS HERE
  // ====================
  // ====================
  // ====================

  Template.inputTemplate.events({
    'submit .main-form': function(e){
      e.preventDefault();
      var text = $('[name=textBox]').val();

        if(Inputs.isEmpty(text)){
          console.log('textbox is empty');
        }
        else{
          if(!Inputs.isAlphaNumeric(text)){
            console.log('textbox only allows alphanumeric input');
          }
          else if(Inputs.hasReachedMaximum(text)){
            console.log('maximum of 20 characters allowed');
          }
          else if(!Inputs.hasMinimum(text)){
            console.log('minimum of 8 characters allowed');
          }else{
            console.log('validation passed');
            Meteor.call('addText', text);
            $('[name=textBox]').val("");
          }
        }

    }
  });

  // TEMPLATE HELPERS HERE
  // ====================
  // ====================
  // ====================

  Template.viewTemplate.helpers({
    entries: function(){
      return Texts.find({});
    }
  });
}

if (Meteor.isServer) {
  Meteor.startup(function () {
    // code to run on server at startup
  });
  Meteor.methods({
    addText: function(text){
      Texts.insert({
        text: text,
        createdAt: new Date()
      });
    }
  });
  Meteor.publish('theTexts', function(){
    return Texts.find({});
  });
}

// VALIDATION FUNCTIONS HERE
// ====================
// ====================
// ====================

Inputs = {
  isEmpty: function(textbox){
    if(textbox === "") {return true;}
    else {return false;}
  },
  isAlphaNumeric: function(textbox){
    var alphanum = /[a-zA-Z0-9]/g;
    return alphanum.test(textbox);
  },
  hasReachedMaximum: function(textbox){
    var max = 20;
    if(textbox.length > max) return true;
    else return false;
  },
  hasMinimum: function(textbox){
    var min = 8;
    if(textbox.length < min) return false;
    else return true;
  }
};
