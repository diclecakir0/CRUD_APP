import { useState } from 'react'


function App() {
  const [bookName, setBookName] = useState('');
  const [books, setBooks] = useState([]);

  const handleSubmit = (e) =>{
    e.preventDefault();

    const newBook = {
      id: new Date().getTime(),
      title: bookName ,
      date: new Date().toLocaleString(),
      isRead:false,
    };

    setBooks([...books,newBook])

    setBookName("");
  };

  console.log(books);

  return (
    <div> 
    <div className='bg-dark text-light px-5 py-3 fs-3 text-center'>Kitap</div>

    <div className='container border'>
        <form onSubmit={handleSubmit} className='d-flex gap-3' >
          <input value={bookName} onChange={(e)=> setBookName(e.target.value)} className='form-control' type="text" />
          <button className='btn btn-warning'>Ekle</button>
        </form>

        <div>
          {books.length === 0 && <h4>Henüz kitap eklenmedi!</h4>}
          {books.map((book)=>(
            <p>{book.title}</p>
          ))}
        </div>
    </div>

    </div>
  )
}

export default App

