import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
     <h1 className="text-yellow">H1</h1>
     <h2 className="text-soft-yellow">H2</h2>
     <h3 className="text-blue">H3</h3>
     <h4 className="text-white">H4</h4>
     <h5 className="text-grey">H5</h5>
     <p className="text-grey-2">P</p>
     <label className="text-soft-grey" htmlFor="">Label</label>
     <input type="text" placeholder="Input" className="border-none text-soft-grey-2" />
     <small className="text-green">Small</small>
     <span className="text-red">Span</span>
    </main>
  );
}
