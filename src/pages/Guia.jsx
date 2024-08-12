import Globo from"../assets/globo.png"
import Planta from "../assets/planta.png"
import Planta2 from "../assets/planta2.png"
import Gota from "../assets/gota.png"
import Relogio from "../assets/relogio.png"
import Retangulo from "../assets/retangulo.png"
import Seta from "../assets/seta.png"
import tailwindConfig from "../../tailwind.config" 

export default function guia() {
  return (
    <body className="bg-gradient-to-b from-customBlack to-customBlue min-h-screen py-4 px-4 antialised lg:flex justify-center items-cente">
        

    <section>

        <h1 className="text-3xl font-bold text-titleColor flex flex-col items-center justify-center m-10 mb-10 lg:text-6xl lg:pl-8
        ">Guia de Uso</h1>

        <div className="lg:flex items-center justify-center mt-32">

        <div className="flex flex-col items-center justify-center mb-12">
            <img src={Planta2} className="w-max h-10" alt="icone da planta2" />

            <h2 className="text-xl font-bold text-titleColor mb-4 lg:text-xl3">Tanques de abastecimento</h2>
            <p className="text-textColor pl-7 lg:max-w-96 lg:pl-8">A estufa dispõe de 3 tanques: um para a água, um para a solução nutritiva em pó e outro
                    para misturá-las.</p>
        </div>

        <div  className="flex flex-col items-center justify-center mb-12 lg:-mt-6">
            <img src={Gota} className="w-max h-10" alt="icone da gota" />

            <h2 className="text-xl font-bold text-titleColor mb-4 lg:text-xl3 ">Solução Nutritiva</h2>
            <p className="text-textColor pl-7 lg:max-w-96 lg:pl-8">Coloque a solução nutritiva  em pó e a água nos seus devidos tanques e pronto.</p>
        </div>

        <div  className="flex flex-col items-center justify-center mb-12 ">
            <img src={Planta} className="w-max h-10" alt="icone da planta " />

            <h2 className=" text-xl font-bold text-titleColor mb-3 lg:text-xl3">Reabastecendo</h2>
            <p className="text-textColor pl-7 lg:max-w-96 lg:pl-8">Você receberá uma notificação através do aplicativo quando a estufa precisar ser reabastecida</p>
        </div>

        </div>


        <div className="lg:flex items-center justify-center mt-20 mb-20 ">
        <div  className="flex flex-col items-center justify-center mb-12">
            <img src={Relogio} className="w-max h-10" alt="icone do relogio" />

            <h2 className="text-xl font-bold text-titleColor mb-4 lg:text-xl3 ">Estimulando o crescimento</h2>
            <p className="text-textColor pl-7 lg:max-w-96 lg:pl-8">Existem luzes especiais na estufa que simulam a luz do sol, tornando o crescimento das plantas mais eficiente</p>
        </div>

        <div  className="flex flex-col items-center justify-center mb-12">
            <img src={Globo} className="w-max h-10" alt="icone do globo" />

            <h2 className="text-xl font-bold text-titleColor mb-4 lg:text-xl3 ">Como plantar</h2>
            <p className="text-textColor pl-7 lg:max-w-96 lg:pl-8">Apenas coloque a semente ou muda em um pedaço de esponja e em seguida a coloque na estufa.</p>
        </div>

        <div  className="flex flex-col items-center justify-center mb-12">
            <img src={Relogio} className="w-max h-10" alt="icone do relogio" />

            <h2 className="text-xl font-bold text-titleColor mb-4 lg:text-xl3 ">Plante e esqueça</h2>
            <p className="text-textColor pl-7 lg:max-w-96 lg:pl-8">Com a HydroGreen, tudo o que você precisa fazer para cuidar de suas plantas é reabastecer a estufa, e nada mais.</p>
        </div>
        </div>

       

        <button className="flex flex-col items-center justify-center mb-12 px-24 py-16 ml-10 b bg-titleColor rounded-3xl lg:mb-12 lg:px-44 lg:py-28 
        lg:ml-96">
            <img src={Seta} className="w-max h-10"  alt="icone do play" />
        </button>
    </section>
    </body>
  )
}


