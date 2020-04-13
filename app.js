// Budget Controller

var budgetController = (function() {





})();

// UI Controller

var UIController = (function() {

    var DOMstrings = {
     inputType: '.add__type',
        inputDescription: '.add__description',
        inputValue: '.add__value',
        inputButton: '.add__btn',
    };
    return {
        getInput: function() {
            return {
                type: document.querySelector(DOMstrings.inputType).value,
                description: document.querySelector(DOMstrings.inputDescription).value,
                value: document.querySelector(DOMstrings.inputValue).value,
            };
        },
            getDOM: function() {
                return DOMstrings;
            }

    };
})();


// Controller

var controller = (function(UIctrl, budgetCtrl) {
    
    var setupEventListeners = function() {
    
        var DOM = UIctrl.getDOM();
    
            document.querySelector(DOM.inputButton).addEventListener('click', ctrlAddItem);
    
            document.addEventListener('keypress', function(event) {
    
            if (event.keyCode === 13) {
                ctrlAddItem();
            }
        
        });

    };
    
    var ctrlAddItem = function() {
       var input = UIctrl.getInput();
       console.log(input);
    };

    
    return {
        init: function() {
            console.log("App started");
            setupEventListeners();
        }
    };
    
})(UIController, budgetController);

controller.init();