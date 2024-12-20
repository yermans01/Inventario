import { Sidebarra } from '../../components/sidebarra/sidebarra';

const User = () => {
    return (
        <div className="flex">
            <div className="h-screen">
                <Sidebarra />
            </div>
            <div>aqui van los usuarios</div>
        </div>
    );
};

export default User;
