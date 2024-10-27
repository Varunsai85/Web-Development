"use client"
export default function Home() {
  const data = {
    name: "Dharani",
    job: "Full stack Developer"
  }
  const handleClick = async () => {
    let a = await fetch("/api", { method: "POST", headers: { "Content-type": "application/json" }, body: JSON.stringify(data) })
    let res = await a.json()
    console.log(res);
  }
  return (
    <div>
      <h1>POST method</h1>
      <button onClick={handleClick}>Click me</button>
    </div>
  );
}
