import React from "react";
import team from "./team.css";
const TeamMember = () => {
  const teamData = [
    {
      name: "Engida Lishan",
      role: "Mobile Developer",
      image: "/assets/img/team/engu.jpg",
      github: "https://github.com/engida32",
      gmail: "engida32lishan@gmail.com",
    },
    {
      name: "Ephrem Demelash",
      role: "Full Stack Developer",
      image: "/assets/img/team/ephrem.jpg",
      linkedin: "https://www.linkedin.com/in/ephrem-demelash",
      twitter: "https://twitter.com/demelash_ephrem",
      github: "https://github.com/ephremdeme",
      gmail: "ephremdeme1@gmail.com",
    },
    {
      name: "Ermiyas Kasahun",
      role: "Mobile Developer",
      image: "/assets/img/team/ermi.JPG",
      linkedin: "https://www.linkedin.com/in/ermiyas-kasahun-7992bb157",
      gmail: "ermikasa@gmail.com",
      github: "https://github.com/ermi14",
    },
    {
      name: "Etsehiwot Eshetu",
      role: "Front-End Developer",
      image: "/assets/img/team/etse.jpg",
      github: "https://github.com/etshiwot",
    },
  ];
  return (
    <div className="container">
      {/* <!-- Section: Team v.3 --> */}
      <section className="team-section my-5 pb-70 pt-95">
        {/* <!-- Section heading --> */}
        <h2 className="h1-responsive team-header font-weight-bold text-center my-5">
          Our amazing team
        </h2>
        {/* <!-- Section description --> */}
        <p className="grey-text text-center w-responsive mx-auto mb-5">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit, error
          amet numquam iure provident voluptate esse quasi, veritatis totam
          voluptas nostrum quisquam eum porro a pariatur veniam.
        </p>

        {/* <!-- Grid row--> */}
        <div className="row text-center text-md-left">
          {/* <!-- Grid column --> */}

          {teamData.map((team) => (
            <Team team={team} />
          ))}
        </div>
        {/* <!-- Grid row--> */}
      </section>
    </div>
  );
};

const Team = ({ team }) => {
  return (
    <React.Fragment>
      <div className="col-xl-6 col-lg-12 mb-xl-0 mb-5 d-md-flex justify-content-between">
        <div className="avatar mb-md-0 mb-4 mx-4">
          <img
            src={team.image}
            className="rounded z-depth-1"
            alt="Sample avatar"
          />
        </div>
        <div className="mx-4">
          <h4 className="font-weight-bold mb-3">{team.name}</h4>
          <h6 className="font-weight-bold grey-text mb-3">{team.role}</h6>
          <p className="grey-text">
            {team.description ||
              `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod
                eos id officiis hic tenetur.`}
          </p>
          {/* <!--LinkedIn --> */}
          <a href={team.linkedin || "#"} className="p-2 fa-lg li-ic">
            <i className="fab fa-linkedin-in"> </i>
          </a>
          {/* <!-- Twitter --> */}
          <a href={team.twitter || "#"} className="p-2 fa-lg tw-ic">
            <i className="fab fa-twitter"> </i>
          </a>
          {/* <!-- GitHub--> */}
          <a href={team.github || "#"} className="p-2 fa-lg git-ic">
            <i className="fab fa-github"> </i>
          </a>
        </div>
      </div>
    </React.Fragment>
  );
};

export default TeamMember;

// {
//     {/* <!-- Grid row--> */}
//     <div className="row text-center text-md-left">
//     {/* <!-- Grid column --> */}
//     <div className="col-xl-6 col-lg-12 mb-xl-0 mb-5 d-md-flex justify-content-between">
//       <div className="avatar mb-md-0 mb-4 mx-4">
//         <img
//           src="https://mdbootstrap.com/img/Photos/Avatars/img%20(26).jpg"
//           className="rounded z-depth-1"
//           alt="Sample avatar"
//         />
//       </div>
//       <div className="mx-4">
//         <h4 className="font-weight-bold mb-3">Anna Deynah</h4>
//         <h6 className="font-weight-bold grey-text mb-3">Web Developer</h6>
//         <p className="grey-text">
//           Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod
//           eos id officiis hic tenetur.
//         </p>
//         {/* <!-- Facebook--> */}
//         <a className="p-2 fa-lg fb-ic">
//           <i className="fab fa-facebook-f"> </i>
//         </a>
//         {/* <!-- Twitter --> */}
//         <a className="p-2 fa-lg tw-ic">
//           <i className="fab fa-twitter"> </i>
//         </a>
//         {/* <!-- GitHub--> */}
//         <a className="p-2 fa-lg git-ic">
//           <i className="fab fa-github"> </i>
//         </a>
//       </div>
//     </div>
//     {/* <!-- Grid column --> */}

