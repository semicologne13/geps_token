import Footer from "@/components/Footer"
import React from "react"

const layout = ({children}: { children: React.ReactNode }) => {
  return(
    <>
      <main className="min-h-screen">
        {children}
      </main>
      <Footer/>
    </>
  )
}

export default layout