import Hero from '../../public/assets/images/hero.webp';
import TrustPilotWidget from '../templates/TrustPilotWidget';

const HeroImage = () => {
  return (
    <div className="relative pt-24 max-2">
      <div className="relative h-[40rem] overflow-hidden">
        <img
          className="absolute inset-0 h-full w-full object-cover"
          src={Hero.src}
          alt="Älteres Paar auf dem Sofa"
        />
        <div className="px-6 absolute bottom-4 flex flex-col flex-wrap items-start space-y-4 md:space-y-32 xl:ml-[20%]">
          <div className="bg-primary-500 h-[125px] w-[125px] md:h-[175px] md:w-[175px] rounded-full flex flex-col justify-center items-center text-white">
            <div className="text-2xl md:text-5xl font-bold">Nr. 1</div>
            <div className="text-lg md:text-xl font-medium text-center">
              <div>im Rückmiet-</div>
              <div>verkauf</div>
            </div>
          </div>
          <div className="max-w-lg md:max-w-xl text-white">
            <div className="text-3xl md:text-5xl font-bold mb-4">
              <h1 className="bg-gradient-to-r from-primary-500 to-primary-400 inline leading-tight px-2 decoration-clone">
                Finanzielle Sicherheit <br /> im Alter
              </h1>
            </div>
            <div className="text-lg md:text-2xl font-medium text-white max-w-sm md:max-w-md">
              <p className="bg-gradient-to-r from-primary-500 to-primary-400 inline px-2 py-1 decoration-clone">
                Eigenheim zum Marktpreis verkaufen und lebenslang weiter
                bewohnen.
              </p>
            </div>
          </div>
        </div>
      </div>
      <TrustPilotWidget />
    </div>
  );
};

export default HeroImage;
