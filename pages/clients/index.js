import Link from "next/link";

const ClientsPage = () => {
    const clients = [
        { id: "reece", name: "Reece" },
        { id: "dave", name: "Dave" },
    ];

    return (
        <div>
            <h1>The Clients Page</h1>
            <ul>
                {clients.map((client) => (
                    <li key={client.id}>
                        <Link
                            href={{
                                pathname: "/clients/[id]",
                                query: { id: client.id },
                            }}
                        >
                            {client.name}
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default ClientsPage;
