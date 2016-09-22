// index:
'use strict';
module.exports = {
    'GET /': async (ctx, next) => {
        console.log(ctx);
        let user = ctx.state.user;
        if (user) {
            ctx.render('room.html', {
                user: user
            });
        } else {
            ctx.response.redirect('/signin');
        }
    }
};
