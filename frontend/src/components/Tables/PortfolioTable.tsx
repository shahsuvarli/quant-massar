"use client"

import { Portfolio } from "@/types";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { MouseEvent } from "react";


const PortfolioTable = ({ data }: { data: Portfolio[] }) => {
    const router = useRouter();
    function handleClick(portfolio_id: number) {
        router.push(`/portfolio/${portfolio_id}`);
    }
    return (
        <div className="rounded-sm border border-stroke bg-white px-5 pb-2.5 pt-6 shadow-default dark:border-strokedark dark:bg-boxdark sm:px-7.5 xl:pb-1">
            <h4 className="mb-6 text-xl font-semibold text-black dark:text-white">
                Top Channels
            </h4>
            <table className="w-full border-collapse">
                <thead>
                    <tr className="bg-gray-2 dark:bg-meta-4">

                        <th className="p-2.5 text-center xl:p-5">Owner</th>
                        <th className="p-2.5 text-center xl:p-5">Total Value</th>
                        <th className="p-2.5 text-center xl:p-5">Risk Level</th>
                        <th className="p-2.5 text-center xl:p-5">Performance</th>
                        <th className="p-2.5 text-center xl:p-5">Created At</th>
                    </tr>
                </thead>
                <tbody>
                    {data.map(({ id, user_id, total_value, risk_level, performance, created_at }) => (
                        <tr
                            key={id}
                            className={`border-b border-stroke dark:border-strokedark hover:bg-slate-300 hover:cursor-pointer}`}

                            onClick={() => handleClick(id)}
                        >
                            <td className="flex items-center gap-3 p-2.5 xl:p-5">
                                <Image src={`https://randomuser.me/api/portraits/men/${id}.jpg`} alt={`${user_id}`} width={48} height={48} className="rounded-full" />
                                {/* <span className="hidden sm:block text-black dark:text-white">
                                    {brand.name}
                                </span> */}
                            </td>
                            {/* <td className="p-2.5 text-center xl:p-5 text-black dark:text-white">
                                {user_id}
                            </td> */}
                            <td className="p-2.5 text-center xl:p-5 text-meta-3">
                                $ {total_value}
                            </td>
                            <td className="p-2.5 text-center xl:p-5 text-black dark:text-white">
                                {risk_level}
                            </td>
                            <td className="p-2.5 text-center xl:p-5 text-meta-5">
                                {performance}%
                            </td>
                            <td className="p-2.5 text-center xl:p-5 text-meta-5">
                                {created_at.split("T")[0]}
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default PortfolioTable;