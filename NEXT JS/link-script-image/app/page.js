import Image from "next/image";

export default function Home() {
  return (
    <div className="container size-80 bg-red-400 mx-auto rounded-xl relative">
      <Image fill={true} className="mx-auto object-cover rounded-xl object-top" src="https://imgs.search.brave.com/dF5uRr2siwgGLHQRD4ADXkJsExz8NUjW7AUleWZc2GI/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pLnBp/bmltZy5jb20vb3Jp/Z2luYWxzL2I0LzZl/LzUxL2I0NmU1MTg4/OTRjMTkzNmQzMzFj/MjY0OTRiYzRlMjc4/LS1pdGFjaGktYWth/dHN1a2ktc2FzdWtl/LXVjaGloYS5qcGc" alt="Itachi Uchiha" />
    </div>
  );
}
