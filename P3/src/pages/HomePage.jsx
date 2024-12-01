import React from "react";
import Layout from "./Layout";
import { Link } from "react-router-dom";

const HomePage = () => {
  return (
    <Layout>
      <div className="flex flex-col gap-2 h-screen w-full justify-center items-center">
        <div className="text-center">
          <div>Dimas Febriyanto</div>
          <div>50422430</div>
          <div>3IA21</div>
        </div>
        <Link to="/data_mhs" className="bg-purple-600 text-xl text-white px-2 py-1 rounded-md">
          Go to Mahasiswa Page
        </Link>
      </div>
    </Layout>
  );
};

export default HomePage;
