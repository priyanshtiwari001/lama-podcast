import ModalWrapper from "@/components/modal-wrapper";

const ProjectModal = ({ createProject,projectInput,setProjectInput,isOpen,setIsOpen,loading }) => {
  return (
     <ModalWrapper
        isOpen={isOpen}
         onClose={()=>setIsOpen(false)}
        className="max-w-5xl h-1/3"
      >
      <form onSubmit={createProject}>
          <h2 className="text-xl font-bold mb-4">Create Project</h2>
        <label htmlFor="projectName" className="text-gray-600 ">
          Enter the Project name:
        </label>
        <input
          value={projectInput}
          onChange={(e) => setProjectInput(e.target.value)}
          type="text"
          className="w-full border-1 rounded-xl border-gray-400 h-10 mt-3 px-3"
        />
        {projectInput.length === 0 && (
          <p className=" text-sm px-2 font-poppins text-red-400">
            project name can't be empty
          </p>
        )}
        <div className="mt-8  justify-end items-end  flex gap-2">
          <button
            onClick={()=>setIsOpen(false)}
            className="px-4 py-2 cursor-pointer  text-red-400 rounded hover:bg-slate-200"
          >
            Cancel
          </button>
          <button
            type="submit"
            className="px-4 py-2 cursor-pointer bg-purple-600 text-white rounded hover:bg-purple-700"
          >
            {loading ? "Creating...":"Create"}
          </button>
        </div>
      </form>
      </ModalWrapper>
  );
};

export default ProjectModal;
