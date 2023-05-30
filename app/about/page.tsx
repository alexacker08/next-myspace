// import Image from 'next/image'

import Container from "@/components/Container";
import { Metadata } from "next";

export const metadata: Metadata = {
  title:'About Us',
  description: 'About the NextSpace social company',
  openGraph: {
    type:'website',
    title: 'The Next Space Website'
  }
}

export default function AboutUs() {
    return (
      <main className="flex flex-col items-start justify-between p-24">
        <Container>
          <h1 className="text-6xl mb-10">This is about us</h1>
          <p>We are a social media company that wants to bring people together!</p>
        </Container>
      </main>
    )
  }
  