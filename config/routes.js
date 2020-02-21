const admin = require("./admin.js")


module.exports = app => {
    app.post('/signup', app.api.user.save)
    app.post('/signin', app.api.auth.signin)
    app.post('/validateToken', app.api.auth.validateToken)


    app.route('/users')
        .all(app.config.passport.authenticate())
        .get(app.api.user.get)
        .post(app.api.user.save)

    app.route('/users/:id')
        .all(app.config.passport.authenticate())
        .put(app.api.user.save)
        .get(app.api.user.getById)
        .delete(app.api.user.remove)

    app.route('/categories')
        .all(app.config.passport.authenticate())
        .post(app.api.category.save)
        .get(app.api.category.get)

    app.route('/categories/:id')
        .all(app.config.passport.authenticate())
        .delete(admin(app.api.category.remove))

    app.route('/addresses/')
        .all(app.config.passport.authenticate())
        .post(app.api.address.save)
        .get(app.api.address.get)

    app.route('/addresses/:id')
        .all(app.config.passport.authenticate())
        .delete(admin(app.api.address.remove))
        .post(app.api.address.save)

    app.route('/pins/')
        .all(app.config.passport.authenticate())
        .get(app.api.pins.get)
        .post(app.api.pins.save)

    app.route('/pins/:id')
        .all(app.config.passport.authenticate())
        .get(app.api.pins.getById)
        .post(app.api.pins.save)
        .delete(app.api.pins.remove)

    app.route('/maps/')
        .all(app.config.passport.authenticate())
        .get(app.api.maps.get)
        .post(app.api.maps.save)
        .delete(app.api.maps.remove)

    app.route('/stats')
        .get(app.api.stats.get)

}