import Image from "next/image";
import localFont from "next/font/local";
import Link from "next/link";

const meriweather = localFont({
  src: "./fonts/Merriweather-VariableFont_opsz,wdth,wght.ttf",
  variable: "--font-meriweather",
  weight: "100 900"
})

export default function Home() {
  return (
    <main>
      <section className="grid grid-cols-1 md:grid-cols-2 min-h-[80vh] bg-gradient-to-br from-fuchsia-50 via-purple-50 to-indigo-50 overflow-hidden">

        {/* Left: text content */}
        <div className="flex flex-col gap-6 items-start justify-center px-6 md:px-16 py-16 order-2 md:order-1">

          <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-100 text-purple-700 text-xs font-semibold tracking-wide">
            Free forever · No sign-up required
          </span>

          <h1 className={`text-4xl md:text-5xl font-bold leading-tight ${meriweather.className}`}>
            Turn long links into{" "}
            <span className="bg-gradient-to-r from-fuchsia-500 to-indigo-500 bg-clip-text text-transparent">
              short magic
            </span>
          </h1>

          <p className="text-gray-600 text-lg max-w-md">
            Shorten any URL in seconds — clean, memorable links that are easy to share and track.
          </p>

          <p className="text-purple-700 font-semibold">
            Free of cost. No catches.
          </p>

          <ul className="flex flex-wrap gap-4">
            <li>
              <Link href="/shorten">
                <button className="bg-gradient-to-r from-fuchsia-500 to-indigo-500 rounded-lg shadow-lg shadow-purple-300/50 p-3 px-6 font-bold text-white hover:shadow-purple-400/60 hover:scale-105 active:scale-95 transition-all duration-200">
                  Try Now →
                </button>
              </Link>
            </li>
            <li>
              <Link href="/github">
                <button className="border-2 border-purple-300 rounded-lg p-3 px-6 font-bold text-purple-700 hover:bg-purple-50 hover:border-purple-400 transition-all duration-200">
                  GitHub
                </button>
              </Link>
            </li>
          </ul>
        </div>

        {/* Right: visual */}
        <div className="relative flex items-center justify-center py-12 md:py-0 order-1 md:order-2">
          {/* decorative blobs */}
          <div className="absolute w-72 h-72 bg-purple-300/30 rounded-full blur-3xl -z-10" />
          <div className="absolute w-56 h-56 bg-fuchsia-300/30 rounded-full blur-3xl translate-x-20 translate-y-20 -z-10" />

          <div className="relative w-56 h-56 md:w-72 md:h-72">
            <Image alt="image of the vector" src={"/Lock.svg"} fill className="object-contain drop-shadow-xl" />
          </div>

          {/* floating example card */}
          <div className="absolute bottom-6 md:bottom-10 bg-white rounded-xl shadow-xl px-4 py-3 flex items-center gap-3 text-sm">
            <span className="text-gray-400 line-through">verylongurl.com/xyz123</span>
            <span className="text-purple-500 font-bold">→</span>
            <span className="text-purple-700 font-semibold">mnlnk.co/abc</span>
          </div>
        </div>

      </section>
    </main>
  );
}
