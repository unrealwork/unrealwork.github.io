(function (window) {
    'use strict';

    Handlebars.registerHelper('eq', function (a, b, options) {
        return a === b ? options.fn(this) : options.inverse(this);
    });

    /**
     * Create time table section that used in JSON Configuration job.
     * @type {{init: function(*=): Window.TimeTableSection, render: Window.TimeTableSection.render, toggleContent: Window.TimeTableSection.toggleContent, bindEvents: Window.TimeTableSection.bindEvents}}
     */
    window.TimeTableSection = {
        /**
         * Init time table component.
         * @param root parent element where component should be rendered.
         * @param index
         */
        init: function (index) {
            var template = $('#time-section-template').html();
            this.model = {index: index};
            this.resolveTemplate = function () {
                return Handlebars.compile(template)(this.model)
            };

            return this;
        },

        /**
         * Render section in parent element.
         * @param $el
         */
        render: function ($el) {
            var root = $el.append(this.resolveTemplate());
            this.elements = {
                root: root,
                inputs: {
                    defaultTime: root.find('#timeDefault_' + this.model.index)
                }
            };
            this.toggleContent(false);
            this.bindEvents();
        },


        /**
         * Show/hide content
         * @param flag - if true show, otherwise hide.
         */
        toggleContent: function (flag) {
            var root = this.elements.root;
            root.find('.content').toggle(flag);
        },

        /**
         * Bind events to section elements.
         */
        bindEvents: function () {
            var self = this;
            var input = this.elements.inputs.defaultTime[0];
            input.oninput = function (e) {
                var isEmpty = !!e.target.value;
                self.toggleContent(isEmpty)
            };
        }
    };
})(window);

