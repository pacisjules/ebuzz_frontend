import Image from "next/image";
import { Font_ubuntu, Font_inter } from "@/components/my_font";
import Home_Popular from "@/components/home_popular";

export default function Home() {
  return (
    <div className="hidden lg:flex  flex-col  w-10/12 text-gray-800 mt-4">
      {Home_Popular.map((item) => {
      const list=item.sub;
      return(
        <div key={item.id}>
          <h1 className="text-[26px] font-bold mb-4 ">Popular in {item.menu}</h1>
          <div className="grid grid-cols-5 gap-4">
            {list.map((item)=>{
              return(

                <div key={item.id} className="rounded-md border-gray-500 hover:shadow-2xl hover:cursor-pointer p-2 hover:border-red-500 w-[200px]">
                  <Image src={item.image_link} alt={item.title} width={300} height={300} unoptimized className="rounded-md w-[200px] h-[150px] object-cover object-center" />
                 <h1 className={`text-red-600 font-bold text-lg mt-2 ${Font_inter.className}`}>RWF {(item.price).toLocaleString()}</h1> 
                 <h1 className={`text-gray-800 font-bold text-lg ${Font_inter.className} text-[14px]`}> {item.owner}</h1> 
                 <h1 className={`text-gray-500 mt ${Font_inter.className} text-[13px]`}> {item.title}</h1> 
                  </div>
              )
            })}
          </div>
        </div>
      )})}
    </div>
  );
}
