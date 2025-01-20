import Breadcrumb from "@/components/Breadcrumbs/Breadcrumb";
import { Metadata } from "next";
import DefaultLayout from "@/components/Layouts/DefaultLayout";
import PortfolioTable from "@/components/Tables/PortfolioTable";

export const metadata: Metadata = {
    title: "Portfolio | Quantm",
    description:
        "This is Tables page for Quantm - Admin Dashboard Template",
};

export default async function TablesPage() {
    const portfolios = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/portfolios`, {
        cache: "no-store",
    });
    const data = await portfolios.json();
    return (
        <DefaultLayout>
            <Breadcrumb pageName="Portfolio" />
            <div>
                <PortfolioTable data={data} />
            </div>

        </DefaultLayout>
    );
};

