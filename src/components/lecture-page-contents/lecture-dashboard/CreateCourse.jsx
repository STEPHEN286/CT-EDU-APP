import React, { useState } from 'react';
import { Video, FileText, File, Presentation, Table, Upload, X, HelpCircle } from 'lucide-react';

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
      video: <Video className="h-4 w-4 text-gray-500" />,
      pdf: <FileText className="h-4 w-4 text-red-500" />,
      word: <File className="h-4 w-4 text-blue-500" />,
      excel: <Table className="h-4 w-4 text-green-500" />,
      powerpoint: <Presentation className="h-4 w-4 text-orange-500" />,
      quiz: <HelpCircle className="h-4 w-4 text-purple-500" />
    };
    return icons[type] || <File className="h-4 w-4 text-gray-500" />;
  };

  const getAcceptedFileTypes = (type) => {
    const fileTypes = {
      video: ".mp4,.avi,.mov,.wmv,.flv,.webm",
      pdf: ".pdf",
      word: ".doc,.docx",
      excel: ".xls,.xlsx,.csv",
      powerpoint: ".ppt,.pptx",
      quiz: ".pdf,.doc,.docx" // Quiz files can be PDF or Word documents
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
    <div className="max-w-4xl mx-auto p-6 bg-white">
      <div className="mb-6">
        <h2 className="text-2xl font-bold text-gray-800 mb-2">Course Content</h2>
        <p className="text-gray-600">Add lectures with various file formats including videos, documents, presentations, and quizzes.</p>
      </div>

      {sections.map((section, sectionIndex) => (
        <div key={section.id} className="mb-8 border border-gray-200 rounded-lg p-6">
          <div className="mb-4">
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
              className="text-lg font-semibold px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent w-full"
            />
          </div>

          {section.lectures.map((lecture, lectureIndex) => (
            <div key={lecture.id} className="mb-4 p-4 bg-gray-50 rounded-lg">
              <div className="flex items-center gap-3 mb-3">
                {getIconForType(lecture.type)}
                <input
                  type="text"
                  placeholder="Lecture title"
                  value={lecture.title}
                  onChange={(e) => updateLecture(sectionIndex, lecture.id, 'title', e.target.value)}
                  className="flex-1 px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
                <select
                  value={lecture.type}
                  onChange={(e) => {
                    updateLecture(sectionIndex, lecture.id, 'type', e.target.value);
                    updateLecture(sectionIndex, lecture.id, 'file', null); // Clear file when type changes
                  }}
                  className="w-36 px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                >
                  <option value="video">Video</option>
                  <option value="pdf">PDF</option>
                  <option value="word">Word Doc</option>
                  <option value="excel">Excel</option>
                  <option value="powerpoint">PowerPoint</option>
                  <option value="quiz">Quiz</option>
                </select>
              </div>

              {/* File upload section for all types */}
              <div className="mt-3">
                {!lecture.file ? (
                  <div className="border-2 border-dashed border-gray-300 rounded-lg p-4 text-center hover:border-blue-400 transition-colors">
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
                      <Upload className="h-8 w-8 text-gray-400 mb-2" />
                      <span className="text-sm text-gray-600">
                        Click to upload {lecture.type} file
                      </span>
                      <span className="text-xs text-gray-500 mt-1">
                        {getAcceptedFileTypes(lecture.type).replace(/\./g, '').toUpperCase()}
                      </span>
                    </label>
                  </div>
                ) : (
                  <div className="flex items-center justify-between p-3 bg-white border border-gray-200 rounded-lg">
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
                      <X className="h-4 w-4 text-gray-500" />
                    </button>
                  </div>
                )}
              </div>

              {/* Special message for quiz type */}
              {lecture.type === 'quiz' && !lecture.file && (
                <div className="mt-3 p-3 bg-purple-50 border border-purple-200 rounded-lg">
                  <p className="text-sm text-purple-700 mb-2">
                    <strong>Quiz Options:</strong>
                  </p>
                  <ul className="text-sm text-purple-600 space-y-1">
                    <li>• Upload existing quiz files (PDF or Word documents)</li>
                    <li>• Or create interactive quizzes using the quiz builder tool</li>
                  </ul>
                </div>
              )}
            </div>
          ))}

          <button
            onClick={() => addLecture(sectionIndex)}
            className="w-full mt-4 px-4 py-2 border border-gray-300 rounded-lg text-gray-600 hover:bg-gray-50 transition-colors"
          >
            + Add Lecture
          </button>
        </div>
      ))}

      <button
        onClick={addSection}
        className="w-full px-4 py-3 bg-black text-white rounded-lg hover:bg-gray-800 transition-colors font-medium"
      >
        + Add Section
      </button>

      <div className="mt-8 p-4 bg-gray-50 rounded-lg">
        <h3 className="font-medium text-gray-800 mb-2">Supported File Formats:</h3>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-2 text-sm text-gray-600">
          <div className="flex items-center gap-2">
            <Video className="h-4 w-4" />
            Video: MP4, AVI, MOV, WMV
          </div>
          <div className="flex items-center gap-2">
            <FileText className="h-4 w-4 text-red-500" />
            PDF Documents
          </div>
          <div className="flex items-center gap-2">
            <File className="h-4 w-4 text-blue-500" />
            Word: DOC, DOCX
          </div>
          <div className="flex items-center gap-2">
            <Table className="h-4 w-4 text-green-500" />
            Excel: XLS, XLSX, CSV
          </div>
          <div className="flex items-center gap-2">
            <Presentation className="h-4 w-4 text-orange-500" />
            PowerPoint: PPT, PPTX
          </div>
          <div className="flex items-center gap-2">
            <HelpCircle className="h-4 w-4 text-purple-500" />
            Quiz: PDF, DOC, DOCX
          </div>
        </div>
      </div>
    </div>
  );
};

export default LectureInput;