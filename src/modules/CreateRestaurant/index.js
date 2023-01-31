import { Card, Input, Button, InputNumber, message, Form} from "antd"
import FormItem from "antd/es/form/FormItem";

const {TextArea} =Input;

const CreateRestaurant = () => {
    const onFinish = ({name, address, image}) => {
            if(!name){
                message.error('Name required!');
                return;
            }
            if(!address){
                message.error('Address required!');
                return;
            }
            if(!image){
                message.error('Image required!');
                return;
            }
            message.success('Create Restaurant created!');
    };
    return (
        <Card title={'Restaurant Details'} style={styles.page}>
            <Form layout="vertical" onFinish={onFinish}> 
                <Form.Item label={'Name'} required name='name'>
                    <Input placeholder="Enter Name"/>
                </Form.Item>
                <Form.Item label={'Address'} required name ={'address'} >
                    <Input placeholder="Enter Address"/>
                </Form.Item>
                <Form.Item label={'Image'} required name={'image'}>
                    <Input placeholder="Enter Image"/>
                </Form.Item>
                <Form.Item>
                    <Button type="primary" htmlType="submit">Submit</Button>
                </Form.Item>
            </Form>
        </Card>
    );
};
 
const styles = {
    page:{
        margin:20, 
    },
}

export default CreateRestaurant;