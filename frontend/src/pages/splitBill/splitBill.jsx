import { useState, Fragment } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { useNavigate } from "react-router-dom";

function SplittBill() {
    const navigate = useNavigate();
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [code, setCode] = useState("");

    function onHandlerClick(menu) {
        navigate(`/${menu}`);
    }

    function openModal() {
        setIsModalOpen(true);
    }

    function closeModal() {
        setIsModalOpen(false);
    }

    function handleAccept() {
        navigate("/splitbill/session/pay");
    }

    return (
        <div>
            <h1 className="text-white text-2xl flex flex-col items-center">
                <h1 className="my-5 text-3xl font-bold">DIVIDIR GASTOS</h1>
                <div className="flex flex-col justify-center items-center w-full">
                    <button
                        className="bg-transparent border border-white rounded-md my-4 w-[60%] py-2 text-lg"
                        onClick={() => {
                            onHandlerClick("splitbill/session/code");
                        }}
                    >
                        Crear sala
                    </button>
                    <button
                        className="bg-transparent border border-white rounded-md my-4 w-[60%] py-2 text-lg"
                        onClick={openModal}
                    >
                        Ingresar a una sala
                    </button>
                </div>
            </h1>

            <Transition appear show={isModalOpen} as={Fragment}>
                <Dialog as="div" className="relative z-10" onClose={closeModal}>
                    <Transition.Child
                        as={Fragment}
                        enter="ease-out duration-300"
                        enterFrom="opacity-0"
                        enterTo="opacity-100"
                        leave="ease-in duration-200"
                        leaveFrom="opacity-100"
                        leaveTo="opacity-0"
                    >
                        <div className="fixed inset-0 bg-black bg-opacity-25" />
                    </Transition.Child>

                    <div className="fixed inset-0 overflow-y-auto">
                        <div className="flex min-h-full items-center justify-center p-4 text-center">
                            <Transition.Child
                                as={Fragment}
                                enter="ease-out duration-300"
                                enterFrom="opacity-0 scale-95"
                                enterTo="opacity-100 scale-100"
                                leave="ease-in duration-200"
                                leaveFrom="opacity-100 scale-100"
                                leaveTo="opacity-0 scale-95"
                            >
                                <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                                    <Dialog.Title
                                        as="h3"
                                        className="text-lg font-medium leading-6 text-gray-900"
                                    >
                                        Ingresar a una sala
                                    </Dialog.Title>
                                    <div className="mt-2">
                                        <input
                                            type="text"
                                            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                                            placeholder="Código de la sala"
                                            value={code}
                                            onChange={(e) => setCode(e.target.value)}
                                        />
                                    </div>

                                    <div className="mt-4 flex justify-end">
                                        <button
                                            className="inline-flex justify-center px-4 py-2 text-sm font-medium text-white bg-red-600 border border-transparent rounded-md hover:bg-red-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-red-500"
                                            onClick={closeModal}
                                        >
                                            Cancelar
                                        </button>
                                        <button
                                            className="ml-2 inline-flex justify-center px-4 py-2 text-sm font-medium text-white bg-green-600 border border-transparent rounded-md hover:bg-green-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-green-500"
                                            onClick={handleAccept}
                                        >
                                            Aceptar
                                        </button>
                                    </div>
                                </Dialog.Panel>
                            </Transition.Child>
                        </div>
                    </div>
                </Dialog>
            </Transition>
        </div>
    );
}

export default SplittBill;
