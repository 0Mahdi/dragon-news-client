import React from 'react';
import { useLoaderData } from 'react-router-dom';
import NewsSummaryCard from '../../Shared/NewsSummaryCard/NewsSummaryCard';
import useTitle from '../../../hooks/useTitle';

const Home = () => {
    const allNews = useLoaderData();
    useTitle('Home')

    return (
        <div>
            <h2>Dragon  News Home: {allNews.length}</h2>
            {
                allNews.map(news => <NewsSummaryCard 
                    key={news._id}
                    news={news}>
                </NewsSummaryCard>)
            }
        </div>
    );
};

export default Home;