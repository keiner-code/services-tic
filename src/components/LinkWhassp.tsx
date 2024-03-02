import Link from "next/link";

export default function LinkWhasp(){
    return(
        <Link href="https://api.whatsapp.com/message/HJSWOBC7KST6O1?autoload=1&app_absent=0" target="_blank" className="fixed bottom-0 right-0 mr-7 mb-7 z-20 bg-green-500 w-14 h-14 rounded-full hover:bg-green-400">
            <div className="w-full h-full flex justify-center items-center">
            <i className="fa-brands fa-whatsapp text-4xl text-white"></i>
            </div>
            </Link>
    )
}