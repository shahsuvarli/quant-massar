"use client"

import { Transaction } from "@/types";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { MouseEvent, useState } from "react";


const TransactionTable = ({ data, asset_id }: { data: Transaction[], asset_id: number }) => {
    const router = useRouter();
    function handleClick(asset_id: number) {
        router.push(`/transaction/${asset_id}`);
    }
    return (
        <div className="rounded-sm border border-stroke bg-white px-5 pb-2.5 pt-6 shadow-default dark:border-strokedark dark:bg-boxdark sm:px-7.5 xl:pb-1">
            <h4 className="mb-6 text-xl font-semibold text-black dark:text-white">
                Portfolio Asset ID {asset_id}
            </h4>
            <table className="w-full border-collapse">
                <thead>
                    <tr className="bg-gray-2 dark:bg-meta-4">

                        {/* <th className="p-2.5 text-left xl:p-5">Logo</th> */}
                        <th className="p-2.5 text-center xl:p-5">Transaction Type</th>
                        <th className="p-2.5 text-center xl:p-5">Quantity</th>
                        <th className="p-2.5 text-center xl:p-5">Price</th>
                        <th className="p-2.5 text-center xl:p-5">Total Value</th>
                        <th className="p-2.5 text-center xl:p-5">Transaction Date</th>

                    </tr>
                </thead>
                <tbody>
                    {data.map(({ id, transaction_type, quantity, price, total_value, transaction_date }) => {
                        // const [image, setImage] = useState<string>(`https://eodhd.com/img/logos/US/${ticker.toLowerCase()}.png`);
                        return (
                            <tr
                                key={id}
                                className={`border-b border-stroke dark:border-strokedark hover:bg-slate-300 hover:cursor-pointer}`}
                                onClick={() => handleClick(id)}
                            >
                                {/* <td className="flex items-center gap-3 p-2.5 xl:p-5">
                                    <Image src={image} onError={() => {
                                        setImage(`https://eodhd.com/img/logos/US/${ticker}.png`);
                                    }} alt={`${id}`} width={48} height={48} />
                                </td> */}
                                <td className="p-2.5 text-center xl:p-5 text-black dark:text-white">
                                    {transaction_type}
                                </td>
                                <td className="p-2.5 text-center xl:p-5 text-meta-3">
                                    {quantity}
                                </td>
                                <td className="p-2.5 text-center xl:p-5 text-black dark:text-white">
                                    $ {price}
                                </td>
                                <td className="p-2.5 text-center xl:p-5 text-meta-5">
                                    $ {total_value}
                                </td>
                                <td className="p-2.5 text-center xl:p-5 text-meta-5">
                                    {transaction_date.split("T")[0]}
                                </td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>
        </div>
    );
};

export default TransactionTable;