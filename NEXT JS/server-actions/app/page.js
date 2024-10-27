"use client"
import { submitAction } from "@/actions/form";
import { useRef } from "react";

export default function Home() {
  let ref=useRef()
  return (
    <div>
      <form ref={ref} action={(e)=>{submitAction(e);ref.current.reset()}}>
        <div>
          <label htmlFor="name">Name : </label>
          <input name="name" id="name" type="text" className="text-black outline-black"/>
        </div>
        <div>
          <label htmlFor="add">Address : </label>
          <input name="add" id="add" type="text" className="text-black outline-black" />
        </div>
        <div>
          <button>Submit</button>
        </div>
      </form>
    </div>
  );
}
