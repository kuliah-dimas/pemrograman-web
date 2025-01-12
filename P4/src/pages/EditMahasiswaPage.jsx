import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Layout from "./Layout";


const EditMahasiswaPage = () => {
    const { id } = useParams();
    const navigate = useNavigate();

    const [name, setName] = useState('');
    const [npm, setNPM] = useState('');
    const [kelas, setKelas] = useState('');

    useEffect(()=> {
      const fetchInitialData = async ()=> {
          try {
            const response = await axios.get(`http://localhost:8080/read_by_id.php/${id}`);
            const data = response.data.data;
            setName(data.nama);
            setNPM(data.npm);
            setKelas(data.kelas);
          } catch (e) {
            console.log(e);
          }
      }

      fetchInitialData();
    }, [id])

  const handleSubmit =  async(e) => {
    e.preventDefault();
   
    const apiEndpoint = `http://localhost:8080/update.php/${id}`;

    const data = {
      nama:name, 
      npm, 
      kelas      
    }

    try {
        await axios.put(apiEndpoint, data);

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
        <h2 className="mb-4 text-xl font-semibold">Edit Mahasiswa</h2>
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
            required
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

export default EditMahasiswaPage;
