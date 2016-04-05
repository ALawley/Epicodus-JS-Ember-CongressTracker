import Ember from 'ember';

export default Ember.Route.extend({
  model: function(params) {
    var url = 'http://congress.api.sunlightfoundation.com/bills?bill_id=' + params.bill_id + '&apikey=7019ff640bd14d7694d90361d2a936ac'
    return Ember.$.getJSON(url).then(function(responseJSON) {
      return responseJSON.results;
    });
   }
});
