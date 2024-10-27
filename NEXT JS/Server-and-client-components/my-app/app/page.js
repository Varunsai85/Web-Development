import Navbar from "@/components/Navbar";
import fs from "fs/promises"

export default function Home() {
  let a=fs.readFile("data.json")
  a.then(e=>console.log(e.toString()))
  return (
    <div>
      <Navbar/>
      <div>
      </div>
      Main Page
      </div>
  );
}
