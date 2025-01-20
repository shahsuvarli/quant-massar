import Breadcrumb from "@/components/Breadcrumbs/Breadcrumb";
import { Metadata } from "next";
import DefaultLayout from "@/components/Layouts/DefaultLayout";
import AssetTable from "@/components/Tables/AssetTable";

export const metadata: Metadata = {
    title: "Portfolio | Quantm",
    description:
        "This is Tables page for Quantm - Admin Dashboard Template",
};

export default async function TablesPage({ params: { portfolio_id } }: { params: { portfolio_id: number } }) {
    const assets = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/portfolios/${portfolio_id}/assets`, {
        cache: "no-store",
    });
    const data = await assets.json();
    return (
        <DefaultLayout>
            <Breadcrumb pageName="Portfolio assets" />
            <div>
                <AssetTable data={data} portfolio_id={portfolio_id} />
            </div>

        </DefaultLayout>
    );
};

