import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Layout from "./Layout";


const AddMahasiswaPage = () => {
    const navigate = useNavigate();

    const [name, setName] = useState('');
    const [npm, setNPM] = useState('');
    const [kelas, setKelas] = useState('');

  const handleSubmit =  async(e) => {
    e.preventDefault();
   
    const apiEndpoint = `http://localhost:8080/create.php`;

    const formData = new FormData();
    formData.append("nama", name);
    formData.append("npm", npm);
    formData.append("kelas", kelas);

    try {
        await axios.post(apiEndpoint, formData, {
            headers: {
                "Content-Type": "form"
            }
        });

        navigate("/data_mhs");
    } catch (error) {
        console.error("Error submitting form:", error);
        alert("Failed to submit form.");
    }
  };

  const clearAllFormInput = ()=> {
    setName('');
    setNPM('');
    setKelas('');
  }

  return (
    <Layout>
     <div className="flex items-center justify-center w-full h-screen">
     <form
        className="w-full max-w-md p-6 mx-auto bg-white rounded shadow-md"
        onSubmit={handleSubmit}
      >
        <h2 className="mb-4 text-xl font-semibold">Tambah Mahasiswa</h2>
        
        <div className="mb-4">
          <label htmlFor="nama" className="block text-sm font-medium text-gray-700">
            Nama
          </label>
          <input
            type="text"
            id="nama"
            name="nama"
            value={name}
            onChange={(e)=> setName(e.target.value)}
            className="block w-full mt-1 border-gray-300 rounded-md shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-300 focus:ring-opacity-50 p-2 border"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="npm" className="block text-sm font-medium text-gray-700">
            NPM
          </label>
          <input
            type="text"
            id="npm"
            name="npm"
            value={npm}
            onChange={(e)=> setNPM(e.target.value)}
            className="block w-full mt-1 border-gray-300 rounded-md shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-300 focus:ring-opacity-50 p-2 border"
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="kelas" className="block text-sm font-medium text-gray-700">
            Kelas
          </label>
          <input
            type="text"
            id="kelas"
            name="kelas"
            value={kelas}
            onChange={(e)=> setKelas(e.target.value)}
            className="block w-full mt-1 border-gray-300 rounded-md shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-300 focus:ring-opacity-50 p-2 border"
            required
          />
        </div>
        <div className="flex justify-end gap-4">
          <button
            type="button"
            className="px-4 py-2 text-white bg-gray-500 rounded hover:bg-gray-600"
            onClick={clearAllFormInput}
          >
            Cancel
          </button>
          <button
            type="submit"
            className="px-4 py-2 text-white bg-blue-600 rounded hover:bg-blue-700"
          >
            Save
          </button>
        </div>
      </form>
     </div>
    </Layout>
  );
};

export default AddMahasiswaPage;
