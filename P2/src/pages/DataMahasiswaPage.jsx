import { useEffect, useState } from "react";
import Layout from "./Layout";
import axios from "axios";

export default function DataMahasiswaPage() {
  const mahasiswas = [
    {
      id: 1,
      npm: "50422430",
      nama: "Dimas Febriyanto",
      kelas: "3IA21",
    },
    {
      id: 2,
      npm: "50422XXX",
      nama: "Shabrina Dzakiyah A",
      kelas: "3IA21",
    },
  ]

  
  return (
    <Layout>
      <div className="pt-20">
          <section className="w-full px-4 py-8">
            <table className="w-full bg-white rounded shadow table-auto">
              <thead className="border-b border-gray-100">
                <tr>
                  <th className="py-6 pl-6">
                    <div className="flex items-center text-xs text-gray-500">
                      <p>ID</p>
                    </div>
                  </th>
                  <th>
                    <div className="flex items-center text-xs text-gray-500">
                      <p>Nama</p>
                    </div>
                  </th>
                  <th>
                    <div className="flex items-center text-xs text-gray-500">
                      <p>NPM</p>
                    </div>
                  </th>
                  <th>
                    <div className="flex items-center text-xs text-gray-500">
                      <p>Kelas</p>
                    </div>
                  </th>
                  <th>
                    <div className="flex items-center text-xs text-gray-500">
                      <p>Action</p>
                    </div>
                  </th>
                </tr>
              </thead>
              <tbody>
                {mahasiswas.map((mahasiswa)=> <tr className="text-xs border-b border-gray-100 bg-blue-50">
                  <td className="py-6 pl-6 bg-blue-100">{mahasiswa.id}</td>
                  <td className="pl-6">{mahasiswa.nama}</td>
                  <td>{mahasiswa.npm}</td>
                  <td>{mahasiswa.kelas}</td>
                  <td>
                    <div className="px-2 py-1 text-white bg-blue-700 border w-max">Edit</div>
                    <div className="px-2 py-1 text-white bg-red-500 border w-max">Delete</div>
                  </td>
                </tr>)}
              </tbody>
            </table>
          </section>
      </div>
    </Layout>
  );
}
