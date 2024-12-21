import { Sidebarra } from '../../components/sidebarra/sidebarra';
import { Table } from 'flowbite-react';

const Computadores = () => {
    return (
        <div className="flex">
            <div className="h-screen">
                <Sidebarra />
            </div>
            <div className="overflow-x-auto w-screen p-10">
                <Table>
                    <Table.Head>
                        <Table.HeadCell>Nombre Equipo</Table.HeadCell>
                        <Table.HeadCell>Tipo</Table.HeadCell>
                        <Table.HeadCell>Serie</Table.HeadCell>
                        <Table.HeadCell>Disco Duro</Table.HeadCell>
                        <Table.HeadCell>Memoria RAM</Table.HeadCell>
                        <Table.HeadCell>Serie Cargador</Table.HeadCell>
                        <Table.HeadCell>Editar</Table.HeadCell>
                        <Table.HeadCell>Borrar</Table.HeadCell>
                        <Table.HeadCell>
                            <span className="sr-only">Edit</span>
                        </Table.HeadCell>
                    </Table.Head>
                    <Table.Body className="divide-y">
                        <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
                            <Table.Cell>cur_gsalazar</Table.Cell>
                            <Table.Cell>Laptop</Table.Cell>
                            <Table.Cell>ACM1PT</Table.Cell>
                            <Table.Cell>500 GB</Table.Cell>
                            <Table.Cell>16 GB</Table.Cell>
                            <Table.Cell>ACM1PTCAR</Table.Cell>
                            <Table.Cell>
                                <a
                                    href="#"
                                    className="font-medium text-cyan-600 hover:underline dark:text-cyan-500"
                                >
                                    Editar
                                </a>
                            </Table.Cell>
                            <Table.Cell>
                                <a
                                    href="#"
                                    className="font-medium text-cyan-600 hover:underline dark:text-cyan-500"
                                >
                                    Eliminar
                                </a>
                            </Table.Cell>
                        </Table.Row>
                    </Table.Body>
                </Table>
            </div>
        </div>
    );
};

export default Computadores;
