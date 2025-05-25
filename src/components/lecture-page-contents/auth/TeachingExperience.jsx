"use client"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Checkbox } from "@/components/ui/checkbox"

export default function TeachingExperience() {
  const certifications = [
    { id: "cert1", label: "Teaching Certification" },
    { id: "cert2", label: "Subject Matter Expert Certification" },
    { id: "cert3", label: "Online Teaching Certification" },
    { id: "cert4", label: "Industry Certification" },
    { id: "cert5", label: "Academic Degree" },
    { id: "cert6", label: "Professional License" },
  ]

  return (
    <div className="max-w-3xl mx-auto">
      <h2 className="text-2xl font-bold mb-6">Teaching Experience</h2>
      <p className="text-gray-600 mb-8">Tell us about your teaching background and qualifications.</p>

      <div className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-2">
            <Label htmlFor="yearsExperience">Years of Experience *</Label>
            <Input id="yearsExperience" type="number" min="0" placeholder="e.g. 5" required />
          </div>

          <div className="space-y-2">
            <Label htmlFor="currentOccupation">Current Occupation *</Label>
            <Input id="currentOccupation" placeholder="e.g. Senior Developer at Tech Co." required />
          </div>
        </div>

        <div className="space-y-2">
          <Label htmlFor="teachingExperience">Previous Teaching Experience *</Label>
          <Textarea
            id="teachingExperience"
            placeholder="Describe your teaching experience, including formal and informal roles, mentoring, workshops, etc."
            className="min-h-[150px]"
            required
          />
        </div>

        <div className="space-y-3">
          <Label>Relevant Certifications</Label>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            {certifications.map((cert) => (
              <div key={cert.id} className="flex items-center space-x-2">
                <Checkbox id={cert.id} />
                <Label htmlFor={cert.id} className="font-normal">
                  {cert.label}
                </Label>
              </div>
            ))}
          </div>
        </div>

        <div className="space-y-2">
          <Label htmlFor="linkedinProfile">LinkedIn Profile URL (Optional)</Label>
          <Input id="linkedinProfile" type="url" placeholder="https://linkedin.com/in/yourprofile" />
          <p className="text-xs text-gray-500">
            Adding your LinkedIn profile helps establish credibility with potential students.
          </p>
        </div>
      </div>
    </div>
  )
}
