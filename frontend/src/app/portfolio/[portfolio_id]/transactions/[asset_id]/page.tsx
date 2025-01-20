import Breadcrumb from "@/components/Breadcrumbs/Breadcrumb";
import { Metadata } from "next";
import DefaultLayout from "@/components/Layouts/DefaultLayout";
import AssetTable from "@/components/Tables/AssetTable";
import TransactionTable from "@/components/Tables/TransactionTable";

export const metadata: Metadata = {
    title: "Transactions | Quantm",
    description:
        "This is Transactions page for Quantm - Admin Dashboard Template",
};

export default async function TablesPage({ params: { asset_id } }: { params: { asset_id: number } }) {
    const assets = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/transactions/${asset_id}`, {
        cache: "no-store",
    });
    const data = await assets.json();
    return (
        <DefaultLayout>
            <Breadcrumb pageName="Transactions" />
            <div>
                <TransactionTable data={data} asset_id={asset_id} />
            </div>

        </DefaultLayout>
    );
};

