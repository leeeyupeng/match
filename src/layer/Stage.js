/**
 * Created by liyupeng on 14-9-10.
 */
var Stage = cc.Layer.extend({
    init: function () {
        this._super();

        return true;
    },
});

Stage.create = function () {
    var obj = new Stage();
    if (obj && obj.init()) {
        return obj;
    }

    throw new Error("create Stage error");
};