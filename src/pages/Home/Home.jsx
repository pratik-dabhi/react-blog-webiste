import React from 'react';
import { Link } from 'react-router-dom';

export const Home = () => {
  const posts = [
    {
    id:1,
    title:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam, voluptatum.",
    desc:"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laudantium incidunt ipsum libero! Numquam nobis inventore eum ducimus adipisci, deserunt illum hic! Consequatur corporis illum enim, ullam sint aspernatur corrupti aut.",
    img:"https://images.pexels.com/photos/17041074/pexels-photo-17041074/free-photo-of-black-and-white-fashion-bird-love.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    },
    {
    id:2,
    title:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam, voluptatum.",
    desc:"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laudantium incidunt ipsum libero! Numquam nobis inventore eum ducimus adipisci, deserunt illum hic! Consequatur corporis illum enim, ullam sint aspernatur corrupti aut.",
    img:"https://images.pexels.com/photos/17041074/pexels-photo-17041074/free-photo-of-black-and-white-fashion-bird-love.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    },
    {
    id:3,
    title:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam, voluptatum.",
    desc:"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laudantium incidunt ipsum libero! Numquam nobis inventore eum ducimus adipisci, deserunt illum hic! Consequatur corporis illum enim, ullam sint aspernatur corrupti aut.",
    img:"https://images.pexels.com/photos/17041074/pexels-photo-17041074/free-photo-of-black-and-white-fashion-bird-love.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    },
    {
    id:4,
    title:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam, voluptatum.",
    desc:"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laudantium incidunt ipsum libero! Numquam nobis inventore eum ducimus adipisci, deserunt illum hic! Consequatur corporis illum enim, ullam sint aspernatur corrupti aut.",
    img:"https://images.pexels.com/photos/17041074/pexels-photo-17041074/free-photo-of-black-and-white-fashion-bird-love.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    },
    {
    id:5,
    title:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam, voluptatum.",
    desc:"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laudantium incidunt ipsum libero! Numquam nobis inventore eum ducimus adipisci, deserunt illum hic! Consequatur corporis illum enim, ullam sint aspernatur corrupti aut.",
    img:"https://images.pexels.com/photos/17041074/pexels-photo-17041074/free-photo-of-black-and-white-fashion-bird-love.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    },
    {
    id:6,
    title:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam, voluptatum.",
    desc:"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laudantium incidunt ipsum libero! Numquam nobis inventore eum ducimus adipisci, deserunt illum hic! Consequatur corporis illum enim, ullam sint aspernatur corrupti aut.",
    img:"https://images.pexels.com/photos/17041074/pexels-photo-17041074/free-photo-of-black-and-white-fashion-bird-love.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    },
    {
    id:1,
    title:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam, voluptatum.",
    desc:"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laudantium incidunt ipsum libero! Numquam nobis inventore eum ducimus adipisci, deserunt illum hic! Consequatur corporis illum enim, ullam sint aspernatur corrupti aut.",
    img:"https://images.pexels.com/photos/17041074/pexels-photo-17041074/free-photo-of-black-and-white-fashion-bird-love.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    },


];

  return (
    <div className='container home'>
      <div className="post">
        {posts.map(posts=>(
          <div className="post d-flex mb-5 mt-3" key={posts.id}>
            <div className="img">
              <img src={posts.img} alt="" srcset="" width={300}/>
            </div>
            <div className="content p-4">
              <Link to={`/post/${posts.id}`}></Link>
              <h1>{posts.title}</h1>
              <p>{posts.desc}</p>
              <button>Read More</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
