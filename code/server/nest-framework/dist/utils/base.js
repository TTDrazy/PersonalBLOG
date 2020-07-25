"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const silly_datetime_1 = require("silly-datetime");
const BaseUtils = {
    transformDate: (date) => {
        const newDate = new Date(silly_datetime_1.format(date, 'YYYY-MM-DD HH:mm:ss'));
        return newDate.getTime();
    },
};
exports.default = BaseUtils;
//# sourceMappingURL=base.js.map