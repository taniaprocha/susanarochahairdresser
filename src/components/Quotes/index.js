import React from "react"
import Slider from "react-slick"
import Typography from "root/components/Typography"

import "./index.css"

const Quotes = () => {
  const settings = {
    dots: false,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 5000,
    accessibility: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
  }

  return (
    <div styleName="quotes">
      <div styleName="title">
        <Typography weight="semibold" variant="h2">
          A opinião dos nossos clientes
        </Typography>
      </div>
      <div styleName="content">
        <Slider {...settings}>
          <Typography weight="medium" variant="h3">
            "Ter uma mãe cabeleireira é ótimo. Todos os dias de manhã tenho quem
            me pentear, e sempre com penteados diferentes. Vou para a escola
            como uma modelo profissional e toda a gente elogia.", - Diana
            Pereira
          </Typography>

          <Typography weight="medium" variant="h3">
            O meu cabelo não conhece outra cabeleireira, se não a Susana. Alinha
            em todas as minhas mudanças de visual, sempre com conselhos para
            preservar a minha saúde capilar. - Tânia Rocha
          </Typography>
        </Slider>
      </div>
    </div>
  )
}

export default Quotes
