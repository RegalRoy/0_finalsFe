import axios from 'axios'
import { useState, useEffect } from 'react'
import url from './constant'
import { BrowserRouter, Route, Routes, useParams, Link, useNavigate } from 'react-router-dom'
// import '../styles.css';

// const url = 'http://localhost:3000/book/'
const AddBook = () => {
    const navigate = useNavigate()
    const [book, setBook] = useState({
        title: "",
        author: "",
        desc: ""
    })
    const handleCreate = (e) => {
        e.preventDefault()

        axios.post(url , book).then(r => {
            console.log(r.data); setBook({
                title: "",
                author: "",
                desc: ""
            }); navigate('/')
        }).catch(e => console.log(e))
    }
    const onChange = (e) => {
        setBook({ ...book, [e.target.name]: e.target.value })
    }
    return (
        // <div>

        //     <div onClick={()=>{navigate('/')}}>go to list</div>
        //     <form onSubmit={handleCreate}>
        //         <table>
        //             <tr>
        //                 <td>Title</td>
        //                 <td><input name='title' onChange={onChange}></input></td>
        //             </tr>
        //             <tr>
        //                 <td>Author</td>
        //                 <td><input name='author' onChange={onChange}></input></td>
        //             </tr>
        //             <tr>
        //                 <td>Desc</td>
        //                 <td><input name='desc' onChange={onChange}></input></td>
        //             </tr>
        //             <tr>

        //             </tr>
        //             <input type='submit'></input>
        //         </table>

        //     </form>
        // </div>



        <div className="CreateBook">
            <div className="container">
                <div className="row">
                    <div className="col-md-8 m-auto">
                        <br /><a className="btn btn-info float-left" onClick={() => { navigate('/') }}>Show BooK List</a>
                    </div>
                    <div className="col-md-8 m-auto">
                        <h1 className="display-4 text-center">Add Book</h1>
                        <p className="lead text-center">Create new book</p>
                        <form novalidate="" onSubmit={handleCreate}>
                            <div className="form-group">
                                <input
                                    type="text"
                                    placeholder="Title of the Book"
                                    name="title"
                                    className="form-control"
                                    
                                    spellcheck="false"
                                    data-ms-editor="true"
                                    onChange={onChange}
                                />
                            </div>
                            <div className="form-group">
                                <input
                                    type="text"
                                    placeholder="Author"
                                    name="author"
                                    className="form-control"
                                    
                                    spellcheck="false"
                                    data-ms-editor="true"
                                    onChange={onChange}
                                />
                            </div>
                            <div className="form-group">
                                <input
                                    type="text"
                                    placeholder="Describe this book"
                                    name="description"
                                    className="form-control"
                                   
                                    spellcheck="false"
                                    data-ms-editor="true"
                                    onChange={onChange}
                                />
                            </div>
                            <input type="submit" className="btn btn-info btn-block mt-4" />
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AddBook