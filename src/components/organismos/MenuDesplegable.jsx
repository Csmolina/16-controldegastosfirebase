import styled from 'styled-components';
import { ContentMenuDesplegable } from '../atomos/ContentMenuDesplegable';
import { ItemsDesplegables } from '../moleculas/ItemsDesplegables';
export function MenuDesplegable({datadesplegable}) {
return (
<ContentMenuDesplegable top="85%">
   {
      datadesplegable.map((item,index)=>{
         return(
            <ItemsDesplegables color={item.color} texto={item.text}/>
         )
      })
   }
  
</ContentMenuDesplegable>
);
 }