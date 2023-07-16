import Link from "next/link";
import React from "react";
import { useState, useEffect } from "react";
import { useRouter } from "next/router";

export default function Detailhistory() {
  const [data, setData] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const router = useRouter();
  const { id } = router.query;

  const handleDetailPesan = async (id) => {
    try {
      const res = await fetch(`/api/orders/${id}`);
      const json = await res.json();
      setData(json.data);
      setLoading(false);
    } catch (error) {
      setError(true);
      setLoading(false);
    }
  };

  useEffect(() => {
    if (id) {
      handleDetailPesan(id);
    }
  }, [id]);
  return (
    <div className='container-fluid'>
      <section className="h-100 h-custom" style={{ backgroundColor: "#eee" }}>
        <div className="container py-5 h-100">
          <div className="row d-flex justify-content-center align-items-center h-100">
            <div className="col">
              <div className="card">
                <div className="card-body p-4">
                  <div className="row">
                    <div className="col-lg-7">
                      <h5 className="mb-3">
                        <a href="#!" className="text-body">
                          History
                        </a>
                      </h5>
                      <hr />
                      <div className="card mb-3">
                        <div className="card-body">
                          <div className="d-flex justify-content-between">
                            <div className="d-flex flex-row align-items-center">
                              <div>
                                <img
                                  src={data.product?.image}
                                  className="img-fluid rounded-3 mr-3"
                                  alt="Shopping item"
                                  style={{ width: 65 }}
                                />
                              </div>
                              <div className="ms-3">
                                <h5>{data.product?.name}</h5>
                                <p className="small mb-0">
                                  {data.product?.desc}
                                </p>
                              </div>
                            </div>
                            <div className="d-flex flex-row align-items-center">
                              <div style={{ width: 130 }}>
                                <h5 className="mb-0">{data.product?.price}</h5>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-5">
                      <div className="card bg-primary text-white rounded-3">
                        <div className="card-body">
                          <div className="d-flex justify-content-between align-items-center mb-4">
                            <h5 className="mb-0 text-wihte">Informasi</h5>
                          </div>
                          <form className="mt-4">
                            <div className="form-outline form-white mb-4">
                              <label className="form-label" htmlFor="typeName">
                                Nama
                              </label>
                              <h3 className="form-control form-control-lg">
                                {data.name}
                              </h3>
                            </div>
                            <div className="form-outline form-white mb-4">
                              <label className="form-label" htmlFor="typeText">
                                Nomor Handphone
                              </label>
                              <h3 className="form-control form-control-lg">
                                {data.phone}
                              </h3>
                            </div>
                            <div className="form-outline form-white mb-4">
                              <label className="form-label" htmlFor="typeText">
                                Alamat
                              </label>
                              <h3 className="form-control form-control-lg">
                                {data.addres}
                              </h3>
                            </div>
                          </form>
                          <hr className="my-4" />
                          <div className="d-flex justify-content-between">
                            <p className="mb-2">Ongkir</p>
                            <p className="mb-2">Gratis</p>
                          </div>
                          <div className="d-flex justify-content-between mb-4">
                            <p className="mb-2">Total</p>
                            <p className="mb-2">Rp.{data.total}</p>
                          </div>
                          <Link
                            href="/admin/history"
                            type="button"
                            className="btn btn-info btn-block btn-lg"
                          >
                            <div className="">
                              <span>Kembali</span>
                            </div>
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
