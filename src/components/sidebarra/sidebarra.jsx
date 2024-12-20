import { Sidebar } from 'flowbite-react';
import { BiBuoy } from 'react-icons/bi';
import {
    HiChartPie,
    HiChip,
    HiDesktopComputer,
    HiPrinter,
    HiUser,
    HiCloudUpload,
    HiCloudDownload,
    HiVideoCamera,
} from 'react-icons/hi';
import { Link } from 'react-router-dom';

export function Sidebarra() {
    return (
        <Sidebar>
            <Sidebar.Items>
                <Sidebar.ItemGroup>
                    <Sidebar.Item icon={HiChartPie}>
                        <Link to="/">Dashboard</Link>
                    </Sidebar.Item>
                    <Sidebar.Item icon={HiUser}>
                        <Link to="/usuarios">Usuarios</Link>
                    </Sidebar.Item>
                    <Sidebar.Item href="#" icon={HiChip}>
                        Computadores
                    </Sidebar.Item>
                    <Sidebar.Item href="#" icon={HiDesktopComputer}>
                        Pantalla
                    </Sidebar.Item>
                    <Sidebar.Item href="#" icon={HiPrinter}>
                        Impresora
                    </Sidebar.Item>
                    <Sidebar.Item href="#" icon={HiVideoCamera}>
                        Proyectores
                    </Sidebar.Item>
                </Sidebar.ItemGroup>
                <Sidebar.ItemGroup>
                    <Sidebar.Item href="#" icon={HiCloudUpload}>
                        Ingreso
                    </Sidebar.Item>
                    <Sidebar.Item href="#" icon={HiCloudDownload}>
                        Egreso
                    </Sidebar.Item>
                    <Sidebar.Item href="#" icon={BiBuoy}>
                        Bodega
                    </Sidebar.Item>
                </Sidebar.ItemGroup>
            </Sidebar.Items>
        </Sidebar>
    );
}
