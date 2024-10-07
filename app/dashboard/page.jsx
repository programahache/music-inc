'use client';

export default function DashboardPage() {
    return (
        <div className="flex-col flex gap-2">
            <div className="flex items-center justify-center">
                <div className="p-2 bg-neutral-500 w-1/2 rounded-lg ">
                    <input type="text" placeholder="Buscarv canciones, álbumes, artistas o podscasts" className="w-full bg-transparent focus:outline-none p-1 rounded-lg text-white" />
                </div>
            </div>
            <div className="flex-col flex gap-2">
                <div>
                    <h2 className="text-3xl p-2 font-bold">Recomendaciones para ti</h2>
                    <div className="flex items-center justify-center gap-3 overflow-x-auto ">
                        <div>
                            <img src="https://via.placeholder.com/150" alt="Album" />
                            <p>Nombre del album</p>
                        </div>
                        <div>
                            <img src="https://via.placeholder.com/150" alt="Album" />
                            <p>Nombre del album</p>
                        </div>
                        <div>
                            <img src="https://via.placeholder.com/150" alt="Album" />
                            <p>Nombre del album</p>
                        </div>
                        <div>
                            <img src="https://via.placeholder.com/150" alt="Album" />
                            <p>Nombre del album</p>
                        </div>
                        <div>
                            <img src="https://via.placeholder.com/150" alt="Album" />
                            <p>Nombre del album</p>
                        </div>
                        <div>
                            <img src="https://via.placeholder.com/150" alt="Album" />
                            <p>Nombre del album</p>
                        </div>


                    </div>
                </div>

                <div className="overflow-x-auto ">
                    <h2 className="text-3xl p-2 font-bold ">Volver a escuchar</h2>
                    <div className="flex items-center justify-center gap-3 overflow-x-auto max-w-[90%] p-2 ">
                        <div>
                            <img src="https://via.placeholder.com/150" alt="Album" />
                            <p>Nombre del album</p>
                        </div>
                        <div>
                            <img src="https://via.placeholder.com/150" alt="Album" />
                            <p>Nombre del album</p>
                        </div>
                        <div>
                            <img src="https://via.placeholder.com/150" alt="Album" />
                            <p>Nombre del album</p>
                        </div>
                        <div>
                            <img src="https://via.placeholder.com/150" alt="Album" />
                            <p>Nombre del album</p>
                        </div>
                        <div>
                            <img src="https://via.placeholder.com/150" alt="Album" />
                            <p>Nombre del album</p>
                        </div>
                        <div>
                            <img src="https://via.placeholder.com/150" alt="Album" />
                            <p>Nombre del album</p>
                        </div>
                        <div>
                            <img src="https://via.placeholder.com/150" alt="Album" />
                            <p>Nombre del album</p>
                        </div>
                        <div>
                            <img src="https://via.placeholder.com/150" alt="Album" />
                            <p>Nombre del album</p>
                        </div>
                        <div>
                            <img src="https://via.placeholder.com/150" alt="Album" />
                            <p>Nombre del album</p>
                        </div>


                    </div>
                </div>

                <div>
                    <h2 className="text-2xl p-2 font-bold">Lo más escuchado</h2>
                    <div className="flex items-center justify-center gap-3 overflow-x-auto max-w-[90%] p-2">
                        <div>
                            <img src="https://via.placeholder.com/150" alt="Album" />
                            <p>Nombre del album</p>
                        </div>
                        <div>
                            <img src="https://via.placeholder.com/150" alt="Album" />
                            <p>Nombre del album</p>
                        </div>
                        <div>
                            <img src="https://via.placeholder.com/150" alt="Album" />
                            <p>Nombre del album</p>
                        </div>
                        <div>
                            <img src="https://via.placeholder.com/150" alt="Album" />
                            <p>Nombre del album</p>
                        </div>
                        <div>
                            <img src="https://via.placeholder.com/150" alt="Album" />
                            <p>Nombre del album</p>
                        </div>
                        <div>
                            <img src="https://via.placeholder.com/150" alt="Album" />
                            <p>Nombre del album</p>
                        </div>
                        <div>
                            <img src="https://via.placeholder.com/150" alt="Album" />
                            <p>Nombre del album</p>
                        </div>
                        <div>
                            <img src="https://via.placeholder.com/150" alt="Album" />
                            <p>Nombre del album</p>
                        </div>

                    </div>
                </div>
            </div>

        </div>
    );
}