import React from "react";
import { Card, Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import styles from "./Table.module.css";
import PropTypes from "prop-types";

function Product({ name, price, image }) {
    return (
        <td>
            <Card style={{ width: "18rem" }} className={styles.card}>
                <Card.Img variant="top" src={image} className={styles.img} />
                <Card.Body>
                    <Card.Title>{name}</Card.Title>
                    <Card.Text>{price}</Card.Text>
                    <Button variant="primary">Купить</Button>
                </Card.Body>
            </Card>
        </td>
    );
}

Product.protoTypes = {
    name: PropTypes.string,
    image: PropTypes.string,
    price: PropTypes.number,
};

export default Product;
