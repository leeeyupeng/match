/**
 * Created by liyupeng on 14-9-10.
 */

var MainScene = cc.Scene.extend({
    init: function () {
        this._super();

        return true;
    },
});

MainScene.create = function () {
    var obj = new MainScene();
    if (obj && obj.init()) {
        return obj;
    }

    throw new Error("create MainScene error");
};