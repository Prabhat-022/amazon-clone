"use client"
import SearchResult from '@/components/SearchResult';
import { useSuperbase } from '@/lib/hooks/useSuperbase';
import { useParams } from 'next/navigation';
import React, { useEffect } from 'react'

const Page = () => {
    //get data from url
    const { query } = useParams();
    const { filterData, getFilteredData } = useSuperbase();


    useEffect(() => {
        getFilteredData(query!.toString());
    }, [])

    console.log("filter", filterData);
    return (
        <div>
            <SearchResult filterData={filterData}/>

        </div>
    )
}

export default Page