//     {/* <!-- Grid column --> */}
//     <div className="col-xl-6 col-lg-12 d-md-flex justify-content-between">
//       <div className="avatar mb-md-0 mb-4 mx-4">
//         <img
//           src="https://mdbootstrap.com/img/Photos/Avatars/img%20(29).jpg"
//           className="rounded z-depth-1 img-fluid"
//           alt="Sample avatar"
//         />
//       </div>
//       <div className="mx-4">
//         <h4 className="font-weight-bold mb-3">Sarah Melyah</h4>
//         <h6 className="font-weight-bold grey-text mb-3">
//           Front-end Developer
//         </h6>
//         <p className="grey-text">
//           Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod
//           eos id officiis hic tenetur.
//         </p>
//         {/* <!-- Google +--> */}
//         <a className="p-2 fa-lg gplus-ic">
//           <i className="fab fa-google-plus-g"> </i>
//         </a>
//         {/* <!--LinkedIn --> */}
//         <a className="p-2 fa-lg li-ic">
//           <i className="fab fa-linkedin-in"> </i>
//         </a>
//         {/* <!--Email--> */}
//         <a className="p-2 fa-lg email-ic">
//           <i className="fas fa-envelope"> </i>
//         </a>
//       </div>
//     </div>
//     {/* <!-- Grid column --> */}
//   </div>

//     <div className="col-xl-6 col-lg-12 mb-5 d-md-flex justify-content-between">
//     <div className="avatar mb-md-0 mb-4 mx-4">
//       <img
//         src="https://mdbootstrap.com/img/Photos/Avatars/img%20(32).jpg"
//         className="rounded z-depth-1"
//         alt="Sample avatar"
//       />
//     </div>
//     <div className="mx-4">
//       <h4 className="font-weight-bold mb-3">John Doe</h4>
//       <h6 className="font-weight-bold grey-text mb-3">Web Designer</h6>
//       <p className="grey-text">
//         Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod
//         eos id officiis hic tenetur.
//       </p>
//       {/* <!-- Facebook--> */}
//       <a className="p-2 fa-lg fb-ic">
//         <i className="fab fa-facebook-f"> </i>
//       </a>
//       {/* <!-- Twitter --> */}
//       <a className="p-2 fa-lg tw-ic">
//         <i className="fab fa-twitter"> </i>
//       </a>
//       {/* <!--Dribbble --> */}
//       <a className="p-2 fa-lg dribbble-ic">
//         <i className="fab fa-dribbble"> </i>
//       </a>
//     </div>
//   </div>
//   {/* <!-- Grid column --> */}

//   {/* <!-- Grid column --> */}
//   <div className="col-xl-6 col-lg-12 mb-5 d-md-flex justify-content-between">
//     <div className="avatar mb-md-0 mb-4 mx-4">
//       <img
//         src="https://mdbootstrap.com/img/Photos/Avatars/img%20(20).jpg"
//         className="rounded z-depth-1"
//         alt="Sample avatar"
//       />
//     </div>
//     <div className="mx-4">
//       <h4 className="font-weight-bold mb-3">Maria Kate</h4>
//       <h6 className="font-weight-bold grey-text mb-3">Photographer</h6>
//       <p className="grey-text">
//         Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod
//         eos id officiis hic tenetur.
//       </p>
//       {/* <!-- Facebook--> */}
//       <a className="p-2 fa-lg fb-ic">
//         <i className="fab fa-facebook-f"> </i>
//       </a>
//       {/* <!--YouTube --> */}
//       <a className="p-2 fa-lg yt-ic">
//         <i className="fab fa-youtube"> </i>
//       </a>
//       {/* <!--Instagram--> */}
//       <a className="p-2 fa-lg ins-ic">
//         <i className="fab fa-instagram"> </i>
//       </a>
//     </div>
//   </div>
//   {/* <!-- Grid column --> */}

// }
