"use client"

import { Asset } from "@/types";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { MouseEvent, useState } from "react";


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
                    {data.map(({ id, asset_name, ticker, quantity, purchase_price, current_price, value }) => {
                        const [image, setImage] = useState<string>(`https://eodhd.com/img/logos/US/${ticker.toLowerCase()}.png`);
                        return (
                            <tr
                                key={id}
                                className={`border-b border-stroke dark:border-strokedark hover:bg-slate-300 hover:cursor-pointer}`}

                                onClick={() => handleClick(id)}
                            >
                                <td className="flex items-center gap-3 p-2.5 xl:p-5">
                                    <Image src={image} onError={() => {
                                        setImage(`https://eodhd.com/img/logos/US/${ticker}.png`);
                                    }} alt={`${id}`} width={48} height={48} />
                                </td>
                                <td className="p-2.5 text-center xl:p-5 text-black dark:text-white">
                                    {ticker}
                                </td>
                                <td className="p-2.5 text-center xl:p-5 text-meta-3">
                                    {asset_name}
                                </td>
                                <td className="p-2.5 text-center xl:p-5 text-black dark:text-white">
                                    {quantity}
                                </td>
                                <td className="p-2.5 text-center xl:p-5 text-meta-5">
                                    $ {purchase_price}
                                </td>
                                <td className="p-2.5 text-center xl:p-5 text-meta-5">
                                    $ {current_price}
                                </td>
                                <td className="p-2.5 text-center xl:p-5 text-meta-5">
                                    $ {value}
                                </td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>
        </div>
    );
};

export default AssetTable;