import {Card, Descriptions, Divider, List, Button, Tag, Spin } from 'antd';
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { DataStore } from 'aws-amplify';
import { Order, User, OrderDish, Dish } from '../../models';

const statusToColor = {
    PENDING: 'blue',
    COMPLETED: 'green',
    ACCEPTED: 'orange',
    DECLINED: 'red',
};

const DetailedOrder = () => {

    const { id } = useParams();

    const [order, setOrder] = useState({});
    const [ customer, setCustomer] = useState(null);
    const [ orderDishes, setOrderDishes] = useState([]);
    const [ finalOrderDishes, setFinalOrderDishes] = useState([]);

    useEffect(() => {
        if (!id) {
            return;
        }
        DataStore.query(Order, id).then(setOrder);
    }, [id]);


    return (
       <Card title={`Order Number ${id}`} style={styles.page}>
            <Descriptions bordered column={{lg: 1, md: 1, sm: 1}}>
            <Descriptions.Item label='Order Status'>APPROVED</Descriptions.Item>
            <Descriptions.Item label='Customer '>Nicolas Ocampo</Descriptions.Item>
            <Descriptions.Item label='Customer Address'>1266 New Brooklyn Erial Rd</Descriptions.Item>
            </Descriptions>
            <Divider />
            <List   
                dataSource={dishes}
                renderItem={(dishItem) => (
                    <List.Item>
                        <div style={styles.dishItems}>{dishItem.name} x{dishItem.quantity}</div>
                        <div>${dishItem.price}</div>
                        </List.Item>
                )}
          >
            </List>
            <Divider />
            <div style ={styles.totalContainer}>
                <h2>Total:</h2>
                <h2 style={styles.totalPrice}>${total}</h2>
            </div> 
            <Divider />
            <div style={styles.buttonsContainer}>
                <Button
                    block
                    danger
                    type='primary'
                    size='large'
                    style={styles.button}
                >
                    Decline Order
                </Button>
                <Button
                    block
                    type='primary'
                    size='large'
                    style={styles.button}
                >
                    Accept Order
                </Button>
                <Button
                    block
                    type='default'
                    size='large'
                    style={styles.button}
                >
                    Food is Done
                </Button>
            </div>
       </Card>
    );
};

const styles = { 
    page: {
        margin: 20,
    },
    dishItems: {
        fontWeight: 'bold',
    },
    totalContainer: {
        flexDirection: 'row',
        display: 'flex',
    },
    totalPrice: {
        marginLeft: 'auto',
    },
    buttonsContainer: {
        display: 'flex',
        paddingBottom: 30,
    },
    button: {
        marginRight: 5,
        marginLeft: 5,

    },
}

export default DetailedOrder;