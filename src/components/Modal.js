import { useState } from "react";

const Modal = ({ closeModal, info, title }) => {
    return (
        <>
            <div className="fixed top-0 bg-gray-900 bg-opacity-40 left-0 right-0 z-[1055] h-full w-full overflow-y-hidden overflow-x-hidden outline-none  ">
                <div className="pointer-events-none absolute right-7 h-auto w-full translate-x-[100%] transition-all duration-300 ease-in-out min-[576px]:mx-auto min-[576px]:mt-7 min-[576px]:max-w-[500px] transform-none opacity-100 p-4 m-4">
                    <div className="min-[576px]:shadow-[0_0.5rem_1rem_rgba(#000, 0.15)] pointer-events-auto relative flex w-full flex-col rounded-md border-none bg-white bg-clip-padding text-current shadow-lg outline-none dark:bg-neutral-600 p-2">
                        <div className="p-2 font-bold border-b">{title || `Info about this page components`}:</div>
                        <div className="p-2 border-b">{info?.map((i) => {
                            return <li>{i}</li>
                        })}</div>
                        <div><button className="px-4 py-2 mt-2 font-semibold text-sm bg-cyan-500 text-white rounded-full shadow-sm float-right" onClick={() => closeModal(false)}>Close</button></div>
                    </div>
                </div>
            </div>
        </>
    );
}

export const LoginModal = ({ setUser, cancel }) => {
    const [userName, setUserName] = useState("");
    return (
        <>
            <div className="fixed top-0 bg-gray-700 bg-opacity-1 left-0 right-0 z-[1055] h-full w-full overflow-y-hidden overflow-x-hidden outline-none  ">
                <div className="pointer-events-none absolute right-0 left-0 h-auto w-full translate-x-[100%] transition-all duration-300 ease-in-out min-[576px]:mx-auto min-[576px]:mt-7 min-[576px]:max-w-[500px] transform-none opacity-100 p-4 m-4">
                    <div className="min-[576px]:shadow-[0_0.5rem_1rem_rgba(#000, 0.15)] pointer-events-auto relative flex w-full flex-col rounded-md border-none bg-white bg-clip-padding text-current shadow-lg outline-none dark:bg-neutral-600 p-2">
                        <div className="p-2 font-bold border-b">{`Sign in to our platform`}:</div>
                        <div className="m-2">
                            <label for="name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your Name</label>
                            <input type="name" name="name" id="name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" placeholder="Enter your name"
                                onChange={(e) => {
                                    setUserName(e.target.value);
                                }}
                            />
                        </div>

                        <div className="flex justify-center">
                            <button className="px-4 py-2 m-2 font-semibold text-sm bg-cyan-500 text-white rounded-lg shadow-sm"
                                onClick={() => {
                                    setUser({ user: { name: userName } });
                                    cancel(false);
                                }

                                }>Login</button>
                            <button className="px-4 py-2 m-2 font-semibold text-sm bg-cyan-500 text-white rounded-lg shadow-sm" onClick={() => cancel(false)}>Cancel</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Modal;
