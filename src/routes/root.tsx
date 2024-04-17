import { Outlet } from "react-router-dom";
import { Header } from '../components/header';
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient();

export default function Root() {
    return (
        <>
            <Header />
            <div id="detail" className="mt-20">
                <QueryClientProvider client={queryClient}>
                    <Outlet />
                </QueryClientProvider>
            </div>
        </>
    );
}