import React from "react";
import Slider from "react-slick";
import Card from "../../atoms/card/Card";
import useFetch from "../../../hooks/useFetch";
import { settings } from "../../../util/constants";

const Carousel = () => {
  const { data, isLoading, error } = useFetch();

  if (isLoading) {
    return <div>Cargando...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }
  return (
    <Slider {...settings}>
      {data && data.map(({_id, Imagen, Nombre, Ocupacion}) => (
        <Card
          key={_id}
          image={Imagen}
          title={Nombre}
          description={Ocupacion}
          alt={Nombre}
        />
      ))}
    </Slider>
  )
}

export default Carousel;