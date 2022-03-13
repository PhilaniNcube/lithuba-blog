/* eslint-disable @next/next/no-img-element */
export default function Vision() {
  return (
    <div className="max-w-7xl mx-auto">
      <div className="flex justify-center md:justify-between items-center md:flex-row flex-col-reverse py-4 px-4 md:px-2 lg:px-0 ">
        <div className="flex mt-12 md:mt-0 md:w-2/3 justify-start items-center flex-col space-y-6 md:space-y-8 xl:space-y-10 ">
          <div className="flex justify-start items-start flex-col space-y-4">
            <h1 className="text-xl  md:text-2xl xl:text-4xl font-semibold leading-5 md:leading-6 xl:leading-9 text-gray-800">
              Our Mission
            </h1>
            <p className="text-base leading-normal text-gray-600">
              We exist to empower people through facilitation of critical
              conversations and transfer of essential life skills. The aim is
              set on enabling purposeful living, holistic emancipation and
              general wellbeing in the South African society. Lithuba
              Empowerment Hub strives to instill the sense of worth and pride in
              the members of underprivileged and marginalized communities.
            </p>
          </div>
          <div className="flex justify-start items-start flex-col space-y-4">
            <h1 className="text-xl  md:text-2xl xl:text-4xl font-semibold leading-5 md:leading-6 xl:leading-9 text-gray-800">
              Our Vision
            </h1>
            <p className="text-base leading-normal text-gray-600">
              Lithuba Empowerment Hub aspires to see a South African society
              where community members have an equal chance of participating in
              enjoyment of rights and freedoms. Part of this entails comfort to
              seize opportunities that are presented to them by government,
              business and environment, irrespective of background or
              socio-economic circumstances.
            </p>
          </div>
          <div className="flex justify-start items-start flex-col space-y-4 lg:-translate-x-4">
            <h1 className="text-xl md:text-2xl xl:text-4xl font-semibold leading-5 md:leading-6 xl:leading-9 text-gray-800">
              Our Values
            </h1>
            <p className="text-base leading-normal text-gray-600">
              We subscribe to cardinal values that inform how we behave and
              channel our vision. These are:
            </p>
            <ul className="text-base leading-normal text-gray-600 font-medium">
              <li>Mutual Respect</li>
              <li>Lifelong Learning</li>
              <li>Changing Lives</li>
            </ul>
          </div>
        </div>
        <div className="md:w-[55%]  flex justify-center">
          <img
            src="/images/blm.jpg"
            alt="BLM"
            className="h-[40vw] w-[40vw] rounded-full"
          />
        </div>
      </div>
    </div>
  );
}
