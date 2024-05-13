import Form from ".././components/Form";
import { useCountdown } from "../contexts/CountdownContext";

function Signup() {
  return (
    <div className="grid grid-rows-mobile desktop:grid-cols-desktopsignup desktop:grid-rows-desktopsignup">
      <SignUpIntro />
      <Time />
      <Form />
      <Footer />
    </div>
  );
}

function SignUpIntro() {
  return (
    <header className="flex flex-col items-center bg-header bg-contain bg-[center_top_-120px] bg-no-repeat px-5 tablet:bg-none tablet:px-10 desktop:pl-40">
      <img
        className="pt-[56px] tablet:self-start tablet:pt-[72px]"
        src="/images/logo.svg"
      ></img>
      <div className="mt-[6rem] flex flex-col items-center text-wrap text-center tablet:col-start-1 tablet:row-start-2 tablet:items-center tablet:px-20 tablet:text-left desktop:mt-[150px] desktop:items-start desktop:px-0">
        <h1 className="text-[48px] font-bold leading-[3rem] text-neutral-darkgrey desktop:text-[72px] desktop:leading-[5rem]">
          Work smarter. Save time.
        </h1>
        <p className="mt-[1rem] text-[16px] text-neutral-verylgrey tablet:mt-[40px] tablet:text-pretty tablet:text-center tablet:text-[18px] desktop:mt-[40px] desktop:text-left desktop:text-[20px]">
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
    <div className="mt-[80px] flex flex-col items-center desktop:desktop:col-start-1 desktop:mt-[20px] desktop:flex-row desktop:gap-[42rem] desktop:px-40">
      <div>
        <p className="text-center text-[16px] font-bold uppercase tracking-[0.2rem] text-neutral-darkgrey desktop:text-left desktop:text-[18px]">
          Coming <span className="text-primary-blue">4 Aug 2024</span>
        </p>
        <ul
          role="item"
          className="m-0 mt-8 flex justify-between gap-3 desktop:mt-5"
        >
          <li className=" flex w-[72px] flex-col items-center justify-center rounded-md bg-primary-lightblue/20 p-3 desktop:w-[90px]">
            <span className="text-[40px] font-bold text-primary-blue desktop:text-[56px]">
              {days.toString().length === 1 ? "0" + days : days}
            </span>
            <p className="text-[12px] font-bold text-neutral-verylgrey desktop:text-[16px]">
              days
            </p>
          </li>
          <li className="flex w-[72px] flex-col items-center justify-center rounded-md bg-primary-lightblue/20 p-3 desktop:w-[90px]">
            <span className="text-[40px] font-bold text-primary-blue desktop:text-[56px]">
              {hours.toString().length === 1 ? "0" + hours : hours}
            </span>
            <p className="text-[12px] font-bold text-neutral-verylgrey desktop:text-[16px]">
              hours
            </p>
          </li>
          <li className="flex w-[72px] flex-col items-center justify-center rounded-md bg-primary-lightblue/20 p-3 desktop:w-[90px]">
            <span className="text-[40px] font-bold text-primary-blue desktop:text-[56px]">
              {minutes.toString().length === 1 ? "0" + minutes : minutes}
            </span>
            <p className="text-[12px] font-bold text-neutral-verylgrey desktop:text-[16px]">
              min
            </p>
          </li>
          <li className="flex w-[72px] flex-col items-center justify-center rounded-md bg-primary-lightblue/20 p-3 desktop:w-[90px]">
            <span className="text-[40px] font-bold text-primary-blue desktop:text-[56px]">
              {seconds.toString().length === 1 ? "0" + seconds : seconds}
            </span>
            <p className="text-[12px] font-bold text-neutral-verylgrey desktop:text-[16px]">
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
    <footer className="z-[1] col-start-1 row-start-4 row-end-7 flex h-[400px] justify-around bg-neutral-darkgrey bg-footer bg-[length:100%] bg-[bottom] bg-no-repeat px-5 pb-[4rem] tablet:bg-[center_bottom_-250px] desktop:col-start-5 desktop:col-end-[-1] desktop:row-start-1 desktop:row-end-6 desktop:h-dvh desktop:bg-footer desktop:bg-[length:150%] desktop:bg-top"></footer>
  );
}

export default Signup;
