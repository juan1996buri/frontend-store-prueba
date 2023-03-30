import TelegramIcon from "@mui/icons-material/Telegram";
import FacebookIcon from "@mui/icons-material/Facebook";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";

const Footer = () => {
  return (
    <footer className="grid md:grid-cols-4 sm:grid-cols-2 grid-cols-1 gap-y-5 place-items-center bg-intenseGreen text-white mt-10">
      <div className="flex gap-2">
        <TelegramIcon fontSize="large" />
        <FacebookIcon fontSize="large" />
        <WhatsAppIcon fontSize="large" />
      </div>
      <div className="w-full h-full">
        <h3 className="font-semibold md:text-xl text-2xl  py-2">
          Servicio al cliente
        </h3>
        <ul className="list-disc list-inside">
          <li className=" text-lg">Preguntas frecuentes</li>
          <li className=" text-lg">Garantía Incondicional</li>
          <li className=" text-lg">Garantía del Fabricante</li>
          <li className=" text-lg">Compra 100% segura</li>
          <li className=" text-lg">Términos de uso</li>
          <li className=" text-lg">Promociones</li>
        </ul>
      </div>
      <div className="w-full h-full">
        <h3 className="font-semibold md:text-xl text-2xl  py-2">
          Acerca de nosotros
        </h3>
        <ul>
          <li className=" text-lg">Nuestra empresa</li>
          <li className=" text-lg">Responsabilidad Social</li>
          <li className=" text-lg">Noticias</li>
          <li className=" text-lg">Trabaja con nosotros</li>
        </ul>
      </div>
      <div className="w-full h-full">
        <h3 className="font-semibold md:text-xl text-2xl  py-2">
          Suscríbete a nuestro newsletter
        </h3>
        <p>ATENCIÓN AL CLIENTE GYE (04)3731800 UIO (02)3950400</p>
      </div>
    </footer>
  );
};

export default Footer;
