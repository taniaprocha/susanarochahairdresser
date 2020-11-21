import React from "react"
import PropTypes from "prop-types"
import classNames from "classnames"

import "./index.css"

const Typography = ({ children, variant, color, weight }) => {
  const getTextComponent = () => {
    switch (variant) {
      case "body":
        return "p"
      default:
        return variant
    }
  }

  const styles = classNames({
    [variant]: true,
    [color]: true,
    [weight]: true,
  })
  const TextComponent = getTextComponent()

  return <TextComponent styleName={styles}>{children}</TextComponent>
}

Typography.propTypes = {
  children: PropTypes.node.isRequired,
  variant: PropTypes.oneOf(["h1", "h2", "h3", "body"]),
  color: PropTypes.oneOf(["brown", "white", "black"]),
  weight: PropTypes.oneOf(["regular", "medium", "semibold", "bold"]),
}

Typography.defaultProps = {
  variant: "body",
  color: "white",
  weight: "regular",
}

export default Typography
