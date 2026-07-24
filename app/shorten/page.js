// "use client"

// import React, { useState } from "react"
// import Link from "next/link"

// const Page = () => {
//   const [url, setUrl] = useState("")
//   const [shorturl, setShorturl] = useState("")
//   const [generated, setGenerated] = useState("")

//   const generate = async () => {
//     const myHeaders = new Headers()
//     myHeaders.append("Content-Type", "application/json")

//     const raw = JSON.stringify({
//       url: url,
//       shorturl: shorturl
//     })

//     try {
//       const response = await fetch("/api/generate", {
//         method: "POST",
//         headers: myHeaders,
//         body: raw
//       })

//       const result = await response.json()

//       if (result.success) {
//         setGenerated(`${process.env.NEXT_PUBLIC_HOST}/${shorturl}`)
//         setUrl("")
//         setShorturl("")
//         alert(result.message)
//       } else {
//         alert(result.message || "Something went wrong")
//       }

//       console.log(result)

//     } catch (error) {
//       console.error(error)
//       alert("Something went wrong")
//     }
//   }

//   return (
//     <div className="bg-purple-100 my-5 p-5 rounded-lg flex flex-col gap-4">
      
//       <h1 className="font-bold text-xl">
//         Generate your short URL
//       </h1>

//       <div className="flex flex-col gap-6">

//         <input
//           type="text"
//           className="px-4 py-2 focus:outline-purple-500 rounded-md"
//           placeholder="Enter your URL"
//           value={url}
//           onChange={(e) => setUrl(e.target.value)}
//         />

//         <input
//           type="text"
//           className="px-4 py-2 focus:outline-purple-500 rounded-md"
//           placeholder="Enter your preferred short URL"
//           value={shorturl}
//           onChange={(e) => setShorturl(e.target.value)}
//         />

//         <button
//           onClick={generate}
//           className="bg-purple-500 rounded-lg shadow-lg p-3 font-bold"
//         >
//           GENERATE
//         </button>

//       </div>

//       {generated && (
//         <code>
//           <span className="font-bold text-lg">
//             Your Link:{" "}
//           </span>

//           <Link
//             target="_blank"
//             href={generated}
//             className="text-purple-700 underline"
//           >
//             {generated}
//           </Link>
//         </code>
//       )}

//     </div>
//   )
// }

// export default Page

"use client"

import React, { useState } from "react"
import Link from "next/link"

const Page = () => {
  const [url, setUrl] = useState("")
  const [shorturl, setShorturl] = useState("")
  const [generated, setGenerated] = useState("")

  const generate = async () => {
    const myHeaders = new Headers()
    myHeaders.append("Content-Type", "application/json")

    const raw = JSON.stringify({
      url: url,
      shorturl: shorturl
    })

    try {
      const response = await fetch("/api/generate", {
        method: "POST",
        headers: myHeaders,
        body: raw
      })

      const result = await response.json()

      if (result.success) {
        setGenerated(`${process.env.NEXT_PUBLIC_HOST}/${shorturl}`)
        setUrl("")
        setShorturl("")
        alert(result.message)
      } else {
        alert(result.message || "Something went wrong")
      }

      console.log(result)

    } catch (error) {
      console.error(error)
      alert("Something went wrong")
    }
  }

  return (
    <div className="min-h-[80vh] flex items-center justify-center px-4">
      <div className="w-full max-w-md bg-purple-100 p-6 rounded-2xl shadow-xl flex flex-col gap-4">

        <h1 className="font-bold text-xl">
          Generate your short URL
        </h1>

        <div className="flex flex-col gap-4">

          <input
            type="text"
            className="px-4 py-2 rounded-md border border-purple-300 bg-white focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-purple-500 transition-colors"
            placeholder="Enter your URL"
            value={url}
            onChange={(e) => setUrl(e.target.value)}
          />

          <input
            type="text"
            className="px-4 py-2 rounded-md border border-purple-300 bg-white focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-purple-500 transition-colors"
            placeholder="Enter your preferred short URL"
            value={shorturl}
            onChange={(e) => setShorturl(e.target.value)}
          />

          <button
            onClick={generate}
            className="bg-purple-500 rounded-lg shadow-lg p-3 font-bold hover:bg-purple-600 active:scale-95 transition-all duration-150"
          >
            GENERATE
          </button>

        </div>

        {generated && (
          <code className="break-all">
            <span className="font-bold text-lg">
              Your Link:{" "}
            </span>

            <Link
              target="_blank"
              href={generated}
              className="text-purple-700 underline"
            >
              {generated}
            </Link>
          </code>
        )}

      </div>
    </div>
  )
}

export default Page