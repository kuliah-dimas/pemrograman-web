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
          <section className="py-8 px-4 w-full">
            <table className="table-auto w-full bg-white shadow rounded">
              <thead className="border-b border-gray-100">
                <tr>
                  <th className="pl-6 py-6">
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
                {mahasiswas.map((mahasiswa)=> <tr className="text-xs bg-blue-50 border-b border-gray-100">
                  <td className="pl-6 py-6 bg-blue-100">{mahasiswa.id}</td>
                  <td className="pl-6">{mahasiswa.nama}</td>
                  <td>{mahasiswa.npm}</td>
                  <td>{mahasiswa.kelas}</td>
                  <td className="flex gap-3">
                    <div className="border px-2 py-1 bg-blue-700 text-white">Edit</div>
                    <div className="border px-2 py-1 bg-red-500 text-white">Delete</div>
                  </td>
                </tr>)}
              </tbody>
            </table>
          </section>
      </div>
    </Layout>
  );
}
