import React, {useCallback, useMemo} from 'react';
import styles from './index.module.scss';
import {useAppDispatch, useAppSelector} from '../../redux/store';
import Card from '../Card';
import {deleteItem, toggleFavorites, toggleLike} from '../../redux/appSlice';
import {Container, Button, Card as UICard, Loader, Dimmer, Label, Message, Grid} from 'semantic-ui-react';
import {fetchData} from '../../redux/imagesSlice';

const App = () => {
    const dispatch = useAppDispatch();
    const {status, data, error} = useAppSelector((state) => state.images);
    const {favorites, deleted, onlyFavorites} = useAppSelector(state => state.app);
    const deleteHandler = useCallback((id: string) => dispatch(deleteItem(id)), [dispatch]);
    const likeHandler = useCallback((id: string) => dispatch(toggleLike(id)), [dispatch]);
    const filteredItems = useMemo(() => Object.entries(data)
        .filter(([key]) => !deleted.includes(key) && (!onlyFavorites || favorites.includes(key))),
        [data, favorites, deleted, onlyFavorites]);

    return (
        <div className={styles.main}>
            {
                status === 'fulfilled' &&
                <>
                    <Button
                        disabled={!favorites.length}
                        className={styles.button}
                        color={onlyFavorites ? 'pink': 'blue'}
                        onClick={() => dispatch(toggleFavorites())}>
                        {
                            onlyFavorites ? 'Favorites' : 'All'
                        }
                    </Button>
                    <UICard.Group stackable doubling centered>
                        {
                            filteredItems.map(([key, src]) =>
                                <Card
                                    id={key}
                                    key={key}
                                    src={src}
                                    liked={favorites.includes(key)}
                                    toggleLike={likeHandler}
                                    deleteItem={deleteHandler}
                                />)
                        }
                    </UICard.Group>
                </>
            }
            {
                status === 'pending' &&
                <Dimmer inverted active>
                    <Loader size={'large'}>Loading...</Loader>
                </Dimmer>
            }
            {
                status === 'rejected' &&
                <Dimmer inverted active>
                    <div className={styles.error}>
                        <Label basic color={'red'} className={styles.message}>{error}</Label>
                        <Button
                            color={'red'}
                            size={'small'}
                            onClick={() => dispatch(fetchData())}>
                            Try again
                        </Button>
                    </div>
                </Dimmer>
            }
        </div>
    );
};

export default App;