import React , {useState} from 'react'
import Footer from '../Component/Footer'
import Nav from '../Component/Nav'
import './Rate.css'
import { useParams } from 'react-router-dom'
import axios from 'axios'

const Rate = () => {
    const [comment, setComment] = useState("");
    const [user, setUser] = useState("");
const [rating, setRating] = useState(5);

const {id} = useParams()

const submitReview = async () => {
  await axios.post(`https://yati-perfume-backend.onrender.com/api/product/review/${id}`, {
    user,
    rating,
    comment
  });

  alert('Review added Succesfully')


  window.location.reload(); // refresh reviews
};

  return (
    <div>
        <div className="ba">     
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus soluta quas earum necessitatibus asperiores reprehenderit, natus harum cumque nostrum error sunt ab vitae, saepe cum, possimus officiis nobis a magnam.
            <Nav/>
        </div>

       
  <div className="reviw">
      <h2>Add Review</h2>
       <input
      type="text"
      placeholder="Enter full name"
      value={user}
     onChange={(e) => setUser(e.target.value)}
    />

    <input
      type="text"
      placeholder="Your comment"
      value={comment}
     onChange={(e) => setComment(e.target.value)}
    />

    <select onChange={(e) => setRating(e.target.value)}>
      <option value="5">5</option>
     <option value="4">4</option>
     <option value="3">3</option>
     <option value="2">2</option>
     <option value="1">1</option>
    </select>

    <button onClick={submitReview}>Submit</button>
   </div>

   <Footer/>
   
      
    </div>
  )
}

export default Rate
