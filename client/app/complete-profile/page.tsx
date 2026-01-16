"use client";
import { useState } from "react";
import { useUser } from "@clerk/nextjs";
import { useRouter } from "next/navigation";
import axios from "axios";
export default function CompleteProfilePage() {
  const { user, isLoaded } = useUser();
  const router = useRouter();

  const [workingLocation, setWorkingLocation] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [company, setCompany] = useState("");
  const [batch, setBatch] = useState("");
  const [contact, setContact] = useState("");
  const [course, setCourse] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  if (!isLoaded) return <div>Loading...</div>;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    try {
      const response= await axios.post("http://localhost:1000/user/userInformation", {
        name,
        email,
        company,
        workingLocation,
        contact,
        batch,
        course,
      });

      setTimeout(() => {
        router.push("/");
      }, 1500);


    } catch (err) {
      setError("Failed to save profile info.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <h1 className="text-2xl font-bold mb-4">Complete Your Profile</h1>
      <form onSubmit={handleSubmit} className="flex flex-col gap-4 w-80">
        <label className="flex flex-col">
          Name
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="border rounded px-2 py-1 mt-1"
            required
          />
        </label>
        <label className="flex flex-col">
          Email Id
          <input
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="border rounded px-2 py-1 mt-1"
            required
          />
        </label>
        <label className="flex flex-col">
          Working Company
          <input
            type="text"
            value={company}
            onChange={(e) => setCompany(e.target.value)}
            className="border rounded px-2 py-1 mt-1"
            required
          />
        </label>
        <label className="flex flex-col">
          Working Location
          <input
            type="text"
            value={workingLocation}
            onChange={(e) => setWorkingLocation(e.target.value)}
            className="border rounded px-2 py-1 mt-1"
            required
          />
        </label>
        <label className="flex flex-col">
          Batch (ex.2026)
          <input
            type="text"
            value={batch}
            onChange={(e) => setBatch(e.target.value)}
            className="border rounded px-2 py-1 mt-1"
            required
          />
        </label>
        <label className="flex flex-col">
          Contact
          <input
            type="text"
            value={contact}
            onChange={(e) => setContact(e.target.value)}
            className="border rounded px-2 py-1 mt-1"
            required
          />
        </label>
        <label className="flex flex-col">
          Course - Department
          <input
            type="text"
            value={course}
            onChange={(e) => setCourse(e.target.value)}
            className="border rounded px-2 py-1 mt-1"
            required
          />
        </label>
        {error && <div className="text-red-500">{error}</div>}
        <button
          type="submit"
          className="bg-blue-600 text-white rounded px-4 py-2 mt-2 disabled:opacity-50 cursor-pointer"
          disabled={loading}
        >
          {loading ? "Saving..." : "Save"}
        </button>
      </form>
    </div>
  );
}
