module.exports = {
    env: {
        browser: true, // Jika kamu juga menjalankan kode di browser
        es2021: true,
        node: true, // Tambahkan ini untuk mengenali variabel global Node.js
    },
    extends: ["eslint:recommended"],
    parserOptions: {
        ecmaVersion: 12,
        sourceType: "module",
    },
    // rules: {
    //     // Aturan custom ESLint
    // },
};
