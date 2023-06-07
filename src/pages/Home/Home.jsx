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
    img:"https://images.pexels.com/photos/12301369/pexels-photo-12301369.jpeg?auto=compress&cs=tinysrgb&w=400&lazy=load"
    },
    {
    id:3,
    title:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam, voluptatum.",
    desc:"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laudantium incidunt ipsum libero! Numquam nobis inventore eum ducimus adipisci, deserunt illum hic! Consequatur corporis illum enim, ullam sint aspernatur corrupti aut.",
    img:"https://images.pexels.com/photos/8723490/pexels-photo-8723490.jpeg?auto=compress&cs=tinysrgb&w=400&lazy=load"
    },
    {
    id:4,
    title:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam, voluptatum.",
    desc:"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laudantium incidunt ipsum libero! Numquam nobis inventore eum ducimus adipisci, deserunt illum hic! Consequatur corporis illum enim, ullam sint aspernatur corrupti aut.",
    img:"https://images.pexels.com/photos/14093120/pexels-photo-14093120.jpeg?auto=compress&cs=tinysrgb&w=400&lazy=load"
    },
    {
    id:5,
    title:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam, voluptatum.",
    desc:"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laudantium incidunt ipsum libero! Numquam nobis inventore eum ducimus adipisci, deserunt illum hic! Consequatur corporis illum enim, ullam sint aspernatur corrupti aut.",
    img:"https://images.pexels.com/photos/6431180/pexels-photo-6431180.jpeg?auto=compress&cs=tinysrgb&w=400&lazy=load"
    },
    {
    id:6,
    title:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam, voluptatum.",
    desc:"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laudantium incidunt ipsum libero! Numquam nobis inventore eum ducimus adipisci, deserunt illum hic! Consequatur corporis illum enim, ullam sint aspernatur corrupti aut.",
    img:"https://images.pexels.com/photos/17041698/pexels-photo-17041698/free-photo-of-brunette-in-robe.jpeg?auto=compress&cs=tinysrgb&w=400&lazy=load"
    },
    {
    id:1,
    title:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam, voluptatum.",
    desc:"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laudantium incidunt ipsum libero! Numquam nobis inventore eum ducimus adipisci, deserunt illum hic! Consequatur corporis illum enim, ullam sint aspernatur corrupti aut.",
    img:"https://images.pexels.com/photos/16981071/pexels-photo-16981071/free-photo-of-city-man-people-woman.jpeg?auto=compress&cs=tinysrgb&w=400&lazy=load"
    },


];

  return (
    <div className='container home'>
      <div className="post">
        {posts.map(posts=>(
          posts.id % 2 === 0 ?(
          <div className="post d-flex mb-5 mt-3" key={posts.id}>
            <div className="img">
              <img src={posts.img} alt="" srcset="" width={300}/>
            </div>
            <div className="content p-4">
            <Link className='text-decoration-none text-dark' to={`/post/${posts.id}`}><h1>{posts.title}</h1></Link>
              <h1>{posts.title}</h1>
              <p>{posts.desc}</p>
              <button className='btn btn-warning'>Read More</button>
            </div>
          </div>
          ) : <div className="post d-flex mb-5 mt-3" key={posts.id}>
          <div className="content p-4">
            <Link className='text-decoration-none text-dark' to={`/post/${posts.id}`}><h1>{posts.title}</h1></Link>
            
            <p>{posts.desc}</p>
            <button className='btn btn-warning'>Read More</button>
          </div>
          <div className="img">
            <img src={posts.img} alt="" srcset="" width={300}/>
          </div>
        </div>
        ))}
      </div>
    </div>
  )
}
