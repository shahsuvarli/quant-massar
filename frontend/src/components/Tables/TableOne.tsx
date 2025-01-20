import { BRAND } from "@/types/brand";
import Image from "next/image";

const brandData: BRAND[] = [
  {
    logo: "/images/brand/brand-01.svg",
    name: "Google",
    visitors: 3.5,
    revenues: "5,768",
    sales: 590,
    conversion: 4.8,
  },
  {
    logo: "/images/brand/brand-02.svg",
    name: "Twitter",
    visitors: 2.2,
    revenues: "4,635",
    sales: 467,
    conversion: 4.3,
  },
  {
    logo: "/images/brand/brand-03.svg",
    name: "Github",
    visitors: 2.1,
    revenues: "4,290",
    sales: 420,
    conversion: 3.7,
  },
  {
    logo: "/images/brand/brand-04.svg",
    name: "Vimeo",
    visitors: 1.5,
    revenues: "3,580",
    sales: 389,
    conversion: 2.5,
  },
  {
    logo: "/images/brand/brand-05.svg",
    name: "Facebook",
    visitors: 3.5,
    revenues: "6,768",
    sales: 390,
    conversion: 4.2,
  },
];

const TableOne = () => {
  return (
    <div className="rounded-sm border border-stroke bg-white px-5 pb-2.5 pt-6 shadow-default dark:border-strokedark dark:bg-boxdark sm:px-7.5 xl:pb-1">
      <h4 className="mb-6 text-xl font-semibold text-black dark:text-white">
        Top Channels
      </h4>
      <table className="w-full border-collapse">
        <thead>
          <tr className="bg-gray-2 dark:bg-meta-4">
            <th className="p-2.5 text-left text-sm font-medium uppercase xsm:text-base xl:p-5">
              Source
            </th>
            <th className="p-2.5 text-center text-sm font-medium uppercase xsm:text-base xl:p-5">
              Visitors
            </th>
            <th className="p-2.5 text-center text-sm font-medium uppercase xsm:text-base xl:p-5">
              Revenues
            </th>
            <th className="p-2.5 text-center text-sm font-medium uppercase xsm:text-base xl:p-5">
              Sales
            </th>
            <th className="p-2.5 text-center text-sm font-medium uppercase xsm:text-base xl:p-5">
              Conversion
            </th>
          </tr>
        </thead>
        <tbody>
          {brandData.map((brand, key) => (
            <tr
              key={key}
              className={`border-b border-stroke dark:border-strokedark ${key === brandData.length - 1 ? "" : "border-b"
                }`}
            >
              <td className="flex items-center gap-3 p-2.5 xl:p-5">
                <Image src={brand.logo} alt={brand.name} width={48} height={48} />
                <span className="hidden sm:block text-black dark:text-white">
                  {brand.name}
                </span>
              </td>
              <td className="p-2.5 text-center xl:p-5 text-black dark:text-white">
                {brand.visitors}K
              </td>
              <td className="p-2.5 text-center xl:p-5 text-meta-3">
                ${brand.revenues}
              </td>
              <td className="p-2.5 text-center xl:p-5 text-black dark:text-white">
                {brand.sales}
              </td>
              <td className="p-2.5 text-center xl:p-5 text-meta-5">
                {brand.conversion}%
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TableOne;