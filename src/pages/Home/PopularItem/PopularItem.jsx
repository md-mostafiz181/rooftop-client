import React, { useEffect, useState } from 'react';
import SectionTitle from '../../../components/SectionTitle/SectionTitle';
import PopularItemCard from '../../Shared/PopularItemCard/PopularItemCard';
import Container from '../../../components/Container/Container';

const PopularItem = () => {

    const [menu,setMenu]=useState([]);

    useEffect(()=>{
        fetch("menu.json")
        .then(res=>res.json())
        .then(data=>{
            const popularItems=data.filter(item=>item.category=== "popular")
            setMenu(popularItems)
        })
    },[])
    return (
        <div>


            <Container>

            <section>
                <SectionTitle
                        heading= "Our Popular Menu"
                        subHeading="our menu"
                ></SectionTitle>
            </section>
            <div className='grid md:grid-cols-2 gap-5 my-4'>
                {
                    menu.map(item=> <PopularItemCard
                    key={item._id}
                    item={item}
                    ></PopularItemCard>)
                }
            </div>
            </Container>
            
        </div>
    );
};

export default PopularItem;