import Form from ".././components/Form";
import { useCountdown } from "../contexts/CountdownContext";

function Signup() {
  return (
    <div className="grid grid-rows-mobile desktop:grid-rows-desktopsignup desktop:grid-cols-desktopsignup">
      <SignUpIntro />
      <Time />
      <Form />
      <Footer />
    </div>
  );
}

function SignUpIntro() {
  return (
    <header className="bg-header bg-no-repeat bg-contain bg-[center_top_-120px] flex flex-col items-center px-5 tablet:px-10 tablet:bg-none desktop:pl-40">
      <img
        className="pt-[56px] tablet:pt-[72px] tablet:self-start"
        src="/images/logo.svg"
      ></img>
      <div className="flex flex-col items-center mt-[6rem] text-center text-wrap tablet:px-20 tablet:row-start-2 tablet:col-start-1 tablet:items-center tablet:text-left desktop:items-start desktop:px-0 desktop:mt-[150px]">
        <h1 className="text-[48px] font-bold leading-[3rem] text-neutral-darkgrey desktop:text-[72px] desktop:leading-[5rem]">
          Work smarter. Save time.
        </h1>
        <p className="mt-[1rem] text-[16px] text-neutral-verylgrey tablet:text-[18px] tablet:text-pretty tablet:text-center tablet:mt-[40px] desktop:mt-[40px] desktop:text-[20px] desktop:text-left">
          Easily manage your projects. Get on the list and receive in-app perks
          available only to early subscribers. We are moving into final
          development and getting ready for official launch soon.
        </p>
      </div>
    </header>
  );
}

function Time() {
  let { days, hours, minutes, seconds } = useCountdown();

  return (
    <div className="flex flex-col items-center mt-[80px] desktop:flex-row desktop:gap-[42rem] desktop:desktop:col-start-1 desktop:px-40 desktop:mt-[20px]">
      <div>
        <p className="text-neutral-darkgrey text-center text-[16px] font-bold tracking-[0.2rem] uppercase desktop:text-left desktop:text-[18px]">
          Coming <span className="text-primary-blue">4 Aug 2024</span>
        </p>
        <ul
          role="item"
          className="flex m-0 gap-3 mt-8 justify-between desktop:mt-5"
        >
          <li className=" bg-primary-lightblue/20 flex flex-col justify-center items-center p-3 rounded-md w-[72px] desktop:w-[90px]">
            <span className="text-[40px] text-primary-blue font-bold desktop:text-[56px]">
              {days.toString().length === 1 ? "0" + days : days}
            </span>
            <p className="text-[12px] text-neutral-verylgrey font-bold desktop:text-[16px]">
              days
            </p>
          </li>
          <li className="bg-primary-lightblue/20 flex flex-col justify-center items-center p-3 rounded-md w-[72px] desktop:w-[90px]">
            <span className="text-[40px] text-primary-blue font-bold desktop:text-[56px]">
              {hours.toString().length === 1 ? "0" + hours : hours}
            </span>
            <p className="text-[12px] text-neutral-verylgrey font-bold desktop:text-[16px]">
              hours
            </p>
          </li>
          <li className="bg-primary-lightblue/20 flex flex-col justify-center items-center p-3 rounded-md w-[72px] desktop:w-[90px]">
            <span className="text-[40px] text-primary-blue font-bold desktop:text-[56px]">
              {minutes.toString().length === 1 ? "0" + minutes : minutes}
            </span>
            <p className="text-[12px] text-neutral-verylgrey font-bold desktop:text-[16px]">
              min
            </p>
          </li>
          <li className="bg-primary-lightblue/20 flex flex-col justify-center items-center p-3 rounded-md w-[72px] desktop:w-[90px]">
            <span className="text-[40px] text-primary-blue font-bold desktop:text-[56px]">
              {seconds.toString().length === 1 ? "0" + seconds : seconds}
            </span>
            <p className="text-[12px] text-neutral-verylgrey font-bold desktop:text-[16px]">
              sec
            </p>
          </li>
        </ul>
      </div>
    </div>
  );
}

function Footer() {
  return (
    <footer className="px-5 row-start-4 row-end-7 col-start-1 z-[1] pb-[4rem] bg-no-repeat bg-footer bg-[bottom] bg-[length:100%] bg-neutral-darkgrey h-[400px] flex justify-around tablet:bg-[center_bottom_-250px] desktop:col-start-5 desktop:col-end-[-1] desktop:row-start-1 desktop:row-end-6 desktop:h-dvh desktop:bg-footer desktop:bg-top desktop:bg-[length:150%]"></footer>
  );
}

export default Signup;
