import React from "react";
import { initialTickets } from "@/data";

type TicketPageProps = {
  params: {
    ticketId: string;
  };
  searchParams: { [key: string]: string | string[] | undefined };
};

const TicketPage = ({ params }: TicketPageProps) => {
  const ticket = initialTickets.find((ticket) => ticket.id === params.ticketId);

  return <div>{ticket?.title}</div>;
};

export default TicketPage;
