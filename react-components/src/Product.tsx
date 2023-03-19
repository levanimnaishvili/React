import React from "react"

import classes from './Product.module.css'


type TProps = {
    id: string;
    sku: string;
    title: string;
    description: string;
    image: string;
    price: number;
}

export default class Product extends React.Component<TProps> {
    constructor(props: TProps) {
        super(props);
    }


    render () {
        return <div className={classes.card}>
            <div><img className={classes['dog-image']} src="https://alpha.aeon.co/images/acd6897d-9849-4188-92c6-79dabcbcd518/header_essay-final-gettyimages-685469924.jpg" alt="" /></div>
            <p className={classes.description}>Moppsy</p>
            <span className={classes.price}>price</span>
        </div>
    }
}