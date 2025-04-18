"use client";

import React, { useEffect, useState } from "react";
import SubsTableItem from "@/Components/AdminComponents/SubsTableItem";
import axios from "axios";
import { toast } from "react-toastify";

const page = () => {
  const [email, setEmails] = useState([]);
  console.log(email);

  //api for getting all emails
  const getEmails = async () => {
    const res = await axios.get("/api/email");
    setEmails(res.data.emails);
  };

  useEffect(() => {
    getEmails();
  }, []);

  //Delete Email Function

  const DeleteEmail = async (mongoId) => {
    const res = await axios.delete("/api/email", {
      params: {
        id: mongoId,
      },
    });
    if (res.data.success) {
      toast.success("email deleted");
      getEmails();
    } else {
      toast.error("Error deleteing email");
    }
  };

  return (
    <div className="flex-1 pt-5 px-5 sm:pt-12 sm:pl-16">
      <h1>All Subscriptions</h1>
      <div className="relative max-w-[600px] overflow-x-auto mt-4  h-[80vh] border border-gray-400">
        <table className="w-full text-sm text-gray-900">
          <thead className="text-xs text-left text-gray-700 uppercase bg-gray-50">
            <tr>
              <th scope="col" className="px-6 py-3">
                Email Subscription
              </th>

              <th scope="col" className=" hidden sm:block px-6 py-3">
                Date
              </th>

              <th scope="col" className="px-6 py-3">
                Action
              </th>

              <th scope="col" className="px-6 py-3"></th>
            </tr>
          </thead>
          <tbody>
            {email.map((item, idx) => {
              return (
                <SubsTableItem
                  key={idx}
                  mongoId={item._id}
                  email={item.email}
                  date={item.data}
                  deleteEmail={DeleteEmail}
                />
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default page;
