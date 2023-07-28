import Nav from "../components/Nav";
import loginJpg from "../assets/login-png.jpg";
import googleIcon from "../assets/icons/google-icon.png"
export default function Login() {
  return (
    <div className="min-h-screen h-auto w-full">
      <Nav></Nav>
      <div className="p-10 rounded-md">
        <div className="grid grid-cols-1  md:grid-cols-2 shadow-xl">
          <img
            className="md:h-full w-full rounded-t-xl md:rounded-none"
            src={loginJpg}
            alt="gif"
          />
          <form
            onSubmit={(e) => {
              e.preventDefault();
              alert("This is s testing log in");
            }}
            className="font-Edu-SA grid grid-cols-1 gap-3 p-5 bg-[white] rounded-b-xl md:rounded-none"
          >
            <div>
              <h1>Welcom back , AmirMohammad</h1>
              <p>Welcome back! Please enter your details</p>
            </div>
            <button
              className="text-black h-10 rounded-lg shadow-md flex justify-center items-center gap-2 border border-gray-200"
              type="sumbit"
            >
              <img className="w-5" src={googleIcon}></img>Login whit Google
            </button>
            <div>
            <div className="w-full h-[1px] bg-gray-300 relative flex justify-center items-center">
              <span className="absolute bg-white w-5 h-5 rounded-full flex justify-center items-center">or</span>
            </div>
            </div>
            <input type="text" placeholder="Email" />
            <input type="password" placeholder="Password" />
            <button
              className="bg-black text-slate-50 h-10 rounded-lg"
              type="sumbit"
            >
              Login
            </button>
            <div>
              <p className="text-gray-600">Don&apos;t have an account ? <button className="text-black font-bold">Sign up for free</button></p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
