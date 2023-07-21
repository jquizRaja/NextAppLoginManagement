"use client";

import ProtectedComponent from "@/components/Profile/Protected";

const ProtectedClientPage = () => {

  return (
    <div>
      <h1 style={{ color: "red" }}>ProtectedClientPage</h1>
      <ProtectedComponent/>
    </div>
  );
};

export default ProtectedClientPage;