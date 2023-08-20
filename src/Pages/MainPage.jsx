import React, { useEffect, useState } from 'react';
import { Col, Row } from 'react-bootstrap';
import CharacterItems from '../Components/CaracterItems';
import Waiting from '../Components/Waiting';
import { useQuery } from '@apollo/client';
import { Get_Characters } from '../GraphQl/Query';
import Navigator from '../Components/Navigator';

// as you can see we can have access to data from apolloClient anywhere we want with useQuery

const MainPage = () => {
    const [page, setPage] = useState(1)
    const { data, error } = useQuery(Get_Characters, {variables:{page:page}})
    const [totalData, setTotalData] = useState(null)

    useEffect(() => {
        if (data) setTotalData(data.characters.results)
        else setTotalData(null)
    }, [data])

    return (
        <Row xs={1} md={2} lg={4} className='g-1'>
            {
                totalData ? (
                    <>
                            
                        {
                            totalData?.map((i) =>
                                <Col align='center' key={i.id}>
                                    <CharacterItems data={i} />
                                </Col>
                            )
                        }
                        <Navigator setPage={setPage} page={page} />
                    </>

                ) : (
                    <Waiting />
                )
            }
        </Row>
    );
}

export default MainPage;
