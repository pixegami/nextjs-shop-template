import type { NextPage } from "next";

const Home: NextPage = () => {
  return (
    <div className="text-center flex flex-col gap-4 items-center">
      <div>Please sign in to continue</div>
      <a href="" className="bg-blue-600 text-white rounded-md p-2 w-48">
        Sign In
      </a>
    </div>
  );
};

export default Home;
