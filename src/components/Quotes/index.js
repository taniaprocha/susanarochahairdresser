import React, { Component } from "react"
import QuotesCarousel from "./quotes/quotes-container"

export default class Quotes extends Component {
  constructor() {
    super()

    this.state = {
      component: null,
    }
  }

  componentDidMount() {
    const quotes = [
      {
        author: "Tânia Rocha",
        company: "",
        image: this.props.data.tania.image.fluid.src,
        quote:
          "O meu cabelo já não conhece outra cabeleireira, se não a Susana. Alinha em todos os meus desvaneios e grandes mudanças, sempre com conselhos quando os devaneios podem prejudicar a saude do meu cabelo.",
      },
      {
        author: "Diana Pereira",
        company: "",
        image: this.props.data.tania.image.fluid.src,
        quote:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse ac elit congue, ornare nulla sed, malesuada augue. Mauris nec blandit nisl. Praesent efficitur scelerisque tristique. Ut justo leo, tincidunt quis velit nec, feugiat auctor quam.",
      },
      {
        author: "Marta Rocha",
        company: "",
        image: this.props.data.tania.image.fluid.src,
        quote:
          "Maecenas varius cursus sodales. Etiam faucibus nisi sed dui laoreet malesuada. Curabitur semper nunc venenatis, pretium leo vitae, iaculis dui.",
      },
    ]
    this.setState({
      component: <QuotesCarousel quotes={quotes} />,
    })
  }

  render() {
    return this.state.component
  }
}
