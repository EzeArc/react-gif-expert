import { useFetchGifs } from "../hooks/useFetchGifs";
import GifItem from "./GifItem";

export const GifGrid = ( { category } ) => {

const { images, isLoading } = useFetchGifs( category );

return (
    <>
    <h3>{category}</h3>
    {
      isLoading && (<h2>Loading...</h2> ) //si isLoading es true cargando...
    }
    
    <div className="card-grid">
      {
        images.map( (image) => ( 
        <GifItem key={image.id} {...image}/>))
        //{...image} esparce las props q recibe (se usa cuando hay muchos props) //antes title={image.title} url={image.url}
      }
      </div>
     </>
  )
}
