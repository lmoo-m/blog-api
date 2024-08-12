const path = require("path");

module.exports = {
    entry: "./src/index.js", // File entry utama
    output: {
        path: path.resolve(__dirname, "dist"), // Output folder
        filename: "bundle.js", // Nama file bundle
        // libraryTarget: "module",
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: "babel-loader",
            },
        ],
    },
    target: "node", // Target environment
};
