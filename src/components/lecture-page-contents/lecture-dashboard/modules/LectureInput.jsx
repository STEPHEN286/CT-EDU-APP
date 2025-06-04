import React, { useState } from 'react';
import { Video, FileText, File, Presentation, Table, Upload, X } from 'lucide-react';

const LectureInput = () => {
  const [sections, setSections] = useState([
    {
      id: 1,
      title: "Section 1",
      lectures: [
        { id: 1, title: "", type: "video", file: null }
      ]
    }
  ]);

  const getIconForType = (type) => {
    const icons = {
      video: <Video className="h-5 w-5 text-gray-500" />,
      pdf: <FileText className="h-5 w-5 text-red-500" />,
      word: <File className="h-5 w-5 text-blue-500" />,
      excel: <Table className="h-5 w-5 text-green-500" />,
      powerpoint: <Presentation className="h-5 w-5 text-orange-500" />,
      quiz: <File className="h-5 w-5 text-purple-500" />
    };
    return icons[type] || <File className="h-5 w-5 text-gray-500" />;
  };

  const getAcceptedFileTypes = (type) => {
    const fileTypes = {
      video: ".mp4,.avi,.mov,.wmv,.flv,.webm",
      pdf: ".pdf",
      word: ".doc,.docx",
      excel: ".xls,.xlsx,.csv",
      powerpoint: ".ppt,.pptx",
    //   quiz: "" // No file upload for quiz
    };
    return fileTypes[type] || "";
  };

  const updateLecture = (sectionIndex, lectureId, field, value) => {
    setSections(prev => 
      prev.map((section, idx) => 
        idx === sectionIndex 
          ? {
              ...section,
              lectures: section.lectures.map(lecture => 
                lecture.id === lectureId 
                  ? { ...lecture, [field]: value }
                  : lecture
              )
            }
          : section
      )
    );
  };

  const handleFileUpload = (sectionIndex, lectureId, file) => {
    updateLecture(sectionIndex, lectureId, 'file', file);
  };

  const removeFile = (sectionIndex, lectureId) => {
    updateLecture(sectionIndex, lectureId, 'file', null);
  };

  const addLecture = (sectionIndex) => {
    setSections(prev => 
      prev.map((section, idx) => 
        idx === sectionIndex 
          ? {
              ...section,
              lectures: [
                ...section.lectures,
                { 
                  id: Date.now(), 
                  title: "", 
                  type: "video", 
                  file: null 
                }
              ]
            }
          : section
      )
    );
  };

  const addSection = () => {
    setSections(prev => [
      ...prev,
      {
        id: Date.now(),
        title: `Section ${prev.length + 1}`,
        lectures: [{ id: Date.now(), title: "", type: "video", file: null }]
      }
    ]);
  };

  return (
    <div className="max-w-4xl mx-auto p-4 bg-white">
      <div className="mb-4">
        <h2 className="text-xl font-bold text-gray-800 mb-1">Course Content</h2>
        <p className="text-sm text-gray-600">Add lectures with various file formats including videos, documents, and presentations.</p>
      </div>

      {sections.map((section, sectionIndex) => (
        <div key={section.id} className="mb-6 border border-gray-200 rounded-lg p-4">
          <div className="mb-3">
            <input
              type="text"
              placeholder="Section title"
              value={section.title}
              onChange={(e) => {
                setSections(prev => 
                  prev.map((s, idx) => 
                    idx === sectionIndex ? { ...s, title: e.target.value } : s
                  )
                );
              }}
              className="text-base font-semibold px-2 py-1.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent w-full"
            />
          </div>

          {section.lectures.map((lecture, lectureIndex) => (
            <div key={lecture.id} className="mb-3 p-3 bg-gray-50 rounded-lg">
              <div className="flex items-center gap-2 mb-2">
                {getIconForType(lecture.type)}
                <input
                  type="text"
                  placeholder="Lecture title"
                  value={lecture.title}
                  onChange={(e) => updateLecture(sectionIndex, lecture.id, 'title', e.target.value)}
                  className="flex-1 px-2 py-1.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm"
                />
                <select
                  value={lecture.type}
                  onChange={(e) => {
                    updateLecture(sectionIndex, lecture.id, 'type', e.target.value);
                    updateLecture(sectionIndex, lecture.id, 'file', null);
                  }}
                  className="w-32 px-2 py-1.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm"
                >
                  <option value="video">Video</option>
                  <option value="pdf">PDF</option>
                  <option value="word">Word Doc</option>
                  <option value="excel">Excel</option>
                  <option value="powerpoint">PowerPoint</option>
                  {/* <option value="quiz">Quiz</option> */}
                </select>
              </div>

              
                <div className="mt-2">
                  {!lecture.file ? (
                    <div className="border-2 border-dashed border-gray-300 rounded-lg p-3 text-center hover:border-blue-400 transition-colors">
                      <input
                        type="file"
                        accept={getAcceptedFileTypes(lecture.type)}
                        onChange={(e) => {
                          const file = e.target.files[0];
                          if (file) handleFileUpload(sectionIndex, lecture.id, file);
                        }}
                        className="hidden"
                        id={`file-${section.id}-${lecture.id}`}
                      />
                      <label
                        htmlFor={`file-${section.id}-${lecture.id}`}
                        className="cursor-pointer flex flex-col items-center"
                      >
                        <Upload className="h-8 w-8 text-gray-400 mb-1" />
                        <span className="text-sm text-gray-600">
                          Click to upload {lecture.type} file
                        </span>
                        <span className="text-xs text-gray-500 mt-0.5">
                          {getAcceptedFileTypes(lecture.type).replace(/\./g, '').toUpperCase()}
                        </span>
                      </label>
                    </div>
                  ) : (
                    <div className="flex items-center justify-between p-2 bg-white border border-gray-200 rounded-lg">
                      <div className="flex items-center gap-2">
                        {getIconForType(lecture.type)}
                        <span className="text-sm font-medium text-gray-700">
                          {lecture.file.name}
                        </span>
                        <span className="text-xs text-gray-500">
                          ({(lecture.file.size / 1024 / 1024).toFixed(2)} MB)
                        </span>
                      </div>
                      <button
                        onClick={() => removeFile(sectionIndex, lecture.id)}
                        className="p-1 hover:bg-gray-100 rounded-full transition-colors"
                      >
                        <X className="h-5 w-5 text-gray-500" />
                      </button>
                    </div>
                  )}
                </div>
              

              
            </div>
          ))}

          <button
            onClick={() => addLecture(sectionIndex)}
            className="w-full mt-3 px-3 py-1.5 border border-gray-300 rounded-lg text-sm text-gray-600 hover:bg-gray-50 transition-colors"
          >
            + Add Lecture
          </button>
        </div>
      ))}

      <button
        onClick={addSection}
        className="w-full px-3 py-2 bg-black text-white rounded-lg hover:bg-gray-700 transition-colors font-medium text-sm"
      >
        + Add Section
      </button>

        {/* Supported File Formats */}
      <div className="mt-6 p-3 bg-gray-50 rounded-lg">
        <h3 className="font-medium text-gray-800 mb-2 text-base">Supported File Formats:</h3>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-2 text-sm text-gray-600">
          <div className="flex items-center gap-2">
            <Video className="h-5 w-5" />
            Video: MP4, AVI, MOV, WMV
          </div>
          <div className="flex items-center gap-2">
            <FileText className="h-5 w-5 text-red-500" />
            PDF Documents
          </div>
          <div className="flex items-center gap-2">
            <File className="h-5 w-5 text-blue-500" />
            Word: DOC, DOCX
          </div>
          <div className="flex items-center gap-2">
            <Table className="h-5 w-5 text-green-500" />
            Excel: XLS, XLSX, CSV
          </div>
          <div className="flex items-center gap-2">
            <Presentation className="h-5 w-5 text-orange-500" />
            PowerPoint: PPT, PPTX
          </div>
          <div className="flex items-center gap-2">
            <File className="h-5 w-5 text-purple-500" />
            Interactive Quizzes
          </div>
        </div>
      </div>
    </div>
  );
};

export default LectureInput;