import Head from "next/head";
import Image from "next/image";
import { BsFillMoonStarsFill, BsPersonVideo } from "react-icons/bs";
import { AiFillLinkedin, AiFillBook, AiFillGithub } from "react-icons/ai";
import Avatar from "../../public/Avatar.png";
// import SoftwareEngineer from '../../public/'
import ScreenShot from "../../public/Screenshot 2023-04-24 181902.png";
import BeerApp from "../../public/BeerApp.png";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Nick Wells Portfolio</title>
        <meta name="description" content="Generated by create next.js" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <section className="min-h-screen">
          <nav className="py-10 mb-12 flex justify-between">
            <h1>Developed By Nick Wells</h1>
          </nav>
          <div className="text-center p-12">
            <a
              href="https://www.loom.com/share/15fa032b9f6941c3b5b2c838b96e83bc"
              target="_blank"
            >
              <h2 className="text-5xl flex justify-center py-2 font-medium text-purple-600">
                <BsPersonVideo /> Nick Wells
              </h2>
            </a>
            <h3 className="text-xl py-2"> Software Engineer and Developer</h3>
            <p className="text-md py-5 leading-8">
              Software Engineer from Flatiron School, With a specialty in
              JS/React and Ruby!
            </p>
          </div>
          <div className="text-5xl flex justify-center gap-14 py-3 text-gray-400">
            <a
              href="https://media.licdn.com/dms/image/D562DAQFwhMvhmrlo6Q/profile-treasury-document-cover-images_1280/0/1686271737269?e=1689454800&v=beta&t=xo0tOGc8-PJ9I-lf0J-ysZ7svHwQkeDVvgR4T7RUUbE"
              type="application/pdf"
              target="_blank"
              className="bg-gradient-to-r from-purple-500 px-2 py-2 rounded-md hover:bg-sky-700"
            >
              Resume
            </a>
            <a
              href="https://www.linkedin.com/in/nick-wells-04b13a26a"
              target="_blank"
            >
              <AiFillLinkedin />
            </a>
            <a href="https://medium.com/@wellsnick3" target="_blank">
              <AiFillBook />
            </a>
            <a href="https://github.com/Risingsheild" target="_blank">
              <AiFillGithub />
            </a>
          </div>
          <div className="relative mx-auto bg-gradent-to-b from-purple-500 rounded-xl w-80 h-80 mt-15 py-8 overflow-hidden">
            <Image src={Avatar} alt="Personal photo" />
          </div>
        </section>
        <section>
          <div className="text-center">
            <h3 className="text-3xl py-1 bg-gradient-to-r from-purple-500">
              Projects Portfolio
            </h3>
            <p className="text-md py-5 leading-8">
              Since the beginning of my journey as a Software Engineer I have
              worked on various projects..
            </p>
          </div>
          <br />
          <div className="text-center flex justify-center">
            <a href="https://youtu.be/Xi6-AG69Vsk" target="_blank">
              <h3 className="text-xl py-6 px-5 mr-10 bg-gradient-to-r from-teal-300 hover:bg-sky-700">
                Pharmacy Scheduling Application
                <p className="text-sm italic">click for video (5:30min)</p>
              </h3>
            </a>
            <p className="text-md py-4 leading-8">
              This is a full Stack Appilcation, The Frontend uses React
              framework with a Redux State management system, while I use Ruby
              and PSQL as the Backend and Database.
            </p>
          </div>
          <div className="flex justify-center gap-14 py-3">
            <Image src={ScreenShot} alt="Pharmacy Application" height={300} />
          </div>

          <div className="text-center flex justify-center">
            <a href="https://youtu.be/8bYC-ZrnWng" target="_blank">
              <h3 className="text-xl py-6 px-5 mr-10 bg-gradient-to-r from-teal-300 hover:bg-sky-700">
                Rate Some Beers
                <p className="text-sm italic">click for video(2:30min) </p>
              </h3>
            </a>
            <p className="text-md py-4 leading-8">
              This is a full Stack Appilcation, Using React Framework with a
              Ruby backend and SQL database. This Application allows users to
              rate beers using a star system and some of their own to the
              database for others to see.
            </p>
          </div>
          <div className="flex justify-center gap-14 py-3">
            <Image src={BeerApp} alt="Beer Application" height={300} />
          </div>
        </section>
      </main>
    </div>
  );
}
