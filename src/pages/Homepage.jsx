import { Link } from "react-router-dom";
import { useSelectForm } from "../contexts/SelectFormContext";
import { useCountdown } from "../contexts/CountdownContext";

function Homepage() {
  return (
    <div className="">
      <div className="bg-[#FAFAFA] grid grid-rows-mobile max-w-[768px] tablet:max-w-[1440px] desktop:max-w-full">
        <Intro />
        <Cards />
        <Footer />
      </div>
    </div>
  );
}

function Intro() {
  return (
    <header className="bg-header bg-no-repeat bg-contain bg-[center_top_-120px] flex flex-col items-center px-5 tablet:px-10 tablet:grid tablet:grid-rows-tabletheader tablet:grid-cols-tabletheader tablet:bg-cover tablet:bg-[top_-200px_right_-390px] desktop:px-[200px] desktop:bg-[top_-500px_right_-390px] desktop:bg-[length:70%]">
      <img
        className="pt-[56px] tablet:pt-[72px] tablet:self-start"
        src="/images/logo.svg"
      ></img>
      <img
        className="w-[192px] h-[212px] mt-[4.2rem] tablet:row-start-2 tablet:col-start-2 tablet:h-[366px] tablet:w-[300px] tablet:justify-self-end desktop:h-[700px] desktop:w-[600px]"
        src="/images/illustration-charts.svg"
      ></img>
      <div className="flex flex-col items-center mt-[2rem] text-center text-wrap tablet:row-start-2 tablet:col-start-1 tablet:items-start tablet:text-left">
        <h1 className="text-[40px] font-bold leading-[3rem] text-neutral-darkgrey desktop:text-[72px] desktop:leading-[5rem]">
          A simple solution to complex tasks is coming soon
        </h1>
        <p className="mt-[1rem] text-[16px] text-neutral-verylgrey tablet:mt-[30px] desktop:mt-[40px] desktop:text-[20px]">
          Say goodbye to inefficient juggling of multiple apps, teams, and
          projects.
          <span className="block">
            Officelite is the new collaboration platform built with an intuitive
            interface to improve productivity.
          </span>
        </p>
        <Link
          className="mt-[2rem] bg-primary-blue text-white py-[14px] px-[40px] rounded-full font-semibold desktop:mt-[4rem] desktop:text-[20px] shadow-3xl desktop:hover:bg-primary-blue/50"
          to="/signup"
        >
          Get Started
        </Link>
      </div>
    </header>
  );
}

function Cards() {
  const { dispatch } = useSelectForm(); // practicando Context API

  return (
    <main className="flex flex-col gap-6 mt-[7rem] z-[2] row-start-2 row-end-4 col-start-1 px-4 items-center desktop:flex-row desktop:justify-center desktop:gap-10">
      <div className="max-w-[375px] max-h-[508px] bg-white p-[64px] rounded-lg text-center text-neutral-title tablet:max-h-[316px] tablet:max-w-[689px] tablet:grid tablet:grid-rows-tabletcards tablet:text-left desktop:max-w-[450px] desktop:max-h-[808px] desktop:flex desktop:flex-col desktop:text-center">
        <div>
          <p className="font-bold text-[20px] desktop:text-[40px]">Basic</p>
          <h2 className="mt-[15px] font-bold text-[56px] tablet:mt-0 desktop:text-[80px]">
            Free
          </h2>
          <p className="text-[16px] desktop:text-[22px]">
            Up to 5 users for free
          </p>
        </div>

        <div className="mt-[64px] flex flex-col gap-4 text-[15px] text-neutral-verylgrey tablet:col-start-2 tablet:justify-self-center desktop:mt-[48px]">
          <p>Basic document collaboration</p>
          <p>2 GB storage</p>
          <p>Great security and support</p>
        </div>
        <div className="tablet:self-center desktop:mt-[2rem]">
          <Link
            onClick={() => dispatch({ type: "basic" })}
            className="mt-[2rem] inline-block bg-primary-lightblue text-primary-blue bg-opacity-30 py-[14px] px-[40px] rounded-full font-bold tablet:mt-[0] desktop:text-[20px] desktop:hover:bg-primary-blue/50"
            to="/signup"
          >
            Try For Free
          </Link>
        </div>
      </div>
      <div className="max-w-[375px] max-h-[508px] bg-primary-blue p-[64px] rounded-lg text-center text-white bg-card bg-no-repeat bg-contain bg-[center_top_-120px] tablet:max-h-[316px] tablet:max-w-[689px] tablet:grid tablet:grid-rows-tabletcards tablet:text-left tablet:bg-[center_left_-100px] tablet:bg-[length:70%] desktop:max-w-[450px] desktop:max-h-[808px] desktop:flex desktop:flex-col desktop:text-center desktop:bg-[center_top_-120px] desktop:bg-[length:120%]">
        <div>
          <p className="font-bold text-[20px] desktop:text-[40px]">Pro</p>
          <h2 className="mt-[15px] font-bold text-[56px] tablet:mt-0 desktop:text-[80px]">
            $9.99
          </h2>
          <p className="text-[16px] desktop:text-[22px]">
            Per user, billed monthly
          </p>
        </div>

        <div className="mt-[64px] flex flex-col gap-4 text-[15px] tablet:col-start-2 tablet:justify-self-center desktop:mt-[48px]">
          <p>All essential integrations</p>
          <p>50 GB storage</p>
          <p>More control and insights</p>
        </div>
        <div className="tablet:self-center desktop:mt-[2rem]">
          <Link
            onClick={() => dispatch({ type: "pro" })}
            className="mt-[2rem] inline-block bg-white text-primary-blue bg-opacity-30 py-[14px] px-[40px] rounded-full font-bold tablet:mt-[0] desktop:text-[20px] desktop:hover:text-primary-blue/50"
            to="/signup"
          >
            Try For Free
          </Link>
        </div>
      </div>
      <div className="max-w-[375px] max-h-[508px] bg-white p-[64px] rounded-lg text-center text-neutral-title tablet:max-h-[316px] tablet:max-w-[689px] tablet:grid tablet:grid-rows-tabletcards tablet:text-left desktop:max-w-[450px] desktop:max-h-[808px] desktop:flex desktop:flex-col desktop:text-center">
        <div>
          <p className="font-bold text-[20px] desktop:text-[40px]">Ultimate</p>
          <h2 className="mt-[15px] font-bold text-[56px] tablet:mt-0 desktop:text-[80px]">
            $19.99
          </h2>
          <p className="text-[16px] desktop:text-[22px]">
            Per user, billed monthly
          </p>
        </div>

        <div className="mt-[64px] flex flex-col gap-4 text-[15px] text-neutral-verylgrey tablet:col-start-2 tablet:justify-self-center desktop:mt-[48px]">
          <p>Robust work management</p>
          <p>100 GB storage</p>
          <p>VIP support</p>
        </div>
        <div className="tablet:self-center desktop:mt-[2rem]">
          <Link
            onClick={() => dispatch({ type: "ultimate" })}
            className="mt-[2rem] inline-block bg-primary-lightblue text-primary-blue bg-opacity-30 py-[14px] px-[40px] rounded-full font-bold tablet:mt-[0] desktop:text-[20px] desktop:hover:bg-primary-blue/50"
            to="/signup"
          >
            Try For Free
          </Link>
        </div>
      </div>
    </main>
  );
}

