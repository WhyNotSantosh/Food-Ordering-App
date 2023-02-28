import { useState } from "react";
const Section = ({ title, description, isVisible, setIsVisible }) => {
    return (
        <div className="p-2 m-2 border border-black">
            <h1 className="font-bold">{title}</h1>
            <button className="cursor-pointer underline" onClick={() => { setIsVisible(!isVisible) }}>{isVisible ? "hide" : "show"}</button>
            {isVisible && <p>{description}</p>}
        </div>
    )
}

const Instamart = () => {
    const [visibleSection, setVisibleSection] = useState("about");
    return (
        <>
            <h1 className="text-3xl p-2 m-2 font-bold">Instamart</h1>
            <h1 className="text-3xl p-2 m-2 font-bold">I am Instamart component. I am lazy loaded with a different chunk. And all my sections state is lifted up to its parent for accordian functionality.</h1>
            <Section title={"About Instamart"}
                description={"It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like)."}
                isVisible={visibleSection === "about"}
                setIsVisible={(isVisible) => {
                    isVisible ? setVisibleSection("about") : setVisibleSection("");
                }}
            />
            <Section title={"Careers at Instamart"}
                description={"It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like)."}
                isVisible={visibleSection === "career"}
                setIsVisible={(isVisible) => {
                    isVisible ? setVisibleSection("career") : setVisibleSection("");
                }}
            />
            <Section title={"Team at Instamart"}
                description={"It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like)."}
                isVisible={visibleSection === "team"}
                setIsVisible={(isVisible) => {
                    isVisible ? setVisibleSection("team") : setVisibleSection("");
                }}
            />
            <Section title={"Products at Instamart"}
                description={"It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like)."}
                isVisible={visibleSection === "product"}
                setIsVisible={(isVisible) => {
                    isVisible ? setVisibleSection("product") : setVisibleSection("");
                }}
            />
        </>
    )
}

export default Instamart;