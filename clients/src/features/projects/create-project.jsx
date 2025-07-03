
import CreateNewProjectButton from "./create-project-btn";
export default function CreateProject({ modalOpen }) {
  return (
    <>
      <main className=" flex flex-col items-center justify-center px-6 text-center mt-20">
        <h1 className="text-3xl md:text-4xl font-semibold text-purple-700 mb-6">
          Create a New Project
        </h1>

        <img
          src="/images/project-banner.png"
          alt="Team Working"
          className="max-w-sm lg:max-w-lg mb-6"
        />

        <p className="max-w-4xl text-gray-500 text-sm md:text-base mb-8">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in..
        </p>

        <CreateNewProjectButton modalOpen={modalOpen}  />
      </main>
    </>
  );
}
