import { ArrowLeft } from "lucide-react";
import { Link, useParams } from "react-router";
import EditButton from "./edit-btn";
import {  useState } from "react";

import SaveTranscript from "./save-transcript-btn";


export default function BackToPodcast({setIsEditing,isEdit,onSave}) {
const {projectId}= useParams();
  return <div className="flex justify-between items-start mb-6">
    <Link to={`/projects/${projectId}/podcast`} className="flex items-center gap-2 text-2xl font-semibold">
      <ArrowLeft className="w-6 h-6 cursor-pointer" />
      Edit Transcript
    </Link>

   {!isEdit ? <EditButton isEdit={isEdit} setIsEdit={setIsEditing}/> : <SaveTranscript onSave={onSave} setIsEdit={setIsEditing}t />}
  </div>;
}
