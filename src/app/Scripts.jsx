"use client"
import { useEffect } from 'react'

const Scripts = () => {
    useEffect(() => {
        const timer = setTimeout(() => {
            //======== Lucky Oragne ========//
            // const luckyOrange = document.createElement("script");
            // luckyOrange.id = "luckyOrange";
            // luckyOrange.src = "https://tools.luckyorange.com/core/lo.js?site-id=1cfb1cde";
            // luckyOrange.async = true;
            // luckyOrange.defer = true;
            // document.body.appendChild(luckyOrange);
            // //======== zenDesk ========//
            // const zenDesk = document.createElement("script");
            // zenDesk.id = "ze-snippet";
            // zenDesk.src = "https://static.zdassets.com/ekr/snippet.js?key=a3b9dc66-9fe2-4cb3-87a3-1e7c830425af";
            // zenDesk.async = true;
            // zenDesk.defer = true;
            // document.body.appendChild(zenDesk);
            // //======== GATG ========//
            // const gtmScript = document.createElement("script");
            // gtmScript.id = "google-tag-manager";
            // gtmScript.src = "https://www.googletagmanager.com/gtag/js?id=AW-10860906782";
            // gtmScript.async = true;
            // gtmScript.defer = true;
            // document.head.appendChild(gtmScript);
            // //======== Google Tag Manager ========//
            // const gtmConfigScript = document.createElement("script");
            // gtmConfigScript.id = "google-tag-manager-one";
            // gtmConfigScript.text = `
            //     window.dataLayer = window.dataLayer || [];
            //     function gtag(){dataLayer.push(arguments);}
            //     gtag('js', new Date());
            //     gtag('config', 'AW-10860906782');
            // `;
            // document.head.appendChild(gtmConfigScript);
        }, 10000);

        return () => clearTimeout(timer);
    }, []);

    return null;
}

export default Scripts
