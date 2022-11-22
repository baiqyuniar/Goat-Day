import React from "react";

const Statistic = () => {
  return (
    <div className="flex flex-wrap">
      <div className="h-full w-full relative lg:ml-64">
        <div className="pt-6 px-4">
          <div className="w-full grid grid-cols-1 xl:grid-cols-2 2xl:grid-cols-3 gap-4">
            <div className="bg-white shadow rounded-lg p-4 sm:p-6 xl:p-8  2xl:col-span-2">
              <div className="flex items-center justify-between mb-4">
                <div className="flex-shrink-0">
                  <span className="text-2xl sm:text-3xl leading-none font-bold text-gray-900">
                    Rp10.000.000,00
                  </span>
                  <h3 className="text-base font-normal text-gray-500">
                    Keuntungan minggu ini
                  </h3>
                </div>
              </div>
            </div>

            <div className="bg-white shadow rounded-lg p-4 sm:p-6 xl:p-8 ">
              <div className="mb-4 flex items-center justify-between">
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    Transaksi Terbaru
                  </h3>
                  <span className="text-base font-normal text-gray-500">
                    List transaksi terbaru
                  </span>
                </div>
                <div className="flex-shrink-0">
                  <a
                    href="#"
                    className="text-sm font-medium text-cyan-600 hover:bg-gray-100 rounded-lg p-2"
                  >
                    Selengkapnya
                  </a>
                </div>
              </div>
              <div className="flex flex-col mt-8">
                <div className="overflow-x-auto rounded-lg">
                  <div className="align-middle inline-block min-w-full">
                    <div className="shadow overflow-hidden sm:rounded-lg">
                      <table className="min-w-full divide-y divide-gray-200">
                        <thead className="bg-gray-50">
                          <tr>
                            <th
                              scope="col"
                              className="p-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                            >
                              Transaksi
                            </th>
                            <th
                              scope="col"
                              className="p-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                            >
                              Tanggal
                            </th>
                            <th
                              scope="col"
                              className="p-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                            >
                              Jumlah
                            </th>
                          </tr>
                        </thead>
                        <tbody className="bg-white">
                          <tr>
                            <td className="p-4 whitespace-nowrap text-sm font-normal text-gray-900">
                              Investasi dari{" "}
                              <span className="font-semibold">Aaaa</span>
                            </td>
                            <td className="p-4 whitespace-nowrap text-sm font-normal text-gray-500">
                              23 April 2022
                            </td>
                            <td className="p-4 whitespace-nowrap text-sm font-semibold text-gray-900">
                              Rp1.000.000,00
                            </td>
                          </tr>
                          <tr className="bg-gray-50">
                            <td className="p-4 whitespace-nowrap text-sm font-normal text-gray-900 rounded-lg rounded-left">
                              Transfer kepada{" "}
                              <span className="font-semibold">Bbbb</span>
                            </td>
                            <td className="p-4 whitespace-nowrap text-sm font-normal text-gray-500">
                              29 April 2022
                            </td>
                            <td className="p-4 whitespace-nowrap text-sm font-semibold text-gray-900">
                              -Rp500.000,00
                            </td>
                          </tr>
                          <tr>
                            <td className="p-4 whitespace-nowrap text-sm font-normal text-gray-900">
                              Penjualan ternak{" "}
                              <span className="font-semibold">Cccc</span>
                            </td>
                            <td className="p-4 whitespace-nowrap text-sm font-normal text-gray-500">
                              5 Mei 2022
                            </td>
                            <td className="p-4 whitespace-nowrap text-sm font-semibold text-gray-900">
                              Rp3.000.000,00
                            </td>
                          </tr>
                          <tr className="bg-gray-50">
                            <td className="p-4 whitespace-nowrap text-sm font-normal text-gray-900 rounded-lg rounded-left">
                              Penjualan ternak{" "}
                              <span className="font-semibold">Dddd</span>
                            </td>
                            <td className="p-4 whitespace-nowrap text-sm font-normal text-gray-500">
                              5 Mei 2022
                            </td>
                            <td className="p-4 whitespace-nowrap text-sm font-semibold text-gray-900">
                              Rp4.000.000,00
                            </td>
                          </tr>
                          <tr>
                            <td className="p-4 whitespace-nowrap text-sm font-normal text-gray-900">
                              Investasi dari{" "}
                              <span className="font-semibold">Eeee</span>
                            </td>
                            <td className="p-4 whitespace-nowrap text-sm font-normal text-gray-500">
                              18 Mei 2022
                            </td>
                            <td className="p-4 whitespace-nowrap text-sm font-semibold text-gray-900">
                              Rp15.000.000,00
                            </td>
                          </tr>
                          <tr className="bg-gray-50">
                            <td className="p-4 whitespace-nowrap text-sm font-normal text-gray-900 rounded-lg rounded-left">
                              Transfer kepada{" "}
                              <span className="font-semibold">Ffff</span>
                            </td>
                            <td className="p-4 whitespace-nowrap text-sm font-normal text-gray-500">
                              3 Juni 2022
                            </td>
                            <td className="p-4 whitespace-nowrap text-sm font-semibold text-gray-900">
                              -Rp2.000.000,00
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Statistic;
