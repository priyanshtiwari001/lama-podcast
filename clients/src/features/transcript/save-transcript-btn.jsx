export default function SaveTranscript({setIsEdit,onSave}) {
  return (
    <div className="mt-1 flex items-center justify-end gap-4 ">
      <button onClick={()=>setIsEdit(false)} className="px-2 sm:px-6 sm:py-2 border border-red-500 text-red-600 rounded-md hover:bg-red-50 cursor-pointer">
        Discard
      </button>
      <button onClick={onSave} className=" cursor-pointer px-2 sm:px-6 sm:py-2 bg-slate-900 text-white rounded-md hover:bg-slate-800">
        Save
      </button>
    </div>
  );
}
