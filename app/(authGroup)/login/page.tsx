import LoginForm from "../_components/LoginForm";

const LoginPage = () => {
  return (
    <div className="max-w-300 mx-auto p-2 md:p-8 lg:p-12 flex justify-center items-center mt-12">
      <div className="max-w-200 rounded-lg shadow-2xl bg-gray-100 md:p-6 lg:p-10 flex flex-col justify-center items-center">
        <h1 className="text-2xl py-4 mb-10 text-center">Enter Email And Password To Login</h1>
        {/* form */}
        <div className="">
         <LoginForm/>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
