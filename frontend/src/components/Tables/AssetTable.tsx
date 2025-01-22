"use client"

import { Asset } from "@/types";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { MouseEvent, useState } from "react";
import TableLine from "./TableLine";


const AssetTable = ({ data, portfolio_id }: { data: Asset[], portfolio_id: number }) => {
    const router = useRouter();
    function handleClick(portfolio_id: number) {
        const path = window.location.pathname;
        router.push(`${path}/transactions/${portfolio_id}`);
    }
    return (
        <div className="rounded-sm border border-stroke bg-white px-5 pb-2.5 pt-6 shadow-default dark:border-strokedark dark:bg-boxdark sm:px-7.5 xl:pb-1">
            <h4 className="mb-6 text-xl font-semibold text-black dark:text-white">
                Portfolio ID {portfolio_id}
            </h4>
            <table className="w-full border-collapse">
                <thead>
                    <tr className="bg-gray-2 dark:bg-meta-4">
                        <th className="p-2.5 text-center xl:p-5">Logo</th>
                        <th className="p-2.5 text-center xl:p-5">Ticker</th>
                        <th className="p-2.5 text-center xl:p-5">Asset Name</th>
                        <th className="p-2.5 text-center xl:p-5">Quantity</th>
                        <th className="p-2.5 text-center xl:p-5">Purchase Price</th>
                        <th className="p-2.5 text-center xl:p-5">Current Price</th>
                        <th className="p-2.5 text-center xl:p-5">Value</th>
                    </tr>
                </thead>
                <tbody>
                    {data.map((line, index) => {
                        return <TableLine key={index} {...line} handleClick={handleClick} />
                    })}
                </tbody>
            </table>
        </div>
    );
};

export default AssetTable;