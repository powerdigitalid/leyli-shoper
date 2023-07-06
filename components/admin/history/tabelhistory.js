import Link from "next/link";
import React from "react";
import {useState, useEffect} from 'react'
import { useRouter } from "next/router";


export default function Tabelhistory() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(false)
  const router = useRouter();
  
  const handleTabelOrder = ()=>{
    fetch('/api/orders/all?state=confirmed', {
      method: "GET",
  })
      .then((res) => res.json())
      .then((res) => {
          if (res.data) {
              setData(res.data);
          } else {
              setData([]);
          }
          setLoading(false);
      })
      .catch((err) => {
          console.log(err);
          setLoading(false);
          setError(err);
      });
  }
  useEffect(() => {
    handleTabelOrder();
  }, []);
  return (
    <div className='container-fluid'>
      <div className="card author-box card-primary mt-2">
        <div className="card-body">
          <div className="col-lg-12">
            <div className="card mb-4">
              <div className="card-header py-3 d-flex flex-row align-items-center justify-content-between">
                <h6 className="m-0 font-weight-bold text-primary">Data History Transaksi</h6>
              </div>
              <div className="table-responsive p-3">
                <div
                  id="dataTable_wrapper"
                  className="dataTables_wrapper dt-bootstrap4"
                >
                  <div className="row">
                    <div className="col-sm-12">
                      <table
                        className="table align-items-center table-flush dataTable"
                        id="dataTable"
                        role="grid"
                        aria-describedby="dataTable_info"
                      >
                        <thead className="thead-light">
                          <tr role="row">
                            <th
                              className="sorting_asc"
                              tabIndex={0}
                              aria-controls="dataTable"
                              rowSpan={1}
                              colSpan={1}
                              aria-sort="ascending"
                              aria-label="Name: activate to sort column descending"
                              style={{ width: "148.781px" }}
                            >
                              Name
                            </th>
                            <th
                              className="sorting_asc"
                              tabIndex={0}
                              aria-controls="dataTable"
                              rowSpan={1}
                              colSpan={1}
                              aria-sort="ascending"
                              aria-label="Name: activate to sort column descending"
                              style={{ width: "148.781px" }}
                            >
                              Email
                            </th>
                            <th
                              className="sorting"
                              tabIndex={0}
                              aria-controls="dataTable"
                              rowSpan={1}
                              colSpan={1}
                              aria-label="Position: activate to sort column ascending"
                              style={{ width: "238.031px" }}
                            >
                              No Hp
                            </th>
                            <th
                              className="sorting"
                              tabIndex={0}
                              aria-controls="dataTable"
                              rowSpan={1}
                              colSpan={1}
                              aria-label="Office: activate to sort column ascending"
                              style={{ width: "108.953px" }}
                            >
                              Action
                            </th>
                          </tr>
                        </thead>
                        {/* <tfoot>
                          <tr>
                            <th rowSpan={1} colSpan={1}>
                              Name
                            </th>
                            <th rowSpan={1} colSpan={1}>
                              
                            </th>
                            <th rowSpan={1} colSpan={1}>
                              Action
                            </th>
                          </tr>
                        </tfoot> */}
                        <tbody>
                        {data.length > 0 ? data.map((ord, index) => (
                          <tr role="row" className="odd" key={index}>
                            <td className="sorting_1">{ord.name}</td>
                            <td>{ord.email}</td>
                            <td>{ord.phone}</td>
                            <td>
                              <Link href={`/admin/history/detail?id=${ord.id}`} className="btn btn-primary">Detail</Link>
                            </td>
                          </tr>
                          )) : <p className="text-center">Belum ada Yang Terkonfirmasi</p>}
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
