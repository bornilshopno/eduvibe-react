import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
// import { zodResolver } from "@hookform/resolvers";

import { z } from "zod";
import { Mail, MapPin } from "lucide-react";

const formSchema = z.object({
  firstName: z.string().min(2, "First name must be at least 2 characters").max(50),
  lastName: z.string().min(2, "Last name must be at least 2 characters").max(50),
  email: z.string().email("Invalid email format"),
  message: z.string().min(5, "Message must be at least 5 characters"),
});

export default function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      message: "",
    //   createdAt: new Date()
    },
  });

  async function onSubmit(values) {
    try {
      setIsSubmitting(true);
      const submissionData = {
        ...values,
        createdAt: new Date()   
      }
      const response = await fetch("https://eduvibe-react-backend.vercel.app/contacts", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(submissionData),
      });
      const result = await response.json();
      alert(response.ok ? "Message sent successfully!" : result.message || "Something went wrong!");
    } catch (error) {
      console.error("Submission failed", error);
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <div className="container mx-auto py-4 md:py-7 px-3 md:px-10">
      <div className="card bg-base-100 shadow-xl max-w-4xl mx-auto">
        <div className="card-body">
          <h2 className="card-title text-primary">Contact Us</h2>
          <p>We'd love to hear from you. Get in touch today!</p>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="label">First Name</label>
                <input {...form.register("firstName")} className="input input-bordered w-full" placeholder="Your first name" />
                {form.formState.errors.firstName && <p className="text-error">{form.formState.errors.firstName.message}</p>}
              </div>
              <div>
                <label className="label">Last Name</label>
                <input {...form.register("lastName")} className="input input-bordered w-full" placeholder="Your last name" />
                {form.formState.errors.lastName && <p className="text-error">{form.formState.errors.lastName.message}</p>}
              </div>
            </div>
            <div>
              <label className="label">Email</label>
              <input {...form.register("email")} className="input input-bordered w-full" placeholder="Your Email" />
              {form.formState.errors.email && <p className="text-error">{form.formState.errors.email.message}</p>}
            </div>
            <div>
              <label className="label">Message</label>
              <textarea {...form.register("message")} className="textarea textarea-bordered w-full min-h-[100px]" placeholder="Type your message here"></textarea>
              {form.formState.errors.message && <p className="text-error">{form.formState.errors.message.message}</p>}
            </div>
            <button type="submit" className="btn btn-primary w-full" disabled={isSubmitting}>
              {isSubmitting ? "Submitting..." : "Submit"}
            </button>
          </form>
        </div>
      </div>
      <div className="bg-base-200 p-6 rounded-lg mt-6 shadow-md">
        <h3 className="text-primary text-xl font-semibold mb-4">Our Office</h3>
        <div className="flex items-center space-x-3 mb-3">
          <MapPin className="text-blue-600" />
          <p>35, New Market, GPO-4000, Chattogram, Bangladesh</p>
        </div>
        <div className="flex items-center space-x-3">
          <Mail className="text-primary" />
          <p>beyond.ui1007@gmail.com</p>
        </div>
      </div>
    </div>
  );
}
