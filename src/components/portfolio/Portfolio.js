import React from "react"
import { paths } from "../../route/paths"

const styles = {
  div: {
    marginTop: "50px"
  },
  a: {
    padding: "2rem",
  }
}




const Portfolio = () => {
  return (
    <div style={styles.div}>
      <h2>this will be portfolio page</h2>

      <a style={styles.a} href={paths.portfolio.weddings}>Casamentos</a>
      <a style={styles.a} href={paths.portfolio.landscape}>Paisagem</a>
      <a style={styles.a} href={paths.portfolio.baptism}>Baptizdos</a>
      <a style={styles.a} href={paths.portfolio.photoshoot}>Sessões Fotográficas</a>
    </div>
  )
}

export default Portfolio