'use strict';

var Marionette = require('../shims/marionette'),
    PresentationView = require('../views/presentation'),
    commands = require('../config/commands'),
    PresentationController;

/**
 * Simple controller for our presentation router
 */
PresentationController = Marionette.Controller.extend({
    initialize: function(opts) {
        this.slides = opts.slides;
    },
    stepTo: function(id) {
        if (!this.view) {
            this.view = new PresentationView({ collection: this.slides });
            commands.execute('app:screen:show', this.view);
        }

        if (!id) {
            this.slides.stepTo(1);
            return;
        }

        this.slides.stepTo(parseInt(id, 10));
    }
});

module.exports = PresentationController;
