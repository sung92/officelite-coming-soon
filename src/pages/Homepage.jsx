import { Link } from "react-router-dom";
import { useSelectForm } from "../contexts/SelectFormContext";
import { useCountdown } from "../contexts/CountdownContext";

function Homepage() {
  return (
    <div className="">
      <div className="grid max-w-[768px] grid-rows-mobile bg-[#FAFAFA] tablet:max-w-[1440px] desktop:max-w-full">
        <Intro />
        <Cards />
        <Footer />
      </div>
    </div>
  );
}

function Intro() {
  return (
    <header className="flex flex-col items-center bg-header bg-contain bg-[center_top_-120px] bg-no-repeat px-5 tablet:grid tablet:grid-cols-tabletheader tablet:grid-rows-tabletheader tablet:bg-cover tablet:bg-[top_-200px_right_-390px] tablet:px-10 desktop:bg-[length:70%] desktop:bg-[top_-500px_right_-390px] desktop:px-[200px]">
      <img
        className="pt-[56px] tablet:self-start tablet:pt-[72px]"
        src="/images/logo.svg"
      ></img>
      <img
        className="mt-[4.2rem] h-[212px] w-[192px] tablet:col-start-2 tablet:row-start-2 tablet:h-[366px] tablet:w-[300px] tablet:justify-self-end desktop:h-[700px] desktop:w-[600px]"
        src="/images/illustration-charts.svg"
      ></img>
      <div className="mt-[2rem] flex flex-col items-center text-wrap text-center tablet:col-start-1 tablet:row-start-2 tablet:items-start tablet:text-left">
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
          className="mt-[2rem] rounded-full bg-primary-blue px-[40px] py-[14px] font-semibold text-white shadow-3xl desktop:mt-[4rem] desktop:text-[20px] desktop:hover:bg-primary-blue/50"
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
    <main className="z-[2] col-start-1 row-start-2 row-end-4 mt-[7rem] flex flex-col items-center gap-6 px-4 desktop:flex-row desktop:justify-center desktop:gap-10">
      <div className="max-h-[508px] max-w-[375px] rounded-lg bg-white p-[64px] text-center text-neutral-title tablet:grid tablet:max-h-[316px] tablet:max-w-[689px] tablet:grid-rows-tabletcards tablet:text-left desktop:flex desktop:max-h-[808px] desktop:max-w-[450px] desktop:flex-col desktop:text-center">
        <div>
          <p className="text-[20px] font-bold desktop:text-[40px]">Basic</p>
          <h2 className="mt-[15px] text-[56px] font-bold tablet:mt-0 desktop:text-[80px]">
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
            className="mt-[2rem] inline-block rounded-full bg-primary-lightblue bg-opacity-30 px-[40px] py-[14px] font-bold text-primary-blue tablet:mt-[0] desktop:text-[20px] desktop:hover:bg-primary-blue/50"
            to="/signup"
          >
            Try For Free
          </Link>
        </div>
      </div>
      <div className="max-h-[508px] max-w-[375px] rounded-lg bg-primary-blue bg-card bg-contain bg-[center_top_-120px] bg-no-repeat p-[64px] text-center text-white tablet:grid tablet:max-h-[316px] tablet:max-w-[689px] tablet:grid-rows-tabletcards tablet:bg-[length:70%] tablet:bg-[center_left_-100px] tablet:text-left desktop:flex desktop:max-h-[808px] desktop:max-w-[450px] desktop:flex-col desktop:bg-[length:120%] desktop:bg-[center_top_-120px] desktop:text-center">
        <div>
          <p className="text-[20px] font-bold desktop:text-[40px]">Pro</p>
          <h2 className="mt-[15px] text-[56px] font-bold tablet:mt-0 desktop:text-[80px]">
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
            className="mt-[2rem] inline-block rounded-full bg-white bg-opacity-30 px-[40px] py-[14px] font-bold text-primary-blue tablet:mt-[0] desktop:text-[20px] desktop:hover:text-primary-blue/50"
            to="/signup"
          >
            Try For Free
          </Link>
        </div>
      </div>
      <div className="max-h-[508px] max-w-[375px] rounded-lg bg-white p-[64px] text-center text-neutral-title tablet:grid tablet:max-h-[316px] tablet:max-w-[689px] tablet:grid-rows-tabletcards tablet:text-left desktop:flex desktop:max-h-[808px] desktop:max-w-[450px] desktop:flex-col desktop:text-center">
        <div>
          <p className="text-[20px] font-bold desktop:text-[40px]">Ultimate</p>
          <h2 className="mt-[15px] text-[56px] font-bold tablet:mt-0 desktop:text-[80px]">
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
            className="mt-[2rem] inline-block rounded-full bg-primary-lightblue bg-opacity-30 px-[40px] py-[14px] font-bold text-primary-blue tablet:mt-[0] desktop:text-[20px] desktop:hover:bg-primary-blue/50"
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
    <footer className="z-[1] col-start-1 row-start-3 row-end-6 mt-[4rem] flex h-[1200px] justify-around bg-neutral-darkgrey bg-footer bg-[length:170%] bg-bottom4 px-5 pb-[4rem] tablet:h-[900px] tablet:bg-[length:180%] tablet:bg-[center_bottom_-500px] tablet:bg-no-repeat desktop:mt-[2rem] desktop:h-[600px] desktop:bg-[length:120%] desktop:bg-[left_-600px_bottom_-1000px]">
      <div className="mt-auto flex flex-col items-center desktop:flex-row desktop:justify-around desktop:gap-[42rem]">
        <div>
          <p className="text-center text-[16px] font-bold uppercase tracking-[0.2rem] text-white desktop:text-left">
            Coming <span className="text-primary-blue">4 Aug 2024</span>
          </p>
          <ul
            role="item"
            className="m-0 mt-8 flex justify-between gap-3 desktop:mt-4"
          >
            <li className="flex w-[72px] flex-col items-center justify-center rounded-md bg-neutral-lightgrey p-3">
              <span className="text-[40px] font-bold text-white">
                {days.toString().length === 1 ? "0" + days : days}
              </span>
              <p className="text-[12px] font-bold text-neutral-verylgrey">
                days
              </p>
            </li>
            <li className="flex w-[72px] flex-col items-center justify-center rounded-md bg-neutral-lightgrey p-3">
              <span className="text-[40px] font-bold text-white">
                {hours.toString().length === 1 ? "0" + hours : hours}
              </span>
              <p className="text-[12px] font-bold text-neutral-verylgrey">
                hours
              </p>
            </li>
            <li className="flex w-[72px] flex-col items-center justify-center rounded-md bg-neutral-lightgrey p-3">
              <span className="text-[40px] font-bold text-white">
                {minutes.toString().length === 1 ? "0" + minutes : minutes}
              </span>
              <p className="text-[12px] font-bold text-neutral-verylgrey">
                min
              </p>
            </li>
            <li className="flex w-[72px] flex-col items-center justify-center rounded-md bg-neutral-lightgrey p-3">
              <span className="text-[40px] font-bold text-white">
                {seconds.toString().length === 1 ? "0" + seconds : seconds}
              </span>
              <p className="text-[12px] font-bold text-neutral-verylgrey">
                sec
              </p>
            </li>
          </ul>
        </div>

        <Link
          className="mt-[3rem] inline-block rounded-full bg-primary-blue px-[40px] py-[14px] font-semibold text-white desktop:hover:bg-primary-blue/80"
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
