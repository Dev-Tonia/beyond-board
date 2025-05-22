import React from "react";
import ThirdHeading from "../common/ThirdHeading";
import SixthHeading from "../common/sixth-heading";

export default function Acknowledgements() {
  return (
    <section className=" py-12 lg:py-16 bg-[#FDCA401F]">
      <div className=" wrapper">
        <ThirdHeading textColor="text-neutral-800" title="Acknowledgements" />
        <div className=" lg:text-2xl md:text-xl text-lg 2xl:text-4xl  mt-5 lg:mt-8 text-neutral-700 font-normal">
          <p className="mb-5">
            This project would not have been possible without the courage,
            honesty, and generosity of the 30 individuals who shared their
            stories with me. I am deeply grateful for their willingness to speak
            vulnerably about their journeys — the challenges they’ve faced, the
            dreams they’ve pursued, and the ways they continue to shape their
            communities in Maryland and beyond. I also appreciate the efforts
            and support of the many community and cultural groups who helped me
            during the recruitment process.
          </p>
          <p className="mb-5">
            Special appreciation goes to my mentors and advisers at the
            University of Baltimore. I am especially grateful to Professor
            Mariglynn Edlins, whose work on immigration inspired the foundation
            of this project and whose guidance helped shape my thinking
            throughout. I also thank Professor Ivan Sheehan for his long-term
            mentorship and unwavering support throughout my doctoral journey.
            Thank you for all the recommendations and the opportunities. I am
            equally thankful to Dr. Sombo Muzata of James Madison University,
            Virginia, who served as a consultant on this project. Her insights,
            encouragement, and expert feedback helped sharpen the focus and
            deepen the impact of this work. Thank you for your availability and
            timely feedback.
          </p>
          <p className="mb-5">
            I also want to thank all my friends and family for their support
            throughout this journey. Your presence, patience, and encouragement
            sustained me in more ways than I can express.  
          </p>
          <p className="mb-5">
            Select media files used in this project including AI
            generated participants’ images are sourced from Unsplash, Freepik,
            and OpenAI, and are gratefully acknowledged for their contributions
            to visual storytelling.
          </p>
        </div>
        <div>
          <SixthHeading title="Dedication" textColor=" text-neutral-800" />
          <p className="mb-5 mt-5">
            Select media files used in this project including AI
            generated participants’ images are sourced from Unsplash, Freepik,
            and OpenAI, and are gratefully acknowledged for their contributions
            to visual storytelling.
          </p>
        </div>
      </div>
    </section>
  );
}
