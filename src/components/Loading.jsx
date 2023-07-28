export default function Loading() {
  return (
    <div className="w-full h-screen flex justify-center items-center">
      <div className="flex justify-center items-center font-mono">
        <h1 className="text-3xl text-gray-700">loading...</h1>
      </div>
      <div className="flex justify-center items-center font-mono ">
        <div className="loading"></div>
      </div>
    </div>
  );
}
