import { ArrowRight } from "lucide-react"

const Cta = () => {
  return (
   <div className="flex justify-center items-center min-h-screen w-full">
  <div className="lg:mx-30 md:mx-10 sm:mx-5 mx-5 w-full flex flex-1 items-center justify-center flex-col space-y-5 lg:p-24 md:p-14 sm:p-10 p-5 rounded-[24px] bg-[#0058FF]">
    <h1 className="text-white text-[48px] text-center font-bold">Get In Touch</h1>
    <p className="text-white test-[18px] text-center">Contact us now to enquire our plumbing services, whether you have a commercial project that requires support, or a domestic plumbing task that needs the attention of a trusted professional.</p>
    <button className="bg-white text-[#0058FF] py-5 px-5 rounded-[8px] text-[16px] flex items-center justify-center gap-3.5 font-bold">
        book a Professional Plumber
        <ArrowRight />
    </button>
  </div>
</div>

  )
}

export default Cta