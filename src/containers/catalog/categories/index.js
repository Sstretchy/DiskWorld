import React from 'react';
import '../catalog.css';
import {
    Grid,
    ListItem,
    List,
    ListItemText,
    Divider,
    Typography
} from '@material-ui/core';
import { inject, observer } from 'mobx-react';

@inject('store')
@observer
class Categories extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            password: '',
            isRequesting: false,
            chousen: 'Печенье'
        };
    }

    async componentDidMount() {
        const { fetchStuff } = this.props.store.basket;
        await fetchStuff('Печенье')
    }

    changeCategory = async (category) => {
        const { fetchStuff } = this.props.store.basket;
        this.setState({ chousen: category })
        await fetchStuff(category)
    }

    links = [
        { name: 'Хиты' },
        { name: 'Стратегические' },
        { name: 'С детьми' },
        { name: 'В дорогу' },
        { name: 'В подарок' },
        { name: 'В офис' },
        { name: 'Для двоих' },
    ];
    render() {
        return (
            <Grid className='categories'>
                <List>
                    <ListItem>
                        <ListItemText>
                            <Typography variant='h5'>Категории</Typography>
                        </ListItemText>
                    </ListItem>
                    {this.links.map((item, index) => (
                        <React.Fragment key={index}>
                            <Divider />
                            <ListItem
                                button
                                onClick={() => this.changeCategory(item.name)}
                                key={index}
                                className={item.name === this.state.chousen ? 'background-category' : ''}
                            >
                                <ListItemText primary={item.name} />
                            </ListItem>
                        </React.Fragment>
                    ))}
                </List>
            </Grid>
        );
    }
}

export default Categories;