const CracoLessPlugin = require("craco-less");

module.exports = {
    plugins: [
        {
            plugin: CracoLessPlugin,
            options: {
                lessLoaderOptions: {
                    modifyVars: { "@primary-color": "palevioletred" },
                    javascriptEnabled: true,
                },
            },
        },
    ],
};
