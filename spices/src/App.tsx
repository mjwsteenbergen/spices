import React from 'react'
import { spices } from "./spices";
import { cva } from 'class-variance-authority';

const App = () => {
  return (
    <main className='grid gap-3 p-3 bg0'>
      <div className='flex flex-wrap gap-4'>

      {spices.map(i => {
        return <Circle name={i.name} url={i.imageSrc} color={i.color} dark={i.dark}/>
      })}
      </div>
      <div className='flex flex-wrap gap-4'>

      {spices.map(i => {
        return <Strip name={i.name} dark={i.dark} color={i.color}/>
      })}
      </div>
    </main>
  );
};

const text = cva("", {
  variants: {
    dark: {
      true: ["text-black-900"],
      false: ["text-white"]
    }
  },
  defaultVariants: {
    dark: false
  }
})

export const Circle = ({ name, url, color, dark }: { name: string, url?: string, color?: string, dark?: boolean}) => {
  return <article className='grid rounded-full w-[3cm] aspect-square overflow-hidden bg-primary-700 justify-center items-center text-center  font-heading' style={{
    backgroundColor: color
  }}>
    <span className={text({ dark, className: 'col-start-1 row-start-1 z-10 grid-col-1 grid-row-1 p-3 font-bold text-white' })}>{name}</span>
    {url && <img className='col-start-1 row-start-1 object-cover w-full h-full scale-150 aspect-square brightness-75' src={url}/>}
  </article>
} 

export const Strip = ({ name, color, dark }: { name: string, color: string, dark?: boolean}) => {
  return <article className='w-[12.7cm] h-[1cm] grid justify-center items-center text-center text-white font-bold font-heading'  style={{
    backgroundColor: color
  }}>
    <span className={text({ dark })}>{name}</span>
  </article>
} 

export default App;
