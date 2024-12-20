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
                    <Sidebar.Item icon={HiChip}>
                        <Link to="/computadores">Computadores</Link>
                    </Sidebar.Item>
                    <Sidebar.Item icon={HiDesktopComputer}>
                        <Link to="/pantalla">Pantalla</Link>
                    </Sidebar.Item>
                    <Sidebar.Item icon={HiPrinter}>
                        <Link to="/impresora">Impresora</Link>
                    </Sidebar.Item>
                    <Sidebar.Item icon={HiVideoCamera}>
                        <Link to="/proyectores">Proyectores</Link>
                    </Sidebar.Item>
                </Sidebar.ItemGroup>
                <Sidebar.ItemGroup>
                    <Sidebar.Item icon={HiCloudUpload}>
                        <Link to="/ingreso">Ingreso</Link>
                    </Sidebar.Item>
                    <Sidebar.Item icon={HiCloudDownload}>
                        <Link to="/egreso">Egreso</Link>
                    </Sidebar.Item>
                    <Sidebar.Item icon={BiBuoy}>
                        <Link to="/bodega">Bodega</Link>
                    </Sidebar.Item>
                </Sidebar.ItemGroup>
            </Sidebar.Items>
        </Sidebar>
    );
}
