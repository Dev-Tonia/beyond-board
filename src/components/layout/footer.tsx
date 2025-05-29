import React from "react";
import Image from "next/image";
import CustomIcon from "../common/custom-icon";
import ThirdHeading from "../common/ThirdHeading";

export default function Footer() {
  return (
    <footer className=" ">
      {/* first section */}
      <div className=" wrapper pt-12 pb-24">
        <div className=" relative  bg-primary flex-col flex items-center justify-center min-h-[350px]">
          {/* bg image 1 */}
          <div className=" size-36 sm:size-52 lg:size-64  2xl:size-72 absolute top-0 left-0">
            <Image
              src="/img/line-bg-top.png"
              alt="box-bg"
              fill
              sizes="100vw"
              className="object-cover"
              loading="lazy"
              quality={100}
            />
          </div>
          {/* bg image 2 */}
          <div className=" size-36 sm:size-52 lg:size-72 2xl:size-80 absolute bottom-0 right-0">
            <Image
              src="/img/line-bg-bottom.png"
              alt="box-bg"
              fill
              sizes="100vw"
              className="object-cover"
              loading="lazy"
              quality={100}
            />
          </div>

          <div className=" flex flex-col justify-center items-center gap-4 max-w-[700px]">
            <ThirdHeading title=" Research Feedback Form" />
            <p className=" text-center text-lg md:text-xl lg:text-2xl 2xl:text-3xl text-neutral-50">
              To help improve this or future research, please share your opinion
              about this project
            </p>
            <a
              href="https://docs.google.com/forms/d/1dYGGWYPF03cpQhwvzj9w4NbGDLIdm7xImFx8xE_uS-0/viewform?edit_requested=true"
              target="_blank"
              rel="noopener noreferrer"
              className=" py-4 text-center w-fit px-5 bg-white  text-primary mt-8 font-nunito font-bold"
            >
              Share Feedback
            </a>
          </div>
        </div>
      </div>
      {/* second section  */}
      <div className=" border-t border-neutral-200">
        <div className=" wrapper pt-8 pb-20">
          <div className=" flex  justify-between">
            <div className=" max-w-lg">
              <h6 className=" font-bold font-georgian lg:text-lg  2xl:text-xl text-neutral-800">
                This public scholarship project is part of the requirements for
                the Doctor of Public Administration (D.P.A.) degree at the
                University of Baltimore, Maryland.
              </h6>
            </div>
            <div className=" flex gap-8">
              <div className=" ">
                <h6 className=" font-bold font-georgian text-lg md:text-xl lg:text-2xl text-neutral-800 mb-3">
                  Contact Information
                </h6>

                <p className=" lg:text-lg  2xl:text-xl font-cabin">
                  <a
                    href="mailto:kunleadeleye@yahoo.com"
                    className="hover:underline"
                  >
                    kunleadeleye@yahoo.com
                  </a>
                </p>

                <p className=" lg:text-lg 2xl:text-xl  font-cabin">
                  <a
                    href="mailto:adekunle.adeleye@ubalt.edu"
                    className="hover:underline"
                  >
                    adekunle.adeleye@ubalt.edu
                  </a>
                </p>
              </div>
            </div>
          </div>
            <div className="flex flex-center center text-sm">
              <p>
                Disclaimer: The pictures of the participants used in this
                project are AI-generated images and do not represent real
                individuals. They are used solely for illustrative purposes. 
              </p>
            </div>
        </div>
      </div>
    </footer>
  );
}
