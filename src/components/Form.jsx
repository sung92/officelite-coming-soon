import { useForm } from "react-hook-form";
import { useSelectForm } from "../contexts/SelectFormContext";
import { useOutsideClick } from "@chakra-ui/react";
import { useRef } from "react";
import { useNavigate } from "react-router-dom";

function style(error) {
  if (error) {
    return {
      backgroundColor: "rgba(255, 0, 0, 0.5)",
      // Or any other style you prefer
    };
  }
}

function Form() {
  const navigate = useNavigate();
  const { dispatch, pack, price, isOpen } = useSelectForm(); // practicando Context API + useReducer
  const ref = useRef(); // useRef para almacenar un elemento del DOM

  useOutsideClick({
    ref: ref,
    handler: () => dispatch({ type: "selectClose" }),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
    // getValues,
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    navigate(-1);
  };

  return (
    <div className="row-start-3 row-end-5 col-start-1 z-[2] mx-auto mt-[80px] rounded-lg w-[327px] max-h-[555px] bg-white shadow-3xl p-[40px] tablet:w-[455px] desktop:col-start-4 desktop:row-start-1 desktop:mt-[200px]">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex flex-col divide-y-2 border-spacing-y-1 divide-[#e7e5e4] gap-5"
      >
        <label className="relative">
          <input
            className="w-full py-[5px] focus:outline-none desktop:text-[18px]"
            type="text"
            placeholder="Name"
            {...register("name", { required: true })}
          ></input>
          {errors.name && errors.name.type === "required" && (
            <p className="flex items-center gap-2 absolute right-0 top-0 text-tomato">
              Name is required{" "}
              <img className="" src="/icons/icon-cross.svg"></img>
            </p>
          )}
        </label>

        <label className="pt-[20px] flex relative">
          <input
            className="w-full py-[5px] focus:outline-none desktop:text-[18px]"
            type="email"
            placeholder="Email Address"
            style={style()} // Se aplica el estilo solo si existe un error.
            {...register("email", {
              required: true,
              pattern:
                /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
            })}
          />
          {errors.email && errors.email.type === "required" && (
            <p className="flex items-center gap-2 absolute right-0 text-tomato">
              Email is required{" "}
              <img className="" src="/icons/icon-cross.svg"></img>
            </p>
          )}
          {errors.email && errors.email.type === "pattern" && (
            <p className="flex items-center gap-2 absolute right-0 text-tomato">
              Email is not valid{" "}
              <img className="" src="/icons/icon-cross.svg"></img>
            </p>
          )}
          {/* {errors.email && (
            <p className="text-red">{getValues().email} not valid</p>
          )} */}
        </label>

        <div ref={ref} className="relative pt-[20px] w-full">
          {/* <select --> No me sirve en este caso porque necesito un <select> con un estilo customizado
            className="w-full py-[5px] desktop:text-[18px] font-bold"
            {...register("select", { required: true })}
          >
            <option className="font-bold">
              Basic Pack{" "}
              <span className="font-light text-neutral-lightgrey">Free</span>
            </option>
            <option className="font-bold">Pro Pack $9.99</option>
            <option className="font-bold">Ultimate Pack $19.99</option>
          </select> */}

          <div
            onClick={() =>
              dispatch({ type: isOpen == true ? "selectClose" : "selectOpen" })
            }
            className="font-bold cursor-pointer"
          >
            {pack} Pack{" "}
            <span className=" text-neutral-verylgrey/60">{price}</span>
          </div>
          <img
            className="absolute right-4 top-7"
            src="/icons/icon-arrow-down.svg"
          ></img>

          {isOpen && (
            <ul
              role="item"
              className="absolute mt-7 bg-white rounded-lg w-full p-5 divide-y border-spacing-y-1 divide-[#e7e5e4] flex flex-col gap-5 shadow-2xl z-10"
            >
              <li
                onClick={() => dispatch({ type: "basic" })}
                className="font-bold cursor-pointer flex justify-between items-center"
              >
                <div>
                  Basic Pack{" "}
                  <span className=" text-neutral-verylgrey/60">Free</span>
                </div>
                {pack == "Basic" && <img src="/icons/icon-check.svg"></img>}
              </li>
              <li
                onClick={() => dispatch({ type: "pro" })}
                className="font-bold cursor-pointer pt-[20px] flex justify-between items-center"
              >
                <div>
                  Pro Pack{" "}
                  <span className=" text-neutral-verylgrey/60">$9.99</span>
                </div>
                {pack == "Pro" && <img src="/icons/icon-check.svg"></img>}
              </li>
              <li
                onClick={() => dispatch({ type: "ultimate" })}
                className="font-bold cursor-pointer pt-[20px] flex justify-between items-center"
              >
                <div>
                  Ultimate Pack{" "}
                  <span className=" text-neutral-verylgrey/60">$19.99</span>
                </div>
                {pack == "Ultimate" && <img src="/icons/icon-check.svg"></img>}
              </li>
            </ul>
          )}
        </div>

        <label className="pt-[20px] relative">
          <input
            className="w-full py-[5px] focus:outline-none desktop:text-[18px]"
            placeholder="Phone Number"
            {...register("phoneNumber", { required: true })}
          ></input>
          {errors.phoneNumber && errors.phoneNumber.type === "required" && (
            <p className="flex items-center gap-2 absolute right-0 top-5 text-tomato">
              Phone number is required
              <img className="" src="/icons/icon-cross.svg"></img>
            </p>
          )}
        </label>

        <label className="pt-[20px] relative">
          <input
            className="w-full py-[5px] focus:outline-none desktop:text-[18px]"
            placeholder="Company"
            {...register("company", { required: true })}
          ></input>
          {errors.company && errors.company.type === "required" && (
            <p className="flex items-center gap-2 absolute right-0 top-5 text-tomato">
              Company name is required
              <img className="" src="/icons/icon-cross.svg"></img>
            </p>
          )}
        </label>

        {/* <label>Password</label>
        <input type="password" {...register("password", { required: true })} />
        {errors.password && <p>Password is required</p>} */}

        {/* <label>Type Password again</label>
        <input
          type="password"
          {...register("password2", {
            required: "this field is required",
            validate: (value) =>
              value == getValues().password || "password must be the same",
          })}
        />
        {errors?.password2?.message && <p>{errors.password2.message}</p>}
        {errors.password2 && <p>Password2 is required</p>} */}

        <div className="pt-[40px]">
          <button
            className="w-full bg-primary-blue rounded-full text-white py-[12px] desktop:text-[20px]"
            type="submit"
          >
            Get on the list
          </button>
        </div>
      </form>
    </div>
  );
}

export default Form;
