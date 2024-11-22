import Link from "next/link";
import React from "react";
import { ticketPath } from "@/paths";

const HomePage = () => {
  return (
    <div>
      <h2 className="text-2xl font-bold">HomePage</h2>
      <Link
        href={ticketPath}
        className="text-blue-500 underline hover:text-blue-600 hover:italic"
      >
        Tickets
      </Link>
    </div>
  );
};

export default HomePage;
