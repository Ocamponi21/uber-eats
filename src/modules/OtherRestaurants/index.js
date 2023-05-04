import { Card, Table, Button, Popconfirm, message } from "antd";
import { useEffect, useState } from "react";
import { DataStore } from '@aws-amplify/datastore';
import { Restaurant } from "../../models"; 
import { useRestaurantContext } from "../../context/RestaurantContext";



const OtherRestaurants = () => {

    const [other, setOther] = useState([]);
    const { restaurant } = useRestaurantContext();
    //console.log(restaurant);
    //console is reading the restaurant but not excluding 

    useEffect(() => {
        
        DataStore.query(Restaurant).then(setOther); 
        console.log(Restaurant);
        console.log(setOther);
    },[]); 



    const copiedData = other.slice(); // trying to copy the data in the set

    const filter = copiedData.filter(row => row.id !== restaurant);

    //trying to filter out  the restaurant that I dont want

    //const filteredData = other.filter(row => row !== restaurant);



    const tableColumns = [
        {
            title: 'Name',
            dataIndex: 'name',
            key: 'name',
        },
        {
            title: 'Address',
            dataIndex: 'address',
            key: 'address',
        },
        {
            title: 'Image Link',
            dataIndex: 'name',
            key: 'name',
            render: (text, record) => <a href={record.image}>{text}</a>,
            //the clickable link
        },
    ];

    

    return (
        <Card title={'Other Restaurants'} style={styles.page}>
            <Table
                dataSource={filter} // new filter
                columns={tableColumns}
                rowKey= 'id'
            />
        </Card>
    );
};

const styles = {
    page: {
        margin: 20,
    },
}

export default OtherRestaurants;