function Footer() {
  let { days, hours, minutes, seconds } = useCountdown();

  return (
    <footer className="px-5 row-start-3 row-end-6 col-start-1 z-[1] mt-[4rem] pb-[4rem] bg-footer bg-bottom4 bg-[length:170%] bg-neutral-darkgrey h-[1200px] flex justify-around tablet:h-[900px] tablet:bg-no-repeat tablet:bg-[center_bottom_-500px] tablet:bg-[length:180%] desktop:h-[600px] desktop:bg-[left_-600px_bottom_-1000px] desktop:bg-[length:120%] desktop:mt-[2rem]">
      <div className="flex flex-col items-center mt-auto desktop:flex-row desktop:justify-around desktop:gap-[42rem]">
        <div>
          <p className="text-white text-center text-[16px] font-bold tracking-[0.2rem] uppercase desktop:text-left">
            Coming <span className="text-primary-blue">4 Aug 2024</span>
          </p>
          <ul
            role="item"
            className="flex m-0 gap-3 mt-8 justify-between desktop:mt-4"
          >
            <li className="bg-neutral-lightgrey flex flex-col justify-center items-center p-3 rounded-md w-[72px]">
              <span className="text-[40px] text-white font-bold">
                {days.toString().length === 1 ? "0" + days : days}
              </span>
              <p className="text-[12px] text-neutral-verylgrey font-bold">
                days
              </p>
            </li>
            <li className="bg-neutral-lightgrey flex flex-col justify-center items-center p-3 rounded-md w-[72px]">
              <span className="text-[40px] text-white font-bold">
                {hours.toString().length === 1 ? "0" + hours : hours}
              </span>
              <p className="text-[12px] text-neutral-verylgrey font-bold">
                hours
              </p>
            </li>
            <li className="bg-neutral-lightgrey flex flex-col justify-center items-center p-3 rounded-md w-[72px]">
              <span className="text-[40px] text-white font-bold">
                {minutes.toString().length === 1 ? "0" + minutes : minutes}
              </span>
              <p className="text-[12px] text-neutral-verylgrey font-bold">
                min
              </p>
            </li>
            <li className="bg-neutral-lightgrey flex flex-col justify-center items-center p-3 rounded-md w-[72px]">
              <span className="text-[40px] text-white font-bold">
                {seconds.toString().length === 1 ? "0" + seconds : seconds}
              </span>
              <p className="text-[12px] text-neutral-verylgrey font-bold">
                sec
              </p>
            </li>
          </ul>
        </div>

        <Link
          className="mt-[3rem] inline-block bg-primary-blue text-white py-[14px] px-[40px] rounded-full font-semibold desktop:hover:bg-primary-blue/80"
          to="/signup"
        >
          Get Started
        </Link>
      </div>
    </footer>
  );
}

// <Form />

export default Homepage;
