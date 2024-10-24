"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const { zokou } = require("../framework/zokou");
zokou({ nomCom: "ping", reaction: "🧒", nomFichier: __filename }, async (dest, zk, commandeOptions) => {
    console.log("Commande saisie !!!s");
    let z = 'AM ALIVE STUPID....\n\n\n';
    let d = '                                                                           I LOVE MY OWNER';
    let varmess = z + d;
    var img = 'https://files.catbox.moe/ps8cqh.jpg';
    await zk.sendMessage(dest, { video: { url: img }, caption: varmess });
    //console.log("montest")
});
console.log("mon test");
