import Router, { useRouter } from "next/router";

const ClientProjectsPage = () => {
    const router = useRouter();

    const loadProjectHandler = () => {
        router.push('/clients/reece/projecta')
    };

    return (
        <div>
            <h1>The Clients Projects Page</h1>
            <button onClick={loadProjectHandler}>Load Project A</button>
        </div>
    );
};

export default ClientProjectsPage;
