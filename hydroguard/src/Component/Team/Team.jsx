import React from "react";
import image from "./Aizaz.jpg";

export default function Team() {
  return (
    <div className="flex flex-col items-center">
      <section className="w-full">
        <div className="relative">
          <img
            src="https://media.istockphoto.com/id/1139778377/photo/aerial-of-bonn-the-former-capital-of-germany.jpg?s=1024x1024&w=is&k=20&c=1jiR0UD_Rrn9_4HXSU5qQHhtdK3Hnw-7XT9gbDZ2Hno="
            alt=""
            className="w-full h-96"
            height="0"
          />
          <div className="absolute inset-0  bg-opacity-50 flex justify-center items-center">
            <h3 className="text-white text-9xl font-semibold">Team Hydroguard</h3>
          </div>
        </div>
      </section>

      <section className="py-10">
        <div className="container mx-auto">
          <div className="text-center mb-8">
            <h1 className="text-4xl font-bold">Members</h1>
          </div>
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <li className="bg-white shadow-lg p-6 rounded-lg">
              <article className="flex flex-col items-center">
                <div className="mb-4">
                  <a href="#">
                    <img
                      src={image}
                      alt=""
                      className="rounded-full w-32 h-32 object-cover"
                    />
                  </a>
                </div>
                <div className="text-center">
                  <h4 className="text-xl font-semibold mb-2">
                    <a href="#">Member Name</a>
                  </h4>
                  <p className="mb-4">
                    Name, I am a student of CS in Psit. 
                  </p>
                  <a
                    href="#"
                    className="text-blue-500 hover:text-blue-700 font-medium"
                  >
                    View Profile
                  </a>
                </div>
              </article>
            </li>
            <li className="bg-white shadow-lg p-6 rounded-lg">
              <article className="flex flex-col items-center">
                <div className="mb-4">
                  <a href="#">
                    <img
                      src={image}
                      alt=""
                      className="rounded-full w-32 h-32 object-cover"
                    />
                  </a>
                </div>
                <div className="text-center">
                  <h4 className="text-xl font-semibold mb-2">
                    <a href="#">Member Name</a>
                  </h4>
                  <p className="mb-4">
                    Name, I am a student of CS in Psit.
                  </p>
                  <a
                    href="#"
                    className="text-blue-500 hover:text-blue-700 font-medium"
                  >
                    View Profile
                  </a>
                </div>
              </article>
            </li>
            <li className="bg-white shadow-lg p-6 rounded-lg">
              <article className="flex flex-col items-center">
                <div className="mb-4">
                  <a href="#">
                    <img
                      src={image}
                      alt=""
                      className="rounded-full w-32 h-32 object-cover"
                    />
                  </a>
                </div>
                <div className="text-center">
                  <h4 className="text-xl font-semibold mb-2">
                    <a href="#">Member Name</a>
                  </h4>
                  <p className="mb-4">
                    Name, I am a student of CS in Psit.
                  </p>
                  <a
                    href="#"
                    className="text-blue-500 hover:text-blue-700 font-medium"
                  >
                    View Profile
                  </a>
                </div>
              </article>
            </li>
            <li className="bg-white shadow-lg p-6 rounded-lg">
              <article className="flex flex-col items-center">
                <div className="mb-4">
                  <a href="#">
                    <img
                      src={image}
                      alt=""
                      className="rounded-full w-32 h-32 object-cover"
                    />
                  </a>
                </div>
                <div className="text-center">
                  <h4 className="text-xl font-semibold mb-2">
                    <a href="#">Member Name</a>
                  </h4>
                  <p className="mb-4">
                    Name, I am a student of CS in Psit.
                  </p>
                  <a
                    href="#"
                    className="text-blue-500 hover:text-blue-700 font-medium"
                  >
                    View Profile
                  </a>
                </div>
              </article>
            </li>
          </ul>
        </div>
      </section>
    </div>
  );
}
