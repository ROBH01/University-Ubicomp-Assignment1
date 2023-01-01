import React from 'react';
import { FlatList } from 'react-native';
import faqs from '../../apis/faqs.json';
import FaqCard from './FaqCard';
import ScreenLayout from '../../components/ScreenLayout/ScreenLayout';

const Faqs = () => (
    <ScreenLayout>
        <FlatList
            data={faqs}
            keyExtractor={({ id }) => id}
            renderItem={({ item: faq }) => <FaqCard faq={faq} />}
        />
    </ScreenLayout>
);

export default Faqs;
