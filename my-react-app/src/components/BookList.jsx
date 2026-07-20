import { useEffect, useState } from "react";
import styles from "./booklist.module.css";
import { getBookList} from "./mockBookList";

const Booklist =()=>{
    const[books,setBooks] = useState([])
    const[newBook,setNewBook] = useState("")

    const handleSubmit=(event)=>{
        event.preventDefault();

        if(!input.trim()) return;
        setBooks((previous) =>[...previous, {id:books.length+1, title:newBook}]);
    }
    
    useEffect(()=>{

        const loadBooks=async()=>{
            try{

                const data =  await getBookList();
                setBooks(data)
                console.log(data)

            }catch(error){
                console.log(error)

            }
        }

        loadBooks();

    },[])

    return(
        <>

  	<div className={styles.wrapper}>
	    <header>
	    	<div className={styles.pageBanner}>
<h1 className="title"> Book Collections</h1>
          <p>Books</p>
          <form className={styles.searchBooks}>
            <input type="text" placeholder="Search books..." />
          </form>
	     	</div>
	    </header>
	    <div className={styles.bookList}>
	     	<h2 className="title">Books to Read</h2>
	    	<ul>{
                    books.map((id,title)=>(
                        <li key={id}>
                            <span className={styles.name}>{title}</span>
                            <span className={styles.delete}>delete</span>
	    		        </li>

                    ))
                
                }
	    
	    	</ul>
	    </div>
	    <form onSubmit={handleSubmit} className={styles.addBook}>
	    	<input onChange={(event)=> setNewBook(event.target.value)} type="text" placeholder="Add a book..." />
	    	<button>Add</button>
	    </form>

    </div>
	  
	

        </>
    )
}

export default Booklist;