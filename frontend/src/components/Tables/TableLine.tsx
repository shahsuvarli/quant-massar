import Image from 'next/image';
import { useState } from 'react'

function TableLine({ id, ticker, asset_name, quantity, purchase_price, current_price, value, handleClick }: { id: number, ticker: string, asset_name: string, quantity: number, purchase_price: number, current_price: number, value: number, handleClick: (id: number) => void }) {
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
}

export default TableLine