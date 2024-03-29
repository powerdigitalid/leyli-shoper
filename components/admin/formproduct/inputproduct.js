import React from "react";
import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import Swal from "sweetalert2";

export default function Inputproduct() {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [desc, setDesc] = useState("");
  const [image, setImage] = useState("");
  const [loading, setLoading] = useState(false);
  const [filename, setFilename] = useState('')
  const router = useRouter();

  const handleUpload = (event) => {
    setImage(event.target.files[0]);
    try {
      if (!event.target.files || event.target.files.length == 0) {
        throw new Error("Pilih file untuk diunggah!");
      }
      const file = event.target.files[0];
      const fileExt = file.name.split(".").pop();
      setFilename(file.name);
      console.log(fileExt);
      const parse = Papa.parse(file, {
        delimiter: ";",
        header: true,
        complete: (res) => {
          setParsedData(res);
        },
      });
    } catch (error) {
      // toast.error("Image gagal diupload");
      console.error(error);
    }
  };

  const handleAddProduct = (e) => {
    e.preventDefault();
    const data = new FormData();
    data.append("name", name);
    data.append("price", price);
    data.append("image", image);
    data.append("desc", desc);
    setLoading(true);
    fetch("/api/produk/create", {
      method: "POST",
      body: data,
    })
      .then((res) => res.json())
      .then((res) => {
        setLoading(false);
        setName("");
        setPrice("");
        setDesc("");
        setImage(null);
        Swal.fire({
          icon: "success",
          title: "Produk berhasil ditambahkan",
          showConfirmButton: false,
          timer: 1500,
        });
        router.push("/admin/produk");
      })
      .catch((err) => {
        console.log(err);
        setLoading(false);
        Swal.fire({
          icon: "error",
          title: "Produk gagal ditambahkan",
          showConfirmButton: false,
          timer: 1500,
        });
      });
  };

  return (
    <div className='container-fluid'>
      <div className="card author-box card-primary">
        <div className="card-body">
          <div className="col-12">
            <div className="">
              <h2>Tambahkan Product</h2>
            </div>
          </div>
          <form onSubmit={handleAddProduct}>
            <div className="author-box-left">
              <img
                alt="image"
                src={`https://ui-avatars.com/api/?name=${name}&background=random&length=1&rounded=true&size=128`}
                className="m-2 author-box-picture"
                style={{ width: "150px", height: "150px" }}
              />
              <div className="clearfix" />
              <div className="custom-file w-50 h-50 mb-3">
                <input
                  type="file"
                  className="custom-file-input form-control-sm"
                  id="customFile"
                  onChange={handleUpload}
                />
                <label className="custom-file-label" htmlFor="customFile">
                  {filename}
                </label>
              </div>
            </div>
            <div className="author-box-details">
              <div className="author-box-name">
                <div className="form-group">
                  <div className="form-row">
                    <div className="form-group col-sm-6">
                      <label>Nama Produk</label>
                      <input
                        type="text"
                        className="form-control form-control-sm"
                        placeholder="Nama Produk"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                      />
                    </div>
                    <div className="form-group col-sm-6">
                      <label>Harga</label>
                      <div className="input-group input-group-sm">
                        <div className="input-group-prepend">
                          <span className="form-control form-control-sm text-dark">
                            Rp
                          </span>
                        </div>
                        <input
                          type="text"
                          className="form-control form-control-sm"
                          aria-label="Rupiah"
                          placeholder="Harga Produk"
                          value={price}
                          onChange={(e) => setPrice(e.target.value)}
                        />
                      </div>
                    </div>
                  </div>
                  <div className="form-row">
                    <div className="form-group col-sm-12">
                      <label>Deskripsi</label>
                      <textarea
                        className="form-control"
                        id="exampleFormControlTextarea1"
                        rows="3"
                        placeholder="Deskripsi Produk"
                        value={desc}
                        onChange={(e) => setDesc(e.target.value)}
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="mb-2 mt-3">
                <div className="row float-right">
                  <button className="btn btn-success" type="submit">
                    <i className="fas fa-plus fa-fw "></i> Tambah
                  </button>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
