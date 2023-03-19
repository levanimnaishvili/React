import React from "react"

import classes from './Product.module.css'


type TProps = {
    id: number;
    title: string;
    price: string;
    category: string;
    description: string;
    image: string;
}


export default class Product extends React.Component<TProps> {
    constructor(props: TProps) {
        super(props);
    }


    render () {
        const {id, title, price, category, description, image} = this.props
        return <div className={classes.card}>
            <div className={classes.image}><img src={image} alt="" /></div>
            <span className={classes.price}>{`${price}$`}</span>
            <div className={classes.title}><h3>{title}</h3></div>
            <p className={classes.category}>{category}</p>
            <p className={classes.description}>{description}</p>
        </div>
    }
}