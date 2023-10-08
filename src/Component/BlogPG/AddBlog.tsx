import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./AddBlog.scss";
import AddIcon from "@mui/icons-material/Add";
import { SaveBloge } from "./SaveBloge";
// import { useAddressStore } from "../store/cartStore";

interface input {
  name: string;
  email: string;
  title: string;
  content: string;
  image: null | File;
}

const AddBlog = () => {
  const [addBtn, setAddBtn] = useState(true);
  const [form, setValues] = useState<input>({
    name: "",
    email: "",
    title: "",
    content: "",
    image: null,
  });

  // const { address, addAddress, removeAddress } = useAddressStore((state) => state)

  // const addEvent = (e: any) => {
  //   const { name, value } = e.target;

  //   setAddressDtl((old) => {
  //     return {
  //       ...old,
  //       [name]: value,
  //     };
  //   });
  // };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setValues((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const formSubmit = (e: any) => {
    e.preventDefault();
    // addAddress(addressDtl)

    const formdata = new FormData();
    formdata.append("image", form.image || "");
    formdata.append("name", form.name);
    formdata.append("email", form.email);
    formdata.append("title", form.title);
    formdata.append("content", form.content);

    const requestOptions = {
      method: "POST",
      body: formdata,
    };

    fetch(
      "https://albany-bandicoot-esma.1.ie-1.fl0.io/api/v1/post/create",
      requestOptions
    )
      .then((response) => response.json())
      .then((result) => {
        alert("Success!");
        console.log(result);
      })
      .catch((error) => console.log("error", error))
      .finally(() => {
        setAddBtn(true);
      });
  };

  const addButton = () => {
    setAddBtn(false);
  };
  const cancelBtn = () => {
    setAddBtn(true);
  };

  return (
    <>
      <div className="address">
        <div className="address-box">
          <div className="head">
            <h3>Manage Addresses</h3>
          </div>
          <div className="add-save">
            <div className="add-address">
              <div className="add-new">
                {addBtn ? (
                  <>
                    <div className="new" onClick={addButton}>
                      <div className="icon-box">
                        <AddIcon className="icon" />
                      </div>
                      <span>Add Blog</span>
                    </div>
                  </>
                ) : (
                  <>
                    <div className="add">
                      <span>Add New Blog</span>
                      <form action="" onSubmit={formSubmit}>
                        <div className="two-box">
                          <div className="box-1 box-12">
                            <label htmlFor="">
                              Name
                              <span>(Your name will be displayed here)</span>
                            </label>
                            <input
                              type="text"
                              required
                              name="name"
                              onChange={handleChange}
                              // value={addressDtl.name}
                              // onChange={addEvent}
                            />
                          </div>{" "}
                          <div className="box-2 box-12">
                            <label htmlFor="">
                              Email
                              <span>
                                (Your e-mail will be recorded for responses)
                              </span>
                            </label>
                            <input
                              type="email"
                              required
                              name="email"
                              onChange={handleChange}
                              // value={addressDtl.number}
                              // onChange={addEvent}
                            />
                          </div>
                        </div>

                        <div className="area-box">
                          <label htmlFor="">
                            Blog Title{" "}
                            <span>(write tite of your content )</span>
                          </label>
                          <input
                            type="text"
                            required
                            name="title"
                            onChange={handleChange}
                            // value={addressDtl.houseNo}
                            // onChange={addEvent}
                          />
                        </div>
                        <div className="area-box">
                          <label htmlFor="">
                            Blog <span>(write your content here)</span>
                          </label>
                          <textarea
                            className="text_area"
                            name="content"
                            id=""
                            onChange={handleChange}
                          ></textarea>
                        </div>
                        <div className=" input-box">
                          <label htmlFor="">
                            Upload Image (Only JPEG,PNG file is allowed)
                          </label>
                          <input
                            className="file"
                            type="file"
                            required
                            accept="image/png, image/jpeg"
                            onChange={(e) => {
                              setValues((prev) => ({
                                ...prev,
                                image:
                                  e.target.files && (e.target.files[0] as any),
                              }));
                            }}
                          />
                        </div>

                        <div className="two-button">
                          <input
                            type="submit"
                            className="save"
                            placeholder="Save"
                          />
                          {/* <button className="save" onClick={formSubmit}>
                            Save
                          </button> */}
                          <button className="cancel" onClick={cancelBtn}>
                            Cancel
                          </button>
                        </div>
                      </form>
                    </div>
                  </>
                )}
              </div>
            </div>
            {
              //   address.length === 0 ? "" :
              <div className="save-address">
                {/* <div className="all-address">
                      {address.map((e: any, i) => {
                        return (
                          <>
                            <div className="address">
                              <div className="name-twoButton">
                                <span className="name">{e.name}</span>
                                <div className="two-button">
                                  <button className="edit" onClick={() => {
                                         setAddressDtl(e)
                                         removeAddress(e)
                                         setAddBtn(false)
                                  }}>Edit</button>
                                  <button className="remove" onClick={() => {
                                       removeAddress(e)
                                  }}>Remove</button>
                                </div>
                              </div>
                              <div className="locality-box">
                                <span>{e.houseNo},</span> {e.locality}, {e.landmark?e.landmark+",":""} {e.city},{e.state}-{e.pincode}
                              </div>
                              <div className="number-box">
                                <span className="number">{e.number}</span> <span className="alt-number"> {e.altermateNo}</span>
                              </div>
                            </div>
                          </>
                        );
                      })}
                    </div> */}
              </div>
            }
          </div>
        </div>
      </div>
      <SaveBloge />
    </>
  );
};

export default AddBlog;

// import React from 'react'

// const AddBlog = () => {
//   return (
//     <div>AddBlog</div>
//   )
// }

// export default AddBlog
