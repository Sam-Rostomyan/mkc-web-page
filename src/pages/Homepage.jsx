import React from 'react';
import { InView } from 'react-intersection-observer';

const Homepage = ({ secctions, setInView }) => {

   return (
      <>
         {secctions.map((Pages, index) => (
            <InView key={index} onChange={setInView} threshold={0.7}>
               {
                  ({ ref: inViewRef }) => {
                     return <Pages {...{ inViewRef }} />;
                  }
               }
            </InView>
         ))}
      </>
   )
}

export default Homepage;