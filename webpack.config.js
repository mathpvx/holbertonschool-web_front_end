const path = require('path');

module.exports = {
    entry: './src/index.js', // Point d'entrée principal
    output: {
        filename: 'bundle.js', // Nom du fichier de sortie
        path: path.resolve(__dirname, 'dist'), // Dossier de sortie
    },
    devServer: {
        static: path.resolve(__dirname, 'dist'), // Dossier pour servir les fichiers
        port: 8080, // Port du serveur
        open: true, // Ouvre automatiquement le navigateur
    },
    mode: 'development', // Mode de développement
};
