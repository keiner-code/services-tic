import { Link } from "@nextui-org/react";

export default function SocialNetwords() {
  return (
    <div className="w-full mx-10 flex justify-center mb-6">
      <div className="w-full md:w-2/6 text-center">
      <Link href='https://www.facebook.com/SeviciosyTic/?_rdc=1&_rdr' target="_blank"><i className="fa-brands fa-facebook text-5xl mx-2"></i></Link>
      <Link href='https://api.whatsapp.com/message/HJSWOBC7KST6O1?autoload=1&app_absent=0' target="_blank"><i className="fa-brands fa-whatsapp text-5xl mx-2 text-green-500"></i></Link>
      <Link href='https://www.instagram.com/serviciosytic/' target="_blank"><i className="fa-brands fa-instagram text-5xl mx-2 text-red-500"></i></Link>
      <Link href='https://www.youtube.com/@serviciosytic8547' target="_blank"><i className="fa-brands fa-youtube text-5xl mx-2 text-red-500"></i></Link>
      {/*<Link href="/" ><i className="fa-brands fa-twitter text-5xl mx-2"></i></Link>*/}
      </div>
    </div>
  );
}
