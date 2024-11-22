import Link from "next/link";
import React from "react";
import { initialTickets } from "@/data";

const TicketsPage = () => {
  return (
    <div>
      <h2 className="text-2xl font-bold">Tickets</h2>
      {initialTickets.map((ticket) => (
        <div className="flex flex-row gap-2 items-center" key={ticket.id}>
          {ticket.title}
          <Link
            className="text-sm text-blue-500 hover:italic hover:text-blue-400"
            href={`/tickets/${ticket.id}`}
          >
            View
          </Link>
        </div>
      ))}
    </div>
  );
};

export default TicketsPage;
