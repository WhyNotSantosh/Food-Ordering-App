import { useState } from "react";
import Modal from "./Modal";
const Section = ({ title, description, isVisible, setIsVisible }) => {
    return (
        <div className="p-2 m-2 border border-black">
            <h1 className="font-bold">{title}</h1>
            <button className="cursor-pointer underline" onClick={() => { setIsVisible(!isVisible) }}>{isVisible ? "Hide" : "Show"}</button>
            {isVisible && <p>{description}</p>}
        </div>
    )
}

const Instamart = () => {
    const [visibleSection, setVisibleSection] = useState("about");
    const [openModal, setOpenModal] = useState(false);
    const info="I am Instamart component. I am lazy loaded with a different chunk. And all my sections state is lifted up to its parent for accordian functionality. Link to https://legacy.reactjs.org/docs/lifting-state-up.html";
    return (
        <>
            {openModal && <Modal closeModal={setOpenModal} info={info}/>}
            <div className="flex justify-between">
                <h1 className="text-3xl p-2 m-2 font-bold">Instamart</h1>
                <span className="relative inline-flex p-2 m-4">
                    <button type="button" className="inline-flex items-center px-4 py-2 font-semibold leading-6 text-sm shadow rounded-md text-sky-500 bg-white dark:bg-slate-800 transition ease-in-out duration-150 ring-1 ring-slate-900/10 dark:ring-slate-200/20"
                        onClick={() => setOpenModal(true)}
                    >
                        Info
                    </button>
                    <span className="flex absolute h-3 w-3 top-0 right-0 -mt-1 -mr-1">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-sky-400 opacity-75"></span>
                        <span className="relative inline-flex rounded-full h-3 w-3 bg-sky-500"></span>
                    </span>
                </span>
            </div>
           
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