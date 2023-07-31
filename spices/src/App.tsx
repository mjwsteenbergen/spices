import React from 'react'
import spices from "./spices.json";

const App = () => {
  return (
    <main className='grid gap-3 p-3'>
      <div className='flex flex-wrap gap-4'>

      {spices.map(i => {
        return <Circle name={i.name} url={i.imageSrc} color={i.rbg}/>
      })}
      </div>
      <div className='flex flex-wrap gap-4'>

      {spices.map(i => {
        return <Strip name={i.name}/>
      })}
      </div>
    </main>
  );
};

export const Circle = ({ name, url, color }: { name: string, url?: string, color?: string}) => {
  return <article className='grid rounded-full w-[3cm] aspect-square overflow-hidden bg-primary-700 justify-center items-center text-center  font-heading' style={{
    backgroundColor: color
  }}>
    <span className='col-start-1 row-start-1 z-10 grid-col-1 grid-row-1 p-3 font-bold text-white'>{name}</span>
    {url && <img className='col-start-1 row-start-1 object-cover w-full h-full scale-150 aspect-square brightness-75' src={url}/>}
  </article>
} 

export const Strip = ({ name }: { name: string}) => {
  return <article className='w-[12.7cm] h-[1cm] bg-primary-700 grid justify-center items-center text-center text-white font-bold font-heading'>{name}
  </article>
} 

export default App;
