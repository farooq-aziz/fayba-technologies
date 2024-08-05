"use client"

const CTA = ({ text, bg, color, href = false }) => {
    // const { popup, togglePopup } = usePopup()
    // const popupHandle = () => {
    //     togglePopup(popup)
    // }
    return (
        <>
            {href ? <div dangerouslySetInnerHTML={{
                __html: `
                <a href=${href} class="${color} ${bg} allCta">${text}</a>
                `
            }} />
                :
                <button className={`${color} ${bg} popCta`}>Get Started</button>}
                {/* onClick={popupHandle} */}
        </>
    );
}

export default CTA