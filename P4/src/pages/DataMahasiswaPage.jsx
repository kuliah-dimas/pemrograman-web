import { useEffect, useState } from "react";
import Layout from "./Layout";
import axios from "axios";
import { Link } from "react-router-dom";

export default function DataMahasiswaPage() {
  const [mahasiswas, setMahasiswas] = useState([]);

  useEffect(()=> {
    const fetchMahasiswas = async ()=> {
      try {
        const url = "http://localhost:8080/read.php";
        const response = await axios.get(url);
        setMahasiswas(response.data.data);
      } catch (e) {
        console.log(e);
      }
    }

    fetchMahasiswas();
  }, []);

  const deleteMahasiswa = async (id)=> {
    try {
      const url = `http://localhost:8080/delete.php/${id}`;
      await axios.delete(url);
      setMahasiswas((prev)=> prev.filter((v)=>v.id !== id));
    } catch (e) {
      console.log(e);
    }
  }
  
  return (
    <Layout>
      <div className="pt-20">
          <section className="w-full px-4 py-8">
            <Link to='/data_mhs/add' className="bg-green-800 text-white px-2 py-2">Tambah Data Mahasiswa</Link>
            <table className="w-full bg-white rounded shadow table-auto mt-5">
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
                {mahasiswas && mahasiswas.map((mahasiswa)=> 
                <tr key={mahasiswa.id} className="text-xs border-b border-gray-100 bg-blue-50">
                  <td className="py-6 pl-6 bg-blue-100">{mahasiswa.id}</td>
                  <td className="pl-6">{mahasiswa.nama}</td>
                  <td>{mahasiswa.npm}</td>
                  <td>{mahasiswa.kelas}</td>
                  <td className="flex flex-col gap-1">
                    <Link to={`/data_mhs/${mahasiswa.id}`} className="px-2 py-1 text-white bg-blue-700 border w-max">Edit</Link>
                    <div onClick={()=> deleteMahasiswa(mahasiswa.id)} className="cursor-pointer px-2 py-1 text-white bg-red-500 border w-max">Delete</div>
                  </td>
                </tr>)}
              </tbody>
            </table>
          </section>
      </div>
    </Layout>
  );
}
