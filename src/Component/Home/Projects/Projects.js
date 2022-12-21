import React from "react";
import { Link } from "react-router-dom";
import img1 from '../../../image/cardImage/img1.png'
import img2 from '../../../image/cardImage/img2.jpg'
import img3 from '../../../image/cardImage/img3.jpg'

const Projects = () => {
  const projectCart = [
    {
      id: 1,
      title: "COMPLETE BLENDER: LEARN 3D MODELLING",
      name: "acadia",
      logo: "",
      img: img1,
      style:'shadow-orange-500',
      link:'/javascript'
    },
    {
      id: 2,
      title: "Complete WordPress Course 2022",
      name: "acadia",
      logo: "",
      img: img2,
      style:'shadow-blue-500',
      link:'/wordpress'
    },
    {
      id: 3,
      title: "PHP Beginners Become a PHP Master",
      name: "acadia",
      logo: "logo",
      img: img3,
      style:'shadow-yellow-500',
      link:'/php'
    },
  ];
  return (
    <div className="grid md:grid-cols-3 sm:grid-cols-1 mt-32">
        {
            projectCart.map(({id,title,link,name,logo,style,img})=><div key={id} className={`card w-96 duration-500 hover:scale-105 bg-base-100 shadow-lg ${style}`}>
            <figure>
              <img src={img} className="w-96 duration-500 hover:scale-105" alt="Shoes" />
            </figure>
            <div className="card-body">
                <div className="flex justify-between">
                <p>Acadia</p>
              <p>Acadia</p>
                </div>
              <Link to={link}><h2 className="card-title justify-around">{title}</h2></Link>
              <hr />
              <div className="card-actions justify-between">
                <div className="badge badge-outline">Lesson 0</div>
                <div className="badge badge-outline">Lesson 1</div>
                <div className="badge badge-outline">Lesson 2</div>
              </div>
            </div>
          </div>)
        }
    </div>
  );
};

export default Projects;
