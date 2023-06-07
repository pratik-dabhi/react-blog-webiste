import React from 'react';
import { Link } from "react-router-dom";

export const Single = () => {
  return (
    <div className="single container">
      <div className="content w-75">
        <img src="https://images.pexels.com/photos/733853/pexels-photo-733853.jpeg?auto=compress&cs=tinysrgb&w=400" alt="" srcset="" className='100vh'/>
      </div>
      <div className="user mt-2 d-flex">
        <img src="https://images.pexels.com/photos/771742/pexels-photo-771742.jpeg?auto=compress&cs=tinysrgb&w=400" alt="" className='rounded me-3'width={50}/>
        <div className="info">
          <span>Pratik</span>
          <p>Posted 2 days ago</p>
        </div>
        <div className="edit">
            <Link to="/write?edit=2">
              <img src="" alt="pen" srcset="" />
            </Link>
            <img src="" alt="Delete" />
        </div>
        </div>
        <div className='w-75'>
        <h1 className='text-dark'>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laboriosam optio soluta maxime deserunt modi nam.
        </h1>
        <p className='text-dark text-aligns-justify'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Non quidem minus consequuntur? Praesentium, tempora quos. Nam quos nobis tempora iste sit labore eaque corporis? Deserunt temporibus et, maiores dolores suscipit fugit neque dolor dolorum illo, doloribus modi recusandae inventore quisquam doloremque voluptatem ullam quod quos vitae ipsa. Eaque similique voluptatibus tempore? Aperiam rem quo commodi quis sunt mollitia explicabo natus tempore expedita dignissimos dolorem similique incidunt fuga repudiandae omnis sed aliquid neque, possimus libero quidem non saepe quibusdam officiis? Quibusdam iusto vel quas, cupiditate cum voluptatum illum suscipit consequuntur natus veritatis error, provident nostrum omnis esse eligendi rem, consequatur sunt sint vitae veniam quidem dicta facilis numquam? Dolorum recusandae perspiciatis, alias vel dolores corrupti ipsum laboriosam, tenetur sequi quibusdam dolore voluptatum odit quam harum eius ex nobis ratione nostrum voluptatibus incidunt excepturi inventore dolor! Incidunt animi aspernatur odio voluptates numquam inventore natus mollitia distinctio nisi pariatur perferendis doloribus vitae harum dolore culpa cupiditate itaque tempore, magnam veritatis non cumque, sapiente reprehenderit eum! Amet perferendis qui rerum eius pariatur facere blanditiis aliquid consequuntur placeat voluptas voluptates enim nostrum, iste nisi aut ab. Deleniti consequatur at suscipit tempora quia neque voluptatibus laboriosam in, libero iste impedit culpa autem ad odit reprehenderit alias, praesentium architecto fugiat mollitia dolor commodi ea inventore! Ab tempore consectetur deleniti libero pariatur corporis asperiores eius nam placeat porro numquam eum sapiente error est veniam eos fuga ut, quos tenetur. Sit, odit, dignissimos provident voluptatem temporibus quibusdam accusamus laudantium, officia libero consequuntur tenetur perferendis necessitatibus placeat eos. Quod a hic, dolore et modi aliquid neque alias cupiditate ut harum minima animi omnis similique facere numquam soluta illo quo! Quaerat error deleniti iusto reiciendis consectetur inventore explicabo harum ex modi commodi autem tenetur, dolorem hic eligendi iure, sunt beatae? Fuga magnam ab, nulla quos nam veritatis quod minima, aliquam ipsa exercitationem atque. Corporis alias, perspiciatis ipsa eaque fugiat vitae ducimus accusantium expedita molestiae pariatur enim eum cumque deleniti voluptate dolorem natus tempora praesentium, doloribus fugit nihil dicta voluptatibus similique! A hic ipsa labore repudiandae nisi sed nobis nemo dolore magni officiis? Mollitia enim omnis culpa, accusamus molestiae ab quae similique odit, velit quia inventore dolorum vitae illum illo libero exercitationem voluptatum, consectetur maiores totam rerum quidem tempore aliquam alias. Reprehenderit eum iusto, nobis tempore neque corporis dolorem vero illum at quas necessitatibus saepe voluptatum impedit similique, molestiae architecto eius! Nostrum facere ea necessitatibus, a molestias consequatur dolorem quia atque architecto delectus modi earum numquam, sunt, autem dolores magnam! Maxime corrupti reprehenderit officiis blanditiis voluptatem odio voluptates. Perspiciatis repellendus recusandae maxime laudantium repellat qui consequuntur quia harum incidunt, illo corrupti magnam quam accusantium quaerat nam cum! Aspernatur, quisquam nemo id sapiente esse veniam suscipit. Necessitatibus facere natus doloribus cum eveniet ab minus? Velit quasi, harum vitae quae necessitatibus quas dignissimos hic dolore porro dolorem! Consequuntur ducimus expedita quis soluta mollitia repellendus nemo quo quam! Labore deleniti, fugiat sapiente expedita reiciendis veritatis cupiditate accusamus vero eum? Quaerat et exercitationem porro repellendus quod? Dolore explicabo recusandae omnis. Eaque doloremque sit minima accusamus. Accusamus!</p>
      </div>
      <div className='menu'>m</div>
    </div>
  )
}
