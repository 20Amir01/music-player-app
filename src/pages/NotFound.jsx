export default function NotFound() {
  return (
    <div className="h-screen">
      <div className="text-center">
        <h1 className="text-transparent">Oops!</h1>
      </div>
      <div className="text-center">
        <h2 className="inline-block rounded-full p-1">
          <span className="text-3xl text-slate-700 m-2 font-bold">404</span>
          <span className="text-2xl text-slate-500 m-2">PAGE NOT FOUND</span>
        </h2>
      </div>
    </div>
  );
}
