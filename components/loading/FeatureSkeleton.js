import Link from 'next/link';
import React from 'react';
import PostCategory from '../../module/post/PostCategory';
import PostImage from '../../module/post/PostImage';
import PostMeta from '../../module/post/PostMeta';
import PostTitle from '../../module/post/PostTitle';
import LoadingSkeleton from './LoadingSkeleton';

const FeatureSkeleton = () => {
    return (
        <div className="flex flex-col rounded-lg h-full select-none">

            <LoadingSkeleton width="100%" height="250px" radius="15px" className="mb-5">

            </LoadingSkeleton>

        </div>
    );
};

export default FeatureSkeleton;