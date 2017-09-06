(function(){

  angular.module("turtleFacts").controller("listCtrl", ListController);

// Injecting the factories in our controller
  ListController.$inject = ['quizMetrics', 'DataService'];


  function ListController(quizMetrics, DataService){
    var vm = this;
    // setting the turtlesData to vm.data
    vm.data = DataService.turtlesData;
    vm.quizMetrics = quizMetrics;


    // creating an emplty object just to store value when button is clicked, this object will then contain the current data of the turtles that are being clicked and then we can access that turtle info by activeTurtle.type or etc
    vm.activeTurtle = {};

    // created a function to set current turtle when button is clicked
    vm.changeActiveTurtle = function(index){
        vm.activeTurtle = index;
    }

    // Adding the search property to be used in ng-model
    vm.search="";



    vm.activateQuiz = function(){
      // fetching the changeState method from quizMetrics that we passed into our controller
        quizMetrics.changeState(true)
    }
  }





})();
