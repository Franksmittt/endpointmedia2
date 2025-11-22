import Link from 'next/link'
import { Button } from '@/components/ui/button'

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-900 text-white text-center px-4 pt-20">
      <h1 className="text-9xl font-extrabold text-teal-500 mb-4">404</h1>
      <h2 className="text-3xl md:text-4xl font-bold mb-6 font-heading">
        Broken Links Cost You Money.
      </h2>
      <p className="text-xl text-gray-400 max-w-2xl mb-8 leading-relaxed">
        You found a dead end. If this was your customer looking for your services, 
        you just lost a sale. <br/><br/>
        I am Frank Smit. I build websites that don&apos;t have dead ends.
        Let&apos;s fix your digital pipeline.
      </p>
      
      <div className="flex flex-col sm:flex-row gap-4">
        <Button asChild className="bg-teal-600 hover:bg-teal-700 text-white font-bold py-6 px-8 text-lg">
          <Link href="/contact">Get A Website That Works</Link>
        </Button>
        <Button asChild variant="outline" className="border-gray-600 text-gray-300 hover:bg-gray-800 py-6 px-8 text-lg">
          <Link href="/">Return Home</Link>
        </Button>
      </div>
    </div>
  )
}

