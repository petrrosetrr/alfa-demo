import React from 'react';
import styles from './index.module.scss';
import {Button, Card as UICard, Icon} from 'semantic-ui-react';

interface IProps {
    id: string;
    src: string;
    liked: boolean;
    toggleLike: (id: string) => void;
    deleteItem: (id: string) => void;
}

const Card: React.FC<IProps> = React.memo(({src, toggleLike, deleteItem, liked, id}) => {
    return (
        <UICard className={styles.main}>
            <img
                src={src}
                loading={'lazy'}
                alt={'random dog'}
                className={styles.image}
            />
            <UICard.Content>
                <Button.Group fluid>
                    <Button animated='vertical' onClick={() => toggleLike(id)} color={liked ? 'pink' : 'grey'}>
                        <Button.Content hidden>Like</Button.Content>
                        <Button.Content visible>
                            <Icon name='like' />
                        </Button.Content>
                    </Button>
                    <Button animated='vertical' onClick={() => deleteItem(id)}>
                        <Button.Content hidden>Delete</Button.Content>
                        <Button.Content visible>
                            <Icon name='trash alternate' />
                        </Button.Content>
                    </Button>
                </Button.Group>
            </UICard.Content>
        </UICard>
    );
});

export default Card;