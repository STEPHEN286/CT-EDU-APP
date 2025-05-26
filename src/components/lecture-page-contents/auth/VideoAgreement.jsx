

import { useState } from "react"
import { useFormContext, Controller } from "react-hook-form"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Checkbox } from "@/components/ui/checkbox"
import { Button } from "@/components/ui/button"
import { Upload, Video } from "lucide-react"

export default function VideoAgreement() {
  const [videoUploaded, setVideoUploaded] = useState(false)
  const [videoFile, setVideoFile] = useState(null)

  const {
    register,
    control,
    setValue,
    formState: { errors },
  } = useFormContext()

  const handleVideoUpload = (e) => {
    const file = e.target.files?.[0]
    if (file) {
      setValue("sampleVideo", file, { shouldValidate: true })
      setVideoFile(file)
      setVideoUploaded(true)
    }
  }

  const handleReplaceVideo = () => {
    setValue("sampleVideo", null)
    setVideoUploaded(false)
    setVideoFile(null)
  }

  return (
    <div className="max-w-3xl mx-auto">
      <h2 className="text-2xl font-bold mb-6">Sample Video & Agreements</h2>
      <p className="text-gray-600 mb-8">Upload a sample teaching video and review our platform agreements.</p>

      <div className="space-y-8">
        {/* Sample Video Upload */}
        <div className="space-y-4">
          <h3 className="text-lg font-semibold">Sample Video Upload</h3>

          <div className="border-2 border-dashed border-gray-300 rounded-lg p-6">
            {videoUploaded ? (
              <div className="flex flex-col items-center">
                <div className="bg-green-100 text-green-600 p-3 rounded-full mb-3">
                  <Video className="h-8 w-8" />
                </div>
                <p className="text-green-600 font-medium">Video uploaded successfully!</p>
                <p className="text-sm text-gray-600 mt-1">{videoFile?.name}</p>
                <Button variant="outline" size="sm" className="mt-4" onClick={handleReplaceVideo}>
                  Replace Video
                </Button>
              </div>
            ) : (
              <div className="flex flex-col items-center">
                <Upload className="h-10 w-10 text-gray-400 mb-3" />
                <p className="text-sm text-gray-600 mb-2 text-center">
                  Upload a 5-10 minute sample video demonstrating your teaching style
                </p>
                <p className="text-xs text-gray-500 text-center mb-4">
                  MP4 format, maximum 500MB, minimum resolution 720p
                </p>
                <Button variant="outline" className="relative overflow-hidden">
                  Select Video File
                  <input
                    type="file"
                    accept="video/mp4"
                    className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                    onChange={handleVideoUpload}
                  />
                </Button>
                {errors.sampleVideo && (
                  <p className="text-red-500 text-sm mt-2">{errors.sampleVideo.message}</p>
                )}
              </div>
            )}
          </div>

          <div className="bg-gray-50 p-4 rounded-lg">
            <h4 className="font-medium mb-2">Video Requirements:</h4>
            <ul className="list-disc pl-5 space-y-1 text-sm text-gray-600">
              <li>5-10 minutes in length</li>
              <li>Clear audio quality</li>
              <li>Demonstrates your teaching style and approach</li>
              <li>Covers a topic related to your proposed course</li>
              <li>Shows your face at least part of the time</li>
            </ul>
          </div>
        </div>

        {/* Agreements */}
        <div className="space-y-4">
          <h3 className="text-lg font-semibold">Platform Agreements</h3>

          <div className="space-y-6">
            <div className="space-y-3">
              <div className="flex items-start space-x-3">
                <Controller
                  name="termsAgreement"
                  control={control}
                  rules={{ required: "You must agree to the terms and conditions" }}
                  render={({ field }) => (
                    <Checkbox id="termsAgreement" className="mt-1" checked={field.value} onCheckedChange={field.onChange} />
                  )}
                />
                <div>
                  <Label htmlFor="termsAgreement" className="font-medium">
                    Terms & Conditions Agreement *
                  </Label>
                  <p className="text-sm text-gray-600 mt-1">
                    I have read and agree to the{" "}
                    <a href="#" className="text-red-600 hover:underline">
                      Platform Terms & Conditions
                    </a>
                    , including revenue sharing, intellectual property rights, and platform policies.
                  </p>
                  {errors.termsAgreement && (
                    <p className="text-red-500 text-sm mt-1">{errors.termsAgreement.message }</p>
                  )}
                </div>
              </div>
            </div>

            <div className="space-y-3">
              <div className="flex items-start space-x-3">
                <Controller
                  name="instructorGuidelines"
                  control={control}
                  rules={{ required: "You must agree to follow the instructor guidelines" }}
                  render={({ field }) => (
                    <Checkbox id="instructorGuidelines" className="mt-1" checked={field.value} onCheckedChange={field.onChange} />
                  )}
                />
                <div>
                  <Label htmlFor="instructorGuidelines" className="font-medium">
                    Instructor Guidelines Agreement *
                  </Label>
                  <p className="text-sm text-gray-600 mt-1">
                    I have read and agree to follow the{" "}
                    <a href="#" className="text-red-600 hover:underline">
                      Instructor Guidelines
                    </a>
                    , including content quality standards, engagement requirements, and code of conduct.
                  </p>
                  {errors.instructorGuidelines && (
                    <p className="text-red-500 text-sm mt-1">{errors.instructorGuidelines.message }</p>
                  )}
                </div>
              </div>
            </div>

            <div className="space-y-3">
              <Label htmlFor="additionalComments">Additional Comments (Optional)</Label>
              <Textarea
                id="additionalComments"
                {...register("additionalComments")}
                placeholder="Any additional information you'd like to share with our review team"
                className="min-h-[100px]"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
