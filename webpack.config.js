import path from "path";

export default {
    entry: "./src/index.js", // File entry utama
    output: {
        path: path.resolve("dist"), // Output folder
        filename: "bundle.js", // Nama file bundle
        // libraryTarget: "module",
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader",
                    options: {
                        presets: ["@babel/preset-env"],
                    },
                },
            },
        ],
    },
    target: "node", // Target environment
};
