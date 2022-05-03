import { useContext, useState} from "react";
import "./write.css";
import axios from "axios";
import { Context } from "../../context/Context";
import React, { Component } from 'react';
import { CKEditor } from '@ckeditor/ckeditor5-react';
import Editor from 'ckeditor5-custom-build/build/ckeditor';

export default function Write() {
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const [file, setFile] = useState(null);
  const { user } = useContext(Context);



  const handleSubmit = async (e) => {
    e.preventDefault();
    const newPost = {
      username: user.username,
      title,
      desc,
    };
    if (file) {
      const data =new FormData();
      const filename = Date.now() + file.name;
      data.append("name", filename);
      data.append("file", file);
      newPost.photo = filename;
      try {
        await axios.post("/upload", data);
      } catch (err) {}
    }
    try {
      const res = await axios.post("/posts", newPost);
      window.location.replace("/post/" + res.data._id);
    } catch (err) {}
  };

 

  return (
    <div className="write">
      <form className="writeForm" onSubmit={handleSubmit}>
      <div class="grid grid-cols-5 py-2 px-5 mx-5 my-2">
      <div class="col-span-5">
        {file && (
          <img className="writeImg" src={URL.createObjectURL(file)} alt="" />
        )}
      </div>
      <div class="col-span-5 py-2">
      
        <div className="writeFormGroup">
          <label htmlFor="fileInput">
            <i className="writeIcon fas fa-plus"></i>
          </label>
          <input
            type="file"
            id="fileInput"
            style={{ display: "none" }}
            onChange={(e) => setFile(e.target.files[0])}
          />
          <input
            type="text"
            placeholder="Title"
            className="writeInput"
            autoFocus={true}
            onChange={e=>setTitle(e.target.value)}
          />
          </div>
      
      </div>
      <div class="col-span-5">
          <CKEditor
                      editor={ Editor }
                      data="<p>Hello from CKEditor 5!</p>"
                      onReady={ editor => {
                          // You can store the "editor" and use when it is needed.
                          console.log( 'Editor is ready to use!', editor );
                      } }
                      onChange={ ( event, editor ) => {
                          const data = editor.getData();
                          setDesc(data)
                          console.log( { event, editor, data } );
                      } }
                      onBlur={ ( event, editor ) => {
                          console.log( 'Blur.', editor );
                      } }
                      onFocus={ ( event, editor ) => {
                          console.log( 'Focus.', editor );
                      } }
          />
      </div>
      <div class="col-span-5">
        <button className="writeSubmit" type="submit">
          Publish
        </button>
      </div>
      </div>
      </form>
     
    </div>
  );
}
