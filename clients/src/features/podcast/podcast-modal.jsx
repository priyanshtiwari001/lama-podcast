import ModalWrapper from "@/components/modal-wrapper";

const PodcastModal = ({
  isOpen,
  modalOpen,
  podcastInput,
  setPodcastInput,
  setTranscriptInput,
  transcriptInput,
  onUpload,
  loading,
}) => {
  return (
    <ModalWrapper isOpen={isOpen} onClose={() => modalOpen(false)}>
      <div className="flex items-center mb-4">
        <img src="/icons/youtube.png" alt="youtube" className="w-8 h-8 mr-2" />
        <h2 className="text-2xl font-semibold">Upload from Youtube</h2>
      </div>
      <form onSubmit={onUpload}>
        <label className="block text-lg font-medium mb-1">Name</label>
        <input
          type="text"
          value={podcastInput}
          onChange={(e) => setPodcastInput(e.target.value)}
          className="w-full border border-gray-300 rounded-md px-4 py-2 mb-4"
        />
        {podcastInput.length === 0 && (
          <p className=" text-xs  pl-2 font-poppins text-red-400">
            name can't be empty
          </p>
        )}
        <label className="block text-lg font-medium mb-1">Transcript</label>
        <textarea
          rows="4"
          value={transcriptInput}
          onChange={(e) => setTranscriptInput(e.target.value)}
          className="w-full border border-gray-300 rounded-md px-4 py-2 mb-6"
        />
        {transcriptInput.length > 300 && (
          <p className=" text-xs  -mt-7 pl-2 font-poppins text-red-400">
            max 300 characters are allowed
          </p>
        )}

        <div className="flex justify-end">
          <button
          type="submit"
            className="cursor-pointer bg-gray-900 hover:bg-gray-800 text-white font-medium px-6 py-2 rounded-md"
          >
            {loading ? "Uploading..." : "Upload"}
          </button>
        </div>
      </form>
    </ModalWrapper>
  );
};

export default PodcastModal;
