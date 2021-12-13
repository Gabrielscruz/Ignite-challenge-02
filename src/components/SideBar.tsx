import { useState } from 'react';
import { Button } from './Button';
interface GenreResponseProps {
  PropGenre:Array<{
  id: number;
  name: 'action' | 'comedy' | 'documentary' | 'drama' | 'horror' | 'family';
  title: string;
  }>
  PropSelectedGenere:number
  handleClickButton:any
}

export function SideBar(props:GenreResponseProps) {
  // Complete aqui
  
  const handle = (id: number) =>{
    props.handleClickButton(id)

  }

  return (
    
    <nav className="sidebar">
    <span>Watch<p>Me</p></span>

    <div className="buttons-container">
      {props.PropGenre.map(genre => (
        <Button
          key={String(genre.id)}
          title={genre.title}
          iconName={genre.name}
          onClick={() => handle(genre.id)}
          selected={props.PropSelectedGenere === genre.id}
        />
      ))}
    </div>

  </nav>
  
  )
}