var connectionProperties = {
    "PI_SERVER":  {
        "parameters" : [
            {
                "name": "Connect Timeout",
                "shownName" : "Connect Timeout, seconds",
                "type" : "number",
                "default" : 60,
                "description" : "Connect timeout in seconds."
            }, {
                "name": "Command Timeout",
                "shownName" : "Command Timeout, seconds",
                "type" : "number",
                "default" : 60,
                "description" : "Command timeout in seconds."
            }, {
                "name" : "Ignore Errors",
                "type" : "checkbox",
                "default" : false,
                "description" : "If set, an error retrieving a value will not cause the whole query to fail. Instead the row in error will be omitted."
            }, {
                "name" : "Integers as Value",
                "type" : "checkbox",
                "default" : false,
                "description" : "If set, integer point values are returned in the value column of the picomp and piinterp tables."
            }, {
                "name" : "Keep Default Ordering",
                "type" : "checkbox",
                "default" : true,
                "description" : "If set, the returned table data is ordered according to the criteria defined by the table metadata. " +
                    "If not set, the returned data might not keep this ordering. Setting this property to FALSE can speed up the query execution."
            }
        ],
        fromBool : function(bool) {
            return bool ? "True" : "False";
        },
        toBool : function(str) {
            return "True" === str ? true :
                  "False" === str ? false : undefined;
        }
    },
    "PI_OLEDBENT":  {
        "parameters" : [
            {
                "name" : "Allow Expensive",
                "type" : "checkbox",
                "default" : false,
                "description" : "If set to TRUE, expensive SQL commands can be executed."
            }, {
                "name" : "Cancel On Low Resources",
                "type" : "checkbox",
                "default" : true,
                "description" : "Cancels query execution if available memory pages reach a critical level (greater than 5 percent)."
            }, {
                "name": "Connect Timeout",
                "shownName" : "Connect Timeout, seconds",
                "type" : "number",
                "default" : 60,
                "description" : "Connect timeout in seconds."
            }, {
                "name": "Command Timeout",
                "shownName" : "Command Timeout, seconds",
                "type" : "number",
                "default" : 60,
                "description" : "Command timeout in seconds."
            }, {
                "name" : "Ignore Errors",
                "type" : "checkbox",
                "default" : false,
                "description" : "If set, an error retrieving a value will not cause the whole query to fail. Instead the row in error will be omitted."
            }, {
                "name" : "Integers as Value",
                "type" : "checkbox",
                "default" : false,
                "description" : "If set, integer point values are returned in the value column of the picomp and piinterp tables."
            }, {
                "name" : "Keep Default Ordering",
                "type" : "checkbox",
                "default" : true,
                "description" : "If set, the returned table data is ordered according to the criteria defined by the table metadata. " +
                    "If not set, the returned data might not keep this ordering. Setting this property to FALSE can speed up the query execution."
            }
        ],
        fromBool : function(bool) {
            return bool ? "True" : "False";
        },
        toBool : function(str) {
            return "True" === str ? true :
                  "False" === str ? false : undefined;
        }
    },
    "ATSD" : {
        "parameters": [
            {
                "name" : "strategy",
                "shownName" : "Strategy",
                "type" : "select",
                "values": ["stream", "file", "memory"],
                "default" : "stream",
                "description" : "ResultSet processing strategy"
            }
        ],
        "conditionalParameters" : [
            {
                /**
                 * Function to deal with parameters depending on other field values besides Database Type. It should:
                 * 1) Set conditions when the parameter should be displayed or not
                 * 2) Register callback on the fields the parameter depends on
                 * 3) Return a function to stop listening to change events
                 * @param self structure for describing current parameter
                 * @param $table jQuery object selecting table that keeps the parameters on page. It should catch 'connectionStringPropertyUpdate' events
                 * @param activatorFunction function to be called when parameter should be shown and used
                 * @param deactivatorFunction function to be called when parameter should not be used
                 * @returns {Function} function to be called to stop observing connected events
                 */
                handler : function(self, $table, activatorFunction, deactivatorFunction) {
                    var $protocol = $('#protocol');
                    var callback = conditionalCallbackHelper(function() {
                        return $protocol.val() === 'HTTPS'
                    }, self, $table, activatorFunction, deactivatorFunction);
                    $protocol.change(callback).change()
                    return function() {
                        $protocol.off('change', callback);
                    };
                },
                "name" : "trust",
                "shownName" : "Trust Server Certificate",
                "type" : "checkbox",
                "default" : true,
                "description" : "Skip SSL certification validation"
            }
        ],
        fromBool : function(bool) {
            return (!!bool).toString();
        },
        toBool : function(str) {
            return "true" === str ? true :
                "false" === str ? false : undefined;
        }
    }
};


/**
 * Helper function to create callback for using in conditional parameters handler. It stands the callback API and
 * triggers 'connectionStringPropertyUpdate' when serialized form of connection properties should be regenerated.
 * @param conditionFunction a predicate function. If returns true, activatorFunction will be called, otherwise deactivatorFunction will be called
 * @param self object for describing current parameter
 * @param $table jQuery object selecting table that keeps the parameters on page. It should catch 'connectionStringPropertyUpdate' events
 * @param activatorFunction function to be called to visualize and activate the parameter
 * @param deactivatorFunction function to be called when parameter should be hidden and deactivated
 * @returns {Function} callback function
 */
var conditionalCallbackHelper = function (conditionFunction, self, $table, activatorFunction, deactivatorFunction) {
    return function() {
        if (conditionFunction()) {
            activatorFunction(self);
        } else {
            deactivatorFunction(self);
        }
        $table.trigger('connectionStringPropertyUpdate');
    };
}
