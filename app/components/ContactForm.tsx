'use client'

import { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log(formData)
    setFormData({ name: '', email: '', message: '' })
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
          <Input
      type="text"
      name="name"
      placeholder="Your Name"
      value={formData.name}
      onChange={handleChange}
      required
      className="h-14 bg-foreground-rgb text-black text-lg rounded-full border border-transparent shadow-lg placeholder-gray-500 tracking-wide transition duration-300 ease-in-out hover:border-black hover:shadow-xl placeholder:font-medium"
    />

    <Input
      type="email"
      name="email"
      placeholder="Your Email"
      value={formData.email}
      onChange={handleChange}
      required
      className="h-14 bg-foreground-rgb text-black text-lg rounded-full border border-transparent shadow-lg placeholder-gray-500 tracking-wide transition duration-300 ease-in-out hover:border-black hover:shadow-xl placeholder:font-medium"
    />

    <Textarea
      name="message"
      placeholder="Your Message"
      value={formData.message}
      onChange={handleChange}
      required
      className="h-32 bg-foreground-rgb text-black text-lg rounded-3xl border border-transparent shadow-lg placeholder-gray-500 tracking-wide transition duration-300 ease-in-out hover:border-black hover:shadow-xl placeholder:font-medium"
    />


    <Button type="submit" className="bg-[#EBFC41] rounded-3xl h-12 mt-10 text-black hover:bg-white">
      Send Message
    </Button>

    </form>
  )
}
