import React from "react"
import Slider from "react-slick"
import Typography from "root/components/Typography"

import "./index.css"

const Quotes = () => {
  const settings = {
    dots: false,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 3000,
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
            &quot;Ter uma mãe cabeleireira é ótimo. Todos os dias de manhã tenho
            quem me penteie, e sempre com penteados diferentes. Vou para a
            escola como uma modelo profissional e toda a gente elogia.&quot; -
            Diana Pereira
          </Typography>

          <Typography weight="medium" variant="h3">
            &quot;O meu cabelo não conhece outra cabeleireira, se não a Susana.
            Alinha em todas as minhas mudanças de visual, sempre com conselhos
            para preservar a minha saúde capilar.&quot; - Tânia Rocha
          </Typography>

          <Typography weight="medium" variant="h3">
            &quot;Quem vai pela primeira vez nunca mais esquece. Alinha nas
            mudanças e nas loucuras das clientes, dando sempre o melhor conselho
            e opinião. Profissional, acolhedora e sempre bem disposta. Quem
            gosta vai, quem ama fica!!&quot; - Ana Gonçalves
          </Typography>

          <Typography weight="medium" variant="h3">
            &quot;Além de uma amizade escolar, tenho o prazer de entregar o meu
            cabelo &quot;rebelde&quot; a uma excelente profissional, que me
            ajuda a tornar as minhas mudanças possíveis, sempre preservando o
            meu cabelo... Obrigado Susana Rocha, pelo excelente profissionalismo
            e sobretudo pela tua humildade que te torna gigante...&quot; -
            Patrícia Cerqueira
          </Typography>

          <Typography weight="medium" variant="h3">
            &quot;A melhor cabeleireira do MUNDO.&quot; - Migueis Carla
          </Typography>
        </Slider>
      </div>
    </div>
  )
}

export default Quotes
