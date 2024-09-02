import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Header from './header_log3';
import Footer from './footer';
import Sidenav from './sidenav';

const NotesPage = () => {
  const [file, setFile] = useState(null);
  const [message, setMessage] = useState('');
  const [notes, setNotes] = useState([]);
  const [selectedChapter, setSelectedChapter] = useState('');

  // Handle file change
  const onFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  // Handle dropdown change
  const onChapterChange = (e) => {
    setSelectedChapter(e.target.value);
  };

  // Handle file upload
  const onUpload = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append('note', file);
    formData.append('chapter', selectedChapter);

    try {
      const res = await axios.post('http://localhost:3001/upload', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });

      setMessage(res.data.message);
      fetchNotes(); // Fetch the updated list of notes after uploading
    } catch (err) {
      setMessage(err.response?.data?.error || 'Upload failed');
    }
  };

  // Fetch the list of notes from the server
  const fetchNotes = async () => {
    try {
      const res = await axios.get('http://localhost:3001/notes');
      setNotes(res.data);
    } catch (err) {
      console.error(err);
    }
  };

  // Delete note
  const deleteNote = async (filename) => {
    try {
      const res = await axios.delete(`http://localhost:3001/notes/${filename}`);
      setMessage(res.data.message);

      // Force re-render by creating a new array reference
      setNotes(prevNotes => prevNotes.filter(note => note.filename !== filename));
    } catch (err) {
      setMessage(err.response?.data?.error || 'Delete failed');
    }
  };

  // Fetch notes when the component mounts
  useEffect(() => {
    fetchNotes();
  }, []);

  return (
    <div>
      <Header />
      <div className='Sidenav'>
      <Sidenav/>
      <div style={{height:"390px",position:"relative",left:"50px"}} >
      <h2>Upload Your Note</h2>
      <form onSubmit={onUpload}>
        <label htmlFor="dropdown">Chapter Number:</label>
        <select id="dropdown" name="options" onChange={onChapterChange}>
          <option value="">Choose the option</option>
          <option value="chapter1">Chapter 1</option>
          <option value="chapter2">Chapter 2</option>
          <option value="chapter3">Chapter 3</option>
          <option value="chapter4">Chapter 4</option>
          <option value="chapter5">Chapter 5</option>
          <option value="chapter6">Chapter 6</option>
          <option value="chapter7">Chapter 7</option>
          <option value="chapter8">Chapter 8</option>
          <option value="chapter9">Chapter 9</option>
          <option value="chapter10">Chapter 10</option>
          <option value="chapter11">Chapter 11</option>
          <option value="chapter12">Chapter 12</option>
          <option value="chapter13">Chapter 13</option>
          <option value="chapter14">Chapter 14</option>
          <option value="chapter15">Chapter 15</option>
        </select><br/><br/>
        <input type="file" onChange={onFileChange} />
        <button type="submit">Upload</button>
      </form>
      {message && <p>{message}</p>}

      <h2>Your Uploaded Notes</h2>
      <ul>
        {notes.map((note, index) => (
          <li key={index}>
            <a href={`http://localhost:3001/uploads/${note.filename}`} target="_blank" rel="noopener noreferrer">
              {note.filename}
            </a>
            <button onClick={() => deleteNote(note.filename)} style={{ marginLeft: '10px' }}>
              Delete
            </button>
          </li>
        ))}
      </ul>
      </div>
      </div>
      <Footer />
    </div>
  );
};

export default NotesPage;
