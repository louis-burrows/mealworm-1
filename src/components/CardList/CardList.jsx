import React, { Component } from "react";
import styles from "./CardList.module.scss";
import Card from "../Card";

class CardList extends Component {
  getCardJsx = (recipe) => (
    <div className={styles.card} key={recipe.idMeal}>
      <Card recipe={recipe} toggleFav={this.props.toggleFav} />
    </div>
  );

  render() {
    const { recipes } = this.props;
    return (
      <section className={styles.cards}>{recipes.map(this.getCardJsx)}</section>
    );
  }
}

export default CardList;